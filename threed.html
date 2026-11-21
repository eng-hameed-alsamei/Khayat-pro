<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>ثوب 3D تفاعلي - محرك تجسيم وتصوير</title>
<style>
:root {
  --bg-primary: #0a0e1a;
  --bg-secondary: #141b2d;
  --bg-panel: #1a2332;
  --border: #2d3a4f;
  --text-primary: #e8ecf4;
  --text-secondary: #8b9bb4;
  --accent: #4a9eff;
  --accent-hover: #6bb3ff;
  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #f87171;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at 30% 20%, #1a2332 0%, #0a0e1a 60%, #050810 100%);
  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
  color: var(--text-primary);
}

#canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: grab;
}

#canvas-container:active {
  cursor: grabbing;
}

#glCanvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* لوحة التحكم العائمة */
#control-panel {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 300px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  background: rgba(26, 35, 50, 0.92);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#control-panel.hidden {
  transform: translateX(320px);
  opacity: 0;
  pointer-events: none;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.panel-header h2 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
}

.panel-toggle {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  background: rgba(26, 35, 50, 0.92);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 101;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.panel-toggle:hover {
  background: rgba(74, 158, 255, 0.2);
  border-color: var(--accent);
}

.control-section {
  margin-bottom: 18px;
}

.control-section h3 {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.btn {
  padding: 8px 12px;
  background: rgba(45, 58, 79, 0.6);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.78rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn:hover {
  background: rgba(74, 158, 255, 0.2);
  border-color: var(--accent);
}

.btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  font-weight: 600;
}

.btn-icon {
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

/* شبكة الألوان */
.color-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.color-swatch {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}

.color-swatch::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.15) 100%);
}

.color-swatch:hover {
  transform: scale(1.1);
  border-color: var(--accent);
}

.color-swatch.active {
  border-color: var(--accent);
  box-shadow: 0 0 12px rgba(74, 158, 255, 0.4);
}

/* منزلقات التحكم */
.slider-group {
  margin-bottom: 12px;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

.slider-label span:last-child {
  color: var(--accent);
  font-weight: 600;
}

input[type="range"] {
  width: 100%;
  height: 6px;
  background: rgba(45, 58, 79, 0.6);
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: var(--accent);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.4);
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--accent);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

/* شريط المعلومات السفلي */
#info-bar {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(26, 35, 50, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  z-index: 100;
  white-space: nowrap;
}

#info-bar span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.info-icon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

/* مؤشر التحميل */
#loading-screen {
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.5s;
}

#loading-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

.loader {
  width: 60px;
  height: 60px;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

#loading-screen p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* تلميحات */
.tooltip {
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  pointer-events: none;
  z-index: 200;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.tooltip.visible {
  opacity: 1;
}

/* استجابة الجوال */
@media (max-width: 768px) {
  #control-panel {
    width: 260px;
    right: 12px;
    top: 12px;
  }
  
  .panel-toggle {
    display: flex;
  }
  
  #control-panel:not(.hidden) ~ .panel-toggle {
    display: none;
  }
  
  #info-bar {
    font-size: 0.65rem;
    padding: 8px 14px;
    gap: 8px;
  }
  
  .btn {
    padding: 6px 10px;
    font-size: 0.72rem;
  }
}

/* تمرير مخصص */
#control-panel::-webkit-scrollbar {
  width: 6px;
}

#control-panel::-webkit-scrollbar-track {
  background: transparent;
}

#control-panel::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}
</style>
</head>
<body>

<!-- شاشة التحميل -->
<div id="loading-screen">
  <div class="loader"></div>
  <p>جاري تجهيز محرك الثوب ثلاثي الأبعاد...</p>
</div>

<!-- حاوية الرسم -->
<div id="canvas-container">
  <canvas id="glCanvas"></canvas>
</div>

<!-- زر إظهار/إخفاء اللوحة -->
<button class="panel-toggle" id="panelToggle" onclick="togglePanel()">⚙️</button>

<!-- لوحة التحكم -->
<div id="control-panel">
  <div class="panel-header">
    <h2>🎨 أدوات التحكم في الثوب</h2>
    <button class="btn btn-icon" onclick="togglePanel()" style="display:none;">✕</button>
  </div>

  <!-- زوايا العرض -->
  <div class="control-section">
    <h3>زوايا العرض</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setView('front')">أمامي</button>
      <button class="btn" onclick="setView('back')">خلفي</button>
      <button class="btn" onclick="setView('right')">يمين</button>
      <button class="btn" onclick="setView('left')">يسار</button>
      <button class="btn" onclick="setView('top')">علوي</button>
      <button class="btn" onclick="setView('free')">حر 360°</button>
    </div>
  </div>

  <!-- قصة الثوب -->
  <div class="control-section">
    <h3>قصة الثوب</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setCut('classic')">كلاسيكي</button>
      <button class="btn" onclick="setCut('slim')">ضيق عصري</button>
      <button class="btn" onclick="setCut('wide')">واسع مريح</button>
      <button class="btn" onclick="setCut('short')">قصير</button>
    </div>
  </div>

  <!-- الياقة -->
  <div class="control-section">
    <h3>الياقة والرقبة</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setCollar('round')">دائرية سادة</button>
      <button class="btn" onclick="setCollar('mandarin')">صينية مرتفعة</button>
      <button class="btn" onclick="setCollar('pointed')">مدببة رسمية</button>
      <button class="btn" onclick="setCollar('none')">بدون ياقة</button>
    </div>
  </div>

  <!-- الأكمام -->
  <div class="control-section">
    <h3>الأكمام والكبك</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setSleeve('long')">طويلة</button>
      <button class="btn" onclick="setSleeve('threequarter')">ثلاثة أرباع</button>
      <button class="btn" onclick="setSleeve('short')">قصيرة</button>
    </div>
    <div class="btn-group" style="margin-top:6px;">
      <button class="btn active" onclick="setCuff('plain')">كبك سادة</button>
      <button class="btn" onclick="setCuff('buttoned')">كبك بأزرار</button>
      <button class="btn" onclick="setCuff('wide')">كبك عريض</button>
    </div>
  </div>

  <!-- التفاصيل -->
  <div class="control-section">
    <h3>تفاصيل إضافية</h3>
    <div class="btn-group">
      <button class="btn active" onclick="toggleDetail('pockets')">جيوب ✓</button>
      <button class="btn active" onclick="toggleDetail('placket')">جبزور ✓</button>
      <button class="btn" onclick="toggleDetail('embroidery')">تطريز</button>
      <button class="btn" onclick="toggleDetail('sideStripe')">شريط جانبي</button>
    </div>
  </div>

  <!-- الألوان -->
  <div class="control-section">
    <h3>لون القماش</h3>
    <div class="color-grid" id="colorGrid">
      <div class="color-swatch active" style="background:#f5f5f0;" onclick="setColor('#f5f5f0', this)" title="أبيض سكري"></div>
      <div class="color-swatch" style="background:#ffffff;" onclick="setColor('#ffffff', this)" title="أبيض ناصع"></div>
      <div class="color-swatch" style="background:#1a237e;" onclick="setColor('#1a237e', this)" title="كحلي"></div>
      <div class="color-swatch" style="background:#0d0d0d;" onclick="setColor('#0d0d0d', this)" title="أسود"></div>
      <div class="color-swatch" style="background:#616161;" onclick="setColor('#616161', this)" title="رمادي"></div>
      <div class="color-swatch" style="background:#5d4037;" onclick="setColor('#5d4037', this)" title="بني"></div>
      <div class="color-swatch" style="background:#8d6e63;" onclick="setColor('#8d6e63', this)" title="بيج ترابي"></div>
      <div class="color-swatch" style="background:#33691e;" onclick="setColor('#33691e', this)" title="زيتي"></div>
      <div class="color-swatch" style="background:#e65100;" onclick="setColor('#e65100', this)" title="برتقالي صحراوي"></div>
      <div class="color-swatch" style="background:#4a148c;" onclick="setColor('#4a148c', this)" title="بنفسجي ملكي"></div>
      <div class="color-swatch" style="background:#b71c1c;" onclick="setColor('#b71c1c', this)" title="أحمر داكن"></div>
      <div class="color-swatch" style="background:#01579b;" onclick="setColor('#01579b', this)" title="أزرق ملكي"></div>
    </div>
  </div>

  <!-- الخامات -->
  <div class="control-section">
    <h3>خامة القماش</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setFabric('cotton')">قطن مصري</button>
      <button class="btn" onclick="setFabric('silk')">حرير</button>
      <button class="btn" onclick="setFabric('linen')">كتان</button>
      <button class="btn" onclick="setFabric('polyester')">بوليستر</button>
    </div>
  </div>

  <!-- خصائص القماش -->
  <div class="control-section">
    <h3>خصائص القماش</h3>
    <div class="slider-group">
      <div class="slider-label">
        <span>اللمعان</span>
        <span id="sheenVal">30%</span>
      </div>
      <input type="range" min="0" max="100" value="30" oninput="setSheen(this.value)">
    </div>
    <div class="slider-group">
      <div class="slider-label">
        <span>نعومة السطح</span>
        <span id="smoothnessVal">70%</span>
      </div>
      <input type="range" min="0" max="100" value="70" oninput="setSmoothness(this.value)">
    </div>
    <div class="slider-group">
      <div class="slider-label">
        <span>ثقل القماش</span>
        <span id="weightVal">50%</span>
      </div>
      <input type="range" min="0" max="100" value="50" oninput="setWeight(this.value)">
    </div>
  </div>

  <!-- حجم وامتلاء -->
  <div class="control-section">
    <h3>الحجم والامتلاء</h3>
    <div class="slider-group">
      <div class="slider-label">
        <span>التكبير</span>
        <span id="zoomVal">100%</span>
      </div>
      <input type="range" min="50" max="200" value="100" oninput="setZoom(this.value)">
    </div>
    <div class="slider-group">
      <div class="slider-label">
        <span>امتلاء الثوب</span>
        <span id="volumeVal">100%</span>
      </div>
      <input type="range" min="70" max="130" value="100" oninput="setVolume(this.value)">
    </div>
  </div>

  <!-- الإضاءة -->
  <div class="control-section">
    <h3>الإضاءة والأجواء</h3>
    <div class="btn-group">
      <button class="btn active" onclick="setLighting('studio')">استوديو</button>
      <button class="btn" onclick="setLighting('warm')">دافئة</button>
      <button class="btn" onclick="setLighting('cool')">باردة</button>
      <button class="btn" onclick="setLighting('dramatic')">درامية</button>
    </div>
    <div class="slider-group" style="margin-top:10px;">
      <div class="slider-label">
        <span>شدة الإضاءة</span>
        <span id="lightIntensityVal">80%</span>
      </div>
      <input type="range" min="20" max="100" value="80" oninput="setLightIntensity(this.value)">
    </div>
  </div>

  <!-- الحركة -->
  <div class="control-section">
    <h3>حركة القماش</h3>
    <div class="slider-group">
      <div class="slider-label">
        <span>تيار الهواء</span>
        <span id="windVal">20%</span>
      </div>
      <input type="range" min="0" max="100" value="20" oninput="setWind(this.value)">
    </div>
    <div class="btn-group" style="margin-top:8px;">
      <button class="btn" onclick="resetView()">إعادة الضبط</button>
      <button class="btn" onclick="toggleAutoRotate()" id="autoRotateBtn">دوران تلقائي</button>
    </div>
  </div>
</div>

<!-- شريط المعلومات -->
<div id="info-bar">
  <span><span class="info-icon"></span> اسحب للتدوير</span>
  <span><span class="info-icon" style="background:var(--success)"></span> عجلة الفأرة للتكبير</span>
  <span><span class="info-icon" style="background:var(--warning)"></span> نقرتان للإعادة</span>
</div>

<!-- تلميح -->
<div class="tooltip" id="tooltip"></div>

<script>
'use strict';

// ============================================================================
// محرك الثوب ثلاثي الأبعاد - نظام رسوميات متكامل
// ============================================================================

class Thobe3DEngine {
  constructor() {
    this.canvas = document.getElementById('glCanvas');
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    
    // إعدادات العرض عالي الدقة
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 3);
    this.setupCanvas();
    
    // حالة المحرك
    this.time = 0;
    this.lastTime = 0;
    this.running = true;
    
    // حالة الكاميرا والتحكم
    this.camera = {
      rotX: -0.15,
      rotY: 0.3,
      targetRotX: -0.15,
      targetRotY: 0.3,
      zoom: 1,
      targetZoom: 1,
      distance: 400
    };
    
    // فيزياء الحركة
    this.physics = {
      velocity: { x: 0, y: 0 },
      angularVelocity: { x: 0, y: 0 },
      damping: 0.94,
      springK: 0.08,
      inertia: true
    };
    
    // حالة الثوب
    this.thobe = {
      // الأبعاد الأساسية
      height: 280,
      shoulderWidth: 55,
      chestWidth: 52,
      waistWidth: 48,
      hemWidth: 58,
      sleeveLength: 65,
      sleeveWidth: 16,
      collarHeight: 8,
      collarType: 'round',
      
      // القصة
      cut: 'classic',
      
      // الأكمام
      sleeveType: 'long',
      cuffType: 'plain',
      
      // التفاصيل
      hasPockets: true,
      hasPlacket: true,
      hasEmbroidery: false,
      hasSideStripe: false,
      
      // اللون والخامة
      color: '#f5f5f0',
      fabric: 'cotton',
      sheen: 0.3,
      smoothness: 0.7,
      weight: 0.5,
      
      // الامتلاء
      volume: 1.0,
      
      // الإضاءة
      lighting: 'studio',
      lightIntensity: 0.8
    };
    
    // فيزياء القماش
    this.cloth = {
      segments: 32,
      rings: 48,
      points: [],
      constraints: [],
      windForce: 0.2,
      gravity: 0.15,
      stiffness: 0.85
    };
    
    this.wind = {
      strength: 0.2,
      direction: 0,
      turbulence: 0.3
    };
    
    // إعدادات الإضاءة
    this.lights = {
      ambient: { r: 0.4, g: 0.4, b: 0.45 },
      key: { 
        direction: { x: 0.5, y: -0.8, z: 0.3 },
        color: { r: 1, g: 0.95, b: 0.9 },
        intensity: 0.8
      },
      fill: {
        direction: { x: -0.3, y: -0.2, z: 0.8 },
        color: { r: 0.7, g: 0.8, b: 1 },
        intensity: 0.4
      },
      rim: {
        direction: { x: 0, y: 0.5, z: -1 },
        color: { r: 1, g: 0.9, b: 0.7 },
        intensity: 0.3
      }
    };
    
    // التفاعل
    this.mouse = { x: 0, y: 0, down: false, lastX: 0, lastY: 0 };
    this.touch = { active: false, lastX: 0, lastY: 0, pinchDist: 0 };
    
    this.autoRotate = false;
    this.autoRotateSpeed = 0.005;
    
    this.init();
  }
  
  setupCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * this.pixelRatio;
    this.canvas.height = rect.height * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.width = rect.width;
    this.height = rect.height;
  }
  
  init() {
    this.generateThobeGeometry();
    this.setupEventListeners();
    this.applyLightingPreset('studio');
    this.hideLoading();
    this.animate();
  }
  
  hideLoading() {
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
    }, 500);
  }
  
  // ==========================================================================
  // توليد هندسة الثوب
  // ==========================================================================
  
  generateThobeGeometry() {
    const t = this.thobe;
    const c = this.cloth;
    
    // مسح النقاط السابقة
    c.points = [];
    c.constraints = [];
    
    // إنشاء شبكة النقاط للبدن
    const bodySegments = c.segments;
    const bodyRings = c.rings;
    
    for (let ring = 0; ring <= bodyRings; ring++) {
      const v = ring / bodyRings; // 0 = أعلى، 1 = أسفل
      
      for (let seg = 0; seg <= bodySegments; seg++) {
        const u = seg / bodySegments; // 0 = يسار، 1 = يمين
        
        const point = this.calculateBodyPoint(u, v, t);
        c.points.push({
          x: point.x,
          y: point.y,
          z: point.z,
          origX: point.x,
          origY: point.y,
          origZ: point.z,
          u: u,
          v: v,
          pinned: ring === 0, // تثبيت أعلى الثوب
          mass: 1 + t.weight * 0.5
        });
      }
    }
    
    // إنشاء قيود الشبكة
    for (let ring = 0; ring < bodyRings; ring++) {
      for (let seg = 0; seg < bodySegments; seg++) {
        const idx = ring * (bodySegments + 1) + seg;
        const idxRight = idx + 1;
        const idxDown = idx + bodySegments + 1;
        const idxDownRight = idxDown + 1;
        
        // قيد أفقي
        c.constraints.push({
          p1: idx, p2: idxRight,
          rest: this.distance(c.points[idx], c.points[idxRight]),
          stiffness: c.stiffness
        });
        
        // قيد عمودي
        c.constraints.push({
          p1: idx, p2: idxDown,
          rest: this.distance(c.points[idx], c.points[idxDown]),
          stiffness: c.stiffness
        });
        
        // قطر للاستقرار
        if (seg < bodySegments - 1) {
          c.constraints.push({
            p1: idx, p2: idxDownRight,
            rest: this.distance(c.points[idx], c.points[idxDownRight]),
            stiffness: c.stiffness * 0.5
          });
        }
      }
    }
    
    // إنشاء الأكمام
    this.generateSleeves();
    
    // إنشاء الياقة
    this.generateCollar();
  }
  
  calculateBodyPoint(u, v, t) {
    // حساب شكل الثوب بناءً على القصة
    let widthFactor = 1;
    let heightFactor = 1;
    
    switch(t.cut) {
      case 'slim':
        widthFactor = 0.85;
        break;
      case 'wide':
        widthFactor = 1.2;
        break;
      case 'short':
        heightFactor = 0.75;
        break;
    }
    
    // تحديد العرض في هذا الارتفاع
    let halfWidth;
    const shoulderY = 0.08;
    const chestY = 0.25;
    const waistY = 0.5;
    const hipY = 0.75;
    
    if (v < shoulderY) {
      // منطقة الكتف - تتسع بسرعة
      const f = v / shoulderY;
      halfWidth = t.shoulderWidth * 0.5 * (0.6 + 0.4 * f);
    } else if (v < chestY) {
      // منطقة الصدر
      const f = (v - shoulderY) / (chestY - shoulderY);
      halfWidth = t.shoulderWidth * 0.5 + (t.chestWidth * 0.5 - t.shoulderWidth * 0.5) * f;
    } else if (v < waistY) {
      // منطقة الخصر - تضيق قليلاً
      const f = (v - chestY) / (waistY - chestY);
      halfWidth = t.chestWidth * 0.5 + (t.waistWidth * 0.5 - t.chestWidth * 0.5) * f;
    } else if (v < hipY) {
      // منطقة الورك - تتسع
      const f = (v - waistY) / (hipY - waistY);
      halfWidth = t.waistWidth * 0.5 + (t.chestWidth * 0.52 - t.waistWidth * 0.5) * f;
    } else {
      // منطقة الذيل - تتسع أكثر
      const f = (v - hipY) / (1 - hipY);
      halfWidth = t.chestWidth * 0.52 + (t.hemWidth * 0.5 - t.chestWidth * 0.52) * f;
    }
    
    halfWidth *= widthFactor * t.volume;
    
    // الارتفاع
    const y = -t.height * 0.5 + v * t.height * heightFactor;
    
    // الشكل الدائري/الأسطواني
    const angle = (u - 0.5) * Math.PI * 1.1; // زاوية الالتفاف
    const radius = halfWidth / Math.sin(Math.PI * 0.55); // نصف القطر الفعلي
    
    // إحداثيات ثلاثية الأبعاد
    let x, z;
    
    // إنشاء شكل أسطواني مع انحناء طبيعي
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    
    x = radius * sinAngle * 0.85;
    z = radius * cosAngle * 0.6 - radius * 0.35;
    
    // إضافة انحناء طبيعي للجسم
    const bodyCurve = Math.sin(v * Math.PI) * 0.15;
    z += bodyCurve * 10;
    
    // انحناء الكتفين للخارج
    if (v < shoulderY) {
      const shoulderCurve = Math.sin((shoulderY - v) / shoulderY * Math.PI * 0.5);
      x *= 1 + shoulderCurve * 0.3;
    }
    
    // تقوس الذيل للخارج قليلاً
    if (v > 0.9) {
      const hemFlare = (v - 0.9) / 0.1;
      z += hemFlare * 5;
    }
    
    return { x, y, z };
  }
  
  generateSleeves() {
    const t = this.thobe;
    const sleeveLen = t.sleeveLength * (t.sleeveType === 'short' ? 0.4 : t.sleeveType === 'threequarter' ? 0.7 : 1);
    
    this.sleeveData = {
      left: this.createSleeve(-1, sleeveLen),
      right: this.createSleeve(1, sleeveLen)
    };
  }
  
  createSleeve(side, length) {
    const t = this.thobe;
    const segments = 12;
    const rings = 20;
    const points = [];
    const constraints = [];
    
    const shoulderX = side * t.shoulderWidth * 0.5 * t.volume;
    const shoulderY = -t.height * 0.5 + t.height * 0.08;
    
    for (let ring = 0; ring <= rings; ring++) {
      const v = ring / rings;
      
      for (let seg = 0; seg <= segments; seg++) {
        const u = seg / segments;
        const angle = u * Math.PI * 2;
        
        // مسار الكم - ينزل بشكل طبيعي مع انحناء خفيف للأمام
        const dropY = v * length;
        const forwardCurve = Math.sin(v * Math.PI * 0.5) * 8;
        const outwardCurve = Math.sin(v * Math.PI * 0.3) * 5;
        
        const centerX = shoulderX + side * outwardCurve * v;
        const centerY = shoulderY + dropY;
        const centerZ = forwardCurve * v;
        
        // مقطع دائري للكم
        const radius = t.sleeveWidth * 0.5 * (1 - v * 0.15) * t.volume;
        
        const x = centerX + Math.cos(angle) * radius * 0.8;
        const y = centerY + Math.sin(angle) * radius * 0.3;
        const z = centerZ + Math.sin(angle) * radius * 0.6;
        
        points.push({
          x, y, z,
          origX: x, origY: y, origZ: z,
          u, v,
          pinned: ring === 0,
          mass: 0.8 + t.weight * 0.3
        });
      }
    }
    
    // قيود الكم
    for (let ring = 0; ring < rings; ring++) {
      for (let seg = 0; seg < segments; seg++) {
        const idx = ring * (segments + 1) + seg;
        const idxRight = idx + 1;
        const idxDown = idx + segments + 1;
        
        constraints.push({
          p1: idx, p2: idxRight,
          rest: this.distance(points[idx], points[idxRight]),
          stiffness: 0.9
        });
        
        constraints.push({
          p1: idx, p2: idxDown,
          rest: this.distance(points[idx], points[idxDown]),
          stiffness: 0.9
        });
      }
    }
    
    return { points, constraints, segments, rings };
  }
  
  generateCollar() {
    const t = this.thobe;
    const segments = 24;
    const points = [];
    
    const collarY = -t.height * 0.5 + 2;
    const radius = t.shoulderWidth * 0.22 * t.volume;
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.7 - radius * 0.2;
      const y = collarY - t.collarHeight;
      
      points.push({ x, y, z, angle });
    }
    
    this.collarData = { points, segments, radius };
  }
  
  distance(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dz = p2.z - p1.z;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
  }
  
  // ==========================================================================
  // فيزياء القماش
  // ==========================================================================
  
  updatePhysics(dt) {
    const c = this.cloth;
    const windStrength = this.wind.strength * 0.5;
    
    // تحديث بدن الثوب
    this.updateClothPoints(c.points, c.constraints, dt, windStrength);
    
    // تحديث الأكمام
    if (this.sleeveData) {
      this.updateClothPoints(this.sleeveData.left.points, this.sleeveData.left.constraints, dt, windStrength * 1.2);
      this.updateClothPoints(this.sleeveData.right.points, this.sleeveData.right.constraints, dt, windStrength * 1.2);
    }
  }
  
  updateClothPoints(points, constraints, dt, windStrength) {
    const gravity = this.cloth.gravity * (0.5 + this.thobe.weight * 0.5);
    
    // تطبيق القوى وتحديث المواقع
    for (let p of points) {
      if (p.pinned) continue;
      
      // الرياح
      const windPhase = this.time * 2 + p.v * 3;
      const windX = Math.sin(windPhase) * windStrength * 0.3;
      const windZ = Math.cos(windPhase * 0.7) * windStrength * 0.2;
      
      // الجاذبية
      const gy = gravity * p.mass;
      
      // قوة الارتداد نحو الموضع الأصلي
      const springX = (p.origX - p.x) * this.physics.springK;
      const springY = (p.origY - p.y) * this.physics.springK;
      const springZ = (p.origZ - p.z) * this.physics.springK;
      
      // تحديث السرعة والموضع (Verlet integration)
      if (!p.vx) { p.vx = 0; p.vy = 0; p.vz = 0; }
      if (!p.px) { p.px = p.x; p.py = p.y; p.pz = p.z; }
      
      const nx = p.x + (p.x - p.px) * 0.98 + (springX + windX) * dt * dt * 60;
      const ny = p.y + (p.y - p.py) * 0.98 + (springY + gy) * dt * dt * 60;
      const nz = p.z + (p.z - p.pz) * 0.98 + (springZ + windZ) * dt * dt * 60;
      
      p.px = p.x; p.py = p.y; p.pz = p.z;
      p.x = nx; p.y = ny; p.z = nz;
    }
    
    // حل القيود (عدة تكرارات للاستقرار)
    for (let iter = 0; iter < 3; iter++) {
      for (let con of constraints) {
        const p1 = points[con.p1];
        const p2 = points[con.p2];
        
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dz = p2.z - p1.z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (dist === 0) continue;
        
        const diff = (dist - con.rest) / dist * con.stiffness * 0.5;
        
        const ox = dx * diff;
        const oy = dy * diff;
        const oz = dz * diff;
        
        if (!p1.pinned) {
          p1.x += ox;
          p1.y += oy;
          p1.z += oz;
        }
        if (!p2.pinned) {
          p2.x -= ox;
          p2.y -= oy;
          p2.z -= oz;
        }
      }
    }
  }
  
  // ==========================================================================
  // الإضاءة والتظليل
  // ==========================================================================
  
  calculateLighting(normal, worldPos) {
    const L = this.lights;
    const intensity = this.thobe.lightIntensity;
    
    // الإضاءة المحيطة
    let r = L.ambient.r * intensity;
    let g = L.ambient.g * intensity;
    let b = L.ambient.b * intensity;
    
    // الإضاءة الرئيسية
    const keyDot = Math.max(0, 
      normal.x * -L.key.direction.x + 
      normal.y * -L.key.direction.y + 
      normal.z * -L.key.direction.z
    );
    r += L.key.color.r * keyDot * L.key.intensity * intensity;
    g += L.key.color.g * keyDot * L.key.intensity * intensity;
    b += L.key.color.b * keyDot * L.key.intensity * intensity;
    
    // إضاءة الملء
    const fillDot = Math.max(0,
      normal.x * -L.fill.direction.x +
      normal.y * -L.fill.direction.y +
      normal.z * -L.fill.direction.z
    );
    r += L.fill.color.r * fillDot * L.fill.intensity * intensity;
    g += L.fill.color.g * fillDot * L.fill.intensity * intensity;
    b += L.fill.color.b * fillDot * L.fill.intensity * intensity;
    
    // إضاءة الحواف (Rim)
    const rimDot = Math.pow(Math.max(0,
      normal.x * -L.rim.direction.x +
      normal.y * -L.rim.direction.y +
      normal.z * -L.rim.direction.z
    ), 2);
    r += L.rim.color.r * rimDot * L.rim.intensity * intensity;
    g += L.rim.color.g * rimDot * L.rim.intensity * intensity;
    b += L.rim.color.b * rimDot * L.rim.intensity * intensity;
    
    // لمعة خاصة (Specular)
    const viewDir = { x: 0, y: 0, z: 1 };
    const halfDir = {
      x: (-L.key.direction.x + viewDir.x) * 0.5,
      y: (-L.key.direction.y + viewDir.y) * 0.5,
      z: (-L.key.direction.z + viewDir.z) * 0.5
    };
    const halfLen = Math.sqrt(halfDir.x*halfDir.x + halfDir.y*halfDir.y + halfDir.z*halfDir.z);
    halfDir.x /= halfLen; halfDir.y /= halfLen; halfDir.z /= halfLen;
    
    const specDot = Math.pow(Math.max(0,
      normal.x * halfDir.x + normal.y * halfDir.y + normal.z * halfDir.z
    ), 32 / (1 + this.thobe.smoothness * 3));
    
    const specIntensity = specDot * this.thobe.sheen * 0.5 * intensity;
    r += specIntensity;
    g += specIntensity;
    b += specIntensity;
    
    return { r: Math.min(1, r), g: Math.min(1, g), b: Math.min(1, b) };
  }
  
  applyLightingPreset(preset) {
    const L = this.lights;
    
    switch(preset) {
      case 'studio':
        L.ambient = { r: 0.45, g: 0.45, b: 0.5 };
        L.key.intensity = 0.9;
        L.fill.intensity = 0.5;
        L.rim.intensity = 0.4;
        break;
      case 'warm':
        L.ambient = { r: 0.5, g: 0.42, b: 0.35 };
        L.key.color = { r: 1, g: 0.85, b: 0.7 };
        L.key.intensity = 0.85;
        L.fill.color = { r: 0.9, g: 0.7, b: 0.5 };
        L.fill.intensity = 0.4;
        break;
      case 'cool':
        L.ambient = { r: 0.38, g: 0.42, b: 0.55 };
        L.key.color = { r: 0.8, g: 0.9, b: 1 };
        L.key.intensity = 0.85;
        L.fill.color = { r: 0.6, g: 0.75, b: 0.95 };
        L.fill.intensity = 0.45;
        break;
      case 'dramatic':
        L.ambient = { r: 0.2, g: 0.2, b: 0.25 };
        L.key.intensity = 1;
        L.fill.intensity = 0.15;
        L.rim.intensity = 0.6;
        break;
    }
  }
  
  // ==========================================================================
  // العرض والرسم
  // ==========================================================================
  
  render() {
    const ctx = this.ctx;
    
    // مسح الشاشة
    ctx.clearRect(0, 0, this.width, this.height);
    
    // رسم الخلفية
    this.drawBackground();
    
    // حفظ حالة السياق
    ctx.save();
    
    // تطبيق تحويلات الكاميرا
    const cx = this.width / 2;
    const cy = this.height / 2;
    const scale = Math.min(this.width, this.height) / 500 * this.camera.zoom;
    
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    
    // تدوير الكاميرا
    const rotX = this.camera.rotX;
    const rotY = this.camera.rotY;
    
    // رسم الثوب
    this.drawThobe(ctx, rotX, rotY);
    
    ctx.restore();
  }
  
  drawBackground() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    // خلفية متدرجة
    const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h) * 0.7);
    grad.addColorStop(0, '#1a2332');
    grad.addColorStop(0.6, '#0f1520');
    grad.addColorStop(1, '#050810');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    
    // شبكة أرضية خفيفة
    ctx.strokeStyle = 'rgba(74, 158, 255, 0.05)';
    ctx.lineWidth = 1;
    
    const gridSize = 40;
    const offset = (this.time * 10) % gridSize;
    
    for (let x = -offset; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = -offset; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }
  
  drawThobe(ctx, rotX, rotY) {
    // حساب مصفوفة التدوير
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    
    // دالة تحويل الإحداثيات ثلاثية الأبعاد إلى ثنائية
    const transform3D = (x, y, z) => {
      // تدوير حول محور Y
      let tx = x * cosY + z * sinY;
      let tz = -x * sinY + z * cosY;
      
      // تدوير حول محور X
      let ty = y * cosX - tz * sinX;
      tz = y * sinX + tz * cosX;
      
      // إسقاط منظوري
      const perspective = 400 / (400 + tz);
      
      return {
        x: tx * perspective,
        y: ty * perspective,
        z: tz,
        scale: perspective
      };
    };
    
    // حساب الإضاءة للوجه الأمامي
    const frontNormal = transform3D(0, 0, 1);
    
    // رسم الأكمام أولاً (خلف البدن)
    if (this.sleeveData) {
      this.drawSleeve(ctx, this.sleeveData.left, transform3D, true);
      this.drawSleeve(ctx, this.sleeveData.right, transform3D, true);
    }
    
    // رسم بدن الثوب
    this.drawBody(ctx, transform3D);
    
    // رسم الأكمام فوق البدن
    if (this.sleeveData) {
      this.drawSleeve(ctx, this.sleeveData.left, transform3D, false);
      this.drawSleeve(ctx, this.sleeveData.right, transform3D, false);
    }
    
    // رسم الياقة
    this.drawCollar(ctx, transform3D);
    
    // رسم التفاصيل
    this.drawDetails(ctx, transform3D);
  }
  
  drawBody(ctx, transform3D) {
    const c = this.cloth;
    const segments = c.segments;
    const rings = c.rings;
    const points = c.points;
    
    // تحويل جميع النقاط
    const projected = points.map(p => transform3D(p.x, p.y, p.z));
    
    // رسم المثلثات مع تظليل
    for (let ring = 0; ring < rings; ring++) {
      for (let seg = 0; seg < segments; seg++) {
        const idx = ring * (segments + 1) + seg;
        const idxRight = idx + 1;
        const idxDown = idx + segments + 1;
        const idxDownRight = idxDown + 1;
        
        const p1 = projected[idx];
        const p2 = projected[idxRight];
        const p3 = projected[idxDown];
        const p4 = projected[idxDownRight];
        
        // حساب الوجه الأمامي فقط (للأداء)
        if (p1.z > -50) {
          // حساب Normal للإضاءة
          const normal = this.calculateNormal(points[idx], points[idxRight], points[idxDown]);
          const lighting = this.calculateLighting(normal, points[idx]);
          
          // لون القماش مع الإضاءة
          const baseColor = this.hexToRgb(this.thobe.color);
          const r = Math.floor(baseColor.r * lighting.r);
          const g = Math.floor(baseColor.g * lighting.g);
          const b = Math.floor(baseColor.b * lighting.b);
          
          // رسم المثلثين
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fill();
          
          ctx.beginPath();
          ctx.moveTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fill();
          
          // ظلال ثنيات القماش
          if (this.thobe.fabric === 'silk' || this.thobe.fabric === 'polyester') {
            this.drawFoldShadow(ctx, p1, p2, p3, p4, normal);
          }
        }
      }
    }
    
    // حواف الثوب
    this.drawEdges(ctx, projected, segments, rings);
  }
  
  drawSleeve(ctx, sleeveData, transform3D, isBack) {
    const points = sleeveData.points;
    const segments = sleeveData.segments;
    const rings = sleeveData.rings;
    
    const projected = points.map(p => transform3D(p.x, p.y, p.z));
    
    // تحديد ما إذا كان هذا الجزء الخلفي أو الأمامي
    const avgZ = projected.reduce((sum, p) => sum + p.z, 0) / projected.length;
    const shouldDraw = isBack ? avgZ < 0 : avgZ >= -20;
    
    if (!shouldDraw) return;
    
    for (let ring = 0; ring < rings; ring++) {
      for (let seg = 0; seg < segments; seg++) {
        const idx = ring * (segments + 1) + seg;
        const idxRight = idx + 1;
        const idxDown = idx + segments + 1;
        const idxDownRight = idxDown + 1;
        
        const p1 = projected[idx];
        const p2 = projected[idxRight];
        const p3 = projected[idxDown];
        const p4 = projected[idxDownRight];
        
        if (p1.z > -30) {
          const normal = this.calculateNormal(points[idx], points[idxRight], points[idxDown]);
          const lighting = this.calculateLighting(normal, points[idx]);
          
          const baseColor = this.hexToRgb(this.thobe.color);
          const shadeFactor = isBack ? 0.7 : 1;
          const r = Math.floor(baseColor.r * lighting.r * shadeFactor);
          const g = Math.floor(baseColor.g * lighting.g * shadeFactor);
          const b = Math.floor(baseColor.b * lighting.b * shadeFactor);
          
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fill();
          
          ctx.beginPath();
          ctx.moveTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }
  
  drawCollar(ctx, transform3D) {
    if (this.thobe.collarType === 'none') return;
    
    const collar = this.collarData;
    const points = collar.points;
    
    ctx.save();
    
    // رسم الياقة كشكل مغلق
    ctx.beginPath();
    
    let first = true;
    for (let p of points) {
      const proj = transform3D(p.x, p.y, p.z);
      if (first) {
        ctx.moveTo(proj.x, proj.y);
        first = false;
      } else {
        ctx.lineTo(proj.x, proj.y);
      }
    }
    
    ctx.closePath();
    
    // تظليل الياقة
    const baseColor = this.hexToRgb(this.thobe.color);
    const darkened = {
      r: Math.floor(baseColor.r * 0.85),
      g: Math.floor(baseColor.g * 0.85),
      b: Math.floor(baseColor.b * 0.85)
    };
    
    ctx.fillStyle = `rgb(${darkened.r},${darkened.g},${darkened.b})`;
    ctx.fill();
    
    // حدود الياقة
    ctx.strokeStyle = `rgba(${darkened.r * 0.7},${darkened.g * 0.7},${darkened.b * 0.7}, 0.5)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // تفاصيل الياقة حسب النوع
    if (this.thobe.collarType === 'mandarin') {
      // ياقة صينية - خط عمودي
      ctx.beginPath();
      const topCenter = transform3D(0, points[0].y, points[0].z);
      const bottomCenter = transform3D(0, points[0].y + this.thobe.collarHeight, points[0].z);
      ctx.moveTo(topCenter.x, topCenter.y);
      ctx.lineTo(bottomCenter.x, bottomCenter.y);
      ctx.strokeStyle = `rgba(${darkened.r * 0.6},${darkened.g * 0.6},${darkened.b * 0.6}, 0.8)`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  drawDetails(ctx, transform3D) {
    const t = this.thobe;
    
    ctx.save();
    
    // الجبزور (خط الأزرار الأمامي)
    if (t.hasPlacket) {
      const topY = -t.height * 0.5 + t.height * 0.08;
      const placketLen = t.height * 0.25;
      
      const p1 = transform3D(0, topY, 5);
      const p2 = transform3D(0, topY + placketLen, 3);
      
      // خط الجبزور
      ctx.beginPath();
      ctx.moveTo(p1.x - 3, p1.y);
      ctx.lineTo(p2.x - 3, p2.y);
      ctx.moveTo(p1.x + 3, p1.y);
      ctx.lineTo(p2.x + 3, p2.y);
      
      const baseColor = this.hexToRgb(t.color);
      ctx.strokeStyle = `rgba(${baseColor.r * 0.7},${baseColor.g * 0.7},${baseColor.b * 0.7}, 0.6)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // الأزرار
      const btnCount = 3;
      for (let i = 0; i < btnCount; i++) {
        const btnY = topY + placketLen * (0.2 + i * 0.3);
        const btnP = transform3D(0, btnY, 6);
        
        ctx.beginPath();
        ctx.arc(btnP.x, btnP.y, 2.5 * btnP.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor.r * 0.5},${baseColor.g * 0.5},${baseColor.b * 0.5}, 0.9)`;
        ctx.fill();
        
        // لمعة الزر
        ctx.beginPath();
        ctx.arc(btnP.x - 0.5, btnP.y - 0.5, 1 * btnP.scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fill();
      }
    }
    
    // الجيوب
    if (t.hasPockets) {
      // جيب الصدر
      const pocketY = -t.height * 0.5 + t.height * 0.2;
      const pocketX = t.chestWidth * 0.25;
      
      const pp1 = transform3D(pocketX, pocketY, 8);
      const pp2 = transform3D(pocketX + 15, pocketY, 8);
      const pp3 = transform3D(pocketX + 15, pocketY + 18, 8);
      const pp4 = transform3D(pocketX, pocketY + 18, 8);
      
      ctx.beginPath();
      ctx.moveTo(pp1.x, pp1.y);
      ctx.lineTo(pp2.x, pp2.y);
      ctx.lineTo(pp3.x, pp3.y);
      ctx.lineTo(pp4.x, pp4.y);
      ctx.closePath();
      
      const baseColor = this.hexToRgb(t.color);
      ctx.fillStyle = `rgba(${baseColor.r * 0.92},${baseColor.g * 0.92},${baseColor.b * 0.92}, 0.95)`;
      ctx.fill();
      
      ctx.strokeStyle = `rgba(${baseColor.r * 0.75},${baseColor.g * 0.75},${baseColor.b * 0.75}, 0.6)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // خط الجيب العلوي
      ctx.beginPath();
      ctx.moveTo(pp1.x, pp1.y);
      ctx.lineTo(pp2.x, pp2.y);
      ctx.strokeStyle = `rgba(${baseColor.r * 0.6},${baseColor.g * 0.6},${baseColor.b * 0.6}, 0.8)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    
    // التطريز
    if (t.hasEmbroidery) {
      const embY = -t.height * 0.5 + t.height * 0.15;
      const embP = transform3D(t.chestWidth * 0.2, embY, 8);
      
      // نمط تطريز بسيط
      ctx.strokeStyle = 'rgba(200, 170, 100, 0.8)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(embP.x, embP.y, (3 + i * 2) * embP.scale, 0, Math.PI * 1.5);
        ctx.stroke();
      }
    }
    
    // الشريط الجانبي
    if (t.hasSideStripe) {
      const stripeX = t.hemWidth * 0.48;
      const s1 = transform3D(stripeX, -t.height * 0.3, 0);
      const s2 = transform3D(stripeX, t.height * 0.4, 0);
      
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);
      ctx.strokeStyle = 'rgba(74, 158, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  drawEdges(ctx, projected, segments, rings) {
    // رسم حواف الثوب للإبراز
    ctx.save();
    
    const baseColor = this.hexToRgb(this.thobe.color);
    const edgeColor = `rgba(${baseColor.r * 0.6},${baseColor.g * 0.6},${baseColor.b * 0.6}, 0.4)`;
    
    ctx.strokeStyle = edgeColor;
    ctx.lineWidth = 0.5;
    
    // الحواف الجانبية
    for (let ring = 0; ring <= rings; ring += 4) {
      ctx.beginPath();
      for (let seg = 0; seg <= segments; seg++) {
        const idx = ring * (segments + 1) + seg;
        const p = projected[idx];
        if (seg === 0) {
          ctx.moveTo(p.x, p.y);
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  drawFoldShadow(ctx, p1, p2, p3, p4, normal) {
    // إضافة ظلال ناعمة للثنيات
    const intensity = Math.abs(normal.y) * 0.1;
    if (intensity > 0.02) {
      ctx.fillStyle = `rgba(0,0,0,${intensity * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.closePath();
      ctx.fill();
    }
  }
  
  calculateNormal(p1, p2, p3) {
    const u = { x: p2.x - p1.x, y: p2.y - p1.y, z: p2.z - p1.z };
    const v = { x: p3.x - p1.x, y: p3.y - p1.y, z: p3.z - p1.z };
    
    const normal = {
      x: u.y * v.z - u.z * v.y,
      y: u.z * v.x - u.x * v.z,
      z: u.x * v.y - u.y * v.x
    };
    
    const len = Math.sqrt(normal.x*normal.x + normal.y*normal.y + normal.z*normal.z);
    if (len > 0) {
      normal.x /= len;
      normal.y /= len;
      normal.z /= len;
    }
    
    return normal;
  }
  
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
  }
  
  // ==========================================================================
  // حلقة الرسم الرئيسية
  // ==========================================================================
  
  animate() {
    if (!this.running) return;
    
    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;
    this.time += dt;
    
    // تحديث الكاميرا مع الفيزياء
    this.updateCamera(dt);
    
    // تحديث فيزياء القماش
    this.updatePhysics(dt);
    
    // الرسم
    this.render();
    
    requestAnimationFrame(() => this.animate());
  }
  
  updateCamera(dt) {
    const cam = this.camera;
    const phys = this.physics;
    
    // الدوران التلقائي
    if (this.autoRotate) {
      cam.targetRotY += this.autoRotateSpeed;
    }
    
    // تطبيق السرعة الزاوية
    if (phys.inertia) {
      cam.targetRotY += phys.angularVelocity.y;
      cam.targetRotX += phys.angularVelocity.x;
      
      phys.angularVelocity.x *= phys.damping;
      phys.angularVelocity.y *= phys.damping;
    }
    
    // تقييد التدوير العمودي
    cam.targetRotX = Math.max(-1.2, Math.min(1.2, cam.targetRotX));
    
    // تنعيم الحركة
    cam.rotX += (cam.targetRotX - cam.rotX) * 0.12;
    cam.rotY += (cam.targetRotY - cam.rotY) * 0.12;
    cam.zoom += (cam.targetZoom - cam.zoom) * 0.15;
  }
  
  // ==========================================================================
  // معالجة الأحداث والتفاعل
  // ==========================================================================
  
  setupEventListeners() {
    const container = document.getElementById('canvas-container');
    
    // الماوس
    container.addEventListener('mousedown', (e) => {
      this.mouse.down = true;
      this.mouse.lastX = e.clientX;
      this.mouse.lastY = e.clientY;
    });
    
    window.addEventListener('mousemove', (e) => {
      if (this.mouse.down) {
        const dx = e.clientX - this.mouse.lastX;
        const dy = e.clientY - this.mouse.lastY;
        
        this.camera.targetRotY += dx * 0.008;
        this.camera.targetRotX += dy * 0.006;
        
        this.physics.angularVelocity.y = dx * 0.003;
        this.physics.angularVelocity.x = dy * 0.002;
        
        this.mouse.lastX = e.clientX;
        this.mouse.lastY = e.clientY;
      }
      
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    
    window.addEventListener('mouseup', () => {
      this.mouse.down = false;
    });
    
    // عجلة الفأرة للتكبير
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      this.camera.targetZoom = Math.max(0.5, Math.min(3, this.camera.targetZoom + delta));
    }, { passive: false });
    
    // اللمس
    container.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        this.touch.active = true;
        this.touch.lastX = e.touches[0].clientX;
        this.touch.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.touch.pinchDist = Math.sqrt(dx*dx + dy*dy);
      }
    }, { passive: false });
    
    container.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (e.touches.length === 1 && this.touch.active) {
        const dx = e.touches[0].clientX - this.touch.lastX;
        const dy = e.touches[0].clientY - this.touch.lastY;
        
        this.camera.targetRotY += dx * 0.01;
        this.camera.targetRotX += dy * 0.008;
        
        this.touch.lastX = e.touches[0].clientX;
        this.touch.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (this.touch.pinchDist > 0) {
          const scale = dist / this.touch.pinchDist;
          this.camera.targetZoom = Math.max(0.5, Math.min(3, this.camera.targetZoom * scale));
        }
        this.touch.pinchDist = dist;
      }
    }, { passive: false });
    
    container.addEventListener('touchend', () => {
      this.touch.active = false;
      this.touch.pinchDist = 0;
    });
    
    // نقرتان للإعادة
    container.addEventListener('dblclick', () => {
      this.resetView();
    });
    
    // تغيير حجم النافذة
    window.addEventListener('resize', () => {
      this.setupCanvas();
    });
  }
  
  // ==========================================================================
  // واجهة برمجة التطبيق العامة
  // ==========================================================================
  
  setView(view) {
    const views = {
      front: { rotX: 0, rotY: 0 },
      back: { rotX: 0, rotY: Math.PI },
      right: { rotX: 0, rotY: Math.PI / 2 },
      left: { rotX: 0, rotY: -Math.PI / 2 },
      top: { rotX: -1.2, rotY: 0 },
      free: { rotX: -0.15, rotY: 0.3 }
    };
    
    const target = views[view];
    if (target) {
      this.camera.targetRotX = target.rotX;
      this.camera.targetRotY = target.rotY;
      
      // إيقاف الدوران التلقائي عند اختيار زاوية محددة
      if (view !== 'free' && this.autoRotate) {
        this.autoRotate = false;
        const btn = document.getElementById('autoRotateBtn');
        if (btn) btn.classList.remove('active');
      }
    }
  }
  
  setCut(cut) {
    this.thobe.cut = cut;
    this.generateThobeGeometry();
  }
  
  setCollar(type) {
    this.thobe.collarType = type;
    this.generateCollar();
  }
  
  setSleeve(type) {
    this.thobe.sleeveType = type;
    this.generateSleeves();
  }
  
  setCuff(type) {
    this.thobe.cuffType = type;
  }
  
  toggleDetail(detail) {
    switch(detail) {
      case 'pockets':
        this.thobe.hasPockets = !this.thobe.hasPockets;
        break;
      case 'placket':
        this.thobe.hasPlacket = !this.thobe.hasPlacket;
        break;
      case 'embroidery':
        this.thobe.hasEmbroidery = !this.thobe.hasEmbroidery;
        break;
      case 'sideStripe':
        this.thobe.hasSideStripe = !this.thobe.hasSideStripe;
        break;
    }
  }
  
  setColor(color, swatchEl) {
    this.thobe.color = color;
    
    // تحديث حالة الألوان النشطة
    document.querySelectorAll('.color-swatch').forEach(sw => {
      sw.classList.remove('active');
    });
    if (swatchEl) {
      swatchEl.classList.add('active');
    }
  }
  
  setFabric(fabric) {
    this.thobe.fabric = fabric;
    
    // ضبط الخصائص حسب الخامة
    const fabricProps = {
      cotton: { sheen: 0.2, smoothness: 0.6, weight: 0.5 },
      silk: { sheen: 0.8, smoothness: 0.9, weight: 0.3 },
      linen: { sheen: 0.15, smoothness: 0.4, weight: 0.6 },
      polyester: { sheen: 0.6, smoothness: 0.8, weight: 0.4 }
    };
    
    const props = fabricProps[fabric];
    if (props) {
      this.thobe.sheen = props.sheen;
      this.thobe.smoothness = props.smoothness;
      this.thobe.weight = props.weight;
      
      // تحديث المنزلقات
      document.getElementById('sheenVal').textContent = Math.round(props.sheen * 100) + '%';
      document.getElementById('smoothnessVal').textContent = Math.round(props.smoothness * 100) + '%';
      document.getElementById('weightVal').textContent = Math.round(props.weight * 100) + '%';
      
      document.querySelectorAll('.control-section').forEach(section => {
        const h3 = section.querySelector('h3');
        if (h3 && h3.textContent === 'خصائص القماش') {
          const sliders = section.querySelectorAll('input[type="range"]');
          if (sliders[0]) sliders[0].value = props.sheen * 100;
          if (sliders[1]) sliders[1].value = props.smoothness * 100;
          if (sliders[2]) sliders[2].value = props.weight * 100;
        }
      });
    }
  }
  
  setSheen(value) {
    this.thobe.sheen = value / 100;
    document.getElementById('sheenVal').textContent = value + '%';
  }
  
  setSmoothness(value) {
    this.thobe.smoothness = value / 100;
    document.getElementById('smoothnessVal').textContent = value + '%';
  }
  
  setWeight(value) {
    this.thobe.weight = value / 100;
    document.getElementById('weightVal').textContent = value + '%';
    
    // تحديث كتلة نقاط القماش
    for (let p of this.cloth.points) {
      p.mass = 1 + this.thobe.weight * 0.5;
    }
  }
  
  setZoom(value) {
    this.camera.targetZoom = value / 100;
    document.getElementById('zoomVal').textContent = value + '%';
  }
  
  setVolume(value) {
    this.thobe.volume = value / 100;
    document.getElementById('volumeVal').textContent = value + '%';
    this.generateThobeGeometry();
  }
  
  setLighting(preset) {
    this.thobe.lighting = preset;
    this.applyLightingPreset(preset);
  }
  
  setLightIntensity(value) {
    this.thobe.lightIntensity = value / 100;
    document.getElementById('lightIntensityVal').textContent = value + '%';
  }
  
  setWind(value) {
    this.wind.strength = value / 100;
    this.cloth.windForce = value / 100;
    document.getElementById('windVal').textContent = value + '%';
  }
  
  resetView() {
    this.camera.targetRotX = -0.15;
    this.camera.targetRotY = 0.3;
    this.camera.targetZoom = 1;
    
    this.physics.angularVelocity.x = 0;
    this.physics.angularVelocity.y = 0;
    
    // إعادة ضبط المنزلقات
    document.getElementById('zoomVal').textContent = '100%';
    const zoomSlider = document.querySelector('input[min="50"][max="200"]');
    if (zoomSlider) zoomSlider.value = 100;
  }
  
  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    const btn = document.getElementById('autoRotateBtn');
    if (btn) {
      btn.classList.toggle('active', this.autoRotate);
    }
  }
}

// ============================================================================
// التهيئة العامة
// ============================================================================

let engine = null;

function initEngine() {
  engine = new Thobe3DEngine();
  window.__thobeEngine = engine;
}

// دوال الواجهة العامة
function togglePanel() {
  const panel = document.getElementById('control-panel');
  const toggle = document.getElementById('panelToggle');
  if (panel) {
    panel.classList.toggle('hidden');
  }
  if (toggle) {
    toggle.style.display = panel.classList.contains('hidden') ? 'flex' : 'none';
  }
}

function setView(view) {
  if (engine) engine.setView(view);
}

function setCut(cut) {
  if (engine) engine.setCut(cut);
}

function setCollar(type) {
  if (engine) engine.setCollar(type);
}

function setSleeve(type) {
  if (engine) engine.setSleeve(type);
}

function setCuff(type) {
  if (engine) engine.setCuff(type);
}

function toggleDetail(detail) {
  if (engine) engine.toggleDetail(detail);
}

function setColor(color, el) {
  if (engine) engine.setColor(color, el);
}

function setFabric(fabric) {
  if (engine) engine.setFabric(fabric);
}

function setSheen(value) {
  if (engine) engine.setSheen(value);
}

function setSmoothness(value) {
  if (engine) engine.setSmoothness(value);
}

function setWeight(value) {
  if (engine) engine.setWeight(value);
}

function setZoom(value) {
  if (engine) engine.setZoom(value);
}

function setVolume(value) {
  if (engine) engine.setVolume(value);
}

function setLighting(preset) {
  if (engine) engine.setLighting(preset);
}

function setLightIntensity(value) {
  if (engine) engine.setLightIntensity(value);
}

function setWind(value) {
  if (engine) engine.setWind(value);
}

function resetView() {
  if (engine) engine.resetView();
}

function toggleAutoRotate() {
  if (engine) engine.toggleAutoRotate();
}

// بدء المحرك عند تحميل الصفحة
window.addEventListener('load', () => {
  initEngine();
});

// معالجة تغيير حجم النافذة
window.addEventListener('resize', () => {
  if (engine) {
    engine.setupCanvas();
  }
});

</script>
</body>
</html>
