(() => {
  const containerEl   = document.getElementById('menu-container');
  const catNavEl      = document.getElementById('cat-nav');
  const searchEl      = document.getElementById('search');
  const clearBtn      = document.getElementById('clear-search');
  const emptyEl       = document.getElementById('empty-state');
  const countEl       = document.getElementById('result-count');
  const leadEl        = document.getElementById('menu-lead');
  const backTopBtn    = document.getElementById('back-top');
  const dietInputs    = document.querySelectorAll('.diet-filters input');
  const locSwitchEl   = document.querySelector('.location-switch');
  const locButtons    = document.querySelectorAll('.location-switch button[data-loc]');
  const locCardBtns   = document.querySelectorAll('.loc-btn[data-loc]');
  const navToggle     = document.getElementById('nav-toggle');
  const mainNav       = document.getElementById('main-nav');
  const yearEl        = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sync the sticky cat-nav's `top` to the actual rendered header height so
  // there's no gap between the two sticky elements on any breakpoint.
  // Also expose two CSS vars used for anchor scroll-margins:
  //   --header-offset         — for top-level sections (catering, locations, etc.)
  //   --scroll-anchor-offset  — for menu-block anchors (header + cat-nav)
  function syncCatNavTop() {
    const header = document.querySelector('.site-header');
    const wrap   = document.querySelector('.cat-nav-wrap');
    if (header) {
      document.documentElement.style.setProperty(
        '--header-offset', header.offsetHeight + 'px'
      );
    }
    if (header && wrap) {
      wrap.style.top = header.offsetHeight + 'px';
      document.documentElement.style.setProperty(
        '--scroll-anchor-offset',
        (header.offsetHeight + wrap.offsetHeight + 12) + 'px'
      );
    }
  }
  window.addEventListener('resize', syncCatNavTop, { passive: true });
  window.addEventListener('load', syncCatNavTop);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncCatNavTop);
  syncCatNavTop();

  // Pulled-quote feature bands inserted between section groups
  const FEATURE_BANDS = [
    {
      after: 2,
      image: "https://indianspice.ca/wp-content/uploads/2024/04/Gallery2.jpg",
      quote: "Spices are the soul of Indian cooking — roasted fresh, ground daily.",
      sig: "From our kitchen"
    },
    {
      after: 5,
      image: "https://indianspice.ca/wp-content/uploads/2024/04/Gallery4.jpg",
      quote: "Hand-stretched dough, kissed by the tandoor.",
      sig: "Breads & Tandoor"
    },
    {
      after: 8,
      image: "https://indianspice.ca/wp-content/uploads/2024/04/Gallery7.jpg",
      quote: "A dosa is patience and fire, folded into one crisp moment.",
      sig: "South Indian classics"
    }
  ];

  const state = {
    location: 'hamilton',
    query: '',
    diets: new Set()
  };

  // -------- Data helpers --------
  function activeItems() { return MENUS[state.location].items; }

  function categoriesOf(items) {
    const seen = new Set(); const cats = [];
    for (const it of items) {
      if (!seen.has(it.category)) { seen.add(it.category); cats.push(it.category); }
    }
    return cats;
  }

  function slug(s) {
    return 'cat-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function matchesFilters(item) {
    if (state.query) {
      const q = state.query.toLowerCase();
      const hay = (item.name + ' ' + item.description + ' ' + item.category).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    for (const diet of state.diets) {
      if (!item.tags || !item.tags.includes(diet)) return false;
    }
    return true;
  }

  // -------- Rendering --------
  function buildCatNav() {
    const cats = categoriesOf(activeItems());
    catNavEl.innerHTML = cats.map((cat, i) => `
      <button class="cat-link ${i === 0 ? 'active' : ''}" data-target="${slug(cat)}">${cat}</button>
    `).join('');
    catNavEl.querySelectorAll('.cat-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    updateCatNavFades();
  }

  // Show/hide the left + right edge fades on the sticky category nav based on
  // current horizontal scroll position. Tells the user "there's more here".
  function updateCatNavFades() {
    const wrap = catNavEl.parentElement;
    if (!wrap) return;
    const sl = catNavEl.scrollLeft;
    const max = catNavEl.scrollWidth - catNavEl.clientWidth;
    wrap.classList.toggle('scrolled-from-start', sl > 4);
    wrap.classList.toggle('scrolled-to-end', max > 0 && (max - sl) < 4);
  }
  catNavEl.addEventListener('scroll', updateCatNavFades, { passive: true });
  window.addEventListener('resize', updateCatNavFades, { passive: true });

  // One-time, mobile-only scroll nudge so first-time visitors see the strip
  // move — a clear signal that it's horizontally scrollable.
  function nudgeCatNavOnce() {
    const KEY = 'indianSpice_catNavNudged_v1';
    if (window.innerWidth > 720) return;
    try { if (localStorage.getItem(KEY) === '1') return; } catch (_) {}
    const max = catNavEl.scrollWidth - catNavEl.clientWidth;
    if (max <= 0) return; // nothing to scroll
    setTimeout(() => {
      catNavEl.scrollTo({ left: 90, behavior: 'smooth' });
      setTimeout(() => catNavEl.scrollTo({ left: 0, behavior: 'smooth' }), 750);
      try { localStorage.setItem(KEY, '1'); } catch (_) {}
    }, 1400);
  }

  function itemHtml(item) {
    const tags = (item.tags || []).map(t => `<span class="tag ${t}">${t}</span>`).join('');
    return `
      <div class="item" data-name="${item.name.toLowerCase()}">
        <div class="item-head">
          <h4 class="item-name">${item.name}</h4>
          <span class="item-dots"></span>
          <span class="item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="item-desc">${item.description}</p>
        ${tags ? `<div class="item-tags">${tags}</div>` : ''}
      </div>
    `;
  }

  function featureBandHtml(band) {
    return `
      <div class="feature-band" style="background-image: url('${band.image}');">
        <div class="feature-band-inner">
          <p>“${band.quote}”</p>
          <span class="sig">— ${band.sig}</span>
        </div>
      </div>
    `;
  }

  function render() {
    const items = activeItems();
    const filtered = items.filter(matchesFilters);

    if (filtered.length === 0) {
      containerEl.innerHTML = '';
      emptyEl.hidden = false;
      countEl.textContent = '';
      return;
    }
    emptyEl.hidden = true;

    const byCat = new Map();
    for (const it of filtered) {
      if (!byCat.has(it.category)) byCat.set(it.category, []);
      byCat.get(it.category).push(it);
    }

    let html = '';
    let blockIndex = 0;
    for (const [cat, list] of byCat) {
      html += `
        <section class="menu-block" id="${slug(cat)}">
          <header class="menu-block-head">
            <p class="kicker">— ${MENUS[state.location].label} —</p>
            <h3>${cat}</h3>
            <div class="menu-block-divider">✦</div>
          </header>
          <div class="items">
            ${list.map(itemHtml).join('')}
          </div>
        </section>
      `;
      if (!state.query && state.diets.size === 0) {
        const band = FEATURE_BANDS.find(b => b.after === blockIndex);
        if (band) html += featureBandHtml(band);
      }
      blockIndex++;
    }

    containerEl.innerHTML = html;
    countEl.textContent = `Showing ${filtered.length} of ${items.length} dishes • ${MENUS[state.location].label}`;
    setupSectionObserver();
  }

  // Tracks current active section. Uses a throttled scroll listener that, on
  // each frame, asks "which block's top has crossed the sticky-header line
  // most recently?" That's the section the user is reading right now.
  let cleanupSectionWatcher;
  function setupSectionObserver() {
    if (cleanupSectionWatcher) cleanupSectionWatcher();
    const blocks = Array.from(containerEl.querySelectorAll('.menu-block'));
    if (blocks.length === 0) { cleanupSectionWatcher = null; return; }

    const computeOffset = () => {
      const header = document.querySelector('.site-header');
      const nav    = document.querySelector('.cat-nav-wrap');
      return (header ? header.offsetHeight : 0) + (nav ? nav.offsetHeight : 0) + 12;
    };

    let lastActiveId = null;
    function updateActive() {
      const offset = computeOffset();
      const vh = window.innerHeight;
      let activeId = blocks[0].id;
      let mostVisible = 0;
      // Active = the block with the most pixels visible in the content area
      // between the sticky header line and the bottom of the viewport.
      // This matches user intuition: whichever section fills your screen IS
      // the section you're "in", regardless of whether its title has scrolled
      // past the header yet.
      for (const b of blocks) {
        const r = b.getBoundingClientRect();
        const visibleTop = Math.max(r.top, offset);
        const visibleBot = Math.min(r.bottom, vh);
        const visible = Math.max(0, visibleBot - visibleTop);
        if (visible > mostVisible) {
          mostVisible = visible;
          activeId = b.id;
        }
      }
      if (activeId === lastActiveId) return;
      lastActiveId = activeId;
      catNavEl.querySelectorAll('.cat-link').forEach(button => {
        const isActive = button.dataset.target === activeId;
        button.classList.toggle('active', isActive);
        if (isActive) {
          // Horizontal-only centering of the active pill inside the cat-nav.
          // Using scrollIntoView here can cause the *page* to scroll vertically
          // when the cat-nav is off-screen, fighting any anchor scroll the user
          // just kicked off (e.g. jumping from hero → catering).
          centerCatLink(button);
        }
      });
    }
    function centerCatLink(button) {
      const wrapRect = catNavEl.getBoundingClientRect();
      const btnRect  = button.getBoundingClientRect();
      const delta = (btnRect.left + btnRect.width / 2) - (wrapRect.left + wrapRect.width / 2);
      if (Math.abs(delta) > 4) {
        catNavEl.scrollBy({ left: delta, behavior: 'smooth' });
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { updateActive(); ticking = false; });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cleanupSectionWatcher = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    updateActive();
  }

  // -------- Location switching --------
  function switchLocation(loc, opts = {}) {
    if (state.location === loc) return;
    state.location = loc;

    locButtons.forEach(b => b.classList.toggle('active', b.dataset.loc === loc));
    if (locSwitchEl) locSwitchEl.dataset.active = loc;

    leadEl.textContent = loc === 'hamilton'
      ? 'From smoky tandoori grills to crisp South Indian dosas — every dish at our Hamilton kitchen is made to order.'
      : 'A dosa-lover’s paradise — over thirty varieties, plus chaat, uttapam and South Indian sweets at our Waterloo kitchen.';

    closeNavDrawer();
    buildCatNav();
    render();

    if (opts.scroll !== false) {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  locButtons.forEach(btn => {
    btn.addEventListener('click', () => switchLocation(btn.dataset.loc));
  });
  locCardBtns.forEach(btn => {
    btn.addEventListener('click', () => switchLocation(btn.dataset.loc));
  });

  // -------- Mobile nav drawer --------
  function openNavDrawer() {
    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  function closeNavDrawer() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) closeNavDrawer();
      else openNavDrawer();
    });
  }
  mainNav.querySelectorAll('a.nav-link').forEach(a => {
    a.addEventListener('click', () => closeNavDrawer());
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNavDrawer();
  });

  // -------- Search & filters --------
  let searchTimer;
  searchEl.addEventListener('input', e => {
    const v = e.target.value;
    clearBtn.hidden = v.length === 0;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = v.trim();
      render();
    }, 120);
  });
  clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    state.query = '';
    clearBtn.hidden = true;
    render();
    searchEl.focus();
  });
  dietInputs.forEach(input => {
    input.addEventListener('change', () => {
      const diet = input.dataset.diet;
      if (input.checked) state.diets.add(diet);
      else state.diets.delete(diet);
      render();
    });
  });

  // -------- Back-to-top --------
  window.addEventListener('scroll', () => {
    backTopBtn.classList.toggle('visible', window.scrollY > 800);
  }, { passive: true });
  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // -------- Init --------
  if (locSwitchEl) locSwitchEl.dataset.active = state.location;
  buildCatNav();
  render();
  nudgeCatNavOnce();
})();
