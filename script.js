const WA = '5511940764055';
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const PAY = {
  'Sunrise':'https://pagamento.uselunah.com.br/checkout/209460044:1','Selene':'https://pagamento.uselunah.com.br/checkout/209900134:1','Nova II':'https://pagamento.uselunah.com.br/checkout/209900324:1','Sunrise II':'https://pagamento.uselunah.com.br/checkout/209900425:1','Aura':'https://pagamento.uselunah.com.br/checkout/209900427:1','Nova':'https://pagamento.uselunah.com.br/checkout/209900428:1','Taurus':'https://pagamento.uselunah.com.br/checkout/209900430:1','Orbit':'https://pagamento.uselunah.com.br/checkout/209900625:1','Halo':'https://pagamento.uselunah.com.br/checkout/209900626:1','Atria':'https://pagamento.uselunah.com.br/checkout/209900632:1','Solaris':'https://pagamento.uselunah.com.br/checkout/209900687:1','Solaris II':'https://pagamento.uselunah.com.br/checkout/209900691:1','Nero':'https://pagamento.uselunah.com.br/checkout/209979667:1','Luna':'https://pagamento.uselunah.com.br/checkout/209979669:1','Orion':'https://pagamento.uselunah.com.br/checkout/209979784:1','Atlas':'https://pagamento.uselunah.com.br/checkout/209984993:1','Vega II':'https://pagamento.uselunah.com.br/checkout/210019176:1','Eclat Noir':'https://pagamento.uselunah.com.br/checkout/210019083:1','Astra III':'https://pagamento.uselunah.com.br/checkout/210019084:1','Aurora':'https://pagamento.uselunah.com.br/checkout/210019085:1','Aurora II':'https://pagamento.uselunah.com.br/checkout/210019086:1','Elara':'https://pagamento.uselunah.com.br/checkout/210019089:1','Celeste':'https://pagamento.uselunah.com.br/checkout/210019087:1','Celeste II':'https://pagamento.uselunah.com.br/checkout/210019088:1','Elara II':'https://pagamento.uselunah.com.br/checkout/210019090:1','Nyra':'https://pagamento.uselunah.com.br/checkout/210019091:1','Nyra II':'https://pagamento.uselunah.com.br/checkout/210019092:1','Eclipse':'https://pagamento.uselunah.com.br/checkout/210019120:1','Luna II':'https://pagamento.uselunah.com.br/checkout/210019121:1','Aurus':'https://pagamento.uselunah.com.br/checkout/210019129:1','Aurus II':'https://pagamento.uselunah.com.br/checkout/210019152:1','Eclipse II':'https://pagamento.uselunah.com.br/checkout/210019158:1','Gemini':'https://pagamento.uselunah.com.br/checkout/210019173:1','Libra':'https://pagamento.uselunah.com.br/checkout/210019174:1','Vega':'https://pagamento.uselunah.com.br/checkout/210019175:1','Earth':'https://pagamento.uselunah.com.br/checkout/210019094:1','Sky':'https://pagamento.uselunah.com.br/checkout/210019095:1','Serenity':'https://pagamento.uselunah.com.br/checkout/210019096:1','Protect':'https://pagamento.uselunah.com.br/checkout/210019097:1',
};

const PROMO = new Set(['Aurus','Aurus II','Orion']);
const NOVO  = new Set(['Eclat Noir','Astra III','Atlas','Aurora','Aurora II','Celeste','Celeste II','Elara','Elara II','Nyra','Nyra II']);

const BANNERS = [
  {img:'images/banners/banner-combo-2oculos.jpg',tag:'Lunah Collection',h:'Dois olhares,<br>um mesmo <em>estilo</em>',p:'2 óculos por R$219. Frete grátis para todo o Brasil.',cta:'Ver combo',msg:'Olá! Quero o combo 2 óculos por R$219.'},
  {img:'images/banners/banner-combo-oculos-pulseira.jpg',tag:'Lunah Atelier',h:'O presente<br><em>completo</em>',p:'Óculos + Pulseira Olho de Tigre por R$199.',cta:'Montar combo',msg:'Olá! Quero o combo Óculos + Pulseira por R$199.'},
  {img:'images/banners/banner-oculos-preco.jpg',tag:'Lunah',h:'Design que<br><em>marca</em> presença',p:'Óculos com design editorial. R$149 à vista ou 4x de R$40.',cta:'Ver coleção',msg:'Olá! Quero comprar um óculos Lunah.'},
  {img:'images/banners/banner-atelier-pulseiras.jpg',tag:'Lunah Atelier',h:'Energia que<br><em>transforma</em>',p:'Pulseiras com pedras naturais. R$119 ou 4x de R$30.',cta:'Ver pulseiras',msg:'Olá! Quero conhecer as pulseiras Lunah Atelier.'},
  {img:'images/banners/banner-colors-sunrise.jpg',tag:'Lunah Colors',h:'Cores que<br><em>definem</em> você',p:'Lentes coloridas e armações sem aro com presença.',cta:'Descobrir',msg:'Olá! Quero conhecer a linha Lunah Colors.'},
  {img:'images/banners/banner-grade-oculos.jpg',tag:'Lunah Vision',h:'Grau com<br><em>sofisticação</em>',p:'Armações de grau com design editorial Lunah.',cta:'Ver Vision',msg:'Olá! Quero conhecer a Lunah Vision.'},
  {img:'images/banners/banner-2pulseiras.jpg',tag:'Essências',h:'Escolha sua<br><em>energia</em>',p:'2 pulseiras por R$199,90. Amor que acolhe.',cta:'Escolher',msg:'Olá! Quero o combo 2 pulseiras por R$199,90.'},
];

const glasses = [
  ['Eclat Noir','Oval marcante','Armação oval preta com detalhe dourado elegante.','eclat-noir-front','eclat-noir-side','oval'],
  ['Astra III','Cat-eye moderno','Cat-eye azul escuro com linhas afiadas.','astra-iii-front','astra-iii-side','gatinho'],
  ['Atlas','Novo lançamento','Aviador tartaruga com lente degradê azul.','atlas-front','atlas-side','aviador'],
  ['Orbit','Top seller','Design forte e moderno com presença premium.','orbit-front','orbit-side','quadrado'],
  ['Eclipse','Versátil','Preto versátil, elegante e indispensável.','eclipse-front','eclipse-side','oval'],
  ['Solaris','Equilíbrio','Tartaruga com lente rosada: estilo e leveza.','solaris-front','solaris-side','oval'],
  ['Nova II','Seguro e marcante','Preto total com linhas fortes.','nova-ii-front','nova-ii-side','quadrado'],
  ['Atria','Elegância moderna','Preto sofisticado com detalhe metálico.','atria-front','atria-side','quadrado'],
  ['Halo','Produto desejo','Tom translúcido quente e design refinado.','halo-front','halo-side','oval'],
  ['Luna II','Identidade Lunah','Lentes rosadas com formato marcante.','luna-ii-front','luna-ii-side','oval'],
  ['Aurus','Impacto','Lente vermelha: atitude e sofisticação.','aurus-front','aurus-side','quadrado'],
  ['Aurus II','Premium urbano','Linhas arquitetônicas e visual moderno.','aurus-ii-front','aurus-ii-side','quadrado'],
  ['Solaris II','Leve e sofisticado','Translúcido em tons quentes e atemporal.','solaris-ii-front','solaris-ii-side','oval'],
  ['Sunrise','Clássico','Tartaruga atemporal com lente degradê.','sunrise-front','sunrise-side','oval'],
  ['Sunrise II','Suave e moderno','Translúcido claro com visual clean.','sunrise-ii-front','sunrise-ii-side','oval'],
  ['Aura','Presença','Tartaruga refinada com personalidade.','aura-front','aura-side','oval'],
  ['Gemini','Versátil','Preto clássico com linhas femininas.','gemini-front','gemini-side','oval'],
  ['Libra','Delicado','Metal dourado leve com toque de joia.','libra-front','libra-side','oval'],
  ['Vega','Minimal premium','Metal delicado com lente degradê suave.','vega-front','vega-side','oval'],
  ['Vega II','Clássico moderno','Aviador feminino leve e sofisticado.','vega-ii-front','vega-ii-side','aviador'],
  ['Selene','Elegante estruturado','Tartaruga marcante e feminina.','selene-front','selene-side','oval'],
  ['Nova','Fashion','Linhas ousadas e alto impacto visual.','nova-front','nova-side','quadrado'],
  ['Taurus','Impacto','Vermelho translúcido com presença e atitude.','taurus-front','taurus-side','redondo'],
  ['Nero','Sensual','Tom profundo e linhas fluidas.','nero-front','nero-side','oval'],
  ['Eclipse II','Design premium','Translúcido com haste geométrica.','eclipse-ii-front','eclipse-ii-side','oval'],
  ['Orion','Diferenciação','Formato octogonal fora do comum.','orion-front','orion-side','quadrado'],
].map(([name,line,desc,f,s,shape])=>({type:'glasses',name,line,desc,shape,price:PROMO.has(name)?'<s>R$160</s> <strong>R$119</strong> à vista<br>ou <strong>4x de R$32</strong>':'<strong>R$149</strong> à vista<br>ou <strong>4x de R$40</strong>',bullets:['Proteção UV400','Acabamento premium','Design exclusivo Lunah'],images:[`images/products/${f}.jpg`,`images/products/${s}.jpg`]}));

const colors = [
  ['Elara','Sem aro · Degradê','Armação sem aro dourada com lente degradê acinzentada.','elara-front','elara-side'],
  ['Elara II','Sem aro · Rosa','Lente rosada e haste rose gold com personalidade.','elara-ii-front','elara-ii-side'],
  ['Nyra','Oval · Champagne','Oval sem aro com lente champagne minimalista.','nyra-front','nyra-side'],
  ['Nyra II','Oval · Rosa','Lente rosada e haste rose gold icônica.','nyra-ii-front','nyra-ii-side'],
].map(([name,line,desc,f,s])=>({type:'glasses',name,line,desc,shape:'oval',price:'<strong>R$149</strong> à vista<br>ou <strong>4x de R$40</strong>',bullets:['Proteção UV400','Armação sem aro','Design exclusivo Lunah'],images:[`images/products/${f}.jpg`,`images/products/${s}.jpg`]}));

const vision = [
  ['Aurora','Redondo · Acetato','Redondo preto em acetato com detalhe dourado e símbolo Lunah.','aurora-front','aurora-side'],
  ['Aurora II','Redondo · Vinho','Redondo em acetato vinho escuro e elegante.','aurora-ii-front','aurora-ii-side'],
  ['Celeste','Sem aro · Prata','Sem aro em metal prata, minimalista e refinada.','celeste-front','celeste-side'],
  ['Celeste II','Oval · Prata','Oval sem aro com detalhe helicoidal e ponta tartaruga.','celeste-ii-front','celeste-ii-side'],
].map(([name,line,desc,f,s])=>({type:'glasses',name,line,desc,shape:'redondo',price:'<strong>R$149</strong> à vista<br>ou <strong>4x de R$40</strong>',bullets:['Armação de grau','Design Lunah Vision','Acabamento premium'],images:[`images/products/${f}.jpg`,`images/products/${s}.jpg`]}));

const atelier = [
  ['Calm | Aquamarine','Calma · Leveza · Confiança','Acalma a mente e traz equilíbrio emocional.','aquamarine'],
  ['Earth | Olho de Tigre','Coragem · Proteção · Prosperidade','Fortalece sua confiança e força interior.','olho-de-tigre'],
  ['Sky | Labradorita','Intuição · Proteção · Transformação','Desperta a intuição em momentos de mudança.','labradorita'],
  ['Passion | Granada','Paixão · Coragem · Energia','Desperta energia, coragem e presença.','granada'],
  ['Protect | Turmalina','Proteção · Equilíbrio · Energia','Protege e estabiliza a energia do dia a dia.','turmalina'],
  ['Serenity | Jade','Harmonia · Prosperidade · Equilíbrio','Traz serenidade e sensação de bem-estar.','jade'],
].map(([name,line,desc,img])=>({type:'atelier',name,line,desc,price:'<strong>R$119</strong> à vista<br>ou <strong>4x de R$30</strong>',bullets:['Pedras naturais','Intenção e energia','Detalhes que transformam'],images:[`images/atelier/thumbs/${img}.jpg`,`images/atelier/${img}.jpg`]}));

/* HERO */
function initHero() {
  const wrap = document.getElementById('heroSlides');
  const numEl = document.getElementById('heroNum');
  const totEl = document.getElementById('heroTotal');
  totEl.textContent = String(BANNERS.length).padStart(2,'0');
  wrap.innerHTML = BANNERS.map((b,i)=>`
    <div class="hslide${i===0?' active':''}">
      <img src="${b.img}" alt="${b.tag}" loading="${i===0?'eager':'lazy'}">
      <div class="hslide-copy">
        <span class="hslide-tag">${b.tag}</span>
        <h2 class="hslide-h">${b.h}</h2>
        <p class="hslide-p">${b.p}</p>
        <a class="hslide-btn" href="${wa(b.msg)}" target="_blank" rel="noopener">${b.cta} →</a>
      </div>
    </div>`).join('');
  let cur = 0;
  const go = (n) => {
    cur = (n+BANNERS.length)%BANNERS.length;
    wrap.querySelectorAll('.hslide').forEach((s,i)=>s.classList.toggle('active',i===cur));
    numEl.textContent = String(cur+1).padStart(2,'0');
  };
  document.getElementById('hNext').onclick = ()=>go(cur+1);
  document.getElementById('hPrev').onclick = ()=>go(cur-1);
  setInterval(()=>go(cur+1), 6000);
}

/* NAV SCROLL */
function initNav() {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* BURGER */
function initBurger() {
  const btn = document.getElementById('burger');
  const menu = document.getElementById('mmenu');
  btn.onclick = () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  };
  menu.querySelectorAll('.ml').forEach(a=>a.onclick=()=>{
    btn.classList.remove('open'); menu.classList.remove('open');
    document.body.style.overflow='';
  });
}

/* CARD */
function card(p, i, col) {
  const isG = p.type==='glasses';
  const badge = PROMO.has(p.name) ? '<span class="pcard-badge badge-promo">Promoção</span>'
    : NOVO.has(p.name) ? '<span class="pcard-badge badge-novo">Novo</span>' : '';
  const priceLabel = PROMO.has(p.name)
    ? `<s style="opacity:.4;font-size:12px">R$160</s> <strong>R$119</strong>`
    : `<strong>${isG?'R$149':'R$119'}</strong>`;
  const hover = (isG && p.images[1]) ? `data-hover="${p.images[1]}" data-def="${p.images[0]}"` : '';
  return `<div class="pcard" data-col="${col}" data-i="${i}" data-shape="${p.shape||''}">
    ${badge}
    <div class="pcard-img" ${hover}>
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
    </div>
    <div class="pcard-info">
      <span class="pcard-tag">${p.line}</span>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-price"><span>${isG?'Óculos':'Pulseira'}</span>${priceLabel}</div>
    </div>
    <div class="pcard-arrow">→</div>
  </div>`;
}

/* RENDER */
function renderAll() {
  const all = {glasses, colors, vision, atelier};
  const grids = {glasses:'glassesGrid', colors:'colorsGrid', vision:'visionGrid', atelier:'atelierGrid'};
  Object.entries(grids).forEach(([col, gid]) => {
    const g = document.getElementById(gid);
    if (!g) return;
    g.innerHTML = all[col].map((p,i)=>card(p,i,col)).join('');
  });
  document.querySelectorAll('.pcard').forEach(el=>{
    el.onclick = ()=>openModal(el.dataset.col, +el.dataset.i);
    const wrap = el.querySelector('.pcard-img[data-hover]');
    if (wrap) {
      const img = wrap.querySelector('img');
      wrap.addEventListener('mouseenter',()=>{img.src=wrap.dataset.hover;});
      wrap.addEventListener('mouseleave',()=>{img.src=wrap.dataset.def;});
    }
  });
}

/* FILTER */
function initFilter() {
  document.querySelectorAll('.fbt').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('.fbt').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.f;
    document.querySelectorAll('#glassesGrid .pcard').forEach(c=>{
      c.classList.toggle('hidden', f!=='all' && c.dataset.shape!==f);
    });
  });
}

/* MODAL */
function openModal(col, idx) {
  const all = {glasses, colors, vision, atelier};
  const p = all[col][idx];
  document.getElementById('modalTag').textContent = p.line;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalBullets').innerHTML = p.bullets.map(b=>`<li>${b}</li>`).join('');
  document.getElementById('modalPrice').innerHTML = p.price;
  document.getElementById('modalWa').href = wa(`Olá! Quero comprar o modelo ${p.name} da Lunah.`);
  const payBtn = document.getElementById('modalPay');
  const payLink = PAY[p.name];
  payBtn.style.display = payLink ? '' : 'none';
  if (payLink) payBtn.href = payLink;
  const img = document.getElementById('modalImg');
  img.src = p.images[0];
  document.getElementById('modalThumbs').innerHTML = p.images.map((s,i)=>
    `<button class="${i===0?'active':''}" data-src="${s}"><img src="${s}" alt="${p.name}"></button>`).join('');
  document.querySelectorAll('#modalThumbs button').forEach(b=>b.onclick=()=>{
    img.src=b.dataset.src;
    document.querySelectorAll('#modalThumbs button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
  });
  // related
  const siblings = all[col].filter((_,i)=>i!==idx).slice(0,5);
  const relWrap = document.getElementById('modalRelated');
  if (siblings.length) {
    relWrap.innerHTML = `<p>Veja também</p><div class="related-row">${siblings.map(r=>{
      const ri = all[col].indexOf(r);
      return `<div class="rel-card" data-col="${col}" data-ri="${ri}"><img src="${r.images[0]}" alt="${r.name}"><span>${r.name}</span></div>`;
    }).join('')}</div>`;
    relWrap.querySelectorAll('.rel-card').forEach(rc=>rc.onclick=()=>openModal(rc.dataset.col,+rc.dataset.ri));
  } else relWrap.innerHTML='';
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

/* FADE-UP */
function initFade() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:.1});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
}

/* WA LINKS */
function initWa() {
  const def = wa('Olá! Quero comprar na Lunah.');
  ['topWhats','mWa','fabWa'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.href=def;
  });
  document.getElementById('atelierWa').href = wa('Olá! Quero reservar uma pulseira Lunah Atelier.');
  document.querySelectorAll('[data-msg]').forEach(el=>{
    el.href=wa(el.dataset.msg); el.target='_blank'; el.rel='noopener';
  });
}

/* MODAL CLOSE */
function initModal() {
  const modal = document.getElementById('modal');
  document.getElementById('modalClose').onclick=()=>{
    modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  };
  modal.onclick=e=>{if(e.target===modal){document.getElementById('modalClose').click();}};
}

/* INIT */
initHero();
initNav();
initBurger();
renderAll();
initFilter();
initFade();
initWa();
initModal();
