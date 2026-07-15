/*! MODULE: data/content.js — content containers for Paper-II units */
/* Each unit file (data/paper2/u-*.js) registers itself into these three maps,
   keyed by its unit id, plus pushes its card into CH.
     LESSON[id] = "<html>"                         → 📖 पढ़ो tab
     CARDS[id]  = [[front, back, hint], ...]       → ⚡ कार्ड tab
     QB[id]     = [{q,o,a,e,trap,d,tag,pyq}, ...]  → ⚔️ बैटल tab
   Declared here (before the unit files load) so the engine always has them. */

const LESSON = {};
const CARDS  = {};
const QB     = {};

/* UNIT_INIT[id] — optional. Lesson HTML is injected via innerHTML, and inline <script>
   does NOT execute that way. Any unit whose lesson embeds an interactive lab registers a
   draw function here; sheet.js calls it once the lesson HTML is in the DOM.
   Units without a lab simply don't register — nothing changes for them. */
const UNIT_INIT = {};
