'use strict';

const CONFIG = {
  SHEET_ID: '1YuMCQERZqoJGns52b0tszWmU-XrJ-9T3lzZ5i3UVvHw',
  SHEET_CSV_URL: '',
  SHEET_NAME: '',
  TIMEZONE: 'Europe/Berlin',
  SHUFFLE_DOORS: false,
  REMEMBER_OPENED: true
};

const FALLBACK_DOORS = [
  { tag: 1, spruch: 'Der Advent beginnt – schön, dass du da bist!', ueberschrift: 'Willkommen', text: '24 Türchen warten auf dich. Ab dem 1. Dezember öffnet sich jeden Tag eines.', bild: '', linkText: 'Zur Projektseite', linkUrl: 'https://example.org/projekt' },
  { tag: 2, spruch: 'Eine Kerze anzünden ist leicht.', ueberschrift: 'Licht', text: 'Kleine Lichtblicke zählen in der dunklen Jahreszeit doppelt.', bild: 'https://picsum.photos/seed/advent2/600/400', linkText: 'Mehr erfahren', linkUrl: 'https://example.org/licht' },
  { tag: 3, spruch: 'Geduld ist eine Tugend.', ueberschrift: 'Warten', text: 'Die schönsten Dinge kommen mit der Zeit – wie ein Adventskalender.', bild: '', linkText: '', linkUrl: '' },
  { tag: 4, spruch: 'Vier Kerzen, vier Sonntage.', ueberschrift: 'Adventssonntag', text: 'Heute ist der erste Adventssonntag. Genießt die Ruhe.', bild: '', linkText: 'Zur Projektseite', linkUrl: 'https://example.org/projekt' },
  { tag: 5, spruch: 'Kleinigkeiten machen den Unterschied.', ueberschrift: 'Aufmerksamkeit', text: 'Ein freundliches Wort kann einen ganzen Tag retten.', bild: '', linkText: '', linkUrl: '' },
  { tag: 6, spruch: 'Nikolaus war auch mal klein.', ueberschrift: 'Nikolaus', text: 'Heute kommt der Nikolaus – oder zumindest die Erinnerung daran.', bild: 'https://picsum.photos/seed/advent6/600/400', linkText: 'Mehr erfahren', linkUrl: 'https://example.org/nikolaus' },
  { tag: 7, spruch: 'Backen macht glücklich.', ueberschrift: 'Plätzchen', text: 'Der Duft von Zimt und Nelken gehört zum Advent dazu.', bild: '', linkText: 'Zum Rezept', linkUrl: 'https://example.org/rezept' },
  { tag: 8, spruch: 'Achte auf die Stille.', ueberschrift: 'Innehalten', text: 'Zwischen den Terminen liegt Raum für das, was wirklich zählt.', bild: '', linkText: '', linkUrl: '' },
  { tag: 9, spruch: 'Teilen verdoppelt die Freude.', ueberschrift: 'Schenken', text: 'Ein kleines Geschenk mit großer Bedeutung.', bild: '', linkText: 'Ideen ansehen', linkUrl: 'https://example.org/ideen' },
  { tag: 10, spruch: 'Der zweite Adventssonntag.', ueberschrift: 'Frieden', text: 'Zwei Kerzen brennen – Zeit für Frieden und Besinnung.', bild: 'https://picsum.photos/seed/advent10/600/400', linkText: '', linkUrl: '' },
  { tag: 11, spruch: 'Träume nicht dein Leben, lebe deinen Traum.', ueberschrift: 'Wünsche', text: 'Was möchtest du im neuen Jahr ausprobieren?', bild: '', linkText: 'Mehr erfahren', linkUrl: 'https://example.org/wuensche' },
  { tag: 12, spruch: 'Mittendrin in der Adventszeit.', ueberschrift: 'Halbzeit', text: 'Bereits die Hälfte der Türchen ist freigeschaltet.', bild: '', linkText: '', linkUrl: '' },
  { tag: 13, spruch: 'Gutes braucht Weile.', ueberschrift: 'Geduld', text: 'Vorfreude ist die schönste Freude – auch beim Adventskalender.', bild: '', linkText: 'Zur Projektseite', linkUrl: 'https://example.org/projekt' },
  { tag: 14, spruch: 'Der dritte Adventssonntag.', ueberschrift: 'Freude', text: 'Drei Kerzen brennen – die Vorfreude steigt.', bild: '', linkText: 'Mehr erfahren', linkUrl: 'https://example.org/freude' },
  { tag: 15, spruch: 'Man sieht nur mit dem Herzen gut.', ueberschrift: 'Herz', text: 'Das Wesentliche ist für die Augen unsichtbar.', bild: 'https://picsum.photos/seed/advent15/600/400', linkText: '', linkUrl: '' },
  { tag: 16, spruch: 'Bald ist es soweit.', ueberschrift: 'Vorfreude', text: 'Nur noch wenige Tage bis Heiligabend.', bild: '', linkText: 'Countdown', linkUrl: 'https://example.org/countdown' },
  { tag: 17, spruch: 'Letzte Vorbereitungen.', ueberschrift: 'Erledigungen', text: 'Einkäufe, Geschenke, Pläne – alles läuft.', bild: '', linkText: '', linkUrl: '' },
  { tag: 18, spruch: 'Der vierte Adventssonntag naht.', ueberschrift: 'Kerzen', text: 'Vier Kerzen, vier Sonntage – fast geschafft.', bild: '', linkText: 'Mehr erfahren', linkUrl: 'https://example.org/advent' },
  { tag: 19, spruch: 'Ruhe vor dem Sturm.', ueberschrift: 'Besinnung', text: 'Noch ein paar stille Stunden vor dem großen Tag.', bild: '', linkText: '', linkUrl: '' },
  { tag: 20, spruch: 'Fast geschafft!', ueberschrift: 'Endspurt', text: 'Nur noch vier Türchen bis Heiligabend.', bild: '', linkText: 'Zur Projektseite', linkUrl: 'https://example.org/projekt' },
  { tag: 21, spruch: 'Drei Kerzen würden noch brennen.', ueberschrift: 'Dritter Advent', text: 'Heute wäre der dritte Adventssonntag gewesen – genießt den Tag.', bild: '', linkText: '', linkUrl: '' },
  { tag: 22, spruch: 'Die letzten Geschenke einpacken.', ueberschrift: 'Packen', text: 'Papier, Schleife, Anhänger – fast fertig.', bild: 'https://picsum.photos/seed/advent22/600/400', linkText: 'Packtipps', linkUrl: 'https://example.org/packen' },
  { tag: 23, spruch: 'Morgen ist Heiligabend!', ueberschrift: 'Vorabend', text: 'Der Baum steht, die Geschenke liegen bereit.', bild: '', linkText: 'Frohe Weihnachten wünschen', linkUrl: 'https://example.org/weihnachten' },
  { tag: 24, spruch: 'Frohe Weihnachten!', ueberschrift: 'Heiligabend', text: 'Das letzte Türchen ist offen. Danke, dass du dabei warst – frohe Weihnachten und einen guten Rutsch!', bild: 'https://picsum.photos/seed/advent24/600/400', linkText: 'Zur Projektseite', linkUrl: 'https://example.org/projekt' }
];

const HEADER_ALIASES = {
  'tag': 'tag',
  'spruch des tages': 'spruch',
  'überschrift': 'ueberschrift',
  'ueberschrift': 'ueberschrift',
  'text': 'text',
  'bild-url': 'bild',
  'bild url': 'bild',
  'link-text': 'linkText',
  'link text': 'linkText',
  'link-url': 'linkUrl',
  'link url': 'linkUrl'
};

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function parseDoors(csv) {
  const rows = parseCSV(csv).filter(r => r.some(c => c.trim() !== ''));
  if (rows.length === 0) return [];
  const headers = rows[0].map(h => h.trim().toLowerCase().replace(/\s+/g, ' '));
  const idx = {};
  headers.forEach((h, i) => {
    const field = HEADER_ALIASES[h];
    if (field && !(field in idx)) idx[field] = i;
  });
  if (!('tag' in idx)) {
    console.warn('Adventskalender: Spalte "Tag" nicht gefunden. Überschriften:', headers.join(', '));
    return [];
  }
  const doors = [];
  const seen = new Set();
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const tag = parseInt((row[idx.tag] || '').trim(), 10);
    if (!Number.isInteger(tag) || tag < 1 || tag > 24) {
      console.warn('Adventskalender: Zeile mit ungültigem Tag übersprungen:', row.join(' | '));
      continue;
    }
    if (seen.has(tag)) {
      console.warn('Adventskalender: Doppelter Tag ' + tag + ' – erste Zeile gewinnt.');
      continue;
    }
    seen.add(tag);
    doors.push({
      tag,
      spruch: (row[idx.spruch] || '').trim(),
      ueberschrift: (row[idx.ueberschrift] || '').trim() || ('Türchen ' + tag),
      text: (row[idx.text] || '').trim(),
      bild: (row[idx.bild] || '').trim(),
      linkText: (row[idx.linkText] || '').trim(),
      linkUrl: (row[idx.linkUrl] || '').trim()
    });
  }
  for (let t = 1; t <= 24; t++) {
    if (!seen.has(t)) console.warn('Adventskalender: Tag ' + t + ' fehlt im Sheet.');
  }
  return doors;
}

function berlinNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: CONFIG.TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  return { year: +get('year'), month: +get('month'), day: +get('day') };
}

function adventDay(date) {
  if (date.month === 12) return Math.min(date.day, 24);
  return 0;
}

function lockDisabled() {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('sperre') === 'aus';
}

function daysBetween(a, b) {
  return Math.round((Date.UTC(b.year, b.month - 1, b.day) - Date.UTC(a.year, a.month - 1, a.day)) / 86400000);
}

function statusLine(date, today) {
  if (date.month < 12) {
    const days = daysBetween(date, { year: date.year, month: 12, day: 1 });
    return days <= 1 ? 'Morgen startet der Adventskalender!' : 'Noch ' + days + ' Tage bis zum 1. Dezember.';
  }
  if (today >= 24) return 'Alle 24 Türchen sind offen – frohe Weihnachten!';
  const rest = 24 - today;
  return 'Türchen ' + today + ' von 24 ist freigeschaltet – noch ' + rest + (rest === 1 ? ' Tag' : ' Tage') + ' bis Heiligabend.';
}

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledOrder(year) {
  const arr = Array.from({ length: 24 }, (_, i) => i + 1);
  const rnd = mulberry32(year);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function csvUrl() {
  if (CONFIG.SHEET_CSV_URL) return CONFIG.SHEET_CSV_URL;
  if (CONFIG.SHEET_ID) {
    let url = 'https://docs.google.com/spreadsheets/d/' + CONFIG.SHEET_ID + '/gviz/tq?tqx=out:csv';
    if (CONFIG.SHEET_NAME) url += '&sheet=' + encodeURIComponent(CONFIG.SHEET_NAME);
    return url;
  }
  return null;
}

async function loadDoors() {
  const url = csvUrl();
  if (!url) {
    return { doors: FALLBACK_DOORS, notice: 'Es ist noch keine Sheet-URL in app.js konfiguriert – Beispieldaten werden angezeigt.' };
  }
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    const doors = parseDoors(text);
    if (doors.length === 0) throw new Error('keine verwertbaren Zeilen');
    return { doors, notice: null };
  } catch (err) {
    console.warn('Adventskalender: Sheet konnte nicht geladen werden:', err);
    return { doors: FALLBACK_DOORS, notice: 'Das Google-Sheet konnte nicht geladen werden (nicht freigegeben oder offline?) – Beispieldaten werden angezeigt.' };
  }
}

function safeUrl(u) {
  if (!u) return null;
  try {
    const p = new URL(u, window.location.href);
    if (p.protocol === 'http:' || p.protocol === 'https:') return p.href;
  } catch (e) {
    return null;
  }
  return null;
}

function storageKey(year) {
  return 'adventskalender-geoeffnet-' + year;
}

function loadOpened(year) {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey(year)) || '[]'));
  } catch (e) {
    return new Set();
  }
}

function saveOpened(year, set) {
  try {
    localStorage.setItem(storageKey(year), JSON.stringify(Array.from(set)));
  } catch (e) {
    // localStorage nicht verfügbar – merken einfach nicht
  }
}

function unlockLabel(tag, year) {
  return new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long' }).format(new Date(year, 11, tag));
}

let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
}

function fillDialog(data) {
  const spruch = document.getElementById('door-spruch');
  if (data.spruch) {
    spruch.textContent = '„' + data.spruch + '“';
    spruch.hidden = false;
  } else {
    spruch.hidden = true;
  }
  document.getElementById('door-title').textContent = data.ueberschrift;
  const text = document.getElementById('door-text');
  if (data.text) {
    text.textContent = data.text;
    text.hidden = false;
  } else {
    text.hidden = true;
  }
  const img = document.getElementById('door-img');
  const imgUrl = safeUrl(data.bild);
  if (imgUrl) {
    img.src = imgUrl;
    img.alt = data.ueberschrift;
    img.hidden = false;
  } else {
    img.removeAttribute('src');
    img.hidden = true;
  }
  const link = document.getElementById('door-link');
  const linkUrl = safeUrl(data.linkUrl);
  if (data.linkText && linkUrl) {
    link.textContent = data.linkText;
    link.href = linkUrl;
    link.hidden = false;
  } else {
    link.removeAttribute('href');
    link.hidden = true;
  }
}

function createDoor(tag, data, today, opened, year) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'door';
  btn.dataset.tag = tag;
  const num = document.createElement('span');
  num.className = 'num';
  num.textContent = tag;
  btn.appendChild(num);
  const unlocked = tag <= today;
  if (unlocked) {
    btn.classList.add('openable');
    btn.setAttribute('aria-label', 'Türchen ' + tag + ' öffnen');
  } else {
    btn.classList.add('locked');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('aria-label', 'Türchen ' + tag + ' – noch verschlossen, öffnet am ' + unlockLabel(tag, year));
    const lock = document.createElement('span');
    lock.className = 'lock';
    lock.textContent = '🔒';
    btn.appendChild(lock);
  }
  if (opened.has(tag)) btn.classList.add('opened');
  btn.addEventListener('click', () => {
    if (tag > today) {
      btn.classList.remove('shake');
      void btn.offsetWidth;
      btn.classList.add('shake');
      showToast('Türchen ' + tag + ' ist noch verschlossen – es öffnet sich am ' + unlockLabel(tag, year) + '.');
      return;
    }
    fillDialog(data);
    const dlg = document.getElementById('door-dialog');
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
    btn.classList.add('opened');
    if (CONFIG.REMEMBER_OPENED) {
      opened.add(tag);
      saveOpened(year, opened);
    }
  });
  return btn;
}

async function init() {
  const date = berlinNow();
  const today = lockDisabled() ? 24 : adventDay(date);
  const { doors, notice } = await loadDoors();
  const byTag = new Map(doors.map(d => [d.tag, d]));
  if (notice) {
    const n = document.getElementById('notice');
    n.textContent = notice;
    n.hidden = false;
  }
  document.getElementById('status').textContent = lockDisabled()
    ? 'Testmodus: Datumssperre deaktiviert – alle 24 Türchen offen (?sperre=aus).'
    : statusLine(date, today);
  document.getElementById('progress').textContent = today + ' von 24 Türchen freigeschaltet';
  const order = CONFIG.SHUFFLE_DOORS ? shuffledOrder(date.year) : Array.from({ length: 24 }, (_, i) => i + 1);
  const opened = CONFIG.REMEMBER_OPENED ? loadOpened(date.year) : new Set();
  const grid = document.getElementById('grid');
  for (const tag of order) {
    const data = byTag.get(tag) || {
      tag,
      spruch: '',
      ueberschrift: 'Türchen ' + tag,
      text: 'Für dieses Türchen sind noch keine Inhalte im Google-Sheet hinterlegt.',
      bild: '',
      linkText: '',
      linkUrl: ''
    };
    grid.appendChild(createDoor(tag, data, today, opened, date.year));
  }
  const dlg = document.getElementById('door-dialog');
  document.getElementById('dialog-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => {
    if (e.target === dlg) dlg.close();
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
