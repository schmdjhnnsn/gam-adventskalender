# Adventskalender (Vanilla HTML/CSS/JS)

24 Türchen, die sich ab dem jeweiligen Dezembertag öffnen lassen. Reines HTML/CSS/JS – kein Build, kein Framework, kein Backend. Die Inhalte kommen live aus einem Google-Sheet.

## Dateien

- `index.html` – Grundgerüst
- `style.css` – Gestaltung
- `app.js` – Logik + Konfiguration (`CONFIG` ganz oben) + Fallback-Beispieldaten
- `beispiel-tuerchen.csv` – Beispieldatei im exakten Tabellenformat

## Google-Sheet einrichten

Bereits angelegt: [Adventskalender – Türchen](https://docs.google.com/spreadsheets/d/1YuMCQERZqoJGns52b0tszWmU-XrJ-9T3lzZ5i3UVvHw/edit) (Sheet-ID ist in `app.js` als `SHEET_ID` eingetragen, 24 Beispiel-Türchen sind schon befüllt).
**Wichtig:** Damit die Website das Sheet lesen kann, einmal im Sheet auf **Teilen → „Jeder, der über den Link verfügt“ → Betrachter** stellen. Ohne diese Freigabe zeigt die Website die Fallback-Daten mit entsprechendem Hinweis.

1. In Google Sheets eine Tabelle mit genau diesen Spalten anlegen (erste Zeile = Überschriften):

   `Tag | Spruch des Tages | Überschrift | Text | Bild-URL | Link-Text | Link URL | Anmerkungen`

   `Tag` = Zahl 1–24. Die Spalte `Anmerkungen` wird auf der Website nie angezeigt.
   `beispiel-tuerchen.csv` kann direkt importiert werden (Datei → Importieren → CSV).

2. Die Tabelle für die Website lesbar machen, eine der beiden Varianten:
   - **Variante A (empfohlen):** Datei → Teilen → „Im Web veröffentlichen“ → Format **CSV** → Link kopieren und in `app.js` bei `SHEET_CSV_URL` eintragen.
   - **Variante B:** Datei → Teilen → „Jeder, der über den Link verfügt“ → **Betrachter**, dann die Sheet-ID in `SHEET_ID` eintragen. Das Blatt kann über `SHEET_NAME` gewählt werden (Standard: erstes Blatt).

3. Die drei Dateien auf einen beliebigen Webspace legen (z. B. GitHub Pages, Netlify, eigener Server). Fertig.

## Verhalten

- Das Datum wird im Browser in der Zeitzone `Europe/Berlin` ermittelt (konfigurierbar in `CONFIG.TIMEZONE`). Vor dem 1.12. sind alle Türchen verschlossen, am 1.12. öffnet Türchen 1, …, ab dem 24.12. sind alle 24 offen.
- Verschlossene Türchen zeigen beim Klick einen Hinweis, wann sie sich öffnen.
- Kann das Sheet nicht geladen werden (nicht freigegeben, offline), werden eingebaute Beispieldaten angezeigt plus ein entsprechender Hinweis.
- Optional: geöffnete Türchen werden pro Gerät gespeichert (`REMEMBER_OPENED`, localStorage) – die Sperre selbst bleibt immer datumsbasiert. Türchen-Anordnung über `SHUFFLE_DOORS` (feste Jahreszahl als Seed, damit die Reihenfolge im Dezember stabil bleibt).

## Testen: Sperre per URL-Parameter deaktivieren

Standardmäßig ist die Datumssperre aktiv. Mit `?sperre=aus` in der URL sind alle 24 Türchen sofort klickbar, z. B. `https://<user>.github.io/<repo>/?sperre=aus`. Ohne Parameter (oder mit `?sperre=an`) bleibt die Sperre datumsbasiert. Im Testmodus zeigt die Statuszeile einen entsprechenden Hinweis.

## Hinweise

- Das Datum wird clientseitig gelesen und kann theoretisch vom Besucher manipuliert werden. Für ein privates Spaßprojekt unproblematisch; eine serverseitige Prüfung bräuchte ein Backend.
- Es werden keine Cookies gesetzt und kein Tracking eingesetzt.
- Text, Überschrift und Spruch werden als reiner Text eingefügt (kein HTML aus dem Sheet), Links und Bilder nur mit `http(s)`-URLs.
- Barrierefreiheit: Türchen sind echte `<button>`-Elemente (Tastatur bedienbar), mit `aria-disabled`/`aria-label`, sichtbarem Fokus und `prefers-reduced-motion`-Support.
