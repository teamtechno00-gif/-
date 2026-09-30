/* ========== JS 1: البيانات ========== */
const LANGS = {
  ar: { dir:'rtl', name:'العربية', search:'ابحث عن..', login:'تسجيل دخول', register:'انشاء حساب', items:'منتج (ات)',
        change:'تغيير', footer:'© 2026 حلو الملك - جميع الحقوق محفوظة', cart:'عربة التسوق', total:'الإجمالي',
        checkout:'اتمام الطلب', add:'اضف الي عربة', stock:'متوفر في المخزون', currency:'ج.م', empty:'مفيش منتجات مطابقة',
        emptyCart:'العربة فاضية', chooseArea:'اختار منطقتك', save:'حفظ', name:'الاسم', email:'البريد الإلكتروني',
        password:'كلمة المرور', added:'تمت الإضافة للعربة', ordered:'تم استلام طلبك، شكراً لك!', welcome:'أهلاً',
        fill:'من فضلك املأ كل البيانات', logged:'تم تسجيل الدخول', loc:'تم تغيير المنطقة', all:'الكل',
        h1:'الحلو ليه طعم تاني', p1:'حلويات شرقية وغربية طازجة كل يوم', h2:'كحك العيد 2026', p2:'اطلب دلوقتي بخصم خاص',
        h3:'مطعم حلو الملك', p3:'سلطات ووجبات خفيفة طازجة' },
  en: { dir:'ltr', name:'English', search:'Search..', login:'Log in', register:'Create account', items:'item(s)',
        change:'Change', footer:'© 2026 Halawet El Malek - All rights reserved', cart:'Shopping cart', total:'Total',
        checkout:'Checkout', add:'Add to cart', stock:'In stock', currency:'EGP', empty:'No matching products',
        emptyCart:'Your cart is empty', chooseArea:'Choose your area', save:'Save', name:'Name', email:'Email',
        password:'Password', added:'Added to cart', ordered:'Order received, thank you!', welcome:'Welcome',
        fill:'Please fill in all fields', logged:'Logged in', loc:'Area updated', all:'All',
        h1:'Sweets with a difference', p1:'Fresh oriental and western sweets every day', h2:'Kahk 2026', p2:'Order now with a special discount',
        h3:'Halawet El Malek Restaurant', p3:'Fresh salads and light meals' }
};
const CATS = [
  { id:'sales',  ar:'الخصومات',      en:'Offers' },
  { id:'rest',   ar:'مطعم',          en:'Restaurant' },
  { id:'egy',    ar:'حلويات مصرية',  en:'Egyptian Sweets' },
  { id:'west',   ar:'حلويات غربية',  en:'Western Sweets' },
  { id:'mix',    ar:'ميكس سويت',     en:'Mix Sweet' },
  { id:'bake',   ar:'مخبوزات',       en:'Bakery' },
  { id:'choco',  ar:'شيكولاتة',      en:'Chocolate' },
  { id:'kahk',   ar:'كحك 2026',      en:'Kahk 2026' },
  { id:'mawlid', ar:'المولد 2026',   en:'Mawlid 2026' },
  { id:'ice',    ar:'آيس كريم',      en:'Ice Cream' }
];
const AREAS = [
  { ar:'مكرم عبيد', en:'Makram Ebeid' }, { ar:'مدينة نصر', en:'Nasr City' }, { ar:'المعادي', en:'Maadi' },
  { ar:'التجمع الخامس', en:'New Cairo' }, { ar:'الجيزة', en:'Giza' }, { ar:'الإسكندرية', en:'Alexandria' }
];
// price = السعر، old = السعر قبل الخصم (اختياري)، img = مسار صورة حقيقية (اختياري)
const PRODUCTS = [
  { id:1,  cat:'rest',  e:'🥗', ar:'فيتا سلاد',      en:'Feta Salad',       price:95 },
  { id:2,  cat:'rest',  e:'🥗', ar:'سلمون سلاد',     en:'Salmon Salad',     price:280 },
  { id:3,  cat:'rest',  e:'🥗', ar:'تونة سلاد',      en:'Tuna Salad',       price:275 },
  { id:4,  cat:'rest',  e:'🥗', ar:'ريكيو سلاد',     en:'Rocca Salad',      price:145 },
  { id:5,  cat:'egy',   e:'🍯', ar:'بسبوسة بالقشطة', en:'Basbousa Qishta',  price:120 },
  { id:6,  cat:'egy',   e:'🥮', ar:'كنافة بالمكسرات',en:'Nutty Kunafa',     price:180 },
  { id:7,  cat:'egy',   e:'🍮', ar:'أم علي',         en:'Om Ali',           price:85 },
  { id:8,  cat:'west',  e:'🍰', ar:'تشيز كيك فراولة',en:'Strawberry Cheesecake', price:160 },
  { id:9,  cat:'west', c:'#5A3420',  e:'🎂', ar:'جاتوه شوكولاتة', en:'Chocolate Gateau', price:350 },
  { id:10, cat:'west',  e:'🧁', ar:'كب كيك',         en:'Cupcake',          price:45 },
  { id:11, cat:'mix',   e:'🍬', ar:'ميكس سويت 1 كجم',en:'Mix Sweet 1 kg',   price:420 },
  { id:12, cat:'mix',   e:'🍪', ar:'ميكس بيتي فور',  en:'Petit Four Mix',   price:260 },
  { id:13, cat:'bake',  e:'🥐', ar:'كرواسون سادة',   en:'Plain Croissant',  price:35 },
  { id:14, cat:'bake',  e:'🥖', ar:'خبز فرنسي',      en:'French Baguette',  price:25 },
  { id:15, cat:'choco', e:'🍫', ar:'شوكولاتة داكنة', en:'Dark Chocolate',   price:110 },
  { id:16, cat:'choco', e:'🍩', ar:'دونات شوكولاتة', en:'Chocolate Donut',  price:40 },
  { id:17, cat:'kahk',  e:'🍪', ar:'كحك بالعجوة',    en:'Date Kahk',        price:220 },
  { id:18, cat:'kahk',  e:'🍪', ar:'كحك بالملبن',    en:'Delight Kahk',     price:240 },
  { id:19, cat:'mawlid',e:'🍭', ar:'حلاوة المولد',   en:'Mawlid Halawa',    price:150 },
  { id:20, cat:'mawlid',e:'🥜', ar:'حمص الشام',      en:'Sweet Chickpeas',  price:60 },
  { id:21, cat:'ice',   e:'🍨', ar:'آيس كريم فانيليا',en:'Vanilla Ice Cream',price:70 },
  { id:22, cat:'ice',   e:'🍦', ar:'آيس كريم مانجو', en:'Mango Ice Cream',  price:75 },
  { id:23, cat:'sales', e:'🍰', ar:'تشيز كيك (خصم)', en:'Cheesecake (Deal)',price:120, old:160 },
  { id:24, cat:'sales', k:'sq', e:'🥮', ar:'كنافة (خصم)',    en:'Kunafa (Deal)',    price:140, old:180 }
];

/* ========== JS 1.5: صور المنتجات ========== */
// لو عايز صورة حقيقية: حط مسارها في حقل img للمنتج، مثال: { id:5, ..., img:'images/basbousa.jpg' }
// لو الصورة مش موجودة بيظهر الرسم الافتراضي تلقائي.
const KIND = { rest:'bowl', egy:'sq', west:'cake', mix:'candy', bake:'croissant', choco:'bar', kahk:'cookie', mawlid:'cookie', ice:'ice', sales:'cake' };
const PAL = ['#E8A0B4','#8B5A3C','#F2C14E','#C9A0DC','#F08A5D','#9CCB86'];
const PLATE = '<ellipse cx="125" cy="128" rx="90" ry="20" fill="#fff" stroke="#e4dcc3"/>';
const SHAPES = {
  bowl:(c)=>`<path d="M52 92 Q60 142 125 142 Q190 142 198 92Z" fill="#fff" fill-opacity=".75" stroke="#d9d4c4"/><ellipse cx="125" cy="92" rx="73" ry="20" fill="#7FB069"/><ellipse cx="110" cy="88" rx="40" ry="10" fill="#A6D18F"/><circle cx="92" cy="86" r="9" fill="#E4572E"/><circle cx="150" cy="82" r="8" fill="${c}"/><rect x="118" y="76" width="16" height="12" rx="2" fill="#FFF3C4"/><circle cx="165" cy="94" r="8" fill="#F2C14E"/><circle cx="208" cy="60" r="17" fill="#fff" stroke="#d9d4c4"/><circle cx="208" cy="60" r="12" fill="#E9B949"/>`,
  sq:(c)=>`${PLATE}<rect x="80" y="78" width="90" height="48" rx="10" fill="#D9982B"/><rect x="80" y="78" width="90" height="22" rx="10" fill="#EDB84E"/><circle cx="104" cy="90" r="4" fill="#7FA35A"/><circle cx="126" cy="86" r="4" fill="#7FA35A"/><circle cx="148" cy="91" r="4" fill="#7FA35A"/><path d="M84 112 Q125 122 166 112" stroke="#fff6" stroke-width="3" fill="none"/>`,
  cake:(c)=>`${PLATE}<rect x="72" y="70" width="106" height="54" rx="8" fill="${c}"/><rect x="72" y="90" width="106" height="8" fill="#FFF7E6"/><rect x="72" y="107" width="106" height="8" fill="#FFF7E6"/><ellipse cx="125" cy="70" rx="53" ry="12" fill="#FFF7E6"/><circle cx="125" cy="61" r="9" fill="#C8102E"/><path d="M125 52 q4 -8 10 -8" stroke="#4E7A34" stroke-width="3" fill="none"/>`,
  candy:()=>`${PLATE}`+[[88,112],[125,98],[162,112],[106,130],[146,130]].map((q,i)=>`<circle cx="${q[0]}" cy="${q[1]}" r="17" fill="${PAL[i]}"/><circle cx="${q[0]-5}" cy="${q[1]-6}" r="5" fill="#fff8"/>`).join(''),
  croissant:()=>`${PLATE}<path d="M48 120 Q58 66 125 62 Q192 66 202 120 Q170 96 125 98 Q80 96 48 120Z" fill="#D98A3D"/><path d="M84 80 L92 108 M110 70 L114 100 M140 70 L136 100 M166 80 L158 108" stroke="#B5691F" stroke-width="4" stroke-linecap="round"/><path d="M70 92 Q100 72 125 72" stroke="#F3B872" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  bar:()=>`<g transform="rotate(-8 125 100)"><rect x="68" y="58" width="114" height="82" rx="8" fill="#4B2A1A"/><path d="M106 58V140M144 58V140M68 85H182M68 113H182" stroke="#2f1a10" stroke-width="3"/><rect x="68" y="58" width="114" height="26" rx="8" fill="#fff" fill-opacity=".08"/><rect x="152" y="118" width="30" height="22" rx="4" fill="#D8B95A"/></g>`,
  cookie:()=>`${PLATE}`+[[92,112],[152,110],[122,88],[176,126],[70,130]].map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="24" fill="#E0B77A"/><circle cx="${q[0]}" cy="${q[1]}" r="24" fill="none" stroke="#F7EBD0" stroke-width="4" stroke-dasharray="2 5"/><circle cx="${q[0]-6}" cy="${q[1]-4}" r="3" fill="#7a4a25"/><circle cx="${q[0]+7}" cy="${q[1]+5}" r="3" fill="#7a4a25"/>`).join(''),
  ice:(c,p)=>`<path d="M92 100 L104 144 H146 L158 100Z" fill="#fff" stroke="#e0d8c0"/><circle cx="108" cy="92" r="24" fill="${c}"/><circle cx="144" cy="92" r="24" fill="#FFF3D6"/><circle cx="126" cy="70" r="26" fill="${PAL[(p.id+2)%6]}"/><circle cx="126" cy="43" r="6" fill="#C8102E"/>`
};
function art(p){
  const c = p.c || PAL[p.id % PAL.length], k = p.k || KIND[p.cat];
  return `<svg viewBox="0 0 250 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.en}"><defs><radialGradient id="bg${p.id}" cx=".5" cy=".35" r=".85"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#F1E6C8"/></radialGradient></defs><rect width="250" height="170" fill="#F8F1DC"/><rect width="250" height="170" fill="url(#bg${p.id})"/><ellipse cx="125" cy="148" rx="86" ry="9" fill="#0000001a"/>${SHAPES[k](c,p)}</svg>`;
}

const SLIDES = [
  { g:'linear-gradient(120deg,#B8963E,#8F7229)', e:'🍯', h:'h1', p:'p1' },
  { g:'linear-gradient(120deg,#D2B45E,#B8963E)', e:'🍪', h:'h2', p:'p2' },
  { g:'linear-gradient(120deg,#8F7229,#C9A24A)', e:'🥗', h:'h3', p:'p3' }
];

/* ========== JS 2: الحالة (State) ========== */
const store = {
  get(k, d){ try{ const v = localStorage.getItem('hm_'+k); return v ? JSON.parse(v) : d }catch(e){ return d } },
  set(k, v){ try{ localStorage.setItem('hm_'+k, JSON.stringify(v)) }catch(e){} }
};
const state = {
  lang: store.get('lang','ar'), cart: store.get('cart',{}), wish: store.get('wish',[]),
  user: store.get('user',null), area: store.get('area',0), cat:'all', query:'', authMode:'login', slide:0
};
const T = k => LANGS[state.lang][k];
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const nameOf = o => o[state.lang];
const money = n => `${n} ${T('currency')}`;

/* ========== JS 3: الترجمة والاتجاه ========== */
function applyLang(){
  const L = LANGS[state.lang];
  document.documentElement.lang = state.lang; document.documentElement.dir = L.dir;
  $$('[data-t]').forEach(el => el.textContent = T(el.dataset.t));
  $$('[data-ph]').forEach(el => el.placeholder = T(el.dataset.ph));
  $('#langName').textContent = state.lang === 'ar' ? 'English' : 'العربية';
  $('#authGo').textContent = T(state.authMode);
  $$('.tabs button').forEach(b => b.textContent = T(b.dataset.tab));
  $('#locName').textContent = nameOf(AREAS[state.area]);
  $('#locSel').innerHTML = AREAS.map((a,i)=>`<option value="${i}" ${i==state.area?'selected':''}>${nameOf(a)}</option>`).join('');
  renderAccount(); renderNav(); renderHero(); renderProducts(); renderCart();
}

/* ========== JS 4: الرسم (Render) ========== */
function renderAccount(){
  $('#btnAccount span').textContent = state.user ? `${T('welcome')} ${state.user.name}` : T('login');
  $('#btnRegister').style.display = state.user ? 'none' : '';
}
function renderNav(){
  const items = [{id:'all', ar:'الكل', en:'All'}, ...CATS];
  $('#nav').innerHTML = items.map(c=>`<button data-cat="${c.id}" class="${state.cat===c.id?'on':''}">${nameOf(c)}</button>`).join('');
}
function renderHero(){
  $('#hero').innerHTML = SLIDES.map((s,i)=>`<div class="slide ${i===state.slide?'on':''}" style="background:${s.g}">
    <div><h2>${T(s.h)}</h2><p>${T(s.p)}</p></div><div class="em">${s.e}</div></div>`).join('')
    + `<div class="dots">${SLIDES.map((_,i)=>`<i data-slide="${i}" class="${i===state.slide?'on':''}"></i>`).join('')}</div>`;
}
function cardHTML(p){
  const liked = state.wish.includes(p.id);
  return `<article class="card">
    <div class="pic">${art(p)}${p.img?`<img src="${p.img}" alt="${nameOf(p)}" loading="lazy" onerror="this.remove()">`:''}<span class="tag">${nameOf(CATS.find(c=>c.id===p.cat))}</span>
      <button class="heart ${liked?'on':''}" data-wish="${p.id}" aria-label="wishlist">♥</button></div>
    <div class="info"><div>${nameOf(p)}</div><div class="stars">☆☆☆☆☆ <small>(0)</small></div>
      <span class="stock">● ${T('stock')}</span>
      <div class="price">${money(p.price)}${p.old?`<span class="old">${p.old}</span>`:''}</div>
      <button class="add" data-add="${p.id}">🛒 ${T('add')}</button></div></article>`;
}
function renderProducts(){
  const q = state.query.trim().toLowerCase();
  const match = p => (state.cat==='all' || p.cat===state.cat) && (!q || p.ar.includes(q) || p.en.toLowerCase().includes(q));
  const html = CATS.map(c=>{
    const list = PRODUCTS.filter(p => p.cat===c.id && match(p));
    if(!list.length) return '';
    return `<section class="sec" id="sec-${c.id}"><h3>${nameOf(c)}</h3>
      <button class="arrow prev" data-scroll="-1">◀</button><button class="arrow next" data-scroll="1">▶</button>
      <div class="row">${list.map(cardHTML).join('')}</div></section>`;
  }).join('');
  $('#main').innerHTML = html || `<div class="empty">${T('empty')}</div>`;
}
function renderCart(){
  const ids = Object.keys(state.cart);
  const count = ids.reduce((s,id)=>s+state.cart[id],0);
  const total = ids.reduce((s,id)=>s+state.cart[id]*PRODUCTS.find(p=>p.id==id).price,0);
  $('#cartCount').textContent = count;
  $('#cartTotal').textContent = money(total);
  $('#cartItems').innerHTML = ids.length ? ids.map(id=>{
    const p = PRODUCTS.find(x=>x.id==id);
    return `<div class="line"><span class="e">${p.e}</span><div class="n">${nameOf(p)}<br><b>${money(p.price)}</b></div>
      <div class="qty"><button data-qty="${id}" data-d="-1">−</button><b>${state.cart[id]}</b><button data-qty="${id}" data-d="1">+</button></div></div>`;
  }).join('') : `<div class="empty">${T('emptyCart')}</div>`;
}

/* ========== JS 5: الإجراءات ========== */
let toastTimer;
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove('on'), 2200);
}
function openBox(sel){ $('#veil').classList.add('on'); $(sel).classList.add('on'); }
function closeAll(){ $('#veil').classList.remove('on'); $$('.modal,.drawer').forEach(x=>x.classList.remove('on')); }
function setAuthMode(m){
  state.authMode = m;
  $$('.tabs button').forEach(b=>b.classList.toggle('on', b.dataset.tab===m));
  $('#nameWrap').style.display = m==='register' ? '' : 'none';
  $('#authGo').textContent = T(m);
}
function addToCart(id){
  state.cart[id] = (state.cart[id]||0) + 1; store.set('cart', state.cart);
  renderCart(); toast(T('added'));
}
function changeQty(id, d){
  state.cart[id] = (state.cart[id]||0) + d;
  if(state.cart[id] <= 0) delete state.cart[id];
  store.set('cart', state.cart); renderCart();
}
function toggleWish(id){
  state.wish = state.wish.includes(id) ? state.wish.filter(x=>x!==id) : [...state.wish, id];
  store.set('wish', state.wish); renderProducts();
}
function submitAuth(){
  const name = $('#uName').value.trim(), email = $('#uEmail').value.trim(), pass = $('#uPass').value;
  if(!email || !pass || (state.authMode==='register' && !name)) return toast(T('fill'));
  state.user = { name: name || email.split('@')[0], email };
  store.set('user', state.user); closeAll(); renderAccount(); toast(T('logged'));
}

/* ========== JS 6: ربط الأحداث ========== */
document.addEventListener('click', e=>{
  const t = e.target.closest('button,i,#logo,#veil'); if(!t) return;
  if(t.dataset.cat){ state.cat = t.dataset.cat; renderNav(); renderProducts(); window.scrollTo({top:$('#hero').offsetTop-120,behavior:'smooth'}); }
  else if(t.dataset.add) addToCart(+t.dataset.add);
  else if(t.dataset.wish) toggleWish(+t.dataset.wish);
  else if(t.dataset.qty) changeQty(t.dataset.qty, +t.dataset.d);
  else if(t.dataset.scroll){ const row = t.closest('.sec').querySelector('.row'); row.scrollBy({left: +t.dataset.scroll * (state.lang==='ar'?-1:1) * 520}); }
  else if(t.dataset.slide){ state.slide = +t.dataset.slide; renderHero(); }
  else if(t.dataset.tab) setAuthMode(t.dataset.tab);
  else if(t.hasAttribute('data-close') || t.id==='veil') closeAll();
  else if(t.id==='logo'){ state.cat='all'; state.query=''; $('#q').value=''; renderNav(); renderProducts(); window.scrollTo({top:0,behavior:'smooth'}); }
  else if(t.id==='btnAccount' || t.id==='btnRegister'){ if(state.user && t.id==='btnAccount'){ state.user=null; store.set('user',null); renderAccount(); } else { setAuthMode(t.id==='btnRegister'?'register':'login'); openBox('#authModal'); } }
  else if(t.id==='btnCart') openBox('#cart');
  else if(t.id==='btnLoc') openBox('#locModal');
  else if(t.id==='locGo'){ state.area = +$('#locSel').value; store.set('area', state.area); closeAll(); applyLang(); toast(T('loc')); }
  else if(t.id==='authGo') submitAuth();
  else if(t.id==='btnLang'){ state.lang = state.lang==='ar'?'en':'ar'; store.set('lang', state.lang); applyLang(); }
  else if(t.id==='checkout'){ if(!Object.keys(state.cart).length) return toast(T('emptyCart')); state.cart={}; store.set('cart',{}); renderCart(); closeAll(); toast(T('ordered')); }
  else if(t.id==='up') window.scrollTo({top:0,behavior:'smooth'});
});
$('#q').addEventListener('input', e=>{ state.query = e.target.value; renderProducts(); });
window.addEventListener('scroll', ()=>{ $('#up').style.display = scrollY>400 ? 'block' : 'none'; });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeAll(); });
setInterval(()=>{ state.slide = (state.slide+1) % SLIDES.length; renderHero(); }, 5000);

/* ========== JS 7: التشغيل ========== */
applyLang();
