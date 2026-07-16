/*! MODULE: js/tracker.js — attempt history: mistake bank, bookmarks, streak, weak-topic stats */
/* Separate localStorage key from 'cmquest' (XP/progress) so a corrupt/cleared
   tracker can never touch XP data, and vice versa. Every function is defensive
   (try/catch + safe defaults) because this module must never be able to break
   the battle engine that calls it. */
const Track = (() => {
  const KEY = 'cmquest_track';
  let T = { visits: [], units: {}, mistakes: [], bookmarks: [] };
  try { const d = localStorage.getItem(KEY); if (d) T = Object.assign(T, JSON.parse(d)); } catch (e) {}

  function persist() { try { localStorage.setItem(KEY, JSON.stringify(T)); } catch (e) {} }
  function today() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  /* mark today visited — called once at boot */
  function touchVisit() {
    const t = today();
    if (!T.visits.includes(t)) { T.visits.push(t); T.visits.sort(); persist(); }
  }

  function origin(it) {
    if (it && it.uid) return it.uid;
    if (typeof QB === 'object') for (const k in QB) { if (QB[k].indexOf(it) >= 0) return k; }
    return '?';
  }
  function key(it) { return origin(it) + '::' + it.q; }

  /* record one answered question (called on every battle click, any mode) */
  function record(it, correct) {
    try {
      const uid = origin(it);
      if (!T.units[uid]) T.units[uid] = { c: 0, w: 0, tags: {} };
      const u = T.units[uid];
      const tag = it.tag || 'General';
      if (!u.tags[tag]) u.tags[tag] = { c: 0, w: 0 };
      if (correct) { u.c++; u.tags[tag].c++; } else { u.w++; u.tags[tag].w++; }

      const k = key(it);
      const idx = T.mistakes.findIndex(m => m.k === k);
      if (correct) {
        if (idx >= 0) {
          T.mistakes[idx].streak = (T.mistakes[idx].streak || 0) + 1;
          if (T.mistakes[idx].streak >= 2) T.mistakes.splice(idx, 1); // mastered — leaves the queue
        }
      } else {
        const entry = { k, uid, q: it.q, o: it.o, a: it.a, e: it.e, trap: it.trap, tag: it.tag, d: it.d, streak: 0, ts: Date.now() };
        if (idx >= 0) T.mistakes[idx] = entry; else T.mistakes.unshift(entry);
        if (T.mistakes.length > 150) T.mistakes.length = 150; // cap growth
      }
      persist();
    } catch (e) {}
  }

  function isBookmarked(it) { return T.bookmarks.some(b => b.k === key(it)); }
  function toggleBookmark(it) {
    const k = key(it);
    const idx = T.bookmarks.findIndex(b => b.k === k);
    if (idx >= 0) { T.bookmarks.splice(idx, 1); persist(); return false; }
    const uid = origin(it);
    T.bookmarks.unshift({ k, uid, q: it.q, o: it.o, a: it.a, e: it.e, trap: it.trap, tag: it.tag, d: it.d, ts: Date.now() });
    persist(); return true;
  }

  function mistakePool() { return T.mistakes.map(m => ({ ...m })); }
  function bookmarkPool() { return T.bookmarks.map(m => ({ ...m })); }

  /* flashcard bookmarks — separate shape (isCard:true) inside the same list;
     keyed by unit+index so front-text with quotes/HTML never has to be escaped into markup */
  function cardKey(uid, idx) { return 'card::' + uid + '::' + idx; }
  function isCardBookmarked(uid, idx) { return T.bookmarks.some(b => b.k === cardKey(uid, idx)); }
  function toggleCardBookmark(uid, idx, front, back, hint) {
    const k = cardKey(uid, idx);
    const i = T.bookmarks.findIndex(b => b.k === k);
    if (i >= 0) { T.bookmarks.splice(i, 1); persist(); return false; }
    T.bookmarks.unshift({ k, uid, isCard: true, front, back, hint, ts: Date.now() });
    persist(); return true;
  }

  function unitStats(uid) {
    const u = T.units[uid]; if (!u) return { c: 0, w: 0, total: 0, acc: null };
    const total = u.c + u.w;
    return { c: u.c, w: u.w, total, acc: total ? Math.round(u.c / total * 100) : null };
  }
  function overall() {
    let c = 0, w = 0;
    Object.values(T.units).forEach(u => { c += u.c; w += u.w; });
    const total = c + w;
    return { c, w, total, acc: total ? Math.round(c / total * 100) : null };
  }
  /* units sorted weakest-first; only those with enough data to be meaningful */
  function weakUnits(minAttempts) {
    minAttempts = minAttempts || 4;
    return Object.keys(T.units).map(uid => ({ uid, ...unitStats(uid) }))
      .filter(x => x.total >= minAttempts)
      .sort((a, b) => a.acc - b.acc);
  }
  function weakTags(uid, n) {
    const u = T.units[uid]; if (!u) return [];
    return Object.keys(u.tags).map(tag => {
      const t = u.tags[tag], total = t.c + t.w;
      return { tag, c: t.c, w: t.w, total, acc: total ? Math.round(t.c / total * 100) : 0 };
    }).filter(x => x.total >= 2).sort((a, b) => a.acc - b.acc);
  }

  /* consecutive-day streak ending today or yesterday (forgiving if not opened yet today) */
  function streak() {
    if (!T.visits.length) return { cur: 0, best: 0 };
    const set = new Set(T.visits);
    const d = new Date(); let cur = 0;
    let cursor = new Date(d);
    if (!set.has(today())) cursor.setDate(cursor.getDate() - 1); // allow "not yet today"
    while (true) {
      const k = cursor.getFullYear() + '-' + String(cursor.getMonth() + 1).padStart(2, '0') + '-' + String(cursor.getDate()).padStart(2, '0');
      if (set.has(k)) { cur++; cursor.setDate(cursor.getDate() - 1); } else break;
    }
    let best = 0, run = 0, prev = null;
    T.visits.forEach(v => {
      if (prev) { const p = new Date(prev), c = new Date(v); run = ((c - p) / 86400000 === 1) ? run + 1 : 1; }
      else run = 1;
      best = Math.max(best, run); prev = v;
    });
    return { cur, best: Math.max(best, cur) };
  }
  /* last `days` days, oldest→newest, each {date, active} */
  function heatmap(days) {
    days = days || 28;
    const set = new Set(T.visits), out = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      out.push({ date: k, active: set.has(k) });
    }
    return out;
  }

  return { touchVisit, record, isBookmarked, toggleBookmark, isCardBookmarked, toggleCardBookmark, mistakePool, bookmarkPool, unitStats, overall, weakUnits, weakTags, streak, heatmap };
})();
try { Track.touchVisit(); } catch (e) {}

function toggleCardBM(btn, uid, idx) {
  try {
    const f = CARDS[uid][idx];
    const on = Track.toggleCardBookmark(uid, idx, f[0], f[1], f[2]);
    btn.textContent = on ? '★' : '☆';
    btn.classList.toggle('on', on);
  } catch (e) {}
}
