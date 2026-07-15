/*! MODULE: js/labs/sql.js — SQL Playground (in-memory relational engine) */
/* Runs a real subset of SQL over seed tables so the learner SEES what a query does.
   Exposed globals used by lesson HTML onclick handlers: sqlRun, sqlLoad, sqlReset, sqlDemo */

const SQL_SEED = {
  EMPLOYEE: {
    cols: ['eid', 'name', 'dept', 'salary', 'mgr'],
    rows: [
      [101, 'Ramesh', 'SALES', 42000, 105],
      [102, 'Sunita', 'HR', 38000, 105],
      [103, 'Vikram', 'IT', 65000, 106],
      [104, 'Anita', 'IT', 58000, 106],
      [105, 'Mohan', 'ADMIN', 90000, null],
      [106, 'Kavita', 'IT', 88000, 105],
      [107, 'Deepak', 'SALES', 45000, 105]
    ]
  },
  DEPT: {
    cols: ['dname', 'city'],
    rows: [
      ['SALES', 'Jaipur'],
      ['HR', 'Kota'],
      ['IT', 'Jaipur'],
      ['ADMIN', 'Ajmer']
    ]
  }
};

let SQLDB = null;
function sqlClone(o) { return JSON.parse(JSON.stringify(o)); }
function sqlReset() {
  SQLDB = sqlClone(SQL_SEED);
  sqlOut('<div class="sqlNote">🔄 डेटाबेस रीसेट — EMPLOYEE में 7 tuples, DEPT में 4 tuples।</div>');
  sqlShow('EMPLOYEE');
}
function sqlDB() { if (!SQLDB) SQLDB = sqlClone(SQL_SEED); return SQLDB; }

function sqlOut(html) {
  const el = document.getElementById('sqlOut');
  if (el) el.innerHTML = html;
}
function sqlLoad(q) {
  const el = document.getElementById('sqlIn');
  if (el) { el.value = q; el.focus(); }
}
function sqlDemo(q) { sqlLoad(q); sqlRun(); }

/* ---- render a result set as a table ---- */
function sqlTable(cols, rows, note) {
  if (!rows.length) {
    return '<div class="sqlNote">⚠️ 0 rows — रिलेशन खाली है (पर <b>schema ज़िंदा है</b>)।</div>' + (note || '');
  }
  let h = '<div style="overflow-x:auto"><table class="sqlT"><tr>' +
    cols.map(c => '<th>' + c + '</th>').join('') + '</tr>';
  rows.forEach(r => {
    h += '<tr>' + r.map(v => '<td>' + (v === null || v === undefined ? '<i style="opacity:.5">NULL</i>' : v) + '</td>').join('') + '</tr>';
  });
  h += '</table></div><div class="sqlNote">✅ ' + rows.length + ' row(s) returned</div>';
  return h + (note || '');
}

/* ---- tiny expression evaluator for WHERE ---- */
function sqlWhere(expr, cols, row) {
  if (!expr) return true;
  let e = expr;
  // column names -> values (longest first so "salary" isn't broken by "sal")
  cols.slice().sort((a, b) => b.length - a.length).forEach(c => {
    const i = cols.indexOf(c);
    const v = row[i];
    const lit = (v === null || v === undefined) ? 'null' : (typeof v === 'number' ? v : JSON.stringify(v));
    e = e.replace(new RegExp('\\b' + c + '\\b', 'gi'), lit);
  });
  e = e.replace(/<>/g, '!==').replace(/\bAND\b/gi, '&&').replace(/\bOR\b/gi, '||').replace(/\bNOT\b/gi, '!');
  e = e.replace(/\bIS NULL\b/gi, '===null').replace(/\bIS NOT NULL\b/gi, '!==null');
  e = e.replace(/([^<>!=])=([^=])/g, '$1==$2');           // single = -> ==
  e = e.replace(/'/g, '"');
  try { return !!Function('"use strict";return (' + e + ')')(); } catch (err) { throw new Error('WHERE समझ नहीं आया: ' + expr); }
}

const SQL_AGG = {
  COUNT: v => v.length,
  SUM: v => v.reduce((a, b) => a + (+b || 0), 0),
  AVG: v => v.length ? +(v.reduce((a, b) => a + (+b || 0), 0) / v.length).toFixed(2) : 0,
  MIN: v => v.reduce((a, b) => (a === null || b < a ? b : a), null),
  MAX: v => v.reduce((a, b) => (a === null || b > a ? b : a), null)
};

function sqlRun() {
  const inp = document.getElementById('sqlIn');
  if (!inp) return;
  let q = inp.value.trim().replace(/;+\s*$/, '');
  if (!q) return;
  const db = sqlDB();
  try {
    const up = q.toUpperCase();

    /* ---------- DELETE ---------- */
    if (/^DELETE\s+FROM/i.test(q)) {
      const m = q.match(/^DELETE\s+FROM\s+(\w+)(?:\s+WHERE\s+(.+))?$/i);
      if (!m) throw new Error('सिंटैक्स: DELETE FROM table [WHERE cond]');
      const t = db[m[1].toUpperCase()];
      if (!t) throw new Error('ऐसा कोई relation नहीं: ' + m[1]);
      const before = t.rows.length;
      t.rows = t.rows.filter(r => !sqlWhere(m[2], t.cols, r));
      const del = before - t.rows.length;
      sqlOut(sqlTable(t.cols, t.rows,
        '<div class="sqlNote sqlWarn">🗑️ ' + del + ' tuple(s) हटे। बचे: ' + t.rows.length +
        '।<br><b>याद रख:</b> DELETE सिर्फ़ <b>tuples</b> हटाता है — <b>relation/schema बना रहता है</b>। ' +
        'स्कीमा हटाना है तो <code>DROP TABLE</code>। यही RSSB का favourite trap है।</div>'));
      return;
    }

    /* ---------- DROP ---------- */
    if (/^DROP\s+TABLE/i.test(q)) {
      const m = q.match(/^DROP\s+TABLE\s+(\w+)$/i);
      const nm = m[1].toUpperCase();
      if (!db[nm]) throw new Error('ऐसा कोई relation नहीं: ' + m[1]);
      delete db[nm];
      sqlOut('<div class="sqlNote sqlWarn">💥 relation <b>' + nm + '</b> पूरा गायब — schema भी गया। ' +
        'अब <code>SELECT * FROM ' + nm + '</code> error देगा। DELETE और DROP का यही फ़र्क़ है।<br>' +
        '<button class="sqlBtn" onclick="sqlReset()">🔄 वापस लाओ</button></div>');
      return;
    }

    /* ---------- INSERT ---------- */
    if (/^INSERT\s+INTO/i.test(q)) {
      const m = q.match(/^INSERT\s+INTO\s+(\w+)\s*(?:\(([^)]*)\))?\s*VALUES\s*\((.+)\)$/i);
      if (!m) throw new Error('सिंटैक्स: INSERT INTO t VALUES (...)');
      const t = db[m[1].toUpperCase()];
      if (!t) throw new Error('ऐसा कोई relation नहीं: ' + m[1]);
      const vals = m[3].split(',').map(s => {
        s = s.trim();
        if (/^'.*'$/.test(s)) return s.slice(1, -1);
        if (/^null$/i.test(s)) return null;
        return isNaN(+s) ? s : +s;
      });
      t.rows.push(vals);
      sqlOut(sqlTable(t.cols, t.rows, '<div class="sqlNote">➕ 1 tuple डाला गया।</div>'));
      return;
    }

    /* ---------- UPDATE ---------- */
    if (/^UPDATE\s+/i.test(q)) {
      const m = q.match(/^UPDATE\s+(\w+)\s+SET\s+(.+?)(?:\s+WHERE\s+(.+))?$/i);
      if (!m) throw new Error('सिंटैक्स: UPDATE t SET col=val [WHERE cond]');
      const t = db[m[1].toUpperCase()];
      if (!t) throw new Error('ऐसा कोई relation नहीं: ' + m[1]);
      const sets = m[2].split(',').map(s => s.split('='));
      let n = 0;
      t.rows.forEach(r => {
        if (sqlWhere(m[3], t.cols, r)) {
          n++;
          sets.forEach(([c, v]) => {
            const i = t.cols.indexOf(c.trim().toLowerCase());
            if (i < 0) throw new Error('ऐसा कोई attribute नहीं: ' + c.trim());
            v = v.trim();
            r[i] = /^'.*'$/.test(v) ? v.slice(1, -1) : (isNaN(+v) ? v : +v);
          });
        }
      });
      sqlOut(sqlTable(t.cols, t.rows, '<div class="sqlNote">✏️ ' + n + ' tuple(s) update हुए।</div>'));
      return;
    }

    /* ---------- SELECT ---------- */
    if (/^SELECT/i.test(q)) {
      const m = q.match(/^SELECT\s+(DISTINCT\s+)?(.+?)\s+FROM\s+(\w+)(?:\s+WHERE\s+(.+?))?(?:\s+GROUP\s+BY\s+(\w+))?(?:\s+ORDER\s+BY\s+(\w+)(\s+DESC|\s+ASC)?)?$/i);
      if (!m) throw new Error('सिंटैक्स: SELECT cols FROM t [WHERE][GROUP BY][ORDER BY]');
      const [, distinct, selRaw, tname, where, groupBy, ordCol, ordDir] = m;
      const t = db[tname.toUpperCase()];
      if (!t) throw new Error('ऐसा कोई relation नहीं: ' + tname);

      let rows = t.rows.filter(r => sqlWhere(where, t.cols, r));
      const sel = selRaw.split(',').map(s => s.trim());

      /* aggregates / GROUP BY */
      const aggRe = /^(COUNT|SUM|AVG|MIN|MAX)\s*\(\s*(\*|\w+)\s*\)$/i;
      const hasAgg = sel.some(s => aggRe.test(s));
      if (hasAgg) {
        const groups = {};
        if (groupBy) {
          const gi = t.cols.indexOf(groupBy.toLowerCase());
          if (gi < 0) throw new Error('GROUP BY में गलत attribute: ' + groupBy);
          rows.forEach(r => { (groups[r[gi]] = groups[r[gi]] || []).push(r); });
        } else {
          groups['__all__'] = rows;
        }
        const outCols = [], outRows = [];
        sel.forEach(s => outCols.push(s.toUpperCase()));
        Object.keys(groups).forEach(k => {
          const g = groups[k];
          const row = sel.map(s => {
            if (groupBy && s.toLowerCase() === groupBy.toLowerCase()) return k;
            const am = s.match(aggRe);
            if (!am) throw new Error('GROUP BY के साथ "' + s + '" नहीं आ सकता — या तो grouped column, या aggregate।');
            const fn = am[1].toUpperCase(), col = am[2];
            if (col === '*') return SQL_AGG[fn](g);
            const ci = t.cols.indexOf(col.toLowerCase());
            if (ci < 0) throw new Error('ऐसा कोई attribute नहीं: ' + col);
            return SQL_AGG[fn](g.map(r => r[ci]).filter(v => v !== null));
          });
          outRows.push(row);
        });
        sqlOut(sqlTable(outCols, outRows,
          '<div class="sqlNote">📊 aggregate function पूरे <b>group</b> पर चलता है, एक tuple पर नहीं। ' +
          'NULL को COUNT(col)/SUM छोड़ देता है, पर <b>COUNT(*) हर row गिनता है</b> — यहीं पर पेपर फँसाता है।</div>'));
        return;
      }

      /* projection */
      let cols, idx;
      if (sel.length === 1 && sel[0] === '*') { cols = t.cols.slice(); idx = cols.map((_, i) => i); }
      else {
        cols = sel.map(s => s.toLowerCase());
        idx = cols.map(c => {
          const i = t.cols.indexOf(c);
          if (i < 0) throw new Error('ऐसा कोई attribute नहीं: ' + c);
          return i;
        });
      }
      let out = rows.map(r => idx.map(i => r[i]));
      if (distinct) {
        const seen = new Set();
        out = out.filter(r => { const k = JSON.stringify(r); if (seen.has(k)) return false; seen.add(k); return true; });
      }
      if (ordCol) {
        const oi = t.cols.indexOf(ordCol.toLowerCase());
        if (oi < 0) throw new Error('ORDER BY में गलत attribute: ' + ordCol);
        const pos = idx.indexOf(oi);
        if (pos >= 0) {
          const desc = (ordDir || '').trim().toUpperCase() === 'DESC';
          out.sort((a, b) => (a[pos] > b[pos] ? 1 : a[pos] < b[pos] ? -1 : 0) * (desc ? -1 : 1));
        }
      }
      const note = distinct
        ? '<div class="sqlNote">🔎 <b>DISTINCT</b> ने duplicate tuples हटाए — यही <b>Project (π)</b> का असली behaviour है। शुद्ध relational algebra में π हमेशा duplicates हटाता है, पर SQL डिफ़ॉल्ट रूप से रखता है (SQL = multiset/bag)।</div>'
        : '';
      sqlOut(sqlTable(cols, out, note));
      return;
    }

    throw new Error('अभी सिर्फ़ SELECT / INSERT / UPDATE / DELETE / DROP TABLE चलते हैं।');
  } catch (err) {
    sqlOut('<div class="sqlNote sqlErr">❌ <b>Error:</b> ' + err.message + '</div>');
  }
}

/* show a base table (used by reset + "table dekho" buttons) */
function sqlShow(name) {
  const t = sqlDB()[name.toUpperCase()];
  if (!t) return;
  const el = document.getElementById('sqlTables');
  if (el) el.innerHTML = sqlTable(t.cols, t.rows, '');
}
