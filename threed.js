<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Khayat Pro | CAD Pattern Studio</title>
<style>
:root{--bg:#0b1020;--panel:#111a2e;--panel2:#17233b;--line:#263653;--text:#e8eef9;--muted:#91a2bd;--accent:#42b7e9;--green:#22c58b;--orange:#f2ad4b;--red:#e45b69}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px "Segoe UI",Tahoma,sans-serif;height:100vh;overflow:hidden}
button,input,select{font:inherit}button{cursor:pointer;color:inherit}
.app{height:100vh;display:grid;grid-template-rows:58px 48px 1fr 28px}
header{display:flex;align-items:center;justify-content:space-between;padding:0 16px;background:#0e1729;border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:12px}.brand-mark{width:34px;height:34px;border:1px solid var(--accent);border-radius:9px;display:grid;place-items:center;color:var(--accent);font-weight:800;font-size:18px}.brand h1{font-size:15px;margin:0}.brand small{display:block;color:var(--muted);font-size:11px;margin-top:3px}
.header-actions{display:flex;gap:7px;align-items:center}.btn{border:1px solid var(--line);background:var(--panel2);padding:8px 11px;border-radius:7px;font-size:12px}.btn:hover{border-color:var(--accent)}.btn.primary{background:#087eae;border-color:#1599ca;color:white}.btn.good{background:#087c5b;border-color:#0b9a70}.btn.danger{background:#542431;border-color:#87404e}
.toolbar{display:flex;align-items:center;gap:5px;padding:5px 12px;background:#101a2d;border-bottom:1px solid var(--line);overflow-x:auto;white-space:nowrap}
.tool{min-width:62px;height:36px;padding:4px 8px;border:1px solid transparent;border-radius:6px;background:transparent;color:#b9c7dc;font-size:11px}.tool .ico{display:block;font-size:15px;margin-bottom:1px}.tool:hover,.tool.active{background:#1c3550;border-color:#286a8a;color:#fff}.separator{height:27px;width:1px;background:var(--line);margin:0 5px}
.workspace{min-height:0;display:grid;grid-template-columns:250px minmax(300px,1fr) 280px;direction:ltr}
.left,.right{direction:rtl;background:var(--panel);overflow:auto;padding:12px;border-color:var(--line)}.left{border-right:1px solid var(--line)}.right{border-left:1px solid var(--line)}
.center{direction:rtl;min-width:0;min-height:0;display:grid;grid-template-rows:38px 1fr;background:#080e1a}
.view-tabs{display:flex;align-items:center;gap:5px;padding:4px 10px;border-bottom:1px solid var(--line);background:#101a2d}
.tab{padding:6px 12px;border-radius:5px;border:1px solid transparent;background:transparent;color:var(--muted);font-size:12px}.tab.active{background:#1b3550;border-color:#2b6687;color:#fff}
.canvas-wrap{position:relative;min-height:0;overflow:hidden}canvas{display:block;width:100%;height:100%;touch-action:none}
#cadCanvas{background-color:#0a1221;background-image:radial-gradient(#263650 0.7px,transparent .7px);background-size:20px 20px}
#view3d{display:none;background:radial-gradient(ellipse at center,#172b45,#080e1a 70%)}
.canvas-hud{position:absolute;top:10px;left:12px;display:flex;gap:7px;pointer-events:none}.badge{background:#111d31dd;border:1px solid #2a3d59;color:#a9bbd5;padding:5px 8px;border-radius:5px;font-size:11px}
.panel-title{font-size:12px;color:var(--accent);font-weight:700;padding:5px 0 10px;border-bottom:1px solid var(--line);margin-bottom:10px}
.section{margin-bottom:17px}.section h3{font-size:11px;color:#9eb1cd;margin:0 0 8px;font-weight:700}
.field{margin:8px 0}.field label{display:block;color:var(--muted);font-size:11px;margin-bottom:5px}.field input,.field select{width:100%;background:#0c1527;border:1px solid #2a3a56;border-radius:6px;padding:7px;color:var(--text);outline:none}.field input:focus,.field select:focus{border-color:var(--accent)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:7px}.layer{display:flex;align-items:center;gap:7px;padding:8px;border:1px solid transparent;border-radius:6px;background:#0e182a;margin:5px 0;font-size:11px}.layer.active{border-color:#28789c;background:#14283e}.layer input{accent-color:var(--accent)}.layer .layer-name{flex:1}.layer small{color:var(--muted)}
.list-item{padding:9px;background:#0d1728;border:1px solid #263650;border-radius:6px;margin:6px 0;display:flex;justify-content:space-between;gap:6px;font-size:11px;align-items:center}.muted{color:var(--muted)}.mini{font-size:10px;color:var(--muted)}
.status{display:flex;align-items:center;justify-content:space-between;padding:0 12px;background:#0e1729;border-top:1px solid var(--line);font-size:10px;color:var(--muted)}
.status span{margin-left:14px}.hidden{display:none!important}
.ctx-menu{position:fixed;background:#152033;border:1px solid #2a3d59;border-radius:7px;padding:5px;z-index:1000;min-width:190px;box-shadow:0 8px 24px rgba(0,0,0,.55)}
.ctx-menu button{display:block;width:100%;text-align:right;background:transparent;border:none;color:var(--text);padding:8px 10px;border-radius:5px;font-size:12px}.ctx-menu button:hover{background:#1e3350}
.ctx-sep{height:1px;background:#2a3d59;margin:4px 2px}
.measure-chip{background:#0d1728;border:1px solid #263650;border-radius:6px;padding:7px 9px;margin:5px 0;font-size:11px;display:flex;justify-content:space-between}
.measure-chip b{color:var(--accent)}
@media(max-width:900px){.workspace{grid-template-columns:190px minmax(250px,1fr)}.right{display:none}}
@media(max-width:620px){.app{grid-template-rows:54px 48px 1fr 26px}.workspace{grid-template-columns:1fr}.left,.right{display:none}.brand small{display:none}.header-actions .optional{display:none}}
</style>
</head>
<body>
<div class="app">
<header>
 <div class="brand"><div class="brand-mark">K</div><div><h1>Khayat Pro · Pattern CAD</h1><small>بيئة هندسية لرسم أنماط التفصيل</small></div></div>
 <div class="header-actions">
  <button class="btn optional" id="undoBtn">↶ تراجع</button><button class="btn optional" id="redoBtn">↷ إعادة</button>
  <button class="btn optional" id="exportBtn">تصدير JSON</button><button class="btn optional" id="importBtn">استيراد</button><input id="importFile" type="file" accept=".json,application/json" hidden><button class="btn" id="saveBtn">حفظ التصميم</button><button class="btn primary" id="previewBtn">معاينة 3D</button>
 </div>
</header>
<nav class="toolbar" id="toolbar">
 <button class="tool active" data-tool="select"><span class="ico">↖</span>تحديد</button>
 <button class="tool" data-tool="free"><span class="ico">〰</span>رسم حر</button>
 <button class="tool" data-tool="line"><span class="ico">／</span>خط</button>
 <button class="tool" data-tool="poly"><span class="ico">⌁</span>متعدد</button>
 <button class="tool" data-tool="rect"><span class="ico">▱</span>مستطيل</button>
 <button class="tool" data-tool="circle"><span class="ico">○</span>دائرة</button>
 <button class="tool" data-tool="bezier"><span class="ico">∿</span>منحنى</button>
 <button class="tool" data-tool="dimension"><span class="ico">↔</span>قياس</button>
 <div class="separator"></div>
 <button class="tool" data-action="delete"><span class="ico">⌫</span>حذف</button>
 <button class="tool" data-action="duplicate"><span class="ico">▣</span>نسخ</button>
 <button class="tool" data-action="mirror"><span class="ico">⇋</span>عكس</button>
 <button class="tool" data-action="rotate"><span class="ico">↻</span>تدوير</button>
 <button class="tool" data-action="offset"><span class="ico">⊟</span>إزاحة</button>
 <button class="tool" data-action="fit"><span class="ico">⛶</span>ملاءمة</button>
 <div class="separator"></div>
 <button class="tool" data-action="grid"><span class="ico">▦</span>الشبكة</button>
 <button class="tool" data-action="snap"><span class="ico">⌖</span>التقاط</button>
 <div class="separator"></div>
 <button class="tool" id="templatesBtn"><span class="ico">✂</span>قوالب</button>
</nav>
<main class="workspace">
 <aside class="left">
  <div class="panel-title">مدير الطبقات</div>
  <div id="layers"></div>
  <button class="btn" id="addLayer" style="width:100%">＋ إضافة طبقة</button>
  <div class="section" style="margin-top:20px">
   <div class="panel-title">مكتبة التصاميم المحلية</div>
   <input id="searchDesign" placeholder="بحث بالاسم..." style="width:100%;padding:8px;background:#0c1527;border:1px solid #2a3a56;border-radius:6px;color:white">
   <div id="designList"></div>
  </div>
  <div class="section">
   <div class="panel-title">إعدادات الرسم</div>
   <div class="field"><label>وحدة القياس</label><select id="unit"><option value="cm">سنتيمتر (cm)</option></select></div>
   <div class="field"><label>مقياس العرض (بكسل/سم)</label><input id="scaleInfo" value="8" disabled></div>
   <div class="field"><label>خطوة الشبكة (سم)</label><input id="gridStep" type="number" min=".1" step=".1" value="1"></div>
   <div class="field"><label><input type="checkbox" id="snapToggle" checked> تفعيل الالتقاط (شبكة / نقاط)</label></div>
  </div>
 </aside>
 <section class="center">
  <div class="view-tabs"><button class="tab active" id="tab2d">مساحة الرسم 2D</button><button class="tab" id="tab3d">النموذج الهندسي 3D</button><span class="mini" id="viewMessage" style="margin-right:auto">الرسم بوحدة السنتيمتر</span></div>
  <div class="canvas-wrap">
   <canvas id="cadCanvas"></canvas><canvas id="view3d"></canvas>
   <div class="canvas-hud"><span class="badge" id="coordBadge">X: 0.0 · Y: 0.0 cm</span><span class="badge" id="toolBadge">أداة التحديد</span></div>
  </div>
 </section>
 <aside class="right">
  <div class="panel-title">خصائص العنصر</div>
  <div id="emptyProps" class="muted" style="font-size:11px;line-height:1.8">حدد عنصراً من مساحة الرسم لعرض خصائصه وتعديلها بدقة.</div>
  <div id="props" class="hidden"></div>
  <div class="section" style="margin-top:20px">
   <div class="panel-title">قياسات الزبون المرتبطة</div>
   <div class="mini" style="line-height:1.7">أدخل قياسات مرجعية؛ تُحفظ نسخة كاملة وموثقة داخل التصميم عند الضغط على زر الإرفاق.</div>
   <div class="field"><label>طول الثوب (سم)</label><input id="mLength" type="number" placeholder="مثال: 145"></div>
   <div class="field"><label>محيط الصدر (سم)</label><input id="mChest" type="number" placeholder="مثال: 104"></div>
   <div class="field"><label>عرض الكتف (سم)</label><input id="mShoulder" type="number" placeholder="مثال: 46"></div>
   <div class="field"><label>طول الكم (سم)</label><input id="mSleeve" type="number" placeholder="مثال: 60"></div>
   <button class="btn good" id="applyMeasurements" style="width:100%">إرفاق نسخة القياسات بالتصميم</button>
   <button class="btn" id="applyGuide" style="width:100%;margin-top:6px">تطبيق المقاسات على مخطط أولي</button>
   <div id="measureList" style="margin-top:8px"></div>
  </div>
  <div class="section" style="margin-top:20px">
   <div class="panel-title">معلومات المخطط</div>
   <div class="list-item"><span>عدد العناصر</span><b id="countInfo">0</b></div>
   <div class="list-item"><span>الطبقة النشطة</span><b id="activeLayerInfo">الأمام</b></div>
   <div class="list-item"><span>الحفظ التلقائي</span><b style="color:var(--green)">مفعّل</b></div>
  </div>
 </aside>
</main>
<footer class="status"><div><span id="statusText">جاهز · ابدأ الرسم</span><span id="selectionInfo">لا يوجد تحديد</span></div><div><span id="zoomInfo">100%</span><span>الوحدات: cm</span><span>Offline</span></div></footer>
</div>
<script>
(function(){
"use strict";

/* ============================================================
   0) أدوات مساعدة عامة
   ============================================================ */
const $ = id => document.getElementById(id);
const uid = () => Math.random().toString(36).slice(2, 10);
const clone = o => JSON.parse(JSON.stringify(o));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const TYPE_NAMES = { line:'خط', poly:'خط متعدد', free:'رسم حر', rect:'مستطيل', circle:'دائرة', bezier:'منحنى بيزيه', dimension:'قياس' };

/* ============================================================
   1) حالة التطبيق
   ============================================================ */
const DB_KEY = 'khayatpro.patternCAD.v2';
const state = {
  items: [],
  layers: [
    { id:'front',   name:'الأمام',      visible:true, locked:false },
    { id:'back',    name:'الخلف',       visible:true, locked:false },
    { id:'details', name:'التفاصيل',    visible:true, locked:false },
    { id:'cut',     name:'خطوط القص',   visible:true, locked:false }
  ],
  activeLayer: 'front',
  tool: 'select',
  selected: null,
  scale: 8,
  ox: 0, oy: 0,
  grid: true,
  snap: true,
  gridStep: 1,
  drag: null,
  draft: null,
  undo: [],
  redo: [],
  measurements: {},
  designName: 'تصميم جديد',
  is3d: false,
  rotY: 0.35,
  rotX: 0.22,
  zoom3d: 1,
  snapIndicator: null,
  drag3d: null
};

/* ============================================================
   2) الكانفاس والتحويلات
   ============================================================ */
const canvas = $('cadCanvas'), ctx = canvas.getContext('2d');
const c3 = $('view3d'), g3 = c3.getContext('2d');
let DPR = Math.min(window.devicePixelRatio || 1, 2);

function dims(){ return { w: canvas.clientWidth, h: canvas.clientHeight }; }
function world(sx, sy){ return { x: (sx - state.ox) / state.scale, y: (state.oy - sy) / state.scale }; }
function screen(p){ return { x: state.ox + p.x * state.scale, y: state.oy - p.y * state.scale }; }

function resize(){
  const wrap = canvas.parentElement.getBoundingClientRect();
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  [canvas, c3].forEach(el => {
    el.width = Math.max(1, Math.floor(wrap.width * DPR));
    el.height = Math.max(1, Math.floor(wrap.height * DPR));
    el.style.width = wrap.width + 'px';
    el.style.height = wrap.height + 'px';
  });
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  g3.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (!state.ox && !state.oy) { state.ox = wrap.width / 2; state.oy = wrap.height / 2; }
  draw();
}

/* ============================================================
   3) هندسة مساعدة
   ============================================================ */
function distSeg(p, a, b){
  const dx = b.x - a.x, dy = b.y - a.y;
  const len2 = dx * dx + dy * dy || 1;
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2;
  t = clamp(t, 0, 1);
  return Math.hypot(p.x - a.x - t * dx, p.y - a.y - t * dy);
}

function smoothBezier(points, closed){
  const n = points.length;
  if (n < 2) return;
  for (let i = 0; i < n; i++){
    const p = points[i];
    if (p.h1x === undefined){ p.h1x = 0; p.h1y = 0; p.h2x = 0; p.h2y = 0; }
    const prev = closed ? points[(i - 1 + n) % n] : points[Math.max(0, i - 1)];
    const next = closed ? points[(i + 1) % n]       : points[Math.min(n - 1, i + 1)];
    let tx, ty;
    if (!closed && i === 0){ tx = (next.x - p.x) / 3; ty = (next.y - p.y) / 3; }
    else if (!closed && i === n - 1){ tx = (p.x - prev.x) / 3; ty = (p.y - prev.y) / 3; }
    else { tx = (next.x - prev.x) / 6; ty = (next.y - prev.y) / 6; }
    p.h2x = tx; p.h2y = ty;
    p.h1x = -tx; p.h1y = -ty;
  }
}

function bezierToPolyline(o){
  const pts = o.points;
  if (!pts || pts.length < 2) return pts || [];
  const out = [{ x: pts[0].x, y: pts[0].y }];
  const segs = o.closed ? pts.length : pts.length - 1;
  for (let i = 0; i < segs; i++){
    const p0 = pts[i], p1 = pts[(i + 1) % pts.length];
    const c1 = { x: p0.x + (p0.h2x || 0), y: p0.y + (p0.h2y || 0) };
    const c2 = { x: p1.x + (p1.h1x || 0), y: p1.y + (p1.h1y || 0) };
    for (let s = 1; s <= 12; s++){
      const t = s / 12, mt = 1 - t;
      out.push({
        x: mt*mt*mt*p0.x + 3*mt*mt*t*c1.x + 3*mt*t*t*c2.x + t*t*t*p1.x,
        y: mt*mt*mt*p0.y + 3*mt*mt*t*c1.y + 3*mt*t*t*c2.y + t*t*t*p1.y
      });
    }
  }
  return out;
}

function itemOutline(o){
  if (!o) return [];
  if (o.type === 'line' || o.type === 'dimension') return [{ x:o.x, y:o.y }, { x:o.x2, y:o.y2 }];
  if (o.type === 'rect') return [
    { x:o.x, y:o.y }, { x:o.x + o.w, y:o.y },
    { x:o.x + o.w, y:o.y + o.h }, { x:o.x, y:o.y + o.h }
  ];
  if (o.type === 'circle'){
    const out = [], n = 48;
    for (let i = 0; i < n; i++){
      const a = i / n * Math.PI * 2;
      out.push({ x: o.x + o.r * Math.cos(a), y: o.y + o.r * Math.sin(a) });
    }
    return out;
  }
  if (o.type === 'bezier') return bezierToPolyline(o);
  return o.points || [];
}

function itemBounds(o){
  const pts = itemOutline(o);
  if (!pts.length) return { minX:0, minY:0, maxX:0, maxY:0 };
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of pts){
    if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y;
  }
  return { minX, minY, maxX, maxY };
}

function bounds(){
  if (!state.items.length) return { minX:-20, minY:-20, maxX:20, maxY:20 };
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const o of state.items){
    const b = itemBounds(o);
    minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY);
    maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY);
  }
  return { minX, minY, maxX, maxY };
}

function simplifyRDP(pts, eps){
  if (pts.length < 3) return pts;
  const sqEps = eps * eps;
  const keep = new Array(pts.length).fill(false);
  keep[0] = keep[pts.length - 1] = true;
  const stack = [[0, pts.length - 1]];
  while (stack.length){
    const [a, b] = stack.pop();
    let maxD = 0, idx = -1;
    const dx = pts[b].x - pts[a].x, dy = pts[b].y - pts[a].y;
    const len2 = dx*dx + dy*dy;
    for (let i = a + 1; i < b; i++){
      let d;
      if (len2 === 0){ d = (pts[i].x - pts[a].x)**2 + (pts[i].y - pts[a].y)**2; }
      else {
        let t = ((pts[i].x - pts[a].x) * dx + (pts[i].y - pts[a].y) * dy) / len2;
        t = clamp(t, 0, 1);
        const px = pts[a].x + t * dx, py = pts[a].y + t * dy;
        d = (pts[i].x - px)**2 + (pts[i].y - py)**2;
      }
      if (d > maxD){ maxD = d; idx = i; }
    }
    if (maxD > sqEps && idx > 0){
      keep[idx] = true;
      stack.push([a, idx], [idx, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

/* ============================================================
   4) نظام الالتقاط (Snap)
   ============================================================ */
function getSnapCandidates(){
  const cands = [];
  for (const o of state.items){
    const layer = state.layers.find(l => l.id === o.layer);
    if (!layer || !layer.visible) continue;
    if (o.type === 'line' || o.type === 'dimension'){
      cands.push({ p:{ x:o.x,  y:o.y  }, kind:'endpoint' });
      cands.push({ p:{ x:o.x2, y:o.y2 }, kind:'endpoint' });
      cands.push({ p:{ x:(o.x+o.x2)/2, y:(o.y+o.y2)/2 }, kind:'midpoint' });
    } else if (o.type === 'rect'){
      const cs = [{x:o.x,y:o.y},{x:o.x+o.w,y:o.y},{x:o.x+o.w,y:o.y+o.h},{x:o.x,y:o.y+o.h}];
      cs.forEach(c => cands.push({ p:c, kind:'endpoint' }));
      cands.push({ p:{x:o.x+o.w/2,y:o.y}, kind:'midpoint' });
      cands.push({ p:{x:o.x+o.w/2,y:o.y+o.h}, kind:'midpoint' });
      cands.push({ p:{x:o.x,y:o.y+o.h/2}, kind:'midpoint' });
      cands.push({ p:{x:o.x+o.w,y:o.y+o.h/2}, kind:'midpoint' });
    } else if (o.type === 'circle'){
      cands.push({ p:{ x:o.x, y:o.y }, kind:'center' });
      cands.push({ p:{ x:o.x + o.r, y:o.y }, kind:'endpoint' });
      cands.push({ p:{ x:o.x - o.r, y:o.y }, kind:'endpoint' });
      cands.push({ p:{ x:o.x, y:o.y + o.r }, kind:'endpoint' });
      cands.push({ p:{ x:o.x, y:o.y - o.r }, kind:'endpoint' });
    } else if (o.points){
      o.points.forEach(p => cands.push({ p:{ x:p.x, y:p.y }, kind:'endpoint' }));
      for (let i = 1; i < o.points.length; i++){
        cands.push({ p:{ x:(o.points[i-1].x + o.points[i].x)/2, y:(o.points[i-1].y + o.points[i].y)/2 }, kind:'midpoint' });
      }
    }
  }
  return cands;
}

function findSnap(raw){
  if (!state.snap) return { p: raw, kind: null };
  const tol = 10 / state.scale;
  const cands = getSnapCandidates();
  let best = null, bestD = tol;
  for (const c of cands){
    const d = Math.hypot(c.p.x - raw.x, c.p.y - raw.y);
    if (d < bestD){ bestD = d; best = c; }
  }
  if (best) return { p: { x:best.p.x, y:best.p.y }, kind: best.kind };
  const st = state.gridStep || 1;
  return { p: { x: Math.round(raw.x / st) * st, y: Math.round(raw.y / st) * st }, kind: 'grid' };
}

function snapGridOnly(raw){
  if (!state.snap) return raw;
  const st = state.gridStep || 1;
  return { x: Math.round(raw.x / st) * st, y: Math.round(raw.y / st) * st };
}

/* ============================================================
   5) التحديد والـ Handles
   ============================================================ */
function getSelected(){ return state.items.find(o => o.id === state.selected) || null; }

function getHandles(o){
  const H = [];
  if (!o) return H;
  if (o.type === 'line' || o.type === 'dimension'){
    H.push({ x:o.x,  y:o.y,  key:'p1' });
    H.push({ x:o.x2, y:o.y2, key:'p2' });
  } else if (o.type === 'rect'){
    H.push({ x:o.x,        y:o.y,        key:'nw' });
    H.push({ x:o.x + o.w,  y:o.y,        key:'ne' });
    H.push({ x:o.x + o.w,  y:o.y + o.h,  key:'se' });
    H.push({ x:o.x,        y:o.y + o.h,  key:'sw' });
  } else if (o.type === 'circle'){
    H.push({ x:o.x, y:o.y, key:'c' });
    H.push({ x:o.x + o.r, y:o.y, key:'r' });
  } else if (o.type === 'bezier'){
    o.points.forEach((p, i) => {
      H.push({ x:p.x, y:p.y, key:'a' + i, isAnchor:true });
      H.push({ x:p.x + (p.h1x||0), y:p.y + (p.h1y||0), key:'h1_' + i, isHandle:true });
      H.push({ x:p.x + (p.h2x||0), y:p.y + (p.h2y||0), key:'h2_' + i, isHandle:true });
    });
  } else if (o.points){
    o.points.forEach((p, i) => H.push({ x:p.x, y:p.y, key:'pt' + i }));
  }
  return H;
}

function hitHandle(pt){
  const o = getSelected();
  if (!o) return null;
  const tol = 9 / state.scale;
  for (const h of getHandles(o)){
    if (Math.hypot(h.x - pt.x, h.y - pt.y) < tol) return h;
  }
  return null;
}

function hitItem(p){
  const tol = Math.max(0.35, 7 / state.scale);
  for (let i = state.items.length - 1; i >= 0; i--){
    const o = state.items[i];
    const layer = state.layers.find(l => l.id === o.layer);
    if (!layer || !layer.visible) continue;
    let ok = false;
    if (o.type === 'circle'){
      ok = Math.abs(Math.hypot(p.x - o.x, p.y - o.y) - o.r) < tol;
    } else if (o.type === 'rect'){
      const a = {x:o.x,y:o.y}, b = {x:o.x+o.w,y:o.y}, c = {x:o.x+o.w,y:o.y+o.h}, d = {x:o.x,y:o.y+o.h};
      ok = [[a,b],[b,c],[c,d],[d,a]].some(v => distSeg(p, v[0], v[1]) < tol);
    } else if (o.type === 'line' || o.type === 'dimension'){
      ok = distSeg(p, {x:o.x,y:o.y}, {x:o.x2,y:o.y2}) < tol;
    } else if (o.type === 'bezier'){
      const line = bezierToPolyline(o);
      for (let j = 1; j < line.length; j++){
        if (distSeg(p, line[j-1], line[j]) < tol){ ok = true; break; }
      }
    } else {
      const pts = o.points || [];
      for (let j = 1; j < pts.length; j++){
        if (distSeg(p, pts[j-1], pts[j]) < tol){ ok = true; break; }
      }
      if (!ok && o.closed && pts.length > 2){
        ok = distSeg(p, pts[pts.length-1], pts[0]) < tol;
      }
    }
    if (ok) return o;
  }
  return null;
}

function applyHandleDrag(o, key, pt){
  if (o.type === 'line' || o.type === 'dimension'){
    if (key === 'p1'){ o.x = pt.x; o.y = pt.y; }
    else { o.x2 = pt.x; o.y2 = pt.y; }
  } else if (o.type === 'rect'){
    let x1 = o.x, y1 = o.y, x2 = o.x + o.w, y2 = o.y + o.h;
    if (key === 'nw'){ x1 = pt.x; y1 = pt.y; }
    else if (key === 'ne'){ x2 = pt.x; y1 = pt.y; }
    else if (key === 'se'){ x2 = pt.x; y2 = pt.y; }
    else if (key === 'sw'){ x1 = pt.x; y2 = pt.y; }
    o.x = Math.min(x1, x2); o.y = Math.min(y1, y2);
    o.w = Math.abs(x2 - x1); o.h = Math.abs(y2 - y1);
  } else if (o.type === 'circle'){
    if (key === 'r'){ o.r = Math.max(0.1, Math.hypot(pt.x - o.x, pt.y - o.y)); }
    else { o.x = pt.x; o.y = pt.y; }
  } else if (o.type === 'bezier'){
    const m = key.match(/^(a|h1_|h2_)(\d+)$/);
    if (!m) return;
    const i = +m[2];
    const p = o.points[i];
    if (!p) return;
    if (m[1] === 'a'){ p.x = pt.x; p.y = pt.y; }
    else if (m[1] === 'h1_'){ p.h1x = pt.x - p.x; p.h1y = pt.y - p.y; }
    else { p.h2x = pt.x - p.x; p.h2y = pt.y - p.y; }
  } else if (o.points){
    const i = +key.replace('pt', '');
    if (o.points[i]){ o.points[i].x = pt.x; o.points[i].y = pt.y; }
  }
}

/* ============================================================
   6) الرسم 2D
   ============================================================ */
function drawGrid(){
  const { w, h } = dims();
  if (!state.grid) return;
  const px = state.scale * (state.gridStep || 1);
  if (px < 5) return;
  ctx.strokeStyle = 'rgba(87,117,157,.16)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = ((state.ox % px) + px) % px; x < w; x += px){ ctx.moveTo(x, 0); ctx.lineTo(x, h); }
  for (let y = ((state.oy % px) + px) % px; y < h; y += px){ ctx.moveTo(0, y); ctx.lineTo(w, y); }
  ctx.stroke();
}

function drawAxes(){
  const { w, h } = dims();
  ctx.strokeStyle = 'rgba(87,150,190,.42)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(state.ox, 0); ctx.lineTo(state.ox, h);
  ctx.moveTo(0, state.oy); ctx.lineTo(w, state.oy);
  ctx.stroke();
}

function drawItem(o, asDraft){
  const layer = state.layers.find(l => l.id === o.layer);
  if (!asDraft && (!layer || !layer.visible)) return;
  ctx.save();
  const color = asDraft ? '#f2ad4b' : (o.color || '#45b9e8');
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1, (o.lineWidth || 0.25) * state.scale * 0.5);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  if (asDraft) ctx.setLineDash([6, 4]);

  if (o.type === 'dimension'){
    drawDimension(o);
  } else if (o.type === 'circle'){
    const c = screen({ x:o.x, y:o.y });
    ctx.beginPath();
    ctx.arc(c.x, c.y, Math.abs(o.r * state.scale), 0, Math.PI * 2);
    if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); }
    ctx.stroke();
  } else if (o.type === 'rect'){
    const a = screen({ x:o.x, y:o.y });
    const b = screen({ x:o.x + o.w, y:o.y + o.h });
    ctx.beginPath();
    ctx.rect(a.x, a.y, b.x - a.x, b.y - a.y);
    if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); }
    ctx.stroke();
  } else if (o.type === 'bezier'){
    const pts = bezierToPolyline(o);
    if (!pts || pts.length < 2) { ctx.restore(); return; }
    ctx.beginPath();
    pts.forEach((p, i) => {
      const s = screen(p);
      i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y);
    });
    if (o.closed){ ctx.closePath(); if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); } }
    ctx.stroke();
  } else {
    const pts = o.type === 'line' ? [{x:o.x,y:o.y},{x:o.x2,y:o.y2}] : (o.points || []);
    if (!pts || pts.length < 2) { ctx.restore(); return; }
    ctx.beginPath();
    pts.forEach((p, i) => {
      const s = screen(p);
      i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y);
    });
    if (o.closed){ ctx.closePath(); if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); } }
    ctx.stroke();
  }
  ctx.restore();
}

function drawDimension(o){
  const a = screen({ x:o.x, y:o.y });
  const b = screen({ x:o.x2, y:o.y2 });
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len < 1) return;
  const ux = dx / len, uy = dy / len;
  const px = -uy, py = ux;

  ctx.save();
  ctx.strokeStyle = o.color || '#f2ad4b';
  ctx.lineWidth = 1;
  ctx.setLineDash([]);

  // خطوط امتداد
  ctx.beginPath();
  ctx.moveTo(a.x - px*6, a.y - py*6); ctx.lineTo(a.x + px*6, a.y + py*6);
  ctx.moveTo(b.x - px*6, b.y - py*6); ctx.lineTo(b.x + px*6, b.y + py*6);
  ctx.stroke();

  // خط القياس الرئيسي
  ctx.beginPath();
  ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
  ctx.stroke();

  // أسهم
  const al = 9, aw = 4;
  ctx.fillStyle = o.color || '#f2ad4b';
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(a.x + ux*al + px*aw, a.y + uy*al + py*aw);
  ctx.lineTo(a.x + ux*al - px*aw, a.y + uy*al - py*aw);
  ctx.closePath(); ctx.fill();

  ctx.beginPath();
  ctx.moveTo(b.x, b.y);
  ctx.lineTo(b.x - ux*al + px*aw, b.y - uy*al + py*aw);
  ctx.lineTo(b.x - ux*al - px*aw, b.y - uy*al - py*aw);
  ctx.closePath(); ctx.fill();

  // النص
  const val = Math.hypot(o.x2 - o.x, o.y2 - o.y).toFixed(1) + ' cm';
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  ctx.font = 'bold 12px Tahoma';
  const tw = ctx.measureText(val).width;
  ctx.fillStyle = 'rgba(10,18,33,0.92)';
  ctx.fillRect(mx - tw/2 - 5, my - 22, tw + 10, 16);
  ctx.fillStyle = '#f2ad4b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(val, mx, my - 14);
  ctx.restore();
}

function drawSelection(){
  const o = getSelected();
  if (!o) return;
  ctx.save();
  ctx.setLineDash([5, 4]);
  ctx.strokeStyle = '#f4b34e';
  ctx.lineWidth = 1.5;
  const pts = itemOutline(o);
  if (pts.length > 1){
    ctx.beginPath();
    pts.forEach((p, i) => {
      const s = screen(p);
      i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y);
    });
    if (o.closed || o.type === 'rect' || o.type === 'circle') ctx.closePath();
    ctx.stroke();
  }
  ctx.setLineDash([]);
  const handles = getHandles(o);
  handles.forEach(h => {
    const s = screen(h);
    ctx.beginPath();
    if (h.isHandle){
      ctx.fillStyle = '#22c58b';
      ctx.arc(s.x, s.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#f2ad4b';
      ctx.lineWidth = 1.5;
      ctx.arc(s.x, s.y, 4.5, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
    }
  });
  ctx.restore();
}

function drawSnapIndicator(){
  if (!state.snapIndicator) return;
  const s = screen(state.snapIndicator.p);
  const kind = state.snapIndicator.kind;
  ctx.save();
  ctx.strokeStyle = kind === 'grid' ? '#22c58b' : '#f2ad4b';
  ctx.lineWidth = 2;
  if (kind === 'endpoint'){
    ctx.strokeRect(s.x - 5, s.y - 5, 10, 10);
  } else if (kind === 'midpoint'){
    ctx.beginPath();
    ctx.moveTo(s.x, s.y - 6); ctx.lineTo(s.x + 6, s.y);
    ctx.lineTo(s.x, s.y + 6); ctx.lineTo(s.x - 6, s.y);
    ctx.closePath(); ctx.stroke();
  } else if (kind === 'center'){
    ctx.beginPath(); ctx.arc(s.x, s.y, 5, 0, Math.PI * 2); ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(s.x - 4, s.y); ctx.lineTo(s.x + 4, s.y);
    ctx.moveTo(s.x, s.y - 4); ctx.lineTo(s.x, s.y + 4);
    ctx.stroke();
  }
  ctx.restore();
}

function roundRect(x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawInfoLabel(text, x, y){
  ctx.save();
  ctx.font = '11px Tahoma';
  const tw = ctx.measureText(text).width;
  const w = tw + 14, h = 20;
  ctx.fillStyle = 'rgba(15,25,40,0.95)';
  ctx.strokeStyle = '#f2ad4b';
  ctx.lineWidth = 1;
  roundRect(x + 14, y - 30, w, h, 4);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#f2ad4b';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 21, y - 30 + h / 2);
  ctx.restore();
}

function drawDraft(){
  const d = state.draft;
  if (!d) return;
  ctx.save();

  if (d.type === 'line' || d.type === 'dimension'){
    drawItem(d, true);
    const len = Math.hypot(d.x2 - d.x, d.y2 - d.y);
    const ang = Math.atan2(d.y2 - d.y, d.x2 - d.x) * 180 / Math.PI;
    const s = screen({ x:d.x2, y:d.y2 });
    drawInfoLabel(`${len.toFixed(1)} cm · ${ang.toFixed(0)}°`, s.x, s.y);
  } else if (d.type === 'rect'){
    drawItem(d, true);
    const s = screen({ x:d.x, y:d.y });
    drawInfoLabel(`${Math.abs(d.w).toFixed(1)} × ${Math.abs(d.h).toFixed(1)} cm`, s.x, s.y);
  } else if (d.type === 'circle'){
    drawItem(d, true);
    const s = screen({ x:d.x, y:d.y });
    drawInfoLabel(`r = ${d.r.toFixed(1)} cm · ⌀ ${(d.r*2).toFixed(1)}`, s.x, s.y);
  } else if (d.type === 'free' || d.type === 'poly' || d.type === 'bezier'){
    // معاينة
    let previewPts = d.points.slice();
    if (d.preview) previewPts = previewPts.concat([d.preview]);
    if (d.type === 'bezier' && previewPts.length >= 2){
      const temp = previewPts.map(p => ({ x:p.x, y:p.y, h1x:0, h1y:0, h2x:0, h2y:0 }));
      smoothBezier(temp, d.closed);
      const line = bezierToPolyline({ type:'bezier', points:temp, closed:d.closed });
      ctx.strokeStyle = '#f2ad4b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      line.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x,s.y) : ctx.moveTo(s.x,s.y); });
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#f2ad4b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      previewPts.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x,s.y) : ctx.moveTo(s.x,s.y); });
      ctx.stroke();
    }
    ctx.setLineDash([]);
    d.points.forEach(p => {
      const s = screen(p);
      ctx.fillStyle = '#f2ad4b';
      ctx.beginPath(); ctx.arc(s.x, s.y, 3.5, 0, Math.PI * 2); ctx.fill();
    });
    if (d.preview){
      const last = d.points[d.points.length - 1];
      const len = Math.hypot(d.preview.x - last.x, d.preview.y - last.y);
      const s = screen(d.preview);
      drawInfoLabel(`${len.toFixed(1)} cm`, s.x, s.y);
    }
  }
  ctx.restore();
}

function draw2d(){
  const { w, h } = dims();
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0a1221';
  ctx.fillRect(0, 0, w, h);
  drawGrid();
  drawAxes();
  for (const o of state.items) drawItem(o, false);
  if (state.draft) drawDraft();
  drawSelection();
  drawSnapIndicator();
  $('countInfo').textContent = state.items.length;
  $('activeLayerInfo').textContent = state.layers.find(l => l.id === state.activeLayer)?.name || '-';
  $('zoomInfo').textContent = Math.round(state.scale / 8 * 100) + '%';
}

function draw(){
  if (state.is3d) draw3d();
  else draw2d();
}

/* ============================================================
   7) الرسم 3D (إسقاط وبروز هندسي)
   ============================================================ */
function project3(p, z, cx, cy, zoom, w, h){
  const x = p.x - cx, y = p.y - cy, zz = z;
  const cY = Math.cos(state.rotY), sY = Math.sin(state.rotY);
  const x1 = x * cY + zz * sY;
  const z1 = -x * sY + zz * cY;
  const cX = Math.cos(state.rotX), sX = Math.sin(state.rotX);
  const y2 = y * cX - z1 * sX;
  const z2 = y * sX + z1 * cX;
  return { x: w / 2 + x1 * zoom, y: h / 2 - y2 * zoom, z: z2 };
}

function avgZ(arr){ let s = 0; for (const p of arr) s += p.z; return s / arr.length; }

function fillPoly(pts, color, stroke){
  if (pts.length < 3) return;
  g3.beginPath();
  g3.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) g3.lineTo(pts[i].x, pts[i].y);
  g3.closePath();
  g3.fillStyle = color;
  g3.fill();
  if (stroke){ g3.strokeStyle = 'rgba(140,220,255,0.55)'; g3.lineWidth = 1; g3.stroke(); }
}

function strokePath(pts, color, width){
  if (pts.length < 2) return;
  g3.beginPath();
  g3.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) g3.lineTo(pts[i].x, pts[i].y);
  g3.strokeStyle = color;
  g3.lineWidth = width || 1.5;
  g3.stroke();
}

function shade(hex, k){
  // تفتيح/تغبيش تقريبي
  const h = hex.replace('#','');
  const r = parseInt(h.substr(0,2),16), g = parseInt(h.substr(2,2),16), b = parseInt(h.substr(4,2),16);
  const f = v => clamp(Math.round(v * k + 255 * (1-k) * 0.35), 0, 255);
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}

function draw3d(){
  const w = c3.clientWidth, h = c3.clientHeight;
  g3.setTransform(DPR, 0, 0, DPR, 0, 0);
  g3.clearRect(0, 0, w, h);
  const grad = g3.createRadialGradient(w/2, h/2, 10, w/2, h/2, Math.max(w, h) / 1.1);
  grad.addColorStop(0, '#172b45');
  grad.addColorStop(1, '#080e1a');
  g3.fillStyle = grad;
  g3.fillRect(0, 0, w, h);

  const visible = state.items.filter(o => {
    const l = state.layers.find(x => x.id === o.layer);
    return l && l.visible;
  });

  // تسمية ثابتة
  const labelText = 'إسقاط وبروز هندسي للمخطط (ليس محاكاة قماش فيزيائية)';
  g3.font = '12px Tahoma';
  g3.textAlign = 'center';
  g3.textBaseline = 'middle';

  if (!visible.length){
    g3.fillStyle = '#d5e1f1';
    g3.font = '15px Tahoma';
    g3.fillText('لا توجد عناصر مرئية في الطبقات المفعّلة', w / 2, h / 2);
    g3.font = '12px Tahoma';
    g3.fillStyle = '#8fa7c4';
    g3.fillText(labelText, w / 2, h - 22);
    return;
  }

  const b = bounds();
  const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2;
  const span = Math.max(b.maxX - b.minX, b.maxY - b.minY, 5);
  const baseZoom = Math.min(w, h) * 0.62 / span * state.zoom3d;
  const depth = clamp(span * 0.03, 1.5, 4);

  const faces = [];
  for (const o of visible){
    const pts = itemOutline(o);
    if (pts.length < 2) continue;
    const closed = o.closed || o.type === 'rect' || o.type === 'circle';
    const top = pts.map(p => project3(p, depth, cx, cy, baseZoom, w, h));
    const bot = pts.map(p => project3(p, 0, cx, cy, baseZoom, w, h));

    if (closed && pts.length >= 3){
      // قاعدة
      faces.push({ z: avgZ(bot), draw: () => fillPoly(bot, shade(o.color || '#45b9e8', 0.35), false) });
      // أوجه جانبية
      for (let i = 0; i < pts.length; i++){
        const j = (i + 1) % pts.length;
        const f = [bot[i], bot[j], top[j], top[i]];
        faces.push({ z: avgZ(f), draw: () => {
          g3.beginPath();
          g3.moveTo(f[0].x, f[0].y);
          g3.lineTo(f[1].x, f[1].y);
          g3.lineTo(f[2].x, f[2].y);
          g3.lineTo(f[3].x, f[3].y);
          g3.closePath();
          g3.fillStyle = shade(o.color || '#45b9e8', 0.55);
          g3.fill();
          g3.strokeStyle = 'rgba(120,200,240,0.25)';
          g3.lineWidth = 1;
          g3.stroke();
        }});
      }
      // وجه علوي
      faces.push({ z: avgZ(top), draw: () => fillPoly(top, shade(o.color || '#45b9e8', 0.9), true) });
    } else {
      // مسار مفتوح: خط أعلى وخط أسفل
      faces.push({ z: avgZ(top) + 0.01, draw: () => strokePath(top, o.color || '#59c8ee', 1.6) });
      faces.push({ z: avgZ(bot) + 0.01, draw: () => strokePath(bot, shade(o.color || '#59c8ee', 0.6), 1.2) });
    }
  }

  faces.sort((a, b2) => a.z - b2.z);
  for (const f of faces) f.draw();

  // معلومات أبعاد
  g3.fillStyle = '#f2ad4b';
  g3.font = 'bold 13px Tahoma';
  g3.textAlign = 'center';
  const W = (b.maxX - b.minX).toFixed(1);
  const H = (b.maxY - b.minY).toFixed(1);
  g3.fillText(`العرض: ${W} cm · الارتفاع: ${H} cm`, w / 2, 24);

  // تسمية توضيحية
  g3.font = '12px Tahoma';
  g3.fillStyle = '#8fa7c4';
  g3.fillText(labelText, w / 2, h - 22);

  // تعليمات
  g3.font = '10px Tahoma';
  g3.fillStyle = '#5d7292';
  g3.fillText('اسحب بالماوس للتدوير · عجلة الماوس للتكبير', w / 2, h - 6);
}

/* ============================================================
   8) تاريخ التراجع والإعادة
   ============================================================ */
function saveHistory(){
  state.undo.push(clone(state.items));
  if (state.undo.length > 80) state.undo.shift();
  state.redo = [];
}

function undo(){
  if (!state.undo.length) return;
  state.redo.push(clone(state.items));
  state.items = state.undo.pop();
  state.selected = null;
  state.draft = null;
  state.snapIndicator = null;
  renderProps();
  draw();
  autosave();
}

function redo(){
  if (!state.redo.length) return;
  state.undo.push(clone(state.items));
  state.items = state.redo.pop();
  state.selected = null;
  state.draft = null;
  state.snapIndicator = null;
  renderProps();
  draw();
  autosave();
}

/* ============================================================
   9) إجراءات التعديل الهندسي
   ============================================================ */
function translateItem(o, dx, dy){
  if (o.type === 'line' || o.type === 'dimension'){
    o.x += dx; o.y += dy; o.x2 += dx; o.y2 += dy;
  } else if (o.type === 'rect' || o.type === 'circle'){
    o.x += dx; o.y += dy;
  } else if (o.points){
    o.points.forEach(p => { p.x += dx; p.y += dy; });
  }
}

function mirrorItem(o, axis, cx, cy){
  if (o.type === 'line' || o.type === 'dimension'){
    if (axis === 'v'){ o.x = 2*cx - o.x; o.x2 = 2*cx - o.x2; }
    else { o.y = 2*cy - o.y; o.y2 = 2*cy - o.y2; }
  } else if (o.type === 'rect'){
    if (axis === 'v'){ o.x = 2*cx - (o.x + o.w); }
    else { o.y = 2*cy - (o.y + o.h); }
  } else if (o.type === 'circle'){
    if (axis === 'v') o.x = 2*cx - o.x;
    else o.y = 2*cy - o.y;
  } else if (o.type === 'bezier'){
    o.points.forEach(p => {
      if (axis === 'v'){
        p.x = 2*cx - p.x;
        p.h1x = -p.h1x; p.h2x = -p.h2x;
      } else {
        p.y = 2*cy - p.y;
        p.h1y = -p.h1y; p.h2y = -p.h2y;
      }
    });
  } else if (o.points){
    o.points.forEach(p => {
      if (axis === 'v') p.x = 2*cx - p.x;
      else p.y = 2*cy - p.y;
    });
  }
}

function rotateItem(o, deg){
  const rad = deg * Math.PI / 180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  const b = itemBounds(o);
  const c = { x:(b.minX + b.maxX)/2, y:(b.minY + b.maxY)/2 };
  const rot = p => {
    const dx = p.x - c.x, dy = p.y - c.y;
    return { x: c.x + dx*cos - dy*sin, y: c.y + dx*sin + dy*cos };
  };
  if (o.type === 'line' || o.type === 'dimension'){
    const a = rot({ x:o.x, y:o.y }), e = rot({ x:o.x2, y:o.y2 });
    o.x = a.x; o.y = a.y; o.x2 = e.x; o.y2 = e.y;
  } else if (o.type === 'circle'){
    const a = rot({ x:o.x, y:o.y });
    o.x = a.x; o.y = a.y;
  } else if (o.type === 'rect'){
    // تحويل إلى مضلع
    const pts = [
      { x:o.x, y:o.y }, { x:o.x + o.w, y:o.y },
      { x:o.x + o.w, y:o.y + o.h }, { x:o.x, y:o.y + o.h }
    ].map(rot);
    o.type = 'poly';
    o.points = pts;
    o.closed = true;
    delete o.x; delete o.y; delete o.w; delete o.h;
  } else if (o.type === 'bezier'){
    o.points.forEach(p => {
      const r = rot(p);
      p.x = r.x; p.y = r.y;
      const h1 = rot({ x:p.x + p.h1x, y:p.y + p.h1y });
      const h2 = rot({ x:p.x + p.h2x, y:p.y + p.h2y });
      p.h1x = h1.x - p.x; p.h1y = h1.y - p.y;
      p.h2x = h2.x - p.x; p.h2y = h2.y - p.y;
    });
  } else if (o.points){
    o.points.forEach(p => { const r = rot(p); p.x = r.x; p.y = r.y; });
  }
}

function offsetPath(pts, dist, closed){
  const n = pts.length;
  const out = [];
  for (let i = 0; i < n; i++){
    const prev = pts[(i - 1 + n) % n];
    const cur = pts[i];
    const next = pts[(i + 1) % n];
    let n1 = null, n2 = null;
    if (i > 0 || closed){
      const dx = cur.x - prev.x, dy = cur.y - prev.y;
      const l = Math.hypot(dx, dy) || 1;
      n1 = { x: -dy/l, y: dx/l };
    }
    if (i < n - 1 || closed){
      const dx = next.x - cur.x, dy = next.y - cur.y;
      const l = Math.hypot(dx, dy) || 1;
      n2 = { x: -dy/l, y: dx/l };
    }
    let nx = 0, ny = 0;
    if (n1 && n2){
      nx = (n1.x + n2.x) / 2; ny = (n1.y + n2.y) / 2;
      const l = Math.hypot(nx, ny) || 1;
      nx /= l; ny /= l;
      const dot = nx*n1.x + ny*n1.y;
      const miter = dot > 0.1 ? 1/dot : 1;
      nx *= miter; ny *= miter;
    } else if (n1){ nx = n1.x; ny = n1.y; }
    else if (n2){ nx = n2.x; ny = n2.y; }
    out.push({ x: cur.x + nx*dist, y: cur.y + ny*dist });
  }
  return out;
}

function offsetItem(o, dist){
  const c = clone(o);
  c.id = uid();
  if (c.type === 'line'){
    const dx = c.x2 - c.x, dy = c.y2 - c.y;
    const l = Math.hypot(dx, dy) || 1;
    const nx = -dy/l * dist, ny = dx/l * dist;
    c.x += nx; c.y += ny; c.x2 += nx; c.y2 += ny;
  } else if (c.type === 'rect'){
    c.x -= dist; c.y -= dist; c.w += 2*dist; c.h += 2*dist;
    if (c.w < 0.1 || c.h < 0.1) return null;
  } else if (c.type === 'circle'){
    c.r = Math.max(0.1, c.r + dist);
  } else if (c.type === 'dimension'){
    return null;
  } else {
    const pts = itemOutline(c);
    const off = offsetPath(pts, dist, !!c.closed);
    c.type = 'poly';
    c.points = off;
    c.closed = !!c.closed;
    delete c.x; delete c.y; delete c.w; delete c.h; delete c.r;
  }
  return c;
}

/* ============================================================
   10) لوحة الخصائص الديناميكية
   ============================================================ */
function renderProps(){
  const o = getSelected();
  const empty = $('emptyProps'), props = $('props');
  if (!o){
    empty.classList.remove('hidden');
    props.classList.add('hidden');
    props.innerHTML = '';
    $('selectionInfo').textContent = 'لا يوجد تحديد';
    return;
  }
  empty.classList.add('hidden');
  props.classList.remove('hidden');
  $('selectionInfo').textContent = 'محدد: ' + (TYPE_NAMES[o.type] || o.type);

  let html = `<div class="field"><label>نوع العنصر</label><input value="${TYPE_NAMES[o.type] || o.type}" disabled></div>`;

  if (o.type === 'line' || o.type === 'dimension'){
    html += `<div class="row">
      <div class="field"><label>X1 (سم)</label><input id="pf_x" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y1 (سم)</label><input id="pf_y" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>X2 (سم)</label><input id="pf_x2" type="number" step=".1" value="${o.x2.toFixed(2)}"></div>
      <div class="field"><label>Y2 (سم)</label><input id="pf_y2" type="number" step=".1" value="${o.y2.toFixed(2)}"></div>
    </div>
    <div class="field"><label>الطول (سم)</label><input value="${Math.hypot(o.x2-o.x, o.y2-o.y).toFixed(2)}" disabled></div>`;
  } else if (o.type === 'rect'){
    html += `<div class="row">
      <div class="field"><label>X (سم)</label><input id="pf_x" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y (سم)</label><input id="pf_y" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>العرض (سم)</label><input id="pf_w" type="number" step=".1" value="${o.w.toFixed(2)}"></div>
      <div class="field"><label>الارتفاع (سم)</label><input id="pf_h" type="number" step=".1" value="${o.h.toFixed(2)}"></div>
    </div>`;
  } else if (o.type === 'circle'){
    html += `<div class="row">
      <div class="field"><label>X (سم)</label><input id="pf_x" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y (سم)</label><input id="pf_y" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="field"><label>نصف القطر (سم)</label><input id="pf_r" type="number" step=".1" value="${o.r.toFixed(2)}"></div>
    <div class="field"><label>القطر (سم)</label><input value="${(o.r*2).toFixed(2)}" disabled></div>`;
  } else {
    const b = itemBounds(o);
    html += `<div class="row">
      <div class="field"><label>X (سم)</label><input id="pf_x" type="number" step=".1" value="${b.minX.toFixed(2)}"></div>
      <div class="field"><label>Y (سم)</label><input id="pf_y" type="number" step=".1" value="${b.minY.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>العرض (سم)</label><input id="pf_w" type="number" step=".1" value="${(b.maxX-b.minX).toFixed(2)}"></div>
      <div class="field"><label>الارتفاع (سم)</label><input id="pf_h" type="number" step=".1" value="${(b.maxY-b.minY).toFixed(2)}"></div>
    </div>
    <div class="field"><label><input type="checkbox" id="pf_closed" ${o.closed ? 'checked' : ''}> مسار مغلق</label></div>`;
  }

  html += `<div class="row">
    <div class="field"><label>لون الخط</label><input id="pf_color" type="color" value="${o.color || '#45b9e8'}"></div>
    <div class="field"><label>سماكة الخط</label><input id="pf_width" type="number" min=".05" step=".05" value="${o.lineWidth || .25}"></div>
  </div>
  <button class="btn good" id="pf_apply" style="width:100%">تطبيق الخصائص</button>`;

  props.innerHTML = html;
  $('pf_apply').onclick = applyProps;
}

function applyProps(){
  const o = getSelected();
  if (!o) return;
  saveHistory();
  if (o.type === 'line' || o.type === 'dimension'){
    const x = +$('pf_x').value, y = +$('pf_y').value, x2 = +$('pf_x2').value, y2 = +$('pf_y2').value;
    if ([x,y,x2,y2].some(v => !Number.isFinite(v))){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x = x; o.y = y; o.x2 = x2; o.y2 = y2;
  } else if (o.type === 'rect'){
    const x = +$('pf_x').value, y = +$('pf_y').value, w = +$('pf_w').value, h = +$('pf_h').value;
    if ([x,y,w,h].some(v => !Number.isFinite(v)) || w <= 0 || h <= 0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x = x; o.y = y; o.w = w; o.h = h;
  } else if (o.type === 'circle'){
    const x = +$('pf_x').value, y = +$('pf_y').value, r = +$('pf_r').value;
    if ([x,y,r].some(v => !Number.isFinite(v)) || r <= 0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x = x; o.y = y; o.r = r;
  } else {
    const nx = +$('pf_x').value, ny = +$('pf_y').value, nw = +$('pf_w').value, nh = +$('pf_h').value;
    if ([nx,ny,nw,nh].some(v => !Number.isFinite(v)) || nw <= 0 || nh <= 0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    const b = itemBounds(o);
    const ow = b.maxX - b.minX, oh = b.maxY - b.minY;
    const sx = ow > 0.001 ? nw / ow : 1;
    const sy = oh > 0.001 ? nh / oh : 1;
    if (o.points){
      o.points.forEach(p => {
        p.x = nx + (p.x - b.minX) * sx;
        p.y = ny + (p.y - b.minY) * sy;
        if (p.h1x !== undefined){
          p.h1x *= sx; p.h1y *= sy; p.h2x *= sx; p.h2y *= sy;
        }
      });
    }
    if (o.type === 'bezier' && $('pf_closed')) o.closed = $('pf_closed').checked;
  }
  o.color = $('pf_color').value;
  o.lineWidth = Math.max(0.05, +$('pf_width').value || 0.25);
  renderProps();
  draw();
  autosave();
}

/* ============================================================
   11) أدوات الرسم والتفاعل 2D
   ============================================================ */
function pointerPos(e){
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function newBezierPoint(p){ return { x:p.x, y:p.y, h1x:0, h1y:0, h2x:0, h2y:0 }; }

function cancelDraft(){
  if (!state.draft) return;
  state.draft = null;
  state.undo.pop();
  state.snapIndicator = null;
  draw();
}

function finishDraft(){
  const d = state.draft;
  if (!d) return;
  state.draft = null;
  let item = null;

  if (d.type === 'poly'){
    if (d.points.length < 2){ state.undo.pop(); draw(); return; }
    item = { id:d.id, type:'poly', points:d.points.map(p => ({x:p.x,y:p.y})), closed: !!d.closed, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  } else if (d.type === 'bezier'){
    if (d.points.length < 2){ state.undo.pop(); draw(); return; }
    smoothBezier(d.points, !!d.closed);
    item = { id:d.id, type:'bezier', points:d.points.map(p => ({x:p.x,y:p.y,h1x:p.h1x,h1y:p.h1y,h2x:p.h2x,h2y:p.h2y})), closed: !!d.closed, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  } else if (d.type === 'free'){
    if (d.points.length < 2){ state.undo.pop(); draw(); return; }
    const simp = simplifyRDP(d.points, 0.15);
    item = { id:d.id, type:'free', points:simp.map(p => ({x:p.x,y:p.y})), closed:false, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  } else if (d.type === 'line' || d.type === 'dimension'){
    if (Math.hypot(d.x2 - d.x, d.y2 - d.y) < 0.05){ state.undo.pop(); draw(); return; }
    item = { id:d.id, type:d.type, x:d.x, y:d.y, x2:d.x2, y2:d.y2, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  } else if (d.type === 'rect'){
    if (Math.abs(d.w) < 0.05 || Math.abs(d.h) < 0.05){ state.undo.pop(); draw(); return; }
    let { x, y, w, h } = d;
    if (w < 0){ x += w; w = -w; }
    if (h < 0){ y += h; h = -h; }
    item = { id:d.id, type:'rect', x, y, w, h, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  } else if (d.type === 'circle'){
    if (d.r < 0.05){ state.undo.pop(); draw(); return; }
    item = { id:d.id, type:'circle', x:d.x, y:d.y, r:d.r, layer:d.layer, color:d.color, lineWidth:d.lineWidth };
  }

  if (item){
    state.items.push(item);
    state.selected = item.id;
    renderProps();
    autosave();
  }
  draw();
}

canvas.addEventListener('pointerdown', e => {
  if (state.is3d) return;
  canvas.setPointerCapture(e.pointerId);
  const s = pointerPos(e);
  const raw = world(s.x, s.y);

  if (e.button === 1 || e.button === 2){
    state.drag = { kind:'pan', sx:s.x, sy:s.y, ox:state.ox, oy:state.oy };
    return;
  }

  const snapRes = findSnap(raw);
  const p = snapRes.p;
  state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;

  if (state.tool === 'select'){
    const sel = getSelected();
    if (sel){
      const h = hitHandle(raw);
      if (h){
        saveHistory();
        state.drag = { kind:'handle', handle:h, item:sel };
        draw();
        return;
      }
    }
    const o = hitItem(raw);
    if (o){
      state.selected = o.id;
      renderProps();
      const layer = state.layers.find(l => l.id === o.layer);
      if (!layer || !layer.locked){
        state.drag = { kind:'move', start:raw, item:clone(o), moved:false, saved:false };
      }
      draw();
      return;
    }
    state.selected = null;
    renderProps();
    draw();
    return;
  }

  // أدوات متعددة النقرات
  if (state.tool === 'poly' || state.tool === 'bezier'){
    if (!state.draft){
      saveHistory();
      state.draft = {
        id: uid(),
        type: state.tool,
        points: state.tool === 'bezier' ? [newBezierPoint(p)] : [{ x:p.x, y:p.y }],
        closed: false,
        preview: p,
        layer: state.activeLayer,
        color: '#45b9e8',
        lineWidth: 0.25
      };
    } else {
      const first = state.draft.points[0];
      const tol = 10 / state.scale;
      if (state.draft.points.length >= 3 && Math.hypot(p.x - first.x, p.y - first.y) < tol){
        state.draft.closed = true;
        finishDraft();
        return;
      }
      if (state.tool === 'bezier') state.draft.points.push(newBezierPoint(p));
      else state.draft.points.push({ x:p.x, y:p.y });
      state.draft.preview = p;
    }
    draw();
    return;
  }

  // أدوات السحب
  saveHistory();
  if (state.tool === 'line' || state.tool === 'dimension'){
    state.draft = { id:uid(), type:state.tool, x:p.x, y:p.y, x2:p.x, y2:p.y, layer:state.activeLayer, color: state.tool === 'dimension' ? '#f2ad4b' : '#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'rect'){
    state.draft = { id:uid(), type:'rect', x:p.x, y:p.y, w:0, h:0, layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'circle'){
    state.draft = { id:uid(), type:'circle', x:p.x, y:p.y, r:0, layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'free'){
    state.draft = { id:uid(), type:'free', points:[{x:p.x,y:p.y}], closed:false, layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  }
  draw();
});

canvas.addEventListener('pointermove', e => {
  if (state.is3d) return;
  const s = pointerPos(e);
  const raw = world(s.x, s.y);
  const snapRes = findSnap(raw);
  const p = snapRes.p;
  $('coordBadge').textContent = `X: ${p.x.toFixed(1)} · Y: ${p.y.toFixed(1)} cm`;

  if (state.drag){
    state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
    if (state.drag.kind === 'pan'){
      state.ox = state.drag.ox + (s.x - state.drag.sx);
      state.oy = state.drag.oy + (s.y - state.drag.sy);
    } else if (state.drag.kind === 'handle'){
      const sp = snapGridOnly(raw);
      applyHandleDrag(state.drag.item, state.drag.handle.key, sp);
    } else if (state.drag.kind === 'move'){
      const o = state.items.find(x => x.id === state.selected);
      if (!o) return;
      const dx = raw.x - state.drag.start.x;
      const dy = raw.y - state.drag.start.y;
      if (!state.drag.moved && Math.hypot(dx, dy) > 0.02){
        saveHistory();
        state.drag.moved = true;
      }
      if (state.drag.moved){
        const orig = state.drag.item;
        if (o.type === 'line' || o.type === 'dimension'){
          o.x = orig.x + dx; o.y = orig.y + dy;
          o.x2 = orig.x2 + dx; o.y2 = orig.y2 + dy;
        } else if (o.type === 'circle' || o.type === 'rect'){
          o.x = orig.x + dx; o.y = orig.y + dy;
        } else if (o.points){
          o.points = orig.points.map(q => ({ x:q.x + dx, y:q.y + dy }));
        }
      }
    }
    draw();
    return;
  }

  if (state.draft){
    state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
    const d = state.draft;
    if (d.type === 'line' || d.type === 'dimension'){ d.x2 = p.x; d.y2 = p.y; }
    else if (d.type === 'rect'){ d.w = p.x - d.x; d.h = p.y - d.y; }
    else if (d.type === 'circle'){ d.r = Math.hypot(p.x - d.x, p.y - d.y); }
    else if (d.type === 'free'){
      const last = d.points[d.points.length - 1];
      if (Math.hypot(p.x - last.x, p.y - last.y) > Math.max(0.15, 2/state.scale)){
        d.points.push({ x:p.x, y:p.y });
      }
    } else if (d.type === 'poly' || d.type === 'bezier'){
      d.preview = p;
    }
    draw();
    return;
  }

  state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
  draw();
});

canvas.addEventListener('pointerup', e => {
  if (state.is3d) return;
  if (state.drag){
    const wasMove = state.drag.kind === 'move';
    const moved = state.drag.moved;
    state.drag = null;
    if (wasMove && moved) autosave();
    draw();
    return;
  }
  if (state.draft && ['line','dimension','rect','circle','free'].includes(state.draft.type)){
    finishDraft();
  }
});

canvas.addEventListener('dblclick', () => {
  if (state.is3d) return;
  if (state.draft && (state.draft.type === 'poly' || state.draft.type === 'bezier')){
    if (state.draft.points.length >= 2){
      if (state.draft.type === 'poly' && state.draft.points.length >= 3) state.draft.closed = true;
      finishDraft();
    }
  }
});

canvas.addEventListener('pointercancel', () => {
  state.drag = null;
  if (state.draft){ state.draft = null; draw(); }
});

canvas.addEventListener('contextmenu', e => {
  e.preventDefault();
  if (state.draft){ cancelDraft(); }
});

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  if (state.is3d) return;
  const s = pointerPos(e);
  const before = world(s.x, s.y);
  const factor = e.deltaY < 0 ? 1.12 : 0.89;
  state.scale = clamp(state.scale * factor, 1.5, 120);
  state.ox = s.x - before.x * state.scale;
  state.oy = s.y + before.y * state.scale;
  $('scaleInfo').value = state.scale.toFixed(1);
  draw();
}, { passive:false });

/* ============================================================
   12) تفاعل 3D
   ============================================================ */
c3.addEventListener('pointerdown', e => {
  c3.setPointerCapture(e.pointerId);
  state.drag3d = { x:e.clientX, y:e.clientY, rotY:state.rotY, rotX:state.rotX };
});
c3.addEventListener('pointermove', e => {
  if (!state.drag3d) return;
  const dx = e.clientX - state.drag3d.x;
  const dy = e.clientY - state.drag3d.y;
  state.rotY = state.drag3d.rotY + dx * 0.01;
  state.rotX = clamp(state.drag3d.rotX + dy * 0.01, -Math.PI / 2, Math.PI / 2);
  draw3d();
});
c3.addEventListener('pointerup', () => { state.drag3d = null; });
c3.addEventListener('pointercancel', () => { state.drag3d = null; });
c3.addEventListener('wheel', e => {
  e.preventDefault();
  state.zoom3d = clamp(state.zoom3d * (e.deltaY < 0 ? 1.1 : 0.9), 0.2, 6);
  draw3d();
}, { passive:false });
c3.addEventListener('dblclick', () => {
  state.rotY = 0.35; state.rotX = 0.22; state.zoom3d = 1;
  draw3d();
});

/* ============================================================
   13) أدوات + شريط الأدوات
   ============================================================ */
function setTool(t){
  if (state.draft) cancelDraft();
  state.tool = t;
  document.querySelectorAll('[data-tool]').forEach(b => b.classList.toggle('active', b.dataset.tool === t));
  const names = { select:'أداة التحديد', free:'الرسم الحر', line:'رسم خط', poly:'خط متعدد', rect:'مستطيل', circle:'دائرة', bezier:'منحنى', dimension:'أداة القياس' };
  $('toolBadge').textContent = names[t] || t;
  $('statusText').textContent = 'الأداة النشطة: ' + (names[t] || t);
}

function showMenu(anchor, options){
  closeMenus();
  const menu = document.createElement('div');
  menu.className = 'ctx-menu';
  options.forEach(opt => {
    if (opt.separator){
      const sep = document.createElement('div');
      sep.className = 'ctx-sep';
      menu.appendChild(sep);
      return;
    }
    const b = document.createElement('button');
    b.textContent = opt.label;
    b.onclick = () => { closeMenus(); opt.onClick(); };
    menu.appendChild(b);
  });
  document.body.appendChild(menu);
  const r = anchor.getBoundingClientRect();
  menu.style.left = r.left + 'px';
  menu.style.top = (r.bottom + 4) + 'px';
  requestAnimationFrame(() => {
    const mr = menu.getBoundingClientRect();
    if (mr.right > window.innerWidth - 8) menu.style.left = (window.innerWidth - mr.width - 8) + 'px';
    if (mr.bottom > window.innerHeight - 8) menu.style.top = (r.top - mr.height - 4) + 'px';
  });
}
function closeMenus(){ document.querySelectorAll('.ctx-menu').forEach(m => m.remove()); }
document.addEventListener('click', e => {
  if (!e.target.closest('.ctx-menu') && !e.target.closest('[data-action="mirror"]') && !e.target.closest('#templatesBtn')){
    closeMenus();
  }
});

function doMirror(anchor){
  showMenu(anchor, [
    { label:'⇋ عكس رأسي (حول مركز العنصر)', onClick:() => {
      const o = getSelected(); if (!o) return;
      saveHistory();
      const b = itemBounds(o);
      mirrorItem(o, 'v', (b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2);
      draw(); renderProps(); autosave();
    }},
    { label:'⇅ عكس أفقي (حول مركز العنصر)', onClick:() => {
      const o = getSelected(); if (!o) return;
      saveHistory();
      const b = itemBounds(o);
      mirrorItem(o, 'h', (b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2);
      draw(); renderProps(); autosave();
    }},
    { separator:true },
    { label:'عكس حول المحور الرأسي العالمي (X=0)', onClick:() => {
      const o = getSelected(); if (!o) return;
      saveHistory();
      mirrorItem(o, 'v', 0, 0);
      draw(); renderProps(); autosave();
    }}
  ]);
}

function doRotate(){
  const o = getSelected(); if (!o) return;
  const val = prompt('زاوية التدوير (بالدرجات):', '90');
  if (val === null) return;
  const ang = parseFloat(val);
  if (!Number.isFinite(ang)) { alert('قيمة غير صالحة'); return; }
  saveHistory();
  rotateItem(o, ang);
  draw(); renderProps(); autosave();
}

function doOffset(){
  const o = getSelected(); if (!o) return;
  const val = prompt('مسافة الإزاحة (سم، سالبة للداخل):', '1');
  if (val === null) return;
  const dist = parseFloat(val);
  if (!Number.isFinite(dist) || Math.abs(dist) < 0.01) { alert('قيمة غير صالحة'); return; }
  const off = offsetItem(o, dist);
  if (!off) { alert('لا يمكن إزاحة هذا العنصر'); return; }
  saveHistory();
  off.layer = o.layer;
  off.color = o.color || '#45b9e8';
  off.lineWidth = o.lineWidth || 0.25;
  state.items.push(off);
  state.selected = off.id;
  renderProps();
  draw(); autosave();
}

$('toolbar').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.tool){ setTool(b.dataset.tool); return; }
  const a = b.dataset.action;
  if (!a) return;
  if (a === 'delete'){
    if (!state.selected) return;
    saveHistory();
    state.items = state.items.filter(o => o.id !== state.selected);
    state.selected = null;
    renderProps(); draw(); autosave();
  }
  if (a === 'duplicate'){
    const o = getSelected(); if (!o) return;
    saveHistory();
    const c = clone(o); c.id = uid();
    translateItem(c, 2, -2);
    state.items.push(c);
    state.selected = c.id;
    renderProps(); draw(); autosave();
  }
  if (a === 'mirror') doMirror(b);
  if (a === 'rotate') doRotate();
  if (a === 'offset') doOffset();
  if (a === 'fit') fitDrawing();
  if (a === 'grid'){
    state.grid = !state.grid;
    b.classList.toggle('active', state.grid);
    draw();
  }
  if (a === 'snap'){
    state.snap = !state.snap;
    $('snapToggle').checked = state.snap;
    b.classList.toggle('active', state.snap);
  }
});

$('templatesBtn').onclick = e => {
  e.stopPropagation();
  showMenu($('templatesBtn'), [
    { label:'👕 مخطط ثوب أمامي', onClick:() => insertTemplate('front') },
    { label:'👕 مخطط ثوب خلفي', onClick:() => insertTemplate('back') },
    { label:'🧵 كم', onClick:() => insertTemplate('sleeve') },
    { label:'🎗 ياقة', onClick:() => insertTemplate('collar') },
    { label:'👝 جيب', onClick:() => insertTemplate('pocket') },
    { separator:true },
    { label:'🔘 فتحة صدر / جبزور', onClick:() => insertTemplate('placket') }
  ]);
};

/* ============================================================
   14) القوالب الهندسية (عناصر قابلة للتعديل)
   ============================================================ */
function makeBezierNeck(startX, endX, drop, y){
  return {
    id: uid(), type:'bezier', closed:false,
    layer: state.activeLayer, color:'#f2ad4b', lineWidth:0.3,
    points: [
      { x:startX, y:y,     h1x:0,       h1y:0,             h2x:(endX-startX)*0.15, h2y:-drop*0.55 },
      { x:(startX+endX)/2, y:y-drop, h1x:-(endX-startX)*0.15, h1y:0, h2x:(endX-startX)*0.15, h2y:0 },
      { x:endX,   y:y,     h1x:-(endX-startX)*0.15, h1y:-drop*0.55, h2x:0, h2y:0 }
    ]
  };
}

function templateFront(m){
  const chest = m.chest || 100;
  const length = m.length || 140;
  const shoulder = m.shoulder || 44;
  const halfChest = chest / 4 + 3;
  const shoulderW = shoulder / 2 + 2;
  const neckW = 8;
  const neckDrop = 8;
  const armhole = 24;

  const items = [];
  items.push({
    id: uid(), type:'poly', closed:true,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.35,
    points: [
      { x:-shoulderW, y:0 },
      { x:-neckW/2, y:0 },
      { x: neckW/2, y:0 },
      { x: shoulderW, y:0 },
      { x: halfChest, y:-armhole },
      { x: halfChest + 2, y:-length },
      { x: -halfChest - 2, y:-length },
      { x: -halfChest, y:-armhole }
    ]
  });
  items.push(makeBezierNeck(-neckW/2, neckW/2, neckDrop, 0));
  items.push({
    id: uid(), type:'line',
    x:0, y:-neckDrop, x2:0, y2:-length,
    layer: state.activeLayer, color:'#91a2bd', lineWidth:0.2
  });
  return items;
}

function templateBack(m){
  const chest = m.chest || 100;
  const length = m.length || 140;
  const shoulder = m.shoulder || 44;
  const halfChest = chest / 4 + 3;
  const shoulderW = shoulder / 2 + 2;
  const neckW = 8;
  const neckDrop = 2.5;
  const armhole = 24;

  const items = [];
  items.push({
    id: uid(), type:'poly', closed:true,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.35,
    points: [
      { x:-shoulderW, y:0 },
      { x:-neckW/2, y:0 },
      { x: neckW/2, y:0 },
      { x: shoulderW, y:0 },
      { x: halfChest, y:-armhole },
      { x: halfChest + 2, y:-length },
      { x: -halfChest - 2, y:-length },
      { x: -halfChest, y:-armhole }
    ]
  });
  items.push({
    id: uid(), type:'line',
    x:-neckW/2, y:0, x2:neckW/2, y2:-neckDrop,
    layer: state.activeLayer, color:'#f2ad4b', lineWidth:0.3
  });
  return items;
}

function templateSleeve(m){
  const len = m.sleeve || 60;
  const topW = 22;
  const wristW = 13;
  const items = [];
  items.push({
    id: uid(), type:'poly', closed:true,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.35,
    points: [
      { x:-topW/2, y:0 },
      { x: topW/2, y:0 },
      { x: wristW/2, y:-len },
      { x: -wristW/2, y:-len }
    ]
  });
  items.push({
    id: uid(), type:'line',
    x:-topW/2, y:0, x2:topW/2, y2:0,
    layer: state.activeLayer, color:'#91a2bd', lineWidth:0.2
  });
  return items;
}

function templateCollar(){
  const cw = 16, ch = 5;
  return [{
    id: uid(), type:'poly', closed:true,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.35,
    points: [
      { x:-cw/2, y:0 },
      { x: cw/2, y:0 },
      { x: cw/2 + 1, y:-ch },
      { x: -cw/2 - 1, y:-ch }
    ]
  }];
}

function templatePocket(){
  const pw = 12, ph = 14;
  return [{
    id: uid(), type:'rect',
    x: -pw/2, y: -ph, w: pw, h: ph,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.3
  }];
}

function templatePlacket(){
  const h = 22, w = 2.2;
  const items = [];
  items.push({
    id: uid(), type:'rect',
    x: -w/2, y: -h, w: w, h: h,
    layer: state.activeLayer, color:'#45b9e8', lineWidth:0.25
  });
  for (let i = 1; i <= 4; i++){
    items.push({
      id: uid(), type:'circle',
      x: 0, y: -i * (h/5), r: 0.4,
      layer: state.activeLayer, color:'#f2ad4b', lineWidth:0.2
    });
  }
  return items;
}

function insertTemplate(kind){
  const m = state.measurements || {};
  let items = [];
  if (kind === 'front') items = templateFront(m);
  else if (kind === 'back') items = templateBack(m);
  else if (kind === 'sleeve') items = templateSleeve(m);
  else if (kind === 'collar') items = templateCollar();
  else if (kind === 'pocket') items = templatePocket();
  else if (kind === 'placket') items = templatePlacket();
  if (!items.length) return;
  saveHistory();
  const b = bounds();
  // وضع القالب في منطقة مرئية
  const tgtX = (b.minX + b.maxX)/2;
  const tgtY = 0;
  items.forEach(it => {
    // إزاحة لطيفة حسب النوع
    translateItem(it, tgtX, tgtY);
    state.items.push(it);
  });
  state.selected = items[items.length - 1].id;
  renderProps();
  draw(); autosave();
  $('statusText').textContent = 'تم إدراج القالب — يمكنك تعديل أي نقطة أو خط يدوياً';
}

/* ============================================================
   15) المقاسات والربط
   ============================================================ */
function readMeasurements(){
  return {
    length:   parseFloat($('mLength').value) || null,
    chest:    parseFloat($('mChest').value) || null,
    shoulder: parseFloat($('mShoulder').value) || null,
    sleeve:   parseFloat($('mSleeve').value) || null,
    unit: 'cm',
    recordedAt: new Date().toISOString()
  };
}

function renderMeasurements(){
  const m = state.measurements || {};
  const list = $('measureList');
  const rows = [];
  if (m.length) rows.push(['طول الثوب', m.length + ' سم']);
  if (m.chest) rows.push(['محيط الصدر', m.chest + ' سم']);
  if (m.shoulder) rows.push(['عرض الكتف', m.shoulder + ' سم']);
  if (m.sleeve) rows.push(['طول الكم', m.sleeve + ' سم']);
  if (!rows.length){
    list.innerHTML = '<div class="mini" style="margin-top:6px">لا توجد قياسات مرفقة بعد.</div>';
    return;
  }
  list.innerHTML = rows.map(r => `<div class="measure-chip"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('');
}

$('applyMeasurements').onclick = () => {
  const m = readMeasurements();
  if (!m.length && !m.chest && !m.shoulder && !m.sleeve){
    alert('أدخل قياساً واحداً على الأقل قبل الإرفاق.');
    return;
  }
  state.measurements = m;
  renderMeasurements();
  autosave();
  $('statusText').textContent = 'أُرفقت نسخة القياسات بالتصميم (دون تغيير الهندسة).';
};

$('applyGuide').onclick = () => {
  const m = readMeasurements();
  if (!m.length && !m.chest && !m.shoulder && !m.sleeve){
    alert('أدخل القياسات أولاً ثم أعد المحاولة.');
    return;
  }
  state.measurements = m;
  renderMeasurements();
  saveHistory();
  const items = templateFront(m);
  const b = bounds();
  const shiftY = (b.maxY - b.minY) > 1 ? b.maxY - 0 : 0;
  items.forEach(it => {
    translateItem(it, 0, shiftY + 5);
    state.items.push(it);
  });
  draw(); autosave();
  $('statusText').textContent = 'تم توليد مخطط أولي من القياسات — يمكنك تعديله بحرية.';
};

/* ============================================================
   16) الطبقات
   ============================================================ */
function renderLayers(){
  const wrap = $('layers');
  wrap.innerHTML = '';
  state.layers.forEach(l => {
    const d = document.createElement('div');
    d.className = 'layer' + (l.id === state.activeLayer ? ' active' : '');
    d.innerHTML = `<input type="checkbox" ${l.visible ? 'checked' : ''} title="إظهار/إخفاء">
      <span class="layer-name"></span>
      <button class="mini" title="${l.locked ? 'إلغاء القفل' : 'قفل'}">${l.locked ? '🔒' : '🔓'}</button>`;
    d.querySelector('.layer-name').textContent = l.name;
    d.querySelector('input').onchange = e => {
      l.visible = e.target.checked;
      draw(); autosave();
    };
    d.querySelector('button').onclick = ev => {
      ev.stopPropagation();
      l.locked = !l.locked;
      renderLayers(); autosave();
    };
    d.onclick = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
      state.activeLayer = l.id;
      renderLayers(); draw();
    };
    wrap.appendChild(d);
  });
}

$('addLayer').onclick = () => {
  const name = prompt('اسم الطبقة الجديدة:');
  if (!name) return;
  const l = { id: uid(), name: name.trim(), visible:true, locked:false };
  state.layers.push(l);
  state.activeLayer = l.id;
  renderLayers(); autosave();
};

/* ============================================================
   17) حفظ / تحميل / تصدير / استيراد
   ============================================================ */
function snapshot(){
  return {
    format: 'KhayatPro-CAD',
    version: 2,
    name: state.designName,
    items: clone(state.items),
    layers: clone(state.layers),
    measurements: clone(state.measurements),
    updated: new Date().toISOString()
  };
}

let autoTimer;
function scheduleSave(){ clearTimeout(autoTimer); autoTimer = setTimeout(autosave, 400); }
function autosave(){
  try {
    localStorage.setItem(DB_KEY + '.draft', JSON.stringify(snapshot()));
    $('statusText').textContent = 'تم الحفظ التلقائي محلياً';
  } catch (e){
    $('statusText').textContent = 'تعذر الحفظ التلقائي: مساحة التخزين ممتلئة';
  }
}

function loadDraft(){
  try {
    const raw = localStorage.getItem(DB_KEY + '.draft');
    if (!raw) return;
    const s = JSON.parse(raw);
    if (!s || !Array.isArray(s.items)) return;
    state.items = s.items.filter(o => o && typeof o === 'object' && typeof o.type === 'string');
    if (Array.isArray(s.layers) && s.layers.length) state.layers = s.layers;
    state.measurements = s.measurements || {};
    state.designName = s.name || state.designName;
    renderLayers();
    renderMeasurements();
    draw();
  } catch (e){
    $('statusText').textContent = 'تعذر قراءة المسودة المحلية';
  }
}

$('saveBtn').onclick = () => {
  const name = prompt('اسم التصميم:', state.designName);
  if (name === null) return;
  state.designName = name.trim() || 'تصميم بدون اسم';
  try {
    const all = JSON.parse(localStorage.getItem(DB_KEY + '.library') || '[]');
    const s = snapshot();
    s.name = state.designName;
    s.id = uid();
    all.unshift(s);
    localStorage.setItem(DB_KEY + '.library', JSON.stringify(all));
    autosave();
    renderLibrary();
    $('statusText').textContent = 'تم حفظ التصميم في المكتبة المحلية';
  } catch (e){
    alert('تعذر الحفظ. قد تكون مساحة التخزين المحلية ممتلئة.');
  }
};

$('exportBtn').onclick = () => {
  const blob = new Blob([JSON.stringify(snapshot(), null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (state.designName || 'khayat-pattern').replace(/[^a-z0-9_\-\u0600-\u06ff]+/gi, '_') + '.json';
  a.click();
  URL.revokeObjectURL(url);
  $('statusText').textContent = 'تم تصدير ملف التصميم';
};

$('importBtn').onclick = () => $('importFile').click();
$('importFile').onchange = async e => {
  const f = e.target.files[0];
  if (!f) return;
  try {
    const data = JSON.parse(await f.text());
    if (!data || !Array.isArray(data.items) || !Array.isArray(data.layers)) throw new Error('invalid');
    if (!confirm('سيتم استبدال التصميم الحالي بالملف المحدد. متابعة؟')) return;
    state.items = data.items;
    state.layers = data.layers;
    state.measurements = data.measurements || {};
    state.designName = data.name || 'تصميم مستورد';
    state.selected = null;
    state.undo = []; state.redo = [];
    renderLayers(); renderMeasurements(); renderProps(); draw(); autosave();
    $('statusText').textContent = 'تم استيراد التصميم بنجاح';
  } catch (err){
    alert('الملف غير صالح أو لا يتوافق مع تنسيق Khayat Pro CAD.');
  } finally {
    e.target.value = '';
  }
};

function renderLibrary(){
  let all = [];
  try {
    all = JSON.parse(localStorage.getItem(DB_KEY + '.library') || '[]');
    if (!Array.isArray(all)) all = [];
  } catch (e){ all = []; }
  const q = ($('searchDesign').value || '').toLowerCase();
  const wrap = $('designList');
  wrap.innerHTML = '';
  all.filter(s => (s.name || '').toLowerCase().includes(q)).forEach(s => {
    const d = document.createElement('div');
    d.className = 'list-item';
    const title = document.createElement('span');
    title.textContent = s.name || 'بدون اسم';
    const open = document.createElement('button');
    open.className = 'btn'; open.textContent = 'فتح';
    open.onclick = () => {
      if (!confirm('فتح التصميم سيستبدل محتوى مساحة العمل الحالية. هل تريد المتابعة؟')) return;
      state.items = clone(s.items || []);
      state.layers = clone(s.layers || state.layers);
      state.measurements = clone(s.measurements || {});
      state.designName = s.name || 'تصميم';
      state.selected = null;
      state.undo = []; state.redo = [];
      renderLayers(); renderMeasurements(); renderProps(); draw(); autosave();
    };
    const del = document.createElement('button');
    del.className = 'btn danger'; del.textContent = '×';
    del.onclick = () => {
      if (!confirm('حذف التصميم نهائياً؟')) return;
      const rest = all.filter(x => x.id !== s.id);
      localStorage.setItem(DB_KEY + '.library', JSON.stringify(rest));
      renderLibrary();
    };
    d.append(title, open, del);
    wrap.appendChild(d);
  });
}
$('searchDesign').oninput = renderLibrary;

/* ============================================================
   18) التبديل بين 2D و 3D
   ============================================================ */
function switchView(v){
  state.is3d = v;
  canvas.style.display = v ? 'none' : 'block';
  c3.style.display = v ? 'block' : 'none';
  $('tab2d').classList.toggle('active', !v);
  $('tab3d').classList.toggle('active', v);
  $('previewBtn').textContent = v ? 'العودة إلى الرسم' : 'معاينة 3D';
  $('viewMessage').textContent = v
    ? 'إسقاط وبروز هندسي — ليس محاكاة قماش فيزيائية'
    : 'الرسم بوحدة السنتيمتر';
  if (v) draw3d(); else draw();
}
$('tab2d').onclick = () => switchView(false);
$('tab3d').onclick = () => switchView(true);
$('previewBtn').onclick = () => switchView(!state.is3d);

function fitDrawing(){
  if (!state.items.length){ state.scale = 8; state.ox = dims().w/2; state.oy = dims().h/2; draw(); return; }
  const b = bounds();
  const { w, h } = dims();
  const pad = 60;
  const spanX = Math.max(1, b.maxX - b.minX);
  const spanY = Math.max(1, b.maxY - b.minY);
  state.scale = clamp(Math.min((w - pad*2) / spanX, (h - pad*2) / spanY), 1.5, 120);
  state.ox = w / 2 - (b.minX + b.maxX) / 2 * state.scale;
  state.oy = h / 2 + (b.minY + b.maxY) / 2 * state.scale;
  $('scaleInfo').value = state.scale.toFixed(1);
  draw();
}

/* ============================================================
   19) الإدخالات العامة والاختصارات
   ============================================================ */
$('snapToggle').onchange = e => {
  state.snap = e.target.checked;
  document.querySelector('[data-action="snap"]').classList.toggle('active', state.snap);
};
$('gridStep').onchange = () => {
  const v = parseFloat($('gridStep').value);
  if (!Number.isFinite(v) || v <= 0){ $('gridStep').value = 1; state.gridStep = 1; }
  else state.gridStep = v;
  draw();
};

$('undoBtn').onclick = undo;
$('redoBtn').onclick = redo;

window.addEventListener('keydown', e => {
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z'){ e.preventDefault(); undo(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y'){ e.preventDefault(); redo(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's'){ e.preventDefault(); $('saveBtn').click(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd'){ e.preventDefault(); document.querySelector('[data-action="duplicate"]').click(); return; }
  if (e.key === 'Delete' && state.selected){ document.querySelector('[data-action="delete"]').click(); return; }
  if (e.key === 'Escape'){
    if (state.draft) cancelDraft();
    else { state.selected = null; renderProps(); draw(); }
    return;
  }
  if (e.key === 'Enter'){
    if (state.draft && (state.draft.type === 'poly' || state.draft.type === 'bezier')){
      if (state.draft.points.length >= 2) finishDraft();
    }
    return;
  }
  if (e.key === '+' || e.key === '='){ state.scale = clamp(state.scale*1.15, 1.5, 120); draw(); return; }
  if (e.key === '-'){ state.scale = clamp(state.scale/1.15, 1.5, 120); draw(); return; }

  const k = e.key.toLowerCase();
  if (k === 'v') setTool('select');
  else if (k === 'l') setTool('line');
  else if (k === 'p') setTool('poly');
  else if (k === 'r') setTool('rect');
  else if (k === 'c') setTool('circle');
  else if (k === 'b') setTool('bezier');
  else if (k === 'f') setTool('free');
  else if (k === 'd') setTool('dimension');
});

window.addEventListener('resize', resize);
window.addEventListener('beforeunload', autosave);

/* ============================================================
   20) التهيئة
   ============================================================ */
renderLayers();
renderLibrary();
renderMeasurements();
loadDraft();
resize();
setTool('select');
document.querySelector('[data-action="snap"]').classList.toggle('active', state.snap);
document.querySelector('[data-action="grid"]').classList.toggle('active', state.grid);
$('scaleInfo').value = state.scale.toFixed(1);
state.gridStep = parseFloat($('gridStep').value) || 1;
draw();

})();
</script>
</body>
</html>
