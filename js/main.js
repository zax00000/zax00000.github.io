/* ==========================================================================
   main.js — renders the site from data.js. You should not need to edit this.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- utils */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const ICONS = {
    arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.4 5.1 18.4 5.4 18.4 5.4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    itch:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.1 2.2C2.3 2.7.4 4.9.4 5.5v1c0 1.3 1.2 2.4 2.3 2.4 1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1.1 2.3-2.4 0 1.3 1.1 2.4 2.4 2.4h.1c1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.3 2.4 1.4 0 2.4-1.1 2.4-2.4 0 1.3 1.1 2.4 2.4 2.4 1.1 0 2.3-1.1 2.3-2.4v-1c0-.6-1.9-2.8-2.7-3.3-2.6-.1-4.4-.2-8.9-.2s-8 .1-9.4.2Zm6.1 7.6a2.7 2.7 0 0 1-2.3 1.3 2.7 2.7 0 0 1-2.3-1.3 2.7 2.7 0 0 1-2.2 1.3c-.3 0-.6 0-.9-.2-.2 2.1-.4 4.7-.4 6.1 0 2.4.4 4.8 3.4 4.8h1.4c1.9 0 2.8-1.5 2.8-3.2 0-.9-.1-1.7-.2-2.4h4.9c-.1.7-.2 1.5-.2 2.4 0 1.7.9 3.2 2.8 3.2h1.4c3 0 3.4-2.4 3.4-4.8 0-1.4-.2-4-.4-6.1-.3.2-.6.2-.9.2a2.7 2.7 0 0 1-2.2-1.3 2.7 2.7 0 0 1-2.3 1.3 2.7 2.7 0 0 1-2.3-1.3 2.7 2.7 0 0 1-2.3 1.3 2.7 2.7 0 0 1-2.2-1.3Zm2.8 4.1 2.2 2.2h-1.4v2.2h-1.6v-2.2H9.8l2.2-2.2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7Z"/></svg>',
    mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    doc:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
    image:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
    site:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20"/></svg>',
  };

  /* ------------------------------------------------- generated cover art */
  /* Until real screenshots exist, each project gets its own deterministic
     abstract cover, seeded from its id. Same id always produces the same
     artwork, so the grid looks designed rather than like empty boxes. */

  function hash32(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  /* mulberry32 — small, fast, deterministic */
  function rng(seed) {
    return function () {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  let artUid = 0;

  function coverArt(seedStr) {
    const rand = rng(hash32(seedStr || "seed"));
    const uid = "a" + artUid++;

    /* Hue stays in a band around the accent (≈193°): cyan → azure → indigo. */
    const hue = Math.round(172 + rand() * 55);
    const cx  = Math.round(15 + rand() * 70);
    const cy  = Math.round(10 + rand() * 45);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cover-art");
    svg.setAttribute("viewBox", "0 0 400 225");
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("aria-hidden", "true");

    const wash = "hsl(" + hue + ", 55%, 55%)";
    const line = "hsl(" + hue + ", 50%, 78%)";

    /* Concentric rings — schematic, reads well behind a label */
    let rings = "";
    const rcx = Math.round(60 + rand() * 280);
    const rcy = Math.round(40 + rand() * 145);
    const count = 3 + Math.floor(rand() * 3);
    for (let i = 0; i < count; i++) {
      const r = 18 + i * (14 + rand() * 20);
      const dash = rand() > 0.55 ? ' stroke-dasharray="3 6"' : "";
      rings +=
        '<circle cx="' + rcx + '" cy="' + rcy + '" r="' + Math.round(r) +
        '" fill="none" stroke="' + line + '" stroke-opacity="' +
        (0.16 - i * 0.02).toFixed(3) + '" stroke-width="1"' + dash + "/>";
    }

    let diagonals = "";
    for (let i = 0; i < 2; i++) {
      const y = Math.round(rand() * 225);
      diagonals +=
        '<path d="M-20 ' + y + " L420 " + Math.round(y - 60 - rand() * 120) +
        '" stroke="' + line + '" stroke-opacity="0.08" stroke-width="1" fill="none"/>';
    }

    const mx = Math.round(40 + rand() * 320);
    const my = Math.round(30 + rand() * 165);

    svg.innerHTML =
      "<defs>" +
        '<radialGradient id="g' + uid + '" cx="' + cx + '%" cy="' + cy + '%" r="75%">' +
          '<stop offset="0%" stop-color="' + wash + '" stop-opacity="0.22"/>' +
          '<stop offset="100%" stop-color="' + wash + '" stop-opacity="0"/>' +
        "</radialGradient>" +
        '<pattern id="p' + uid + '" width="18" height="18" patternUnits="userSpaceOnUse">' +
          '<path d="M18 0 L0 0 L0 18" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>' +
        "</pattern>" +
      "</defs>" +
      '<rect width="400" height="225" fill="#11151a"/>' +
      '<rect width="400" height="225" fill="url(#p' + uid + ')"/>' +
      '<rect width="400" height="225" fill="url(#g' + uid + ')"/>' +
      diagonals + rings +
      '<rect x="' + mx + '" y="' + my + '" width="7" height="7" rx="1.5" fill="' +
        line + '" fill-opacity="0.35"/>';

    return svg;
  }

  /* --------------------------------------------------------- media helper */
  function coverFallback(label, seed) {
    const box = el("div", "media-fallback");
    box.appendChild(coverArt(seed));
    const cap = el("span", "cover-label");
    cap.appendChild(el("span", "cover-name", label || "Coming soon"));
    cap.appendChild(el("span", "cover-hint", "Screenshot coming soon"));
    box.appendChild(cap);
    return box;
  }

  /* The placeholder is rendered FIRST and the real image fades in over it once
     it actually decodes. Doing it this way round means a missing or slow
     screenshot never shows a broken-image icon — it just stays as cover art.

     opts.seed    stable seed for the generated art (use the project id)
     opts.noArt   caller supplies its own placeholder instead (see the avatar)
     opts.onLoad  fired once the real image is in
     opts.eager   skip lazy-loading. Required inside the modal: a lazy image
                  added to a hidden element is never requested by the browser. */
  function media(src, alt, label, opts) {
    opts = opts || {};
    const frag = document.createDocumentFragment();

    let placeholder = null;
    if (!opts.noArt) {
      placeholder = coverFallback(label, opts.seed || label || src || "seed");
      frag.appendChild(placeholder);
    }

    if (!src) return frag;

    const img = el("img", "media-img");
    img.alt = alt || "";
    img.decoding = "async";
    if (!opts.eager) img.loading = "lazy";
    img.addEventListener("load", () => {
      img.classList.add("is-loaded");
      if (placeholder) placeholder.remove();
      if (opts.onLoad) opts.onLoad();
    });
    img.addEventListener("error", () => img.remove());
    img.src = src;
    frag.appendChild(img);
    return frag;
  }

  function tagList(tags) {
    const wrap = el("div", "taglist");
    (tags || []).forEach((t) => wrap.appendChild(el("span", "tag", t)));
    return wrap;
  }

  function linkButton(link, primary) {
    const a = el("a", "btn" + (primary ? " btn-primary" : ""));
    a.href = link.url;
    if (!link.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    a.innerHTML = ICONS[link.kind] || ICONS.site;
    a.appendChild(el("span", null, link.label));
    return a;
  }

  function iconLink(url, kind, label) {
    const a = el("a");
    a.href = url;
    a.title = label;
    a.setAttribute("aria-label", label);
    if (!url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    a.innerHTML = ICONS[kind] || ICONS.site;
    return a;
  }

  /* ============================================================== SIDEBAR */
  function renderRail() {
    $$("[data-site]").forEach((node) => {
      const key = node.dataset.site;
      if (SITE[key]) node.textContent = SITE[key];
    });

    document.title = SITE.name + " — " + SITE.role;
    const yearNode = $("#year");
    if (yearNode) yearNode.textContent = new Date().getFullYear();

    /* Avatar: initials stand in until a real photo loads over them */
    const slot = $("#avatarSlot");
    const initials = el("span", "initials",
      SITE.name.split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase());
    slot.appendChild(initials);
    if (SITE.photo) {
      slot.appendChild(media(SITE.photo, SITE.name, "", {
        eager: true,
        noArt: true,
        onLoad: () => initials.remove(),
      }));
    }

    const avail = $("#availability");
    if (SITE.availability) avail.textContent = SITE.availability;
    else avail.remove();

    const chips = $("#roleChips");
    (SITE.roles || []).forEach((r) => chips.appendChild(el("span", null, r)));

    /* Contact panel */
    const list = $("#contactList");
    const rows = [];
    if (SITE.email)    rows.push(["Email", SITE.email, "mailto:" + SITE.email]);
    if (SITE.location) rows.push(["Location", SITE.location, null]);
    rows.forEach(([label, value, href]) => {
      const wrap = el("div");
      wrap.appendChild(el("dt", null, label));
      const dd = el("dd");
      if (href) {
        const a = el("a", null, value);
        a.href = href;
        dd.appendChild(a);
      } else {
        dd.textContent = value;
      }
      wrap.appendChild(dd);
      list.appendChild(wrap);
    });

    /* Icon links */
    const L = SITE.links || {};
    const railLinks = $("#railLinks");
    if (L.github)   railLinks.appendChild(iconLink(L.github, "github", "GitHub"));
    if (L.itch)     railLinks.appendChild(iconLink(L.itch, "itch", "itch.io"));
    if (L.linkedin) railLinks.appendChild(iconLink(L.linkedin, "linkedin", "LinkedIn"));
    if (SITE.email) railLinks.appendChild(iconLink("mailto:" + SITE.email, "mail", "Email"));
    if (L.cv)       railLinks.appendChild(iconLink(L.cv, "doc", "Résumé"));
  }

  /* ================================================================ INTRO */
  function renderIntro() {
    const L = SITE.links || {};
    const actions = $("#introActions");

    const work = el("a", "btn btn-primary");
    work.href = "#work";
    work.innerHTML = ICONS.arrow;
    work.appendChild(el("span", null, "View my work"));
    actions.appendChild(work);

    if (L.cv)   actions.appendChild(linkButton({ label: "Résumé", url: L.cv, kind: "doc" }));
    if (L.itch) actions.appendChild(linkButton({ label: "itch.io", url: L.itch, kind: "itch" }));

    /* Stats derived from the data, so they stay honest */
    const shipped  = PROJECTS.filter((p) => p.featured).length;
    const personal = PROJECTS.filter((p) => !p.featured).length;
    /* Count engines by family, not version: "Unity (C#)" and "Unity 6 (C#)" are
       both Unity, "Unreal Engine 5.7 (Blueprints)" is Unreal Engine. */
    const engines  = new Set();
    PROJECTS.forEach((p) => {
      if (!p.engine) return;
      const family = p.engine.split(/[(/]/)[0].trim().replace(/\s+\d[\d.]*$/, "");
      engines.add(family.toLowerCase());
    });

    const stats = $("#stats");
    [
      [shipped,  shipped === 1 ? "Team project" : "Team projects"],
      [personal, personal === 1 ? "Personal project" : "Personal projects"],
      [engines.size, engines.size === 1 ? "Engine" : "Engines"],
    ].forEach(([value, label]) => {
      if (!value) return;
      const box = el("div");
      box.appendChild(el("strong", null, String(value)));
      box.appendChild(el("span", null, label));
      stats.appendChild(box);
    });
  }

  /* ============================================================ PROJECTS */
  function metaRow(project) {
    const row = el("div", "meta-row");
    if (project.context) row.appendChild(el("span", null, project.context));
    if (project.context && project.year) row.appendChild(el("span", "sep", "/"));
    if (project.year) row.appendChild(el("span", "year", project.year));
    if (project.status) row.appendChild(el("span", "badge", project.status));
    if (project.draft) row.appendChild(el("span", "chip-draft", "Draft"));
    return row;
  }

  function factGrid(project) {
    const bits = [
      ["Role", project.role],
      ["Engine", project.engine],
      ["Team", project.team],
      ["Duration", project.duration],
    ].filter(([, v]) => v);

    const wrap = el("div", "facts");
    bits.forEach(([label, value]) => {
      const cell = el("div");
      cell.appendChild(el("span", "label", label));
      cell.appendChild(el("strong", null, value));
      wrap.appendChild(cell);
    });
    return wrap;
  }

  function featuredCard(project) {
    const card = el("button", "pcard reveal");
    card.type = "button";
    card.setAttribute("aria-label", "Open details for " + project.title);
    card.dataset.project = project.id;

    const mediaBox = el("div", "pcard-media");
    mediaBox.appendChild(media(project.thumb, project.title + " screenshot", project.title, { seed: project.id }));
    card.appendChild(mediaBox);

    const body = el("div", "pcard-body");
    body.appendChild(metaRow(project));
    body.appendChild(el("h3", null, project.title));
    if (project.subtitle) body.appendChild(el("p", "pcard-subtitle", project.subtitle));
    body.appendChild(factGrid(project));
    if (project.tech) body.appendChild(tagList(project.tech));

    const cta = el("span", "pcard-cta");
    cta.appendChild(el("span", null, "Read the breakdown"));
    cta.insertAdjacentHTML("beforeend", ICONS.arrow);
    body.appendChild(cta);

    card.appendChild(body);
    return card;
  }

  function compactCard(project) {
    const card = el("button", "mcard reveal");
    card.type = "button";
    card.setAttribute("aria-label", "Open details for " + project.title);
    card.dataset.project = project.id;

    const mediaBox = el("div", "mcard-media");
    mediaBox.appendChild(media(project.thumb, project.title + " screenshot", project.title, { seed: project.id }));
    card.appendChild(mediaBox);

    const body = el("div", "mcard-body");
    body.appendChild(metaRow(project));
    body.appendChild(el("h3", null, project.title));
    if (project.summary) body.appendChild(el("p", "mcard-summary", project.summary));
    if (project.tech) body.appendChild(tagList(project.tech));
    card.appendChild(body);
    return card;
  }

  function renderProjects() {
    const featured = $("#featuredProjects");
    const personal = $("#personalProjects");

    PROJECTS.filter((p) => p.featured).forEach((p) => featured.appendChild(featuredCard(p)));
    PROJECTS.filter((p) => !p.featured).forEach((p) => personal.appendChild(compactCard(p)));

    /* No personal projects yet? Hide the section and its sidebar link. */
    if (!personal.children.length) {
      $("#personal").hidden = true;
      const navLink = $('#railNav a[href="#personal"]');
      if (navLink) navLink.remove();
    }
  }

  /* =============================================================== SKILLS */
  function renderSkills() {
    const grid = $("#skillsGrid");
    SKILLS.forEach((group) => {
      const card = el("div", "skill-group reveal");
      card.appendChild(el("h3", null, group.group));
      const ul = el("ul");
      group.items.forEach((item) => ul.appendChild(el("li", null, item)));
      card.appendChild(ul);
      grid.appendChild(card);
    });
  }

  /* ============================================================= TIMELINE */
  function timelineGroup(title, entries) {
    const group = el("div", "tl-group reveal");
    group.appendChild(el("h3", null, title));

    const list = el("div", "tl-list");
    entries.forEach((entry) => {
      const item = el("div", "tl-item");
      if (entry.period) item.appendChild(el("div", "tl-period", entry.period));
      if (entry.title)  item.appendChild(el("h4", null, entry.title));
      if (entry.org)    item.appendChild(el("div", "tl-org", entry.org));
      if (entry.meta)   item.appendChild(el("div", "tl-meta", entry.meta));
      if (entry.bullets && entry.bullets.length) {
        const ul = el("ul");
        entry.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
        item.appendChild(ul);
      }
      list.appendChild(item);
    });

    group.appendChild(list);
    return group;
  }

  function renderTimeline() {
    const root = $("#timeline");
    const t = (typeof TIMELINE !== "undefined" && TIMELINE) || {};
    const exp = t.experience || [];
    const edu = t.education || [];

    if (exp.length) root.appendChild(timelineGroup("Experience", exp));
    if (edu.length) root.appendChild(timelineGroup("Education", edu));

    const navLink = $('#railNav a[href="#cv"]');

    /* Nothing to show? Hide the section and its nav entry. */
    if (!root.children.length) {
      $("#cv").hidden = true;
      if (navLink) navLink.remove();
      return;
    }

    /* Education only: call the section what it is, and drop the group label
       that would just repeat the heading. */
    if (!exp.length) {
      $("#cv .section-head h2").textContent = "Education";
      if (navLink) navLink.lastChild.textContent = " Education";
      const label = root.querySelector(".tl-group > h3");
      if (label) label.remove();
    }
  }

  /* Number sections 01, 02, … in the order they actually appear, so hiding an
     empty section never leaves a gap in the sidebar or the headings. */
  function numberSections() {
    $$("#railNav a").forEach((link, i) => {
      const n = String(i + 1).padStart(2, "0");
      const idx = link.querySelector(".idx");
      if (idx) idx.textContent = n;
      const section = document.querySelector(link.getAttribute("href"));
      const eyebrow = section && section.querySelector(".section-head .eyebrow");
      if (eyebrow) eyebrow.textContent = n;
    });
  }

  /* ================================================================ ABOUT */
  function renderAbout() {
    const about = $("#aboutText");
    (SITE.about || []).forEach((para) => about.appendChild(el("p", null, para)));
    about.classList.add("reveal");

    const L = SITE.links || {};
    const closing = $("#closingActions");
    if (SITE.email) closing.appendChild(linkButton({ label: SITE.email, url: "mailto:" + SITE.email, kind: "mail" }, true));
    if (L.linkedin) closing.appendChild(linkButton({ label: "LinkedIn", url: L.linkedin, kind: "linkedin" }));
    if (L.github)   closing.appendChild(linkButton({ label: "GitHub", url: L.github, kind: "github" }));
  }

  /* ================================================================ MODAL */
  const modal     = $("#modal");
  const modalBody = $("#modalBody");
  let lastFocused = null;

  function buildModal(project) {
    modalBody.textContent = "";

    const hero = el("div", "modal-hero");
    if (project.video) {
      const frame = el("iframe");
      frame.src = project.video;
      frame.title = project.title + " trailer";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      hero.appendChild(frame);
    } else {
      const src = project.thumb || (project.shots && project.shots[0] && project.shots[0].src);
      hero.appendChild(media(src, project.title, project.title, { eager: true, seed: project.id }));
    }
    modalBody.appendChild(hero);

    const content = el("div", "modal-content");
    content.appendChild(metaRow(project));

    const h2 = el("h2", null, project.title);
    h2.id = "modalTitle";
    content.appendChild(h2);

    if (project.subtitle) content.appendChild(el("p", "modal-subtitle", project.subtitle));

    const facts = [
      ["Role", project.role],
      ["Engine", project.engine],
      ["Team", project.team],
      ["Duration", project.duration],
      ["Platform", project.platforms && project.platforms.join(", ")],
    ].filter(([, v]) => v);

    if (facts.length) {
      const dl = el("dl", "factbar");
      facts.forEach(([label, value]) => {
        const cell = el("div");
        cell.appendChild(el("dt", null, label));
        cell.appendChild(el("dd", null, value));
        dl.appendChild(cell);
      });
      content.appendChild(dl);
    }

    if (project.summary) {
      const block = el("div", "modal-block");
      block.appendChild(el("h3", null, "Overview"));
      block.appendChild(el("p", null, project.summary));
      content.appendChild(block);
    }

    if (project.contributions && project.contributions.length) {
      const block = el("div", "modal-block");
      block.appendChild(el("h3", null, "What I built"));
      const ul = el("ul", "contrib-list");
      project.contributions.forEach((c) => ul.appendChild(el("li", null, c)));
      block.appendChild(ul);
      content.appendChild(block);
    }

    if (project.highlight) {
      const h = project.highlight;
      const block = el("div", "modal-block");
      block.appendChild(el("h3", null, "Technical highlight"));

      const box = el("div", "highlight");
      if (h.title) box.appendChild(el("h4", null, h.title));
      const dl = el("dl");
      [["Problem", h.problem], ["Solution", h.solution], ["Result", h.result]]
        .filter(([, v]) => v)
        .forEach(([label, value]) => {
          const group = el("div");
          group.appendChild(el("dt", null, label));
          group.appendChild(el("dd", null, value));
          dl.appendChild(group);
        });
      box.appendChild(dl);
      block.appendChild(box);
      content.appendChild(block);
    }

    const shots = (project.shots || []).filter((s) => s && s.src);
    if (shots.length) {
      const block = el("div", "modal-block");
      block.appendChild(el("h3", null, "Screenshots"));
      const gal = el("div", "gallery");
      shots.forEach((shot, i) => {
        const fig = el("figure");
        const frame = el("div", "shot");
        frame.appendChild(media(shot.src, shot.caption || project.title, "Screenshot",
          { eager: true, seed: project.id + i }));
        fig.appendChild(frame);
        if (shot.caption) fig.appendChild(el("figcaption", null, shot.caption));
        gal.appendChild(fig);
      });
      block.appendChild(gal);
      content.appendChild(block);
    }

    if (project.links && project.links.length) {
      const links = el("div", "modal-links");
      project.links.forEach((link, i) => links.appendChild(linkButton(link, i === 0)));
      content.appendChild(links);
    }

    modalBody.appendChild(content);
  }

  function openModal(id) {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return;

    lastFocused = document.activeElement;
    buildModal(project);

    modal.hidden = false;
    void modal.offsetWidth;
    modal.classList.add("is-open");
    document.body.classList.add("is-locked");
    modal.scrollTop = 0;

    history.replaceState(null, "", "#project=" + id);
    $("#modalClose").focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    history.replaceState(null, "", location.pathname + location.search);

    const done = () => {
      modal.hidden = true;
      modalBody.textContent = "";
      modal.removeEventListener("transitionend", done);
    };
    modal.addEventListener("transitionend", done);
    setTimeout(done, 400);

    if (lastFocused) lastFocused.focus();
  }

  function wireModal() {
    document.addEventListener("click", (e) => {
      const card = e.target.closest("[data-project]");
      if (card) { openModal(card.dataset.project); return; }
      if (e.target.closest("#modalClose")) { closeModal(); return; }
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key !== "Tab" || modal.hidden) return;

      const focusables = $$('a[href], button, iframe, [tabindex]:not([tabindex="-1"])', modal)
        .filter((n) => n.offsetParent !== null);
      if (!focusables.length) return;

      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    const match = location.hash.match(/^#project=(.+)$/);
    if (match) openModal(decodeURIComponent(match[1]));
  }

  /* ============================================================ RAIL / NAV */
  function wireRail() {
    const rail   = $("#rail");
    const toggle = $("#railToggle");

    const backdrop = el("div", "rail-backdrop");
    document.body.appendChild(backdrop);

    /* Below 900px the rail is an off-canvas drawer. While it is closed its
       links must not be reachable by keyboard, which `inert` handles; above
       900px the rail is always on screen, so inert must never be set. */
    const drawerMode = window.matchMedia("(max-width: 900px)");

    const syncInert = () => {
      const closed = !rail.classList.contains("is-open");
      rail.inert = drawerMode.matches && closed;
    };

    const setOpen = (open) => {
      rail.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      syncInert();
    };

    syncInert();
    drawerMode.addEventListener("change", syncInert);

    toggle.addEventListener("click", () => setOpen(!rail.classList.contains("is-open")));
    backdrop.addEventListener("click", () => setOpen(false));
    $("#railNav").addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    /* Scroll spy */
    const navMap = new Map();
    $$("#railNav a").forEach((a) => navMap.set(a.getAttribute("href").slice(1), a));

    const sections = Array.from(navMap.keys())
      .map((id) => document.getElementById(id))
      .filter((s) => s && !s.hidden);

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = navMap.get(entry.target.id);
          if (!link) return;
          navMap.forEach((a) => a.classList.remove("is-active"));
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* =============================================================== REVEAL */
  function wireReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transitionDelay = Math.min(i * 70, 240) + "ms";
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    items.forEach((i) => io.observe(i));

    /* Failsafe: invisible content on a portfolio is worse than no animation. */
    setTimeout(() => {
      items.forEach((node) => {
        if (node.classList.contains("is-visible")) return;
        if (node.getBoundingClientRect().top < window.innerHeight) {
          node.classList.add("is-visible");
        }
      });
    }, 2000);
  }

  /* ================================================================= BOOT */
  function init() {
    renderRail();
    renderIntro();
    renderProjects();
    renderSkills();
    renderTimeline();
    renderAbout();
    numberSections();
    wireRail();
    wireReveal();
    wireModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
