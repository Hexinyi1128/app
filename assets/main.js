/* ============================================================
   案件档案交互：进度线索、滚动铺证据、导航、作品渲染、筛选
   ============================================================ */
(function(){
  "use strict";

  /* 滚动进度红线 */
  const header = document.querySelector('.site-header');
  const progress = document.getElementById('progress');
  function onScroll(){
    const top = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress) progress.style.width = (h>0 ? (top/h)*100 : 0)+'%';
    if(header) header.classList.toggle('scrolled', top>50);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* 证据逐张铺开 */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.1, rootMargin:'0px 0px -6% 0px'});
  function observeReveals(scope){
    (scope||document).querySelectorAll('.reveal, .pin-drop').forEach(el=>{
      if(!el.classList.contains('in')) io.observe(el);
    });
  }
  observeReveals();

  /* 导航高亮 */
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.site-nav a');
  if(secs.length && links.length){
    const nIO = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id));
        }
      });
    },{threshold:0.25});
    secs.forEach(s=>nIO.observe(s));
  }

  /* 渲染证物画廊 */
  const grid = document.getElementById('evidenceGrid');
  const WORKS = window.WORKS || [];
  function cardHTML(w){
    const media = w.image
      ? `<img src="${w.image}" alt="${w.title}">`
      : '';
    const ph = w.image ? '' : `<span class="ph-no">${w.no}</span>`;
    const play = w.type === 'video' ? '<span class="play"></span>' : '';
    return `
      <article class="evidence-card reveal" data-category="${w.category}" data-id="${w.id}">
        <span class="tape"></span>
        <span class="pin ${w.no % 2 === 0 ? 'dark' : ''}"></span>
        <a href="case.html?id=${w.id}" aria-label="查看 ${w.title}">
          <div class="evidence-bag kraft ${w.tone||'kraft-a'} torn-bottom">
            <span class="bag-tab">PROJECT ${w.no}</span>
            <div class="bag-body">
              <div class="evidence-media">${ph}${media}${play}</div>
              <div class="evidence-meta">
                <div><h3>${w.title}</h3><div class="cat">${w.subtitle} · ${w.category}</div></div>
                <span class="yr">${w.year}</span>
              </div>
              <div class="evidence-note">${w.note||''}</div>
            </div>
            <span class="open-tag">打开档案 ↗</span>
          </div>
        </a>
      </article>`;
  }
  if(grid){
    grid.innerHTML = WORKS.map(cardHTML).join('');
    observeReveals(grid);
  }

  /* 筛选 */
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const c = btn.dataset.filter;
      document.querySelectorAll('.evidence-card').forEach(card=>{
        card.classList.toggle('hidden', !(c==='ALL' || card.dataset.category===c));
      });
    });
  });

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent = new Date().getFullYear());
  window.observeReveals = observeReveals;
})();
