<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Khayat Pro · 3D Cloth Studio</title>
<style>
:root{--bg:#0b1020;--panel:#111a2e;--panel2:#17233b;--line:#263653;--text:#e8eef9;--muted:#91a2bd;--accent:#42b7e9;--green:#22c58b;--orange:#f2ad4b;--red:#e45b69}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:14px "Segoe UI",Tahoma,sans-serif;height:100vh;overflow:hidden}
button,input,select{font:inherit}button{cursor:pointer;color:inherit}
.app{height:100vh;display:grid;grid-template-rows:54px 44px 44px 1fr 26px}
header{display:flex;align-items:center;justify-content:space-between;padding:0 14px;background:#0e1729;border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:11px}.brand-mark{width:32px;height:32px;border:1px solid var(--accent);border-radius:8px;display:grid;place-items:center;color:var(--accent);font-weight:800;font-size:17px}.brand h1{font-size:14px;margin:0}.brand small{display:block;color:var(--muted);font-size:10px;margin-top:2px}
.header-actions{display:flex;gap:6px;align-items:center}.btn{border:1px solid var(--line);background:var(--panel2);padding:7px 10px;border-radius:6px;font-size:12px}.btn:hover{border-color:var(--accent)}.btn.primary{background:#087eae;border-color:#1599ca;color:#fff}.btn.good{background:#087c5b;border-color:#0b9a70}.btn.danger{background:#542431;border-color:#87404e}
.toolbar{display:flex;align-items:center;gap:4px;padding:4px 10px;background:#101a2d;border-bottom:1px solid var(--line);overflow-x:auto;white-space:nowrap;scrollbar-width:thin}
.toolbar.patterns{background:#0d1626;padding:4px 10px}
.tool{min-width:54px;height:34px;padding:3px 7px;border:1px solid transparent;border-radius:5px;background:transparent;color:#b9c7dc;font-size:10.5px;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:0;line-height:1.1}
.tool .ico{font-size:14px;display:block;line-height:1}
.tool:hover,.tool.active{background:#1c3550;border-color:#286a8a;color:#fff}
.pattern-btn{min-width:76px;height:32px;padding:4px 9px;border:1px solid #1e3050;border-radius:5px;background:#0f1f33;color:#c7d5e8;font-size:11px;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.pattern-btn:hover{background:#1a3450;border-color:#2e7fa5;color:#fff}
.pattern-btn .pico{font-size:13px}
.separator{height:24px;width:1px;background:var(--line);margin:0 4px}
.workspace{min-height:0;display:grid;grid-template-columns:230px minmax(280px,1fr) 250px;direction:ltr}
.left,.right{direction:rtl;background:var(--panel);overflow:auto;padding:10px;border-color:var(--line)}
.left{border-right:1px solid var(--line)}.right{border-left:1px solid var(--line)}
.center{direction:rtl;min-width:0;min-height:0;display:grid;grid-template-rows:36px 1fr;background:#080e1a}
.view-tabs{display:flex;align-items:center;gap:5px;padding:3px 9px;border-bottom:1px solid var(--line);background:#101a2d}
.tab{padding:5px 11px;border-radius:4px;border:1px solid transparent;background:transparent;color:var(--muted);font-size:11.5px}.tab.active{background:#1b3550;border-color:#2b6687;color:#fff}
.tab.cta{background:#1c4a1c;border-color:#2e7a2e;color:#bfffc7;margin-right:auto}
.tab.cta:hover{background:#236023}
.canvas-wrap{position:relative;min-height:0;overflow:hidden}canvas{display:block;width:100%;height:100%;touch-action:none}
#cadCanvas{background-color:#0a1221;background-image:radial-gradient(#263650 0.7px,transparent .7px);background-size:20px 20px}
#view3d{display:none;background:radial-gradient(ellipse at center,#172b45,#080e1a 70%)}
.hud{position:absolute;top:9px;left:11px;display:flex;gap:6px;pointer-events:none;flex-wrap:wrap}.badge{background:#111d31dd;border:1px solid #2a3d59;color:#a9bbd5;padding:4px 7px;border-radius:4px;font-size:10.5px}
.sim-controls{position:absolute;top:9px;right:11px;display:flex;gap:6px;background:#111d31dd;border:1px solid #2a3d59;padding:5px;border-radius:6px}
.sim-controls button{padding:4px 8px;font-size:10px;border-radius:4px;border:1px solid #2a3d59;background:#0d1825;color:#b9c7dc}
.sim-controls button.active{background:#1a5c2e;border-color:#22c58b;color:#b7ffd1}
.panel-title{font-size:11.5px;color:var(--accent);font-weight:700;padding:4px 0 8px;border-bottom:1px solid var(--line);margin-bottom:8px}
.section{margin-bottom:14px}
.field{margin:6px 0}.field label{display:block;color:var(--muted);font-size:10.5px;margin-bottom:4px}.field input,.field select{width:100%;background:#0c1527;border:1px solid #2a3a56;border-radius:5px;padding:6px;color:var(--text);outline:none;font-size:12px}.field input:focus{border-color:var(--accent)}
.field input[type=color]{padding:2px;height:28px;cursor:pointer}
.row{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.layer{display:flex;align-items:center;gap:6px;padding:7px;border:1px solid transparent;border-radius:5px;background:#0e182a;margin:4px 0;font-size:10.5px}.layer.active{border-color:#28789c;background:#14283e}.layer input{accent-color:var(--accent)}.layer .layer-name{flex:1}.layer button{background:transparent;border:none;font-size:13px;padding:0 3px}
.list-item{padding:8px;background:#0d1728;border:1px solid #263650;border-radius:5px;margin:5px 0;display:flex;justify-content:space-between;gap:5px;font-size:11px;align-items:center}
.muted{color:var(--muted)}.mini{font-size:10px;color:var(--muted)}
.swatches{display:grid;grid-template-columns:repeat(8,1fr);gap:4px;margin-top:5px}
.swatch{height:22px;border-radius:3px;border:1px solid #2a3a56;cursor:pointer}
.swatch:hover{border-color:var(--accent);transform:scale(1.08)}
.status{display:flex;align-items:center;justify-content:space-between;padding:0 11px;background:#0e1729;border-top:1px solid var(--line);font-size:10px;color:var(--muted)}.status span{margin-left:12px}
.hidden{display:none!important}
.help-tip{background:#0e1a2c;border:1px solid #1e3050;border-radius:5px;padding:7px;font-size:10.5px;color:#9eb1cd;line-height:1.55;margin-top:8px}
@media(max-width:1000px){.workspace{grid-template-columns:190px minmax(240px,1fr)}.right{display:none}}
@media(max-width:650px){.workspace{grid-template-columns:1fr}.left,.right{display:none}.header-actions .optional{display:none}}
</style>
</head>
<body>
<div class="app">
<header>
 <div class="brand"><div class="brand-mark">K</div><div><h1>Khayat Pro · 3D Cloth Studio</h1><small>محاكاة قماش فيزيائية · رسم تفصيل ثلاثي الأبعاد</small></div></div>
 <div class="header-actions">
  <button class="btn optional" id="undoBtn">↶ تراجع</button>
  <button class="btn optional" id="redoBtn">↷ إعادة</button>
  <button class="btn optional" id="exportBtn">تصدير</button>
  <button class="btn optional" id="importBtn">استيراد</button>
  <input id="importFile" type="file" accept=".json,application/json" hidden>
  <button class="btn" id="saveBtn">حفظ</button>
  <button class="btn primary" id="previewBtn">▶ 3D مباشر</button>
 </div>
</header>

<nav class="toolbar" id="toolbar">
 <button class="tool active" data-tool="select"><span class="ico">↖</span>تحديد</button>
 <button class="tool" data-tool="line"><span class="ico">／</span>خط</button>
 <button class="tool" data-tool="poly"><span class="ico">⌁</span>متعدد</button>
 <button class="tool" data-tool="rect"><span class="ico">▱</span>مستطيل</button>
 <button class="tool" data-tool="circle"><span class="ico">○</span>دائرة</button>
 <button class="tool" data-tool="bezier"><span class="ico">∿</span>منحنى</button>
 <button class="tool" data-tool="free"><span class="ico">〰</span>رسم حر</button>
 <button class="tool" data-tool="dimension"><span class="ico">↔</span>قياس</button>
 <div class="separator"></div>
 <button class="tool" data-action="delete"><span class="ico">⌫</span>حذف</button>
 <button class="tool" data-action="duplicate"><span class="ico">▣</span>نسخ</button>
 <button class="tool" data-action="mirror"><span class="ico">⇋</span>عكس</button>
 <button class="tool" data-action="rotate"><span class="ico">↻</span>تدوير</button>
 <button class="tool" data-action="offset"><span class="ico">⊟</span>إزاحة</button>
 <button class="tool" data-action="fit"><span class="ico">⛶</span>ملاءمة</button>
 <div class="separator"></div>
 <button class="tool" data-action="grid"><span class="ico">▦</span>شبكة</button>
 <button class="tool" data-action="snap"><span class="ico">⌖</span>التقاط</button>
</nav>

<nav class="toolbar patterns" id="patternToolbar">
 <button class="pattern-btn" data-pattern="front"><span class="pico">👕</span>ثوب أمام</button>
 <button class="pattern-btn" data-pattern="back"><span class="pico">👕</span>ثوب خلف</button>
 <button class="pattern-btn" data-pattern="sleeveL"><span class="pico">🦾</span>كم يسار</button>
 <button class="pattern-btn" data-pattern="sleeveR"><span class="pico">🦾</span>كم يمين</button>
 <button class="pattern-btn" data-pattern="collar"><span class="pico">🎗</span>ياقة</button>
 <button class="pattern-btn" data-pattern="neckRound"><span class="pico">◯</span>رقبة دائرية</button>
 <button class="pattern-btn" data-pattern="neckV"><span class="pico">▽</span>رقبة V</button>
 <button class="pattern-btn" data-pattern="placket"><span class="pico">▯</span>فتحة صدر</button>
 <button class="pattern-btn" data-pattern="buttons"><span class="pico">◉</span>أزرار</button>
 <button class="pattern-btn" data-pattern="pocket"><span class="pico">▭</span>جيب</button>
 <button class="pattern-btn" data-pattern="waistband"><span class="pico">▬</span>كمر</button>
 <button class="pattern-btn" data-pattern="cuff"><span class="pico">▭</span>كبك</button>
 <button class="pattern-btn" data-pattern="hem"><span class="pico">—</span>حاشية</button>
 <button class="pattern-btn" data-pattern="seam"><span class="pico">╱</span>قصّة</button>
 <button class="pattern-btn" data-pattern="joint"><span class="pico">⋈</span>مفصل</button>
 <button class="pattern-btn" data-pattern="bodice"><span class="pico">♜</span>صدرية كاملة</button>
</nav>

<main class="workspace">
 <aside class="left">
  <div class="panel-title">الطبقات</div>
  <div id="layers"></div>
  <button class="btn" id="addLayer" style="width:100%;margin-top:5px">＋ طبقة</button>
  <div class="section" style="margin-top:14px">
   <div class="panel-title">مكتبة التصاميم</div>
   <input id="searchDesign" placeholder="بحث..." style="width:100%;padding:6px;background:#0c1527;border:1px solid #2a3a56;border-radius:5px;color:white;font-size:12px">
   <div id="designList"></div>
  </div>
  <div class="section">
   <div class="panel-title">إعدادات</div>
   <div class="field"><label>خطوة الشبكة (سم)</label><input id="gridStep" type="number" min=".2" step=".2" value="1"></div>
   <div class="field"><label><input type="checkbox" id="snapToggle" checked> التقاط ذكي</label></div>
   <div class="help-tip">اسحب على القماش في عرض 3D لتدويره. عجلة الماوس للتكبير. اضغط مزدوجاً على القماش لإعادة ضبط الكاميرا.</div>
  </div>
 </aside>

 <section class="center">
  <div class="view-tabs">
   <button class="tab active" id="tab2d">📐 مساحة الرسم 2D</button>
   <button class="tab" id="tab3d">🧵 محاكاة 3D</button>
   <span class="mini" id="viewMessage" style="margin-right:auto">ارسم أو أدرج قالباً — ثم اضغط "محاكاة 3D" لترى القماش يتحرك فيزيائياً</span>
  </div>
  <div class="canvas-wrap">
   <canvas id="cadCanvas"></canvas>
   <canvas id="view3d"></canvas>
   <div class="hud">
    <span class="badge" id="coordBadge">X: 0.0 · Y: 0.0 cm</span>
    <span class="badge" id="toolBadge">أداة التحديد</span>
    <span class="badge" id="fpsBadge" style="display:none">—</span>
   </div>
   <div class="sim-controls hidden" id="simControls">
    <button id="simPlay" class="active">▶ تشغيل</button>
    <button id="simReset">↺ إعادة</button>
    <button id="simWind">💨 رياح</button>
    <button id="simWire">🕸 شبكة</button>
   </div>
  </div>
 </section>

 <aside class="right">
  <div class="panel-title">خصائص العنصر</div>
  <div id="emptyProps" class="muted" style="font-size:11px;line-height:1.7">حدد عنصراً لعرض خصائصه.</div>
  <div id="props" class="hidden"></div>
  <div class="section" style="margin-top:14px">
   <div class="panel-title">معلومات</div>
   <div class="list-item"><span>عدد العناصر</span><b id="countInfo">0</b></div>
   <div class="list-item"><span>الطبقة النشطة</span><b id="activeLayerInfo">الأمام</b></div>
   <div class="list-item"><span>حفظ تلقائي</span><b style="color:var(--green)">مفعّل</b></div>
  </div>
  <div class="help-tip">
   <b>للتلوين السريع:</b> اختر العنصر ثم اضغط لوناً من اللوحة في الأعلى، أو استخدم منتقي اللون في الخصائص.
  </div>
 </aside>
</main>

<footer class="status">
 <div><span id="statusText">جاهز · ابدأ الرسم</span><span id="selectionInfo">لا يوجد تحديد</span></div>
 <div><span id="zoomInfo">100%</span><span>cm</span><span>Khayat Pro v3</span></div>
</footer>
</div>

<script>
(function(){
"use strict";

/* ============================================================
   0) أدوات مساعدة
   ============================================================ */
const $ = id => document.getElementById(id);
const uid = () => Math.random().toString(36).slice(2, 10);
const clone = o => JSON.parse(JSON.stringify(o));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const TYPE_NAMES = { line:'خط', poly:'متعدد', free:'رسم حر', rect:'مستطيل', circle:'دائرة', bezier:'منحنى', dimension:'قياس' };

/* Vec3 helpers */
const V = {
  add: (a,b) => ({x:a.x+b.x, y:a.y+b.y, z:a.z+b.z}),
  sub: (a,b) => ({x:a.x-b.x, y:a.y-b.y, z:a.z-b.z}),
  scale: (a,s) => ({x:a.x*s, y:a.y*s, z:a.z*s}),
  dot: (a,b) => a.x*b.x + a.y*b.y + a.z*b.z,
  cross: (a,b) => ({x:a.y*b.z - a.z*b.y, y:a.z*b.x - a.x*b.z, z:a.x*b.y - a.y*b.x}),
  len: a => Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z),
  norm: a => { const l = Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z) || 1; return {x:a.x/l, y:a.y/l, z:a.z/l}; }
};

/* ============================================================
   1) الحالة
   ============================================================ */
const DB_KEY = 'khayatpro.patternCAD.v3';
const state = {
  items: [],
  layers: [
    { id:'front',   name:'الأمام',    visible:true, locked:false },
    { id:'back',    name:'الخلف',     visible:true, locked:false },
    { id:'details', name:'التفاصيل',  visible:true, locked:false }
  ],
  activeLayer: 'front',
  tool: 'select',
  selected: null,
  scale: 8, ox: 0, oy: 0,
  grid: true, snap: true, gridStep: 1,
  drag: null, draft: null,
  undo: [], redo: [],
  designName: 'تصميم جديد',
  is3d: false,
  snapIndicator: null
};

/* ============================================================
   2) الكانفاس
   ============================================================ */
const canvas = $('cadCanvas'), ctx = canvas.getContext('2d');
const c3 = $('view3d'), g3 = c3.getContext('2d');
let DPR = Math.min(window.devicePixelRatio || 1, 2);
const dims = () => ({ w: canvas.clientWidth, h: canvas.clientHeight });
const world = (sx, sy) => ({ x: (sx - state.ox) / state.scale, y: (state.oy - sy) / state.scale });
const screen = p => ({ x: state.ox + p.x * state.scale, y: state.oy - p.y * state.scale });

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
  if (!state.ox && !state.oy){ state.ox = wrap.width / 2; state.oy = wrap.height / 2; }
  draw();
}

/* ============================================================
   3) هندسة 2D
   ============================================================ */
function distSeg(p, a, b){
  const dx = b.x - a.x, dy = b.y - a.y;
  const l2 = dx*dx + dy*dy || 1;
  let t = ((p.x-a.x)*dx + (p.y-a.y)*dy) / l2;
  t = clamp(t, 0, 1);
  return Math.hypot(p.x - a.x - t*dx, p.y - a.y - t*dy);
}
function pointInPolygon(p, poly){
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++){
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;
    const inter = ((yi > p.y) !== (yj > p.y)) && (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
    if (inter) inside = !inside;
  }
  return inside;
}
function smoothBezier(points, closed){
  const n = points.length;
  if (n < 2) return;
  for (let i = 0; i < n; i++){
    const p = points[i];
    if (p.h1x === undefined){ p.h1x=0; p.h1y=0; p.h2x=0; p.h2y=0; }
    const prev = closed ? points[(i-1+n)%n] : points[Math.max(0, i-1)];
    const next = closed ? points[(i+1)%n] : points[Math.min(n-1, i+1)];
    let tx, ty;
    if (!closed && i === 0){ tx=(next.x-p.x)/3; ty=(next.y-p.y)/3; }
    else if (!closed && i === n-1){ tx=(p.x-prev.x)/3; ty=(p.y-prev.y)/3; }
    else { tx=(next.x-prev.x)/6; ty=(next.y-prev.y)/6; }
    p.h2x=tx; p.h2y=ty; p.h1x=-tx; p.h1y=-ty;
  }
}
function bezierToPolyline(o){
  const pts = o.points;
  if (!pts || pts.length < 2) return pts || [];
  const out = [{ x:pts[0].x, y:pts[0].y }];
  const segs = o.closed ? pts.length : pts.length - 1;
  for (let i = 0; i < segs; i++){
    const p0 = pts[i], p1 = pts[(i+1)%pts.length];
    const c1 = { x:p0.x+(p0.h2x||0), y:p0.y+(p0.h2y||0) };
    const c2 = { x:p1.x+(p1.h1x||0), y:p1.y+(p1.h1y||0) };
    for (let s = 1; s <= 10; s++){
      const t = s/10, mt = 1-t;
      out.push({
        x: mt*mt*mt*p0.x + 3*mt*mt*t*c1.x + 3*mt*t*t*c2.x + t*t*t*p1.x,
        y: mt*mt*mt*p0.y + 3*mt*mt*t*c1.y + 3*mt*t*t*c2.y + t*t*t*p1.y
      });
    }
  }
  return out;
}
function simplifyRDP(pts, eps){
  if (pts.length < 3) return pts;
  const sqEps = eps*eps;
  const keep = new Array(pts.length).fill(false);
  keep[0] = keep[pts.length-1] = true;
  const stack = [[0, pts.length-1]];
  while (stack.length){
    const [a, b] = stack.pop();
    let maxD = 0, idx = -1;
    const dx = pts[b].x - pts[a].x, dy = pts[b].y - pts[a].y;
    const l2 = dx*dx + dy*dy;
    for (let i = a+1; i < b; i++){
      let d;
      if (l2 === 0){ d = (pts[i].x-pts[a].x)**2 + (pts[i].y-pts[a].y)**2; }
      else {
        let t = ((pts[i].x-pts[a].x)*dx + (pts[i].y-pts[a].y)*dy) / l2;
        t = clamp(t, 0, 1);
        d = (pts[i].x-pts[a].x-t*dx)**2 + (pts[i].y-pts[a].y-t*dy)**2;
      }
      if (d > maxD){ maxD = d; idx = i; }
    }
    if (maxD > sqEps && idx > 0){ keep[idx] = true; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

function itemOutline(o){
  if (!o) return [];
  if (o.type === 'line' || o.type === 'dimension') return [{x:o.x,y:o.y},{x:o.x2,y:o.y2}];
  if (o.type === 'rect') return [{x:o.x,y:o.y},{x:o.x+o.w,y:o.y},{x:o.x+o.w,y:o.y+o.h},{x:o.x,y:o.y+o.h}];
  if (o.type === 'circle'){
    const out = [], n = 36;
    for (let i = 0; i < n; i++){ const a = i/n*Math.PI*2; out.push({x:o.x+o.r*Math.cos(a), y:o.y+o.r*Math.sin(a)}); }
    return out;
  }
  if (o.type === 'bezier') return bezierToPolyline(o);
  return o.points || [];
}
function itemBounds(o){
  const pts = itemOutline(o);
  if (!pts.length) return {minX:0,minY:0,maxX:0,maxY:0};
  let minX=Infinity, minY=Infinity, maxX=-Infinity, maxY=-Infinity;
  for (const p of pts){ if (p.x<minX)minX=p.x; if(p.y<minY)minY=p.y; if(p.x>maxX)maxX=p.x; if(p.y>maxY)maxY=p.y; }
  return {minX,minY,maxX,maxY};
}
function bounds(){
  if (!state.items.length) return {minX:-20,minY:-20,maxX:20,maxY:20};
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  for (const o of state.items){
    const b = itemBounds(o);
    minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY);
    maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY);
  }
  return {minX,minY,maxX,maxY};
}

/* ============================================================
   4) Snap
   ============================================================ */
function getSnapCandidates(){
  const cands = [];
  for (const o of state.items){
    const layer = state.layers.find(l => l.id === o.layer);
    if (!layer || !layer.visible) continue;
    const pts = itemOutline(o);
    pts.forEach(p => cands.push({ p:{x:p.x,y:p.y}, kind:'endpoint' }));
    for (let i = 1; i < pts.length; i++){
      cands.push({ p:{ x:(pts[i-1].x+pts[i].x)/2, y:(pts[i-1].y+pts[i].y)/2 }, kind:'midpoint' });
    }
  }
  return cands;
}
function findSnap(raw){
  if (!state.snap) return { p: raw, kind: null };
  const tol = 9 / state.scale;
  let best = null, bestD = tol;
  for (const c of getSnapCandidates()){
    const d = Math.hypot(c.p.x - raw.x, c.p.y - raw.y);
    if (d < bestD){ bestD = d; best = c; }
  }
  if (best) return { p:{x:best.p.x, y:best.p.y}, kind: best.kind };
  const st = state.gridStep || 1;
  return { p:{ x: Math.round(raw.x/st)*st, y: Math.round(raw.y/st)*st }, kind: 'grid' };
}

/* ============================================================
   5) التحديد والـ Handles
   ============================================================ */
function getSelected(){ return state.items.find(o => o.id === state.selected) || null; }
function getHandles(o){
  const H = [];
  if (!o) return H;
  if (o.type === 'line' || o.type === 'dimension'){
    H.push({ x:o.x, y:o.y, key:'p1' }, { x:o.x2, y:o.y2, key:'p2' });
  } else if (o.type === 'rect'){
    H.push({ x:o.x, y:o.y, key:'nw' }, { x:o.x+o.w, y:o.y, key:'ne' }, { x:o.x+o.w, y:o.y+o.h, key:'se' }, { x:o.x, y:o.y+o.h, key:'sw' });
  } else if (o.type === 'circle'){
    H.push({ x:o.x, y:o.y, key:'c' }, { x:o.x+o.r, y:o.y, key:'r' });
  } else if (o.points){
    o.points.forEach((p, i) => H.push({ x:p.x, y:p.y, key:'pt' + i }));
  }
  return H;
}
function hitHandle(pt){
  const o = getSelected(); if (!o) return null;
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
    if (o.type === 'circle') ok = Math.abs(Math.hypot(p.x-o.x, p.y-o.y) - o.r) < tol;
    else if (o.type === 'rect'){
      const a={x:o.x,y:o.y}, b={x:o.x+o.w,y:o.y}, c={x:o.x+o.w,y:o.y+o.h}, d={x:o.x,y:o.y+o.h};
      ok = [[a,b],[b,c],[c,d],[d,a]].some(v => distSeg(p, v[0], v[1]) < tol);
    } else if (o.type === 'line' || o.type === 'dimension') ok = distSeg(p, {x:o.x,y:o.y}, {x:o.x2,y:o.y2}) < tol;
    else {
      const pts = itemOutline(o);
      for (let j = 1; j < pts.length; j++){ if (distSeg(p, pts[j-1], pts[j]) < tol){ ok = true; break; } }
      if (!ok && o.closed && pts.length > 2) ok = distSeg(p, pts[pts.length-1], pts[0]) < tol;
    }
    if (ok) return o;
  }
  return null;
}
function applyHandleDrag(o, key, pt){
  if (o.type === 'line' || o.type === 'dimension'){
    if (key === 'p1'){ o.x = pt.x; o.y = pt.y; } else { o.x2 = pt.x; o.y2 = pt.y; }
  } else if (o.type === 'rect'){
    let x1=o.x, y1=o.y, x2=o.x+o.w, y2=o.y+o.h;
    if (key === 'nw'){ x1=pt.x; y1=pt.y; }
    else if (key === 'ne'){ x2=pt.x; y1=pt.y; }
    else if (key === 'se'){ x2=pt.x; y2=pt.y; }
    else { x1=pt.x; y2=pt.y; }
    o.x=Math.min(x1,x2); o.y=Math.min(y1,y2); o.w=Math.abs(x2-x1); o.h=Math.abs(y2-y1);
  } else if (o.type === 'circle'){
    if (key === 'r'){ o.r = Math.max(0.1, Math.hypot(pt.x - o.x, pt.y - o.y)); }
    else { o.x = pt.x; o.y = pt.y; }
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
  const px = state.scale * state.gridStep;
  if (px < 5) return;
  ctx.strokeStyle = 'rgba(87,117,157,.14)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = ((state.ox % px) + px) % px; x < w; x += px){ ctx.moveTo(x, 0); ctx.lineTo(x, h); }
  for (let y = ((state.oy % px) + px) % px; y < h; y += px){ ctx.moveTo(0, y); ctx.lineTo(w, y); }
  ctx.stroke();
}
function drawAxes(){
  const { w, h } = dims();
  ctx.strokeStyle = 'rgba(87,150,190,.4)';
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
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  if (asDraft) ctx.setLineDash([6,4]);

  if (o.type === 'dimension'){
    const a = screen({x:o.x, y:o.y}), b = screen({x:o.x2, y:o.y2});
    const dx = b.x-a.x, dy = b.y-a.y, len = Math.hypot(dx, dy);
    if (len > 1){
      const ux = dx/len, uy = dy/len, px = -uy, py = ux;
      ctx.setLineDash([]);
      ctx.strokeStyle = color; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(a.x - px*6, a.y - py*6); ctx.lineTo(a.x + px*6, a.y + py*6);
      ctx.moveTo(b.x - px*6, b.y - py*6); ctx.lineTo(b.x + px*6, b.y + py*6);
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.stroke();
      const al = 9, aw = 4;
      ctx.fillStyle = color;
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
      const val = Math.hypot(o.x2-o.x, o.y2-o.y).toFixed(1) + ' cm';
      ctx.font = 'bold 11px Tahoma'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const mx = (a.x+b.x)/2, my = (a.y+b.y)/2;
      const tw = ctx.measureText(val).width;
      ctx.fillStyle = 'rgba(10,18,33,0.9)';
      ctx.fillRect(mx - tw/2 - 4, my - 20, tw + 8, 14);
      ctx.fillStyle = color;
      ctx.fillText(val, mx, my - 13);
    }
    ctx.restore();
    return;
  }

  if (o.type === 'circle'){
    const c = screen({x:o.x, y:o.y});
    ctx.beginPath(); ctx.arc(c.x, c.y, Math.abs(o.r*state.scale), 0, Math.PI*2);
    if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); }
    ctx.stroke();
  } else if (o.type === 'rect'){
    const a = screen({x:o.x, y:o.y}), b = screen({x:o.x+o.w, y:o.y+o.h});
    ctx.beginPath(); ctx.rect(a.x, a.y, b.x-a.x, b.y-a.y);
    if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); }
    ctx.stroke();
  } else if (o.type === 'bezier'){
    const pts = bezierToPolyline(o);
    if (pts.length >= 2){
      ctx.beginPath();
      pts.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); });
      if (o.closed){ ctx.closePath(); if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); } }
      ctx.stroke();
    }
  } else {
    const pts = (o.type === 'line' || o.type === 'dimension') ? [{x:o.x,y:o.y},{x:o.x2,y:o.y2}] : (o.points || []);
    if (pts.length >= 2){
      ctx.beginPath();
      pts.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); });
      if (o.closed){ ctx.closePath(); if (!asDraft){ ctx.fillStyle = color + '14'; ctx.fill(); } }
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawSelection(){
  const o = getSelected(); if (!o) return;
  ctx.save();
  ctx.setLineDash([5,4]); ctx.strokeStyle = '#f4b34e'; ctx.lineWidth = 1.5;
  const pts = itemOutline(o);
  if (pts.length > 1){
    ctx.beginPath();
    pts.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); });
    if (o.closed || o.type === 'rect' || o.type === 'circle') ctx.closePath();
    ctx.stroke();
  }
  ctx.setLineDash([]);
  getHandles(o).forEach(h => {
    const s = screen(h);
    ctx.beginPath(); ctx.fillStyle = '#fff'; ctx.strokeStyle = '#f2ad4b'; ctx.lineWidth = 1.5;
    ctx.arc(s.x, s.y, 4.5, 0, Math.PI*2); ctx.fill(); ctx.stroke();
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
  if (kind === 'endpoint') ctx.strokeRect(s.x-5, s.y-5, 10, 10);
  else if (kind === 'midpoint'){
    ctx.beginPath(); ctx.moveTo(s.x, s.y-6); ctx.lineTo(s.x+6, s.y); ctx.lineTo(s.x, s.y+6); ctx.lineTo(s.x-6, s.y); ctx.closePath(); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.moveTo(s.x-4, s.y); ctx.lineTo(s.x+4, s.y); ctx.moveTo(s.x, s.y-4); ctx.lineTo(s.x, s.y+4); ctx.stroke();
  }
  ctx.restore();
}

function drawDraft(){
  const d = state.draft; if (!d) return;
  ctx.save();
  if (d.type === 'line' || d.type === 'dimension'){
    drawItem(d, true);
    const s = screen({x:d.x2, y:d.y2});
    const len = Math.hypot(d.x2-d.x, d.y2-d.y);
    ctx.font = '11px Tahoma'; ctx.fillStyle = '#f2ad4b';
    ctx.fillText(`${len.toFixed(1)} cm`, s.x + 8, s.y - 8);
  } else if (d.type === 'rect'){
    drawItem(d, true);
    const s = screen({x:d.x, y:d.y});
    ctx.font = '11px Tahoma'; ctx.fillStyle = '#f2ad4b';
    ctx.fillText(`${Math.abs(d.w).toFixed(1)}×${Math.abs(d.h).toFixed(1)}`, s.x + 8, s.y - 8);
  } else if (d.type === 'circle'){
    drawItem(d, true);
    const s = screen({x:d.x, y:d.y});
    ctx.font = '11px Tahoma'; ctx.fillStyle = '#f2ad4b';
    ctx.fillText(`r=${d.r.toFixed(1)} ⌀${(d.r*2).toFixed(1)}`, s.x + 8, s.y - 8);
  } else if (d.type === 'free' || d.type === 'poly' || d.type === 'bezier'){
    let pts = d.points.slice();
    if (d.preview) pts = pts.concat([d.preview]);
    if (d.type === 'bezier' && pts.length >= 2){
      const tmp = pts.map(p => ({x:p.x, y:p.y, h1x:0, h1y:0, h2x:0, h2y:0}));
      smoothBezier(tmp, d.closed);
      const line = bezierToPolyline({type:'bezier', points:tmp, closed:d.closed});
      ctx.strokeStyle = '#f2ad4b'; ctx.lineWidth = 1.5; ctx.setLineDash([5,3]);
      ctx.beginPath();
      line.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); });
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#f2ad4b'; ctx.lineWidth = 1.5; ctx.setLineDash([5,3]);
      ctx.beginPath();
      pts.forEach((p, i) => { const s = screen(p); i ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); });
      ctx.stroke();
    }
    ctx.setLineDash([]);
    d.points.forEach(p => {
      const s = screen(p);
      ctx.fillStyle = '#f2ad4b'; ctx.beginPath(); ctx.arc(s.x, s.y, 3.5, 0, Math.PI*2); ctx.fill();
    });
  }
  ctx.restore();
}

function draw2d(){
  const { w, h } = dims();
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0a1221';
  ctx.fillRect(0, 0, w, h);
  drawGrid(); drawAxes();
  for (const o of state.items) drawItem(o, false);
  if (state.draft) drawDraft();
  drawSelection();
  drawSnapIndicator();
  $('countInfo').textContent = state.items.length;
  $('activeLayerInfo').textContent = state.layers.find(l => l.id === state.activeLayer)?.name || '-';
  $('zoomInfo').textContent = Math.round(state.scale / 8 * 100) + '%';
}

/* ============================================================
   7) محاكاة 3D — Cloth Physics
   ============================================================ */
const sim = {
  cloths: [],
  running: true,
  wireframe: false,
  wind: false,
  rotY: 0.35, rotX: 0.15, zoom: 1,
  lastTime: 0,
  elapsed: 0,
  raf: null,
  fps: 0,
  frames: 0,
  fpsTime: 0
};

/* Layouts للقطع */
const LAYOUTS = {
  front: (p, b) => {
    const t = (p.x - b.minX) / Math.max(0.01, b.maxX - b.minX);
    const theta = (t - 0.5) * Math.PI * 0.85;
    const R = 13;
    return { x: Math.sin(theta)*R, y: p.y, z: Math.cos(theta)*R };
  },
  back: (p, b) => {
    const t = (p.x - b.minX) / Math.max(0.01, b.maxX - b.minX);
    const theta = (t - 0.5) * Math.PI * 0.85;
    const R = 13;
    return { x: Math.sin(theta)*R, y: p.y, z: -Math.cos(theta)*R };
  },
  collar: (p, b) => {
    const t = (p.x - b.minX) / Math.max(0.01, b.maxX - b.minX);
    const theta = (t - 0.5) * Math.PI * 0.5;
    const R = 5;
    return { x: Math.sin(theta)*R, y: p.y, z: Math.cos(theta)*R };
  },
  sleeveL: (p, b) => {
    // x يتراوح من -55 إلى -15 (الكتف في -15)
    const shoulderX = -15, wristX = -55;
    const t = (shoulderX - p.x) / (shoulderX - wristX);
    const baseX = shoulderX + (wristX - shoulderX) * clamp(t, 0, 1);
    const yNorm = (p.y - b.minY) / Math.max(0.01, b.maxY - b.minY);
    const theta = (yNorm - 0.5) * Math.PI * 0.9;
    return { x: baseX, y: 40 + Math.sin(theta)*5, z: Math.cos(theta)*5 };
  },
  sleeveR: (p, b) => {
    const shoulderX = 15, wristX = 55;
    const t = (p.x - shoulderX) / (wristX - shoulderX);
    const baseX = shoulderX + (wristX - shoulderX) * clamp(t, 0, 1);
    const yNorm = (p.y - b.minY) / Math.max(0.01, b.maxY - b.minY);
    const theta = (yNorm - 0.5) * Math.PI * 0.9;
    return { x: baseX, y: 40 + Math.sin(theta)*5, z: Math.cos(theta)*5 };
  },
  pocket: (p, b) => ({ x: p.x, y: p.y, z: 13.2 }),
  placket: (p, b) => ({ x: p.x, y: p.y, z: 13.5 }),
  neckline: (p, b) => ({ x: p.x, y: p.y, z: 13.5 }),
  generic: (p, b) => ({ x: p.x, y: p.y, z: 0 })
};

function getLayoutFor(o){
  if (o.role && LAYOUTS[o.role]) return LAYOUTS[o.role];
  return LAYOUTS.generic;
}

class ClothPanel {
  constructor(item, opts){
    this.item = item;
    this.role = item.role || 'generic';
    this.color = item.color || '#45b9e8';
    this.particles = [];
    this.springs = [];
    this.triangles = [];
    this.pinned = [];
    
    const outline = itemOutline(item);
    if (!outline || outline.length < 3) return;
    
    const b = itemBounds(item);
    const spanX = b.maxX - b.minX;
    const spanY = b.maxY - b.minY;
    if (spanX < 0.5 || spanY < 0.5) return;
    
    const cell = opts.cellSize || 4;
    const cols = Math.max(3, Math.round(spanX / cell));
    const rows = Math.max(3, Math.round(spanY / cell));
    
    const layoutFn = getLayoutFor(item);
    
    // grid: index[row][col] = particle index or -1
    const grid = [];
    const idxMap = {};
    
    for (let j = 0; j <= rows; j++){
      grid[j] = [];
      for (let i = 0; i <= cols; i++){
        const x2d = b.minX + (i / cols) * spanX;
        const y2d = b.minY + (j / rows) * spanY;
        if (pointInPolygon({x:x2d, y:y2d}, outline)){
          const pos3 = layoutFn({x:x2d, y:y2d}, b, item);
          const pid = this.particles.length;
          this.particles.push({
            x: pos3.x, y: pos3.y, z: pos3.z,
            px: pos3.x, py: pos3.y, pz: pos3.z,
            pinned: false, x2d, y2d
          });
          grid[j][i] = pid;
          idxMap[j + '_' + i] = pid;
        } else {
          grid[j][i] = -1;
        }
      }
    }
    
    if (this.particles.length < 4) return;
    
    // Springs
    const restLen = cell;
    const stiffK = 0.55;
    const addSpring = (a, b2, k) => {
      if (a < 0 || b2 < 0) return;
      const pa = this.particles[a], pb = this.particles[b2];
      const rest = Math.hypot(pa.x2d - pb.x2d, pa.y2d - pb.y2d) || restLen;
      this.springs.push({ a, b: b2, rest, k: k || stiffK });
    };
    
    for (let j = 0; j <= rows; j++){
      for (let i = 0; i <= cols; i++){
        const cur = grid[j][i];
        if (cur < 0) continue;
        if (i < cols) addSpring(cur, grid[j][i+1], stiffK);
        if (j < rows) addSpring(cur, grid[j+1][i], stiffK);
        if (i < cols && j < rows){
          addSpring(cur, grid[j+1][i+1], stiffK * 0.5);
          addSpring(grid[j][i+1], grid[j+1][i], stiffK * 0.5);
        }
        // bend (skip 1)
        if (i < cols - 1) addSpring(cur, grid[j][i+2], stiffK * 0.25);
        if (j < rows - 1) addSpring(cur, grid[j+2][i], stiffK * 0.25);
      }
    }
    
    // Triangles
    for (let j = 0; j < rows; j++){
      for (let i = 0; i < cols; i++){
        const a = grid[j][i], b2 = grid[j][i+1], c = grid[j+1][i+1], d = grid[j+1][i];
        if (a >= 0 && b2 >= 0 && c >= 0) this.triangles.push({a, b:b2, c});
        if (a >= 0 && c >= 0 && d >= 0) this.triangles.push({a, b:c, c:d});
      }
    }
    
    // Pin top edge (بأعلى قيمة Y)
    const maxY2d = b.maxY;
    const threshold = (maxY2d - b.minY) * 0.88 + b.minY;
    const layoutForPin = getLayoutFor(item);
    for (const p of this.particles){
      // كل الأطراف العلوية
      if (p.y2d > threshold){
        p.pinned = true;
      }
    }
    // Pin also for sleeve at shoulder end (near -15 or 15)
    if (this.role === 'sleeveL'){
      for (const p of this.particles) if (p.x2d > -18 && p.x2d < -12) p.pinned = true;
    } else if (this.role === 'sleeveR'){
      for (const p of this.particles) if (p.x2d > 12 && p.x2d < 18) p.pinned = true;
    }
    
    this.pinned = this.particles.filter(p => p.pinned);
  }
  
  step(dt, windOn){
    if (!this.particles.length) return;
    const g = -980;
    const damp = 0.985;
    const windBase = windOn ? 200 * Math.sin(sim.elapsed * 1.5) : 0;
    
    for (const p of this.particles){
      if (p.pinned) continue;
      const vx = (p.x - p.px) * damp;
      const vy = (p.y - p.py) * damp;
      const vz = (p.z - p.pz) * damp;
      p.px = p.x; p.py = p.y; p.pz = p.z;
      p.x += vx + (windOn ? Math.sin(sim.elapsed * 2 + p.y * 0.1) * windBase * dt * dt * 0.1 : 0);
      p.y += vy + g * dt * dt;
      p.z += vz + (windOn ? Math.cos(sim.elapsed * 1.7 + p.x * 0.05) * windBase * dt * dt * 0.08 : 0);
    }
    
    // Constraints
    for (let iter = 0; iter < 3; iter++){
      for (const s of this.springs){
        const a = this.particles[s.a], b2 = this.particles[s.b];
        const dx = b2.x - a.x, dy = b2.y - a.y, dz = b2.z - a.z;
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d < 0.0001) continue;
        const diff = (d - s.rest) / d * 0.5 * s.k;
        const ox = dx * diff, oy = dy * diff, oz = dz * diff;
        if (!a.pinned){ a.x += ox; a.y += oy; a.z += oz; }
        if (!b2.pinned){ b2.x -= ox; b2.y -= oy; b2.z -= oz; }
      }
      // floor
      for (const p of this.particles){
        if (p.pinned) continue;
        if (p.y < 0){ p.y = 0; p.z = p.pz; }
      }
    }
  }
  
  reset(){
    // إعادة المواضع من الحالة الأصلية
    // نستخدم القالب الأصلي
    const fresh = new ClothPanel(this.item, { cellSize: 4 });
    this.particles = fresh.particles;
    this.springs = fresh.springs;
    this.triangles = fresh.triangles;
    this.pinned = fresh.pinned;
  }
}

/* ============================================================
   8) إعداد المحاكاة 3D
   ============================================================ */
function buildSimulation(){
  sim.cloths = [];
  // أزرار كعناصر منفصلة
  sim.buttons = [];
  
  for (const item of state.items){
    const layer = state.layers.find(l => l.id === item.layer);
    if (!layer || !layer.visible) continue;
    
    if (item.type === 'circle' && item.r < 1){
      // زر
      sim.buttons.push(item);
      continue;
    }
    if (item.type === 'line' || item.type === 'dimension'){
      // خطوط كـ cloth رقيق جداً - تجاهل
      continue;
    }
    
    // تجاهل العناصر الصغيرة جداً
    const b = itemBounds(item);
    if ((b.maxX - b.minX) < 1 || (b.maxY - b.minY) < 1) continue;
    
    const cloth = new ClothPanel(item, { cellSize: 4 });
    if (cloth.particles.length >= 4){
      sim.cloths.push(cloth);
    }
  }
  
  $('statusText').textContent = `تم تحميل ${sim.cloths.length} قطعة قماش في المحاكاة الفيزيائية`;
}

/* ============================================================
   9) الرسم 3D
   ============================================================ */
function project3D(p, cam, w, h){
  const cy = Math.cos(cam.rotY), sy = Math.sin(cam.rotY);
  let x1 = p.x * cy + p.z * sy;
  let z1 = -p.x * sy + p.z * cy;
  const cx = Math.cos(cam.rotX), sx = Math.sin(cam.rotX);
  let y2 = (p.y - 30) * cx - z1 * sx;
  let z2 = (p.y - 30) * sx + z1 * cx;
  const dist = 90;
  const view = dist + z2;
  const scale = cam.zoom * 320 / Math.max(5, view);
  return {
    x: w/2 + x1 * scale,
    y: h/2 - y2 * scale,
    z: z2,
    scale
  };
}

function shadeColor(hex, k){
  if (!hex || hex[0] !== '#') return hex;
  const h = hex.replace('#', '');
  const r = parseInt(h.substr(0,2), 16);
  const g = parseInt(h.substr(2,2), 16);
  const b = parseInt(h.substr(4,2), 16);
  const f = v => clamp(Math.round(v * k), 0, 255);
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}

function render3d(){
  const w = c3.clientWidth, h = c3.clientHeight;
  g3.setTransform(DPR, 0, 0, DPR, 0, 0);
  g3.clearRect(0, 0, w, h);
  const grad = g3.createRadialGradient(w/2, h/2, 20, w/2, h/2, Math.max(w, h)/1.1);
  grad.addColorStop(0, '#172b45');
  grad.addColorStop(1, '#080e1a');
  g3.fillStyle = grad;
  g3.fillRect(0, 0, w, h);
  
  // الجاذبية الأرضية (floor)
  const floorY = project3D({x:0, y:0, z:0}, sim, w, h);
  g3.strokeStyle = 'rgba(66,183,233,0.15)';
  g3.lineWidth = 1;
  g3.beginPath();
  g3.moveTo(0, floorY.y);
  g3.lineTo(w, floorY.y);
  g3.stroke();
  
  if (!sim.cloths.length && !(sim.buttons && sim.buttons.length)){
    g3.fillStyle = '#d5e1f1';
    g3.font = '15px Tahoma';
    g3.textAlign = 'center';
    g3.fillText('أدرج قالباً أو ارسم شكلاً أولاً لبدء المحاكاة', w/2, h/2);
    return;
  }
  
  const lightDir = V.norm({x:-0.4, y:0.9, z:0.6});
  
  // جمع كل المثلثات من كل الأقمشة
  const allTris = [];
  for (const cloth of sim.cloths){
    const cam = sim;
    for (const t of cloth.triangles){
      const pa = cloth.particles[t.a], pb = cloth.particles[t.b], pc = cloth.particles[t.c];
      const v1 = {x: pb.x - pa.x, y: pb.y - pa.y, z: pb.z - pa.z};
      const v2 = {x: pc.x - pa.x, y: pc.y - pa.y, z: pc.z - pa.z};
      const normal = V.norm(V.cross(v1, v2));
      const cx = (pa.x + pb.x + pc.x) / 3;
      const cy = (pa.y + pb.y + pc.y) / 3;
      const cz = (pa.z + pb.z + pc.z) / 3;
      const sa = project3D(pa, cam, w, h);
      const sb = project3D(pb, cam, w, h);
      const sc = project3D(pc, cam, w, h);
      allTris.push({ sa, sb, sc, normal, cz, color: cloth.color, cx, cy });
    }
  }
  
  allTris.sort((a, b) => b.cz - a.cz);
  
  // رسم المثلثات
  for (const tri of allTris){
    let diff = Math.abs(V.dot(tri.normal, lightDir));
    const shade = 0.4 + 0.6 * diff;
    const col = shadeColor(tri.color, shade);
    g3.beginPath();
    g3.moveTo(tri.sa.x, tri.sa.y);
    g3.lineTo(tri.sb.x, tri.sb.y);
    g3.lineTo(tri.sc.x, tri.sc.y);
    g3.closePath();
    g3.fillStyle = col;
    g3.fill();
    if (sim.wireframe){
      g3.strokeStyle = 'rgba(120,220,255,0.35)';
      g3.lineWidth = 0.5;
      g3.stroke();
    } else {
      g3.strokeStyle = col;
      g3.lineWidth = 0.5;
      g3.stroke();
    }
  }
  
  // أزرار
  if (sim.buttons){
    for (const btn of sim.buttons){
      const pos3 = { x: btn.x, y: btn.y, z: 13.8 };
      const proj = project3D(pos3, sim, w, h);
      const r = Math.max(2, btn.r * proj.scale * 2);
      g3.fillStyle = btn.color || '#f2ad4b';
      g3.beginPath();
      g3.arc(proj.x, proj.y, r, 0, Math.PI * 2);
      g3.fill();
      g3.strokeStyle = 'rgba(0,0,0,0.3)';
      g3.lineWidth = 1;
      g3.stroke();
    }
  }
  
  // HUD info
  g3.font = '11px Tahoma';
  g3.textAlign = 'left';
  g3.fillStyle = '#8fa7c4';
  g3.fillText(`قطع: ${sim.cloths.length} · جزيئات: ${sim.cloths.reduce((s,c)=>s+c.particles.length,0)}`, 12, 18);
}

function stepAndRender(now){
  const dt = sim.lastTime ? Math.min(1/30, (now - sim.lastTime)/1000) : 1/60;
  sim.lastTime = now;
  sim.elapsed += dt;
  
  // FPS
  sim.frames++;
  if (now - sim.fpsTime > 500){
    sim.fps = Math.round(sim.frames * 1000 / (now - sim.fpsTime));
    sim.frames = 0;
    sim.fpsTime = now;
    $('fpsBadge').textContent = sim.fps + ' FPS';
  }
  
  if (sim.running){
    for (const cloth of sim.cloths) cloth.step(dt, sim.wind);
  }
  
  render3d();
}

function start3dLoop(){
  if (sim.raf) return;
  sim.lastTime = 0;
  sim.fpsTime = performance.now();
  const loop = (now) => {
    if (!state.is3d){ sim.raf = null; return; }
    stepAndRender(now);
    sim.raf = requestAnimationFrame(loop);
  };
  sim.raf = requestAnimationFrame(loop);
}
function stop3dLoop(){
  if (sim.raf){ cancelAnimationFrame(sim.raf); sim.raf = null; }
}

/* ============================================================
   10) التبديل بين العروض
   ============================================================ */
function switchView(v){
  state.is3d = v;
  canvas.style.display = v ? 'none' : 'block';
  c3.style.display = v ? 'block' : 'none';
  $('tab2d').classList.toggle('active', !v);
  $('tab3d').classList.toggle('active', v);
  $('previewBtn').textContent = v ? '← عودة للرسم' : '▶ 3D مباشر';
  $('viewMessage').textContent = v
    ? 'محاكاة فيزيائية حقيقية · اسحب للتدوير · عجلة للتكبير'
    : 'ارسم أو أدرج قالباً — ثم اضغط "محاكاة 3D" لترى القماش يتحرك';
  $('simControls').classList.toggle('hidden', !v);
  $('fpsBadge').style.display = v ? '' : 'none';
  
  if (v){
    buildSimulation();
    if (sim.buttons === undefined) sim.buttons = [];
    if (sim.cloths.length === 0 && (!sim.buttons || sim.buttons.length === 0)){
      // لا شيء لتحاكيه
    }
    start3dLoop();
  } else {
    stop3dLoop();
    draw();
  }
}

/* ============================================================
   11) تفاعل 3D
   ============================================================ */
let drag3d = null;
c3.addEventListener('pointerdown', e => {
  c3.setPointerCapture(e.pointerId);
  drag3d = { x: e.clientX, y: e.clientY, rotY: sim.rotY, rotX: sim.rotX };
});
c3.addEventListener('pointermove', e => {
  if (!drag3d) return;
  const dx = e.clientX - drag3d.x;
  const dy = e.clientY - drag3d.y;
  sim.rotY = drag3d.rotY + dx * 0.01;
  sim.rotX = clamp(drag3d.rotX + dy * 0.01, -Math.PI/2.2, Math.PI/2.2);
});
c3.addEventListener('pointerup', () => { drag3d = null; });
c3.addEventListener('pointercancel', () => { drag3d = null; });
c3.addEventListener('wheel', e => {
  e.preventDefault();
  sim.zoom = clamp(sim.zoom * (e.deltaY < 0 ? 1.1 : 0.9), 0.25, 5);
}, { passive:false });
c3.addEventListener('dblclick', () => {
  sim.rotY = 0.35; sim.rotX = 0.15; sim.zoom = 1;
});

$('simPlay').onclick = () => {
  sim.running = !sim.running;
  $('simPlay').classList.toggle('active', sim.running);
  $('simPlay').textContent = sim.running ? '▶ تشغيل' : '⏸ إيقاف';
};
$('simReset').onclick = () => {
  buildSimulation();
};
$('simWind').onclick = () => {
  sim.wind = !sim.wind;
  $('simWind').classList.toggle('active', sim.wind);
};
$('simWire').onclick = () => {
  sim.wireframe = !sim.wireframe;
  $('simWire').classList.toggle('active', sim.wireframe);
};

/* ============================================================
   12) تاريخ التراجع
   ============================================================ */
function saveHistory(){
  state.undo.push(clone(state.items));
  if (state.undo.length > 60) state.undo.shift();
  state.redo = [];
}
function undo(){
  if (!state.undo.length) return;
  state.redo.push(clone(state.items));
  state.items = state.undo.pop();
  state.selected = null; state.draft = null; state.snapIndicator = null;
  renderProps(); draw(); autosave();
}
function redo(){
  if (!state.redo.length) return;
  state.undo.push(clone(state.items));
  state.items = state.redo.pop();
  state.selected = null; state.draft = null; state.snapIndicator = null;
  renderProps(); draw(); autosave();
}

/* ============================================================
   13) إجراءات التعديل
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
    if (axis === 'v'){ o.x = 2*cx-o.x; o.x2 = 2*cx-o.x2; }
    else { o.y = 2*cy-o.y; o.y2 = 2*cy-o.y2; }
  } else if (o.type === 'rect'){
    if (axis === 'v') o.x = 2*cx - (o.x + o.w);
    else o.y = 2*cy - (o.y + o.h);
  } else if (o.type === 'circle'){
    if (axis === 'v') o.x = 2*cx - o.x; else o.y = 2*cy - o.y;
  } else if (o.points){
    o.points.forEach(p => { if (axis === 'v') p.x = 2*cx - p.x; else p.y = 2*cy - p.y; });
  }
}
function rotateItem(o, deg){
  const rad = deg * Math.PI / 180, cos = Math.cos(rad), sin = Math.sin(rad);
  const b = itemBounds(o);
  const c = { x:(b.minX+b.maxX)/2, y:(b.minY+b.maxY)/2 };
  const rot = p => {
    const dx = p.x - c.x, dy = p.y - c.y;
    return { x: c.x + dx*cos - dy*sin, y: c.y + dx*sin + dy*cos };
  };
  if (o.type === 'line' || o.type === 'dimension'){
    const a = rot({x:o.x, y:o.y}), e = rot({x:o.x2, y:o.y2});
    o.x = a.x; o.y = a.y; o.x2 = e.x; o.y2 = e.y;
  } else if (o.type === 'circle'){
    const a = rot({x:o.x, y:o.y}); o.x = a.x; o.y = a.y;
  } else if (o.type === 'rect'){
    const pts = [
      {x:o.x,y:o.y},{x:o.x+o.w,y:o.y},{x:o.x+o.w,y:o.y+o.h},{x:o.x,y:o.y+o.h}
    ].map(rot);
    o.type = 'poly'; o.points = pts; o.closed = true;
    delete o.x; delete o.y; delete o.w; delete o.h;
  } else if (o.points){
    o.points.forEach(p => { const r = rot(p); p.x = r.x; p.y = r.y; });
  }
}
function offsetPath(pts, dist, closed){
  const n = pts.length, out = [];
  for (let i = 0; i < n; i++){
    const prev = pts[(i-1+n)%n], cur = pts[i], next = pts[(i+1)%n];
    let n1 = null, n2 = null;
    if (i > 0 || closed){
      const dx = cur.x-prev.x, dy = cur.y-prev.y, l = Math.hypot(dx,dy)||1;
      n1 = { x:-dy/l, y:dx/l };
    }
    if (i < n-1 || closed){
      const dx = next.x-cur.x, dy = next.y-cur.y, l = Math.hypot(dx,dy)||1;
      n2 = { x:-dy/l, y:dx/l };
    }
    let nx = 0, ny = 0;
    if (n1 && n2){
      nx = (n1.x+n2.x)/2; ny = (n1.y+n2.y)/2;
      const l = Math.hypot(nx,ny)||1;
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
  const c = clone(o); c.id = uid();
  if (c.type === 'line'){
    const dx = c.x2-c.x, dy = c.y2-c.y, l = Math.hypot(dx,dy)||1;
    const nx = -dy/l*dist, ny = dx/l*dist;
    c.x += nx; c.y += ny; c.x2 += nx; c.y2 += ny;
  } else if (c.type === 'rect'){
    c.x -= dist; c.y -= dist; c.w += 2*dist; c.h += 2*dist;
    if (c.w < 0.1 || c.h < 0.1) return null;
  } else if (c.type === 'circle'){
    c.r = Math.max(0.1, c.r + dist);
  } else {
    const pts = itemOutline(c);
    const off = offsetPath(pts, dist, !!c.closed);
    c.type = 'poly'; c.points = off; c.closed = !!c.closed;
    delete c.x; delete c.y; delete c.w; delete c.h; delete c.r;
  }
  return c;
}

/* ============================================================
   14) قوالب التفصيل
   ============================================================ */
const TEMPLATE_COLORS = {
  front:'#45b9e8', back:'#4eb8d4', sleeveL:'#5ec9a0', sleeveR:'#5ec9a0',
  collar:'#f2ad4b', pocket:'#c77aeb', placket:'#e88b6a', neckline:'#f2ad4b',
  waistband:'#8fc5e6', cuff:'#8fc5e6', hem:'#f2ad4b', seam:'#f2ad4b',
  joint:'#d6d6d6', button:'#f2ad4b', generic:'#45b9e8'
};

function applyRoleColor(item){
  if (item.role && TEMPLATE_COLORS[item.role]) item.color = TEMPLATE_COLORS[item.role];
  return item;
}

function templateFrontBodice(){
  const w = 30, h = 55, neckW = 10, neckDrop = 8, armDepth = 18;
  const pts = [
    {x:-w/2, y:0},
    {x: w/2, y:0},
    {x: w/2, y:h - armDepth},
    {x: w/2 - 3, y:h},
    {x: neckW/2, y:h},
    {x: 0, y:h - neckDrop},
    {x: -neckW/2, y:h},
    {x: -w/2 + 3, y:h},
    {x: -w/2, y:h - armDepth}
  ];
  return applyRoleColor({
    id:uid(), type:'poly', closed:true, role:'front',
    layer:'front', color:'#45b9e8', lineWidth:0.35, points: pts
  });
}
function templateBackBodice(){
  const w = 30, h = 55, neckW = 10, neckDrop = 3, armDepth = 18;
  const pts = [
    {x:-w/2, y:0},
    {x: w/2, y:0},
    {x: w/2, y:h - armDepth},
    {x: w/2 - 3, y:h},
    {x: neckW/2, y:h - neckDrop},
    {x: 0, y:h - neckDrop - 1},
    {x: -neckW/2, y:h - neckDrop},
    {x: -w/2 + 3, y:h},
    {x: -w/2, y:h - armDepth}
  ];
  return applyRoleColor({
    id:uid(), type:'poly', closed:true, role:'back',
    layer:'back', color:'#4eb8d4', lineWidth:0.35, points: pts
  });
}
function templateSleeveL(){
  const len = 40;
  return applyRoleColor({
    id:uid(), type:'poly', closed:true, role:'sleeveL',
    layer:'details', color:'#5ec9a0', lineWidth:0.35,
    points: [
      {x:-15, y:55}, {x:-15 - len, y:45},
      {x:-15 - len, y:30}, {x:-15, y:30}
    ]
  });
}
function templateSleeveR(){
  const len = 40;
  return applyRoleColor({
    id:uid(), type:'poly', closed:true, role:'sleeveR',
    layer:'details', color:'#5ec9a0', lineWidth:0.35,
    points: [
      {x:15, y:55}, {x:15 + len, y:45},
      {x:15 + len, y:30}, {x:15, y:30}
    ]
  });
}
function templateCollar(){
  return applyRoleColor({
    id:uid(), type:'rect', role:'collar',
    x:-7, y:55, w:14, h:4,
    layer:'details', color:'#f2ad4b', lineWidth:0.35
  });
}
function templateNeckRound(){
  const pts = [];
  const N = 12, w = 10, d = 8, y0 = 55;
  for (let i = 0; i <= N; i++){
    const t = i / N;
    pts.push({ x:(t - 0.5) * w, y: y0 - Math.sin(t * Math.PI) * d });
  }
  return applyRoleColor({
    id:uid(), type:'poly', role:'neckline',
    layer:'details', color:'#f2ad4b', lineWidth:0.3, points: pts, closed:false
  });
}
function templateNeckV(){
  return applyRoleColor({
    id:uid(), type:'poly', role:'neckline',
    layer:'details', color:'#f2ad4b', lineWidth:0.3, closed:false,
    points: [{x:-5, y:55}, {x:0, y:42}, {x:5, y:55}]
  });
}
function templatePlacket(){
  return applyRoleColor({
    id:uid(), type:'rect', role:'placket',
    x:-1.2, y:20, w:2.4, h:35,
    layer:'details', color:'#e88b6a', lineWidth:0.3
  });
}
function templateButtons(){
  const items = [];
  for (let i = 0; i < 7; i++){
    items.push(applyRoleColor({
      id:uid(), type:'circle', role:'button',
      x:0, y:22 + i * 5, r:0.6,
      layer:'details', color:'#f2ad4b', lineWidth:0.2
    }));
  }
  return items;
}
function templatePocket(){
  return applyRoleColor({
    id:uid(), type:'rect', role:'pocket',
    x:-5, y:20, w:10, h:12,
    layer:'details', color:'#c77aeb', lineWidth:0.3
  });
}
function templateWaistband(){
  return applyRoleColor({
    id:uid(), type:'rect', role:'generic',
    x:-15, y:0, w:30, h:4,
    layer:'front', color:'#8fc5e6', lineWidth:0.3
  });
}
function templateCuff(){
  return applyRoleColor({
    id:uid(), type:'rect', role:'generic',
    x:-55, y:30, w:6, h:15,
    layer:'details', color:'#8fc5e6', lineWidth:0.3
  });
}
function templateHem(){
  return applyRoleColor({
    id:uid(), type:'line', role:'generic',
    x:-15, y:1, x2:15, y2:1,
    layer:'front', color:'#f2ad4b', lineWidth:0.3
  });
}
function templateSeam(){
  return applyRoleColor({
    id:uid(), type:'line', role:'generic',
    x:-15, y:30, x2:15, y2:30,
    layer:'details', color:'#f2ad4b', lineWidth:0.25
  });
}
function templateJoint(){
  return applyRoleColor({
    id:uid(), type:'poly', closed:true, role:'generic',
    layer:'details', color:'#d6d6d6', lineWidth:0.25,
    points: [{x:-2, y:0}, {x:2, y:0}, {x:2, y:55}, {x:-2, y:55}]
  });
}
function templateBodice(){
  // صدرية كاملة مع فتحة وأزرار
  const items = [];
  items.push(templateFrontBodice());
  items.push(templatePlacket());
  items.push(templateNeckRound());
  const btns = templateButtons();
  btns.forEach(b => items.push(b));
  items.push(templatePocket());
  return items;
}

const TEMPLATES = {
  front: templateFrontBodice,
  back: templateBackBodice,
  sleeveL: templateSleeveL,
  sleeveR: templateSleeveR,
  collar: templateCollar,
  neckRound: templateNeckRound,
  neckV: templateNeckV,
  placket: templatePlacket,
  buttons: templateButtons,
  pocket: templatePocket,
  waistband: templateWaistband,
  cuff: templateCuff,
  hem: templateHem,
  seam: templateSeam,
  joint: templateJoint,
  bodice: templateBodice
};

function insertTemplate(kind){
  const fn = TEMPLATES[kind];
  if (!fn) return;
  saveHistory();
  let result = fn();
  const items = Array.isArray(result) ? result : [result];
  const newIds = [];
  for (const item of items){
    item.id = uid();
    state.items.push(item);
    newIds.push(item.id);
  }
  if (newIds.length) state.selected = newIds[newIds.length - 1];
  renderProps();
  draw(); autosave();
  $('statusText').textContent = `تم إدراج قالب (${items.length} عنصر) — يمكنك تعديله`;
}

$('patternToolbar').addEventListener('click', e => {
  const b = e.target.closest('.pattern-btn');
  if (!b) return;
  insertTemplate(b.dataset.pattern);
});

/* ============================================================
   15) لوحة الخصائص
   ============================================================ */
const QUICK_COLORS = ['#45b9e8','#22c58b','#f2ad4b','#e45b69','#c77aeb','#e88b6a','#f5e050','#8fc5e6'];

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
  $('selectionInfo').textContent = 'محدد: ' + (TYPE_NAMES[o.type] || o.type) + (o.role ? ' · ' + o.role : '');
  
  let html = `<div class="field"><label>النوع</label><input value="${TYPE_NAMES[o.type] || o.type}" disabled></div>`;
  
  if (o.type === 'line' || o.type === 'dimension'){
    html += `<div class="row">
      <div class="field"><label>X1</label><input id="pX1" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y1</label><input id="pY1" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>X2</label><input id="pX2" type="number" step=".1" value="${o.x2.toFixed(2)}"></div>
      <div class="field"><label>Y2</label><input id="pY2" type="number" step=".1" value="${o.y2.toFixed(2)}"></div>
    </div>`;
  } else if (o.type === 'rect'){
    html += `<div class="row">
      <div class="field"><label>X</label><input id="pX" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y</label><input id="pY" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>العرض</label><input id="pW" type="number" step=".1" value="${o.w.toFixed(2)}"></div>
      <div class="field"><label>الارتفاع</label><input id="pH" type="number" step=".1" value="${o.h.toFixed(2)}"></div>
    </div>`;
  } else if (o.type === 'circle'){
    html += `<div class="row">
      <div class="field"><label>X</label><input id="pX" type="number" step=".1" value="${o.x.toFixed(2)}"></div>
      <div class="field"><label>Y</label><input id="pY" type="number" step=".1" value="${o.y.toFixed(2)}"></div>
    </div>
    <div class="field"><label>نصف القطر</label><input id="pR" type="number" step=".1" value="${o.r.toFixed(2)}"></div>`;
  } else {
    const b = itemBounds(o);
    html += `<div class="row">
      <div class="field"><label>X</label><input id="pX" type="number" step=".1" value="${b.minX.toFixed(2)}"></div>
      <div class="field"><label>Y</label><input id="pY" type="number" step=".1" value="${b.minY.toFixed(2)}"></div>
    </div>
    <div class="row">
      <div class="field"><label>العرض</label><input id="pW" type="number" step=".1" value="${(b.maxX-b.minX).toFixed(2)}"></div>
      <div class="field"><label>الارتفاع</label><input id="pH" type="number" step=".1" value="${(b.maxY-b.minY).toFixed(2)}"></div>
    </div>`;
  }
  
  html += `<div class="field"><label>اللون</label><input id="pColor" type="color" value="${o.color || '#45b9e8'}"></div>
    <div class="swatches">${QUICK_COLORS.map(c => `<div class="swatch" style="background:${c}" data-c="${c}"></div>`).join('')}</div>
    <div class="field" style="margin-top:6px"><label>سماكة</label><input id="pWidth" type="number" step=".05" min=".05" value="${o.lineWidth || .25}"></div>
    <button class="btn good" id="pApply" style="width:100%;margin-top:6px">تطبيق</button>`;
  
  props.innerHTML = html;
  
  props.querySelectorAll('.swatch').forEach(sw => {
    sw.onclick = () => {
      o.color = sw.dataset.c;
      $('pColor').value = o.color;
      draw(); autosave();
      if (state.is3d) buildSimulation();
    };
  });
  
  $('pApply').onclick = applyProps;
}

function applyProps(){
  const o = getSelected(); if (!o) return;
  saveHistory();
  if (o.type === 'line' || o.type === 'dimension'){
    const x1=+$('pX1').value, y1=+$('pY1').value, x2=+$('pX2').value, y2=+$('pY2').value;
    if (![x1,y1,x2,y2].every(Number.isFinite)){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x=x1; o.y=y1; o.x2=x2; o.y2=y2;
  } else if (o.type === 'rect'){
    const x=+$('pX').value, y=+$('pY').value, w=+$('pW').value, h=+$('pH').value;
    if (![x,y,w,h].every(Number.isFinite) || w<=0 || h<=0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x=x; o.y=y; o.w=w; o.h=h;
  } else if (o.type === 'circle'){
    const x=+$('pX').value, y=+$('pY').value, r=+$('pR').value;
    if (![x,y,r].every(Number.isFinite) || r<=0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    o.x=x; o.y=y; o.r=r;
  } else {
    const nx=+$('pX').value, ny=+$('pY').value, nw=+$('pW').value, nh=+$('pH').value;
    if (![nx,ny,nw,nh].every(Number.isFinite) || nw<=0 || nh<=0){ alert('قيم غير صالحة'); state.undo.pop(); return; }
    const b = itemBounds(o);
    const ow = b.maxX-b.minX, oh = b.maxY-b.minY;
    const sx = ow > 0.001 ? nw/ow : 1;
    const sy = oh > 0.001 ? nh/oh : 1;
    if (o.points) o.points.forEach(p => { p.x = nx + (p.x - b.minX) * sx; p.y = ny + (p.y - b.minY) * sy; });
  }
  o.color = $('pColor').value;
  o.lineWidth = Math.max(0.05, +$('pWidth').value || 0.25);
  renderProps(); draw(); autosave();
  if (state.is3d) buildSimulation();
}

/* ============================================================
   16) تفاعل 2D
   ============================================================ */
function pointerPos(e){
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}
function newBezierPoint(p){ return { x:p.x, y:p.y, h1x:0, h1y:0, h2x:0, h2y:0 }; }
function cancelDraft(){ if (state.draft){ state.draft = null; state.undo.pop(); draw(); } }

function finishDraft(){
  const d = state.draft; if (!d) return;
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
    if (Math.hypot(d.x2-d.x, d.y2-d.y) < 0.05){ state.undo.pop(); draw(); return; }
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
  const s = pointerPos(e), raw = world(s.x, s.y);
  if (e.button === 1 || e.button === 2){
    state.drag = { kind:'pan', sx:s.x, sy:s.y, ox:state.ox, oy:state.oy };
    return;
  }
  const snapRes = findSnap(raw), p = snapRes.p;
  state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
  
  if (state.tool === 'select'){
    const sel = getSelected();
    if (sel){
      const h = hitHandle(raw);
      if (h){ saveHistory(); state.drag = { kind:'handle', handle:h, item:sel }; draw(); return; }
    }
    const o = hitItem(raw);
    if (o){
      state.selected = o.id;
      renderProps();
      const layer = state.layers.find(l => l.id === o.layer);
      if (!layer || !layer.locked){
        state.drag = { kind:'move', start:raw, item:clone(o), moved:false };
      }
      draw();
      return;
    }
    state.selected = null; renderProps(); draw();
    return;
  }
  
  if (state.tool === 'poly' || state.tool === 'bezier'){
    if (!state.draft){
      saveHistory();
      state.draft = {
        id: uid(), type: state.tool,
        points: state.tool === 'bezier' ? [newBezierPoint(p)] : [{x:p.x,y:p.y}],
        closed:false, preview:p,
        layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25
      };
    } else {
      const first = state.draft.points[0];
      const tol = 10 / state.scale;
      if (state.draft.points.length >= 3 && Math.hypot(p.x-first.x, p.y-first.y) < tol){
        state.draft.closed = true;
        finishDraft();
        return;
      }
      if (state.tool === 'bezier') state.draft.points.push(newBezierPoint(p));
      else state.draft.points.push({x:p.x,y:p.y});
      state.draft.preview = p;
    }
    draw();
    return;
  }
  
  saveHistory();
  if (state.tool === 'line' || state.tool === 'dimension'){
    state.draft = { id:uid(), type:state.tool, x:p.x, y:p.y, x2:p.x, y2:p.y, layer:state.activeLayer, color: state.tool === 'dimension' ? '#f2ad4b' : '#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'rect'){
    state.draft = { id:uid(), type:'rect', x:p.x, y:p.y, w:0, h:0, layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'circle'){
    state.draft = { id:uid(), type:'circle', x:p.x, y:p.y, r:0, layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  } else if (state.tool === 'free'){
    state.draft = { id:uid(), type:'free', points:[{x:p.x,y:p.y}], layer:state.activeLayer, color:'#45b9e8', lineWidth:0.25 };
  }
  draw();
});

canvas.addEventListener('pointermove', e => {
  if (state.is3d) return;
  const s = pointerPos(e), raw = world(s.x, s.y);
  const snapRes = findSnap(raw), p = snapRes.p;
  $('coordBadge').textContent = `X: ${p.x.toFixed(1)} · Y: ${p.y.toFixed(1)} cm`;
  
  if (state.drag){
    state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
    if (state.drag.kind === 'pan'){
      state.ox = state.drag.ox + (s.x - state.drag.sx);
      state.oy = state.drag.oy + (s.y - state.drag.sy);
    } else if (state.drag.kind === 'handle'){
      applyHandleDrag(state.drag.item, state.drag.handle.key, snapRes.kind ? p : raw);
    } else if (state.drag.kind === 'move'){
      const o = state.items.find(x => x.id === state.selected);
      if (o){
        const dx = raw.x - state.drag.start.x, dy = raw.y - state.drag.start.y;
        if (!state.drag.moved && Math.hypot(dx, dy) > 0.02){
          saveHistory(); state.drag.moved = true;
        }
        if (state.drag.moved){
          const orig = state.drag.item;
          if (o.type === 'line' || o.type === 'dimension'){
            o.x = orig.x+dx; o.y = orig.y+dy; o.x2 = orig.x2+dx; o.y2 = orig.y2+dy;
          } else if (o.type === 'circle' || o.type === 'rect'){
            o.x = orig.x+dx; o.y = orig.y+dy;
          } else if (o.points){
            o.points = orig.points.map(q => ({x:q.x+dx, y:q.y+dy}));
          }
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
      if (Math.hypot(p.x - last.x, p.y - last.y) > Math.max(0.15, 2/state.scale)) d.points.push({x:p.x, y:p.y});
    } else if (d.type === 'poly' || d.type === 'bezier'){ d.preview = p; }
    draw();
    return;
  }
  
  state.snapIndicator = snapRes.kind ? { p, kind:snapRes.kind } : null;
  draw();
});

canvas.addEventListener('pointerup', () => {
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

canvas.addEventListener('contextmenu', e => {
  e.preventDefault();
  if (state.draft) cancelDraft();
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
  draw();
}, { passive:false });

/* ============================================================
   17) شريط الأدوات
   ============================================================ */
function setTool(t){
  if (state.draft) cancelDraft();
  state.tool = t;
  document.querySelectorAll('[data-tool]').forEach(b => b.classList.toggle('active', b.dataset.tool === t));
  const names = { select:'تحديد', free:'رسم حر', line:'خط', poly:'متعدد', rect:'مستطيل', circle:'دائرة', bezier:'منحنى', dimension:'قياس' };
  $('toolBadge').textContent = names[t] || t;
}

function showMenu(anchor, options){
  closeMenus();
  const menu = document.createElement('div');
  menu.className = 'ctx-menu';
  Object.assign(menu.style, {
    position:'fixed', background:'#152033', border:'1px solid #2a3d59',
    borderRadius:'7px', padding:'5px', zIndex:1000, minWidth:'190px',
    boxShadow:'0 8px 24px rgba(0,0,0,.55)', direction:'rtl'
  });
  options.forEach(opt => {
    if (opt.separator){
      const sep = document.createElement('div');
      Object.assign(sep.style, { height:'1px', background:'#2a3d59', margin:'4px 2px' });
      menu.appendChild(sep);
      return;
    }
    const b = document.createElement('button');
    b.textContent = opt.label;
    Object.assign(b.style, { display:'block', width:'100%', textAlign:'right', background:'transparent',
      border:'none', color:'#e8eef9', padding:'8px 10px', borderRadius:'5px', fontSize:'12px', cursor:'pointer' });
    b.onmouseover = () => b.style.background = '#1e3350';
    b.onmouseout = () => b.style.background = 'transparent';
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
  if (!e.target.closest('.ctx-menu') && !e.target.closest('[data-action="mirror"]')) closeMenus();
});

$('toolbar').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
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
  if (a === 'mirror'){
    showMenu(b, [
      { label:'عكس رأسي حول مركز العنصر', onClick:() => {
        const o = getSelected(); if (!o) return;
        saveHistory();
        const bb = itemBounds(o);
        mirrorItem(o, 'v', (bb.minX+bb.maxX)/2, (bb.minY+bb.maxY)/2);
        draw(); renderProps(); autosave();
      }},
      { label:'عكس أفقي حول مركز العنصر', onClick:() => {
        const o = getSelected(); if (!o) return;
        saveHistory();
        const bb = itemBounds(o);
        mirrorItem(o, 'h', (bb.minX+bb.maxX)/2, (bb.minY+bb.maxY)/2);
        draw(); renderProps(); autosave();
      }},
      { separator:true },
      { label:'عكس حول المحور الرأسي العالمي', onClick:() => {
        const o = getSelected(); if (!o) return;
        saveHistory(); mirrorItem(o, 'v', 0, 0); draw(); renderProps(); autosave();
      }}
    ]);
  }
  if (a === 'rotate'){
    const o = getSelected(); if (!o) return;
    const val = prompt('الزاوية (درجات):', '90');
    if (val === null) return;
    const ang = parseFloat(val);
    if (!Number.isFinite(ang)){ alert('قيمة غير صالحة'); return; }
    saveHistory(); rotateItem(o, ang); draw(); renderProps(); autosave();
  }
  if (a === 'offset'){
    const o = getSelected(); if (!o) return;
    const val = prompt('مسافة الإزاحة (سم، سالبة للداخل):', '1');
    if (val === null) return;
    const dist = parseFloat(val);
    if (!Number.isFinite(dist) || Math.abs(dist) < 0.01){ alert('قيمة غير صالحة'); return; }
    const off = offsetItem(o, dist);
    if (!off){ alert('لا يمكن إزاحة هذا العنصر'); return; }
    saveHistory();
    off.layer = o.layer;
    off.color = o.color;
    off.lineWidth = o.lineWidth;
    state.items.push(off);
    state.selected = off.id;
    renderProps(); draw(); autosave();
  }
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

function fitDrawing(){
  if (!state.items.length){ state.scale = 8; state.ox = dims().w/2; state.oy = dims().h/2; draw(); return; }
  const bb = bounds(), { w, h } = dims();
  const pad = 60;
  const spanX = Math.max(1, bb.maxX - bb.minX), spanY = Math.max(1, bb.maxY - bb.minY);
  state.scale = clamp(Math.min((w-pad*2)/spanX, (h-pad*2)/spanY), 1.5, 120);
  state.ox = w/2 - (bb.minX + bb.maxX)/2 * state.scale;
  state.oy = h/2 + (bb.minY + bb.maxY)/2 * state.scale;
  draw();
}

/* ============================================================
   18) الطبقات
   ============================================================ */
function renderLayers(){
  const wrap = $('layers');
  wrap.innerHTML = '';
  state.layers.forEach(l => {
    const d = document.createElement('div');
    d.className = 'layer' + (l.id === state.activeLayer ? ' active' : '');
    d.innerHTML = `<input type="checkbox" ${l.visible?'checked':''}><span class="layer-name"></span><button>${l.locked?'🔒':'🔓'}</button>`;
    d.querySelector('.layer-name').textContent = l.name;
    d.querySelector('input').onchange = e => { l.visible = e.target.checked; draw(); autosave(); if (state.is3d) buildSimulation(); };
    d.querySelector('button').onclick = ev => { ev.stopPropagation(); l.locked = !l.locked; renderLayers(); autosave(); };
    d.onclick = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
      state.activeLayer = l.id; renderLayers(); draw();
    };
    wrap.appendChild(d);
  });
}
$('addLayer').onclick = () => {
  const name = prompt('اسم الطبقة:'); if (!name) return;
  const l = { id:uid(), name:name.trim(), visible:true, locked:false };
  state.layers.push(l); state.activeLayer = l.id; renderLayers(); autosave();
};

/* ============================================================
   19) الحفظ / التحميل
   ============================================================ */
function snapshot(){
  return {
    format: 'KhayatPro-CAD',
    version: 3,
    name: state.designName,
    items: clone(state.items),
    layers: clone(state.layers),
    updated: new Date().toISOString()
  };
}
let autoTimer;
function autosave(){
  try {
    localStorage.setItem(DB_KEY + '.draft', JSON.stringify(snapshot()));
    $('statusText').textContent = 'حفظ تلقائي';
  } catch(e){ $('statusText').textContent = 'تعذر الحفظ'; }
}

function loadDraft(){
  try {
    const raw = localStorage.getItem(DB_KEY + '.draft');
    if (!raw) return;
    const s = JSON.parse(raw);
    if (!s || !Array.isArray(s.items)) return;
    state.items = s.items.filter(o => o && typeof o === 'object' && typeof o.type === 'string');
    if (Array.isArray(s.layers) && s.layers.length) state.layers = s.layers;
    state.designName = s.name || state.designName;
    renderLayers(); draw();
  } catch(e){}
}

$('saveBtn').onclick = () => {
  const name = prompt('اسم التصميم:', state.designName);
  if (name === null) return;
  state.designName = name.trim() || 'تصميم';
  try {
    const all = JSON.parse(localStorage.getItem(DB_KEY + '.library') || '[]');
    const s = snapshot(); s.name = state.designName; s.id = uid();
    all.unshift(s);
    localStorage.setItem(DB_KEY + '.library', JSON.stringify(all));
    autosave(); renderLibrary();
    $('statusText').textContent = 'تم الحفظ';
  } catch(e){ alert('تعذر الحفظ'); }
};

$('exportBtn').onclick = () => {
  const blob = new Blob([JSON.stringify(snapshot(), null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (state.designName || 'khayat').replace(/[^a-z0-9_\-\u0600-\u06ff]+/gi, '_') + '.json';
  a.click(); URL.revokeObjectURL(url);
  $('statusText').textContent = 'تم التصدير';
};

$('importBtn').onclick = () => $('importFile').click();
$('importFile').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  try {
    const data = JSON.parse(await f.text());
    if (!data || !Array.isArray(data.items)) throw new Error('invalid');
    if (!confirm('استبدال التصميم الحالي؟')) return;
    state.items = data.items;
    state.layers = data.layers || state.layers;
    state.designName = data.name || 'مستورد';
    state.selected = null; state.undo = []; state.redo = [];
    renderLayers(); renderProps(); draw(); autosave();
    if (state.is3d) buildSimulation();
    $('statusText').textContent = 'تم الاستيراد';
  } catch(e){ alert('ملف غير صالح'); }
  finally { e.target.value = ''; }
};

function renderLibrary(){
  let all = [];
  try { all = JSON.parse(localStorage.getItem(DB_KEY + '.library') || '[]'); if (!Array.isArray(all)) all = []; } catch(e){}
  const q = ($('searchDesign').value || '').toLowerCase();
  const wrap = $('designList');
  wrap.innerHTML = '';
  all.filter(s => (s.name||'').toLowerCase().includes(q)).forEach(s => {
    const d = document.createElement('div'); d.className = 'list-item';
    const title = document.createElement('span'); title.textContent = s.name || 'بدون اسم';
    const open = document.createElement('button'); open.className = 'btn'; open.textContent = 'فتح';
    open.onclick = () => {
      if (!confirm('فتح التصميم؟')) return;
      state.items = clone(s.items || []);
      state.layers = clone(s.layers || state.layers);
      state.designName = s.name || 'تصميم';
      state.selected = null; state.undo = []; state.redo = [];
      renderLayers(); renderProps(); draw(); autosave();
      if (state.is3d) buildSimulation();
    };
    const del = document.createElement('button'); del.className = 'btn danger'; del.textContent = '×';
    del.onclick = () => {
      if (!confirm('حذف نهائي؟')) return;
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
   20) التهيئة
   ============================================================ */
$('tab2d').onclick = () => switchView(false);
$('tab3d').onclick = () => switchView(true);
$('previewBtn').onclick = () => switchView(!state.is3d);
$('undoBtn').onclick = undo;
$('redoBtn').onclick = redo;
$('snapToggle').onchange = e => {
  state.snap = e.target.checked;
  document.querySelector('[data-action="snap"]').classList.toggle('active', state.snap);
};
$('gridStep').onchange = () => {
  const v = parseFloat($('gridStep').value);
  state.gridStep = (Number.isFinite(v) && v > 0) ? v : 1;
  $('gridStep').value = state.gridStep;
  draw();
};

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
  if (e.key === ' ' && state.is3d){
    e.preventDefault(); $('simPlay').click();
    return;
  }
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

// init
renderLayers();
renderLibrary();
loadDraft();
resize();
setTool('select');
document.querySelector('[data-action="snap"]').classList.toggle('active', state.snap);
document.querySelector('[data-action="grid"]').classList.toggle('active', state.grid);
draw();

})();
</script>
</body>
</html>
