function renderPortfolioPage(config) {
  const { pageFile, title, subtitle, statusCount, projects } = config;
  const editor = document.getElementById('editor');
  const statusMsg = document.getElementById('status-msg');
  if (!editor) { console.error('portfolio.js: no #editor element found'); return; }

  // ── Build HTML ──────────────────────────────────────────────────

  // Subpage hero
  const heroHTML = `
    <div class="subpage-hero">
      <div class="hero-eyebrow"><span class="cmt">/* ${pageFile} */</span></div>
      <h1 class="subpage-title">${title}</h1>
      <p class="subpage-subtitle"><span class="cmt">${subtitle}</span></p>
    </div>`;

  // Collapsed project rows inside a code-block
  const rowsHTML = projects.map((p, i) => `
    <div class="code-line" style="--d:${(0.05 + i * 0.07).toFixed(2)}s">
      <span class="ln">${i + 2}</span>
      <span class="lc">
        <div class="proj-row" onclick="openProject('${p.id}')">
          <img class="proj-row-thumb" src="${p.image}" alt="${p.title}" />
          <span class="proj-row-name">"${p.title}"</span>
          <span class="proj-row-date tx">${p.date}</span>
          <span class="proj-row-arrow">▶</span>
        </div>
      </span>
    </div>`).join('');

  const closeLineNum = projects.length + 2;
  const backLineNum  = projects.length + 3;

  const codeBlockHTML = `
    <div class="code-block">
      <div class="code-line" style="--d:.0s">
        <span class="ln">1</span>
        <span class="lc"><span class="kw">const </span><span class="vr">projects</span><span class="tx"> = [</span></span>
      </div>
      ${rowsHTML}
      <div class="code-line" style="--d:${(0.05 + projects.length * 0.07).toFixed(2)}s">
        <span class="ln">${closeLineNum}</span>
        <span class="lc"><span class="tx">];</span></span>
      </div>
      <div class="code-line" style="--d:${(0.12 + projects.length * 0.07).toFixed(2)}s">
        <span class="ln">${backLineNum}</span>
        <span class="lc">
          <a href="index.html" class="back-return">
            <span class="cmt">// ← </span><span class="kw">return</span><span class="tx"> </span><span class="str">"home.html"</span>
          </a>
        </span>
      </div>
    </div>`;

  // Detail overlays — one per project, hidden until opened
  const overlaysHTML = projects.map(p => {
    const linkLines = p.links.map((lk, i) => `
      <div class="detail-code-line">
        <div class="detail-ln">${5 + i}</div>
        <div class="detail-lc">
          &nbsp;&nbsp;<span class="vr">${lk.label}</span><span class="tx">: </span>
          <a class="detail-link" href="${lk.href}"><span class="str">"${lk.text}"</span></a>
          <span class="tx">,</span>
        </div>
      </div>`).join('');

    const closingLineNum = 7 + p.links.length;

    return `
      <div class="proj-detail-overlay" id="detail-${p.id}">
        <div class="detail-topbar">
          <div class="detail-breadcrumb">
            ${pageFile} &nbsp;›&nbsp; <span>"${p.title}"</span>
          </div>
          <button class="detail-close" onclick="closeProject('${p.id}')">✕ &nbsp;close</button>
        </div>
        <div class="detail-body">
          <div class="detail-image-panel">
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <div class="detail-info-panel">
            <div>
              <div class="detail-code-line detail-title-line">
                <div class="detail-ln">1</div>
                <div class="detail-lc"><span class="detail-title-text">${p.title}</span></div>
              </div>
              <div class="detail-code-line">
                <div class="detail-ln">2</div>
                <div class="detail-lc"><span class="cmt">// ${p.date}</span></div>
              </div>
              <div class="detail-code-line">
                <div class="detail-ln">3</div>
              </div>
              <div class="detail-code-line">
                <div class="detail-ln">4</div>
                <div class="detail-lc"><span class="kw">const </span><span class="vr">desc</span><span class="tx"> =</span></div>
              </div>
              <div class="detail-code-line">
                <div class="detail-ln">5</div>
                <div class="detail-lc"><span class="tx">"${p.description}"</span></div>
              </div>
            </div>
            <div>
              <div class="detail-code-line">
                <div class="detail-ln">6</div>
                <div class="detail-lc"><span class="kw">const </span><span class="vr">links</span><span class="tx"> = {</span></div>
              </div>
              ${linkLines}
              <div class="detail-code-line">
                <div class="detail-ln">${closingLineNum}</div>
                <div class="detail-lc"><span class="tx">};</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  // ── Inject into DOM ─────────────────────────────────────────────
  editor.innerHTML = heroHTML + codeBlockHTML + overlaysHTML;

  // ── Update status bar default text ──────────────────────────────
  if (statusMsg) statusMsg.textContent = `✓  ${statusCount || projects.length + ' projects'}`;

  // ── Open / close helpers (attached to window so onclick= works) ─
  window.openProject = function(id) {
    document.querySelectorAll('.proj-detail-overlay.open')
      .forEach(el => el.classList.remove('open'));
    const panel = document.getElementById('detail-' + id);
    if (!panel) return;
    panel.classList.add('open');
    panel.scrollTop = 0;
    editor.scrollTop = 0;
    const name = panel.querySelector('.detail-breadcrumb span').textContent;
    if (statusMsg) statusMsg.textContent = '▶  ' + name;
  };

  window.closeProject = function(id) {
    const panel = document.getElementById('detail-' + id);
    if (panel) panel.classList.remove('open');
    if (statusMsg) statusMsg.textContent = `✓  ${statusCount || projects.length + ' projects'}`;
  };

  // Escape key closes any open panel
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.proj-detail-overlay.open')
        .forEach(el => el.classList.remove('open'));
      if (statusMsg) statusMsg.textContent = `✓  ${statusCount || projects.length + ' projects'}`;
    }
  });
}