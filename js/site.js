// local folders para mabilis ko mahanap at machange yung images
const logoImage = "img/logo/campass-logo-nobg.png";
const iconFolder = "img/icons/";

// dito lahat ng camera info para isang list lang
const cameras = {
  "canon-r50": {
    name: "Canon EOS R50", brand: "Canon", image: "img/camera/canon-eos-r50.jpg",
    credit: "source: Abenson", creditUrl: "https://www.abenson.com/", official: "https://www.usa.canon.com/shop/p/eos-r50",
    intro: "An easy starter camera for photos, travel, and everyday video.", tags: ["beginner", "photo", "light"],
    heading: "Easy to learn and light to carry.",
    copy: "The simple controls and small body make it friendly for beginners. It can also record video when you want one camera for both uses.",
    fit: "A good first mirrorless camera for school work, trips, portraits, and simple videos.",
    know: "It uses changeable RF lenses, so the lens you choose also affects the final result."
  },
  "canon-r100": {
    name: "Canon EOS R100", brand: "Canon", image: "img/camera/canon-eos-r100.png",
    credit: "source: Canon", creditUrl: "https://www.canon-europe.com/press-centre/product-imagery/cameras-accessories/eos-r100/", official: "https://www.usa.canon.com/shop/p/eos-r100",
    intro: "A simple mirrorless camera for beginners who want to focus on photography.", tags: ["beginner", "photo", "light"],
    heading: "A basic starting point for photography.",
    copy: "The compact body and simple controls make it easier to practice composition, exposure, and using different lenses.",
    fit: "A useful pick for school events, family photos, travel, and beginners moving from a phone.",
    know: "It uses Canon RF and RF-S lenses. Its screen is fixed, so it is less suited for filming yourself."
  },
  "canon-r50-v": {
    name: "Canon EOS R50 V", brand: "Canon", image: "img/camera/canon-eos-r50-v.png",
    credit: "source: Precision Camera", creditUrl: "https://www.precision-camera.com/canon-eos-r50-v-mirrorless-camera-body/", official: "https://www.usa.canon.com/shop/p/eos-r50-v-body",
    intro: "A small Canon camera made mainly for video creators and vloggers.", tags: ["filming", "creator", "vlog"],
    heading: "Canon controls made for video.",
    copy: "The front record button, vertical tripod mount, and video tools help when filming yourself or making short projects.",
    fit: "A good match for vlogs, school films, interviews, and vertical videos.",
    know: "It uses Canon RF and RF-S lenses and is more video-focused than the regular EOS R50."
  },
  "sony-zve10-ii": {
    name: "Sony ZV E10 II", brand: "Sony", image: "img/camera/sony-zve10-ii.jpg",
    credit: "source: Sony", creditUrl: "https://www.sony.com/", official: "https://electronics.sony.com/imaging/interchangeable-lens-cameras/aps-c/p/ilczve10m2-b",
    intro: "A small hybrid camera for creators who want both photos and video.", tags: ["hybrid", "creator", "filming"],
    heading: "Made for creators and everyday filming.",
    copy: "The flip screen and creator controls are useful for vlogs, school videos, and filming yourself. It also takes regular photos.",
    fit: "A useful choice when filming and content creation matter more than a viewfinder.",
    know: "It uses changeable E mount lenses, and a lens with stabilization can help handheld shots."
  },
  "sony-a6400": {
    name: "Sony Alpha a6400", brand: "Sony", image: "img/camera/sony-a6400.png",
    credit: "source: Sony", creditUrl: "https://electronics.sony.com/imaging/interchangeable-lens-cameras/aps-c/p/ilce6400m-b", official: "https://electronics.sony.com/imaging/interchangeable-lens-cameras/aps-c/p/ilce6400m-b",
    intro: "A compact mirrorless camera for photos, travel, and regular video.", tags: ["photo", "travel", "hybrid"],
    heading: "Fast focus in a small camera.",
    copy: "Its quick autofocus is helpful for people, street photos, moving subjects, and beginner video work.",
    fit: "A balanced option for travel, portraits, school events, and creators who also take photos.",
    know: "It uses Sony E mount lenses. The screen flips upward, which can be blocked by a top-mounted microphone."
  },
  "sony-zv-1-ii": {
    name: "Sony ZV-1 II", brand: "Sony", image: "img/camera/sony-zv-1-ii.png",
    credit: "source: Sony", creditUrl: "https://store.sony.com.au/zv-series/ZV1M2.html", official: "https://electronics.sony.com/imaging/compact-cameras/all-vlog-compact-cameras/p/zv1m2-w",
    intro: "A pocket-sized fixed-lens camera made for simple vlogging.", tags: ["vlog", "small", "filming"],
    heading: "A complete vlog setup in one camera.",
    copy: "The wide built-in lens, flip screen, and microphone make it easy to record without choosing a separate lens.",
    fit: "A useful choice for daily vlogs, travel clips, short videos, and filming yourself.",
    know: "Its lens cannot be changed, but that also makes the setup simpler to carry and use."
  },
  "nikon-z50-ii": {
    name: "Nikon Z50 II", brand: "Nikon", image: "img/camera/nikon-z50-ii.png",
    credit: "source: Nikon", creditUrl: "https://www.nikonusa.com/p/z50ii/1784/overview", official: "https://imaging.nikon.com/imaging/lineup/mirrorless/z50_2/",
    intro: "A comfortable starter camera for travel, photos, and simple video.", tags: ["travel", "beginner", "hybrid"],
    heading: "Familiar controls with room to learn.",
    copy: "The grip, viewfinder, and automatic subject focus make it comfortable for beginners who also want to practice manual settings.",
    fit: "A balanced pick for travel, family photos, school events, and beginner video.",
    know: "It uses Nikon Z lenses. Check whether a kit lens is included before choosing."
  },
  "nikon-z30": {
    name: "Nikon Z30", brand: "Nikon", image: "img/camera/nikon-z30.png",
    credit: "source: Nikon", creditUrl: "https://www.nikonusa.com/p/z-30/1749/overview", official: "https://www.nikonusa.com/p/z-30/1749/overview",
    intro: "A light Nikon camera for vlogs, travel, photos, and beginner video.", tags: ["vlog", "beginner", "travel"],
    heading: "Small body with simple video controls.",
    copy: "The flip screen and light body help when filming yourself or carrying the camera during trips and school activities.",
    fit: "A good choice for beginner vlogs, travel stories, school videos, and casual photography.",
    know: "It uses Nikon Z lenses and does not have a built-in viewfinder."
  },
  "fujifilm-xs20": {
    name: "Fujifilm X-S20", brand: "Fujifilm", image: "img/camera/fujifilm-xs20.jpg",
    credit: "source: Fujifilm", creditUrl: "https://www.fujifilm-x.com/en-us/products/cameras/x-s20/", official: "https://www.fujifilm-x.com/en-us/products/cameras/x-s20/",
    intro: "A compact hybrid camera for street photos, color, and video.", tags: ["street", "color", "hybrid"],
    heading: "Good color in a compact camera.",
    copy: "Its film looks give beginners ready-made color choices, while stabilization helps with handheld photos and video.",
    fit: "A strong match for street photos, travel stories, and students who enjoy trying different color looks.",
    know: "It uses Fujifilm X lenses. Film looks are creative choices and can still be adjusted."
  },
  "fujifilm-xm5": {
    name: "Fujifilm X-M5", brand: "Fujifilm", image: "img/camera/fujifilm-xm5.jpg",
    credit: "source: Fujifilm", creditUrl: "https://www.fujifilm-x.com/en-us/products/cameras/x-m5/", official: "https://www.fujifilm-x.com/en-us/products/cameras/x-m5/",
    intro: "A compact Fujifilm camera for color, travel, photos, and video.", tags: ["color", "small", "hybrid"],
    heading: "Creative color in a small body.",
    copy: "Its film simulation dial gives quick color choices while the flip screen supports video and filming yourself.",
    fit: "A useful pick for street photos, travel, short films, and creators who enjoy different color styles.",
    know: "It uses Fujifilm X lenses and does not have a built-in viewfinder."
  },
  "dji-pocket-3": {
    name: "DJI Osmo Pocket 3", brand: "DJI", image: "img/camera/dji-osmo-pocket-3.png",
    credit: "source: SM Cyberzone", creditUrl: "https://www.smcyberzone.com/", official: "https://www.dji.com/osmo-pocket-3",
    intro: "A small camera made for vlogs, travel, and everyday filming.", tags: ["vlog", "travel", "filming"],
    heading: "Small, steady, and easy to carry.",
    copy: "The built in stabilizer helps keep video smooth. The small body is useful when you do not want to carry a large camera.",
    fit: "It is small, easy to carry, and useful for smooth handheld video.",
    know: "It is best for simple filming and does not use changeable lenses."
  },
  "dji-action-5": {
    name: "DJI Osmo Action 5 Pro", brand: "DJI", image: "img/camera/dji-osmo-action-5-pro.png",
    credit: "source: DJI", creditUrl: "https://www.dji.com/osmo-action-5-pro", official: "https://www.dji.com/osmo-action-5-pro",
    intro: "A small action camera for movement, outdoor clips, and travel.", tags: ["action", "small", "filming"],
    heading: "Ready for movement and outdoor shots.",
    copy: "The compact body is made for action shots and places where a bigger camera can be difficult to carry.",
    fit: "A useful pick for biking, walking clips, travel, water activities, and point of view shots.",
    know: "It has a fixed wide lens, so it is less flexible for portraits and far subjects."
  }
};

function makeModeSwitch() {
  return `<div class = "modeSwitch" aria-label="camera mode"><button class = "modeButton" type="button" data-mode="photo">Photo</button><button class = "modeButton" type="button" data-mode="filming">Filming</button></div>`;
}

// shared nav para same sa lahat ng pages
function makeHeader(activePage) {
  const links = [["index.html", "home", "Home"], ["cameras.html", "cameras", "Cameras"], ["shot-guide.html", "shot-guide", "Shot Guide"], ["learn.html", "learn", "Learn"], ["about.html", "about", "About"]];
  const navLinks = links.map(([href, key, label]) => `<a class = "${key === activePage ? "active" : ""}" href="${href}">${label}</a>`).join("");
  return `<header class = "topbar">
    <a class = "brand" href="index.html" aria-label="CamPass home"><img class = "logo" src="${logoImage}" alt = ""><span>CamPass</span></a>
    <nav class = "nav" aria-label="main navigation">${navLinks}</nav>
    <div class = "navActions">${makeModeSwitch()}<button class = "tabModeBtn" type="button" aria-label="switch to filming mode">Photo</button><a class = "button primary" href="camera-finder.html">Find my camera <span class = "arrow" aria-hidden="true"></span></a></div>
    <button class = "menuBtn" type="button" aria-label="open menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </header><div class = "phoneMode">${makeModeSwitch()}</div>
  <div class = "phoneMenu" hidden>
    <div class = "menuHead"><a class = "brand" href="index.html"><img class = "logo" src="${logoImage}" alt = ""><span>CamPass</span></a><button class = "closeBtn" type="button">close</button></div>
    <p class = "eyebrow">menu</p><nav aria-label="mobile navigation">${navLinks}<a href="compare.html">Compare</a><a href="camera-video.html">Camera Video</a></nav>
    <div class = "menuActions">${makeModeSwitch()}<a class = "button primary" href="camera-finder.html">find my camera</a><small>owner John Santos</small></div>
  </div>`;
}

// footer para isang edit lang sa lahat ng pages
function makeFooter() {
  return `<footer class = "footer">
    <div class = "footerBrand"><a class = "brand" href="index.html"><img class = "logo" src="${logoImage}" alt = ""><span>CamPass</span></a><p>camera choices made simple</p><small>© 2026 CamPass. All rights reserved.</small><small>Created by John Santos</small></div>
    <div class = "footerInfo"><img class = "footerMark" src="${logoImage}" alt = ""><div class = "footerInfoCopy"><strong>made for beginners</strong><p>Simple camera choices, settings, and shot ideas for photography and filming.</p><div class = "footerTags"><span>photo</span><span>filming</span><span>camera basics</span></div></div></div>
    <div class = "footerContact"><strong>contact</strong><div class = "contactIcons">
      <a class = "contactIcon" href="mailto:jmsantos9925@gmail.com" aria-label="email John Santos"><img src="${iconFolder}email.png" alt = ""></a>
      <a class = "contactIcon" href="tel:+67676767677" aria-label="phone"><img src="${iconFolder}phone.png" alt = ""></a>
      <a class = "contactIcon" href="https://www.linkedin.com/in/john-emmanuel-santos-18a7b4265/" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="${iconFolder}linkedin.png" alt = ""></a>
      <a class = "contactIcon" href="https://github.com/jmsantos9925-eng" target="_blank" rel="noopener" aria-label="GitHub"><img src="${iconFolder}github.png" alt = ""></a>
    </div><a class = "iconCredit" href="https://www.flaticon.com/" target="_blank" rel="noopener">icons from Flaticon</a></div>
  </footer>`;
}

function loadSharedParts() {
  const pageName = document.body.dataset.page || "";
  const headerPlace = document.querySelector("#site-header");
  const footerPlace = document.querySelector("#site-footer");
  if (headerPlace) headerPlace.innerHTML = makeHeader(pageName);
  if (footerPlace) footerPlace.innerHTML = makeFooter();
}

function openMobileMenu(open) {
  const menu = document.querySelector(".phoneMenu");
  const button = document.querySelector(".menuBtn");
  if (!menu || !button) return;
  button.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menuOpen", open);

  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("open")));
    return;
  }

  menu.classList.remove("open");
  menu.addEventListener("transitionend", () => {
    if (!menu.classList.contains("open")) menu.hidden = true;
  }, { once: true });
}

function setupMobileMenu() {
  document.querySelector(".menuBtn")?.addEventListener("click", () => openMobileMenu(true));
  document.querySelector(".closeBtn")?.addEventListener("click", () => openMobileMenu(false));
}

function clickFilter(groupName, value) {
  document.querySelector(`[data-filter-group="${groupName}"] [data-filter="${value}"]`)?.click();
}

function applyMode(mode, preserveBrand = false) {
  document.body.dataset.mode = mode;
  document.querySelectorAll(".modeButton").forEach((item) => item.classList.toggle("active", item.dataset.mode === mode));
  const tabletModeButton = document.querySelector(".tabModeBtn");
  if (tabletModeButton) {
    tabletModeButton.textContent = mode === "filming" ? "Filming" : "Photo";
    tabletModeButton.setAttribute("aria-label", `switch to ${mode === "filming" ? "photo" : "filming"} mode`);
  }
  const homeLabel = document.querySelector("#hero-mode-label");
  if (homeLabel) {
    const filming = mode === "filming";
    homeLabel.textContent = filming ? "FILMING MODE" : "PHOTO MODE";
    document.querySelector("#hero-result-label").textContent = filming ? "SAMPLE FILM SETUP" : "SAMPLE PHOTO SETUP";
    document.querySelector("#hero-result-title").textContent = filming ? "Smooth handheld video setup" : "Lightweight hybrid setup";
    document.querySelector("#hero-result-tags").innerHTML = filming ? "<span>24 FPS</span><span>F/2.8</span><span>1/50</span><span>ISO 400</span>" : "<span>35 MM</span><span>F/2.8</span><span>1/250</span><span>ISO 400</span>";
  }
  const previewSettings = document.querySelector(".previewSettings");
  if (previewSettings && !document.querySelector("#camera-controls")) {
    const filming = mode === "filming";
    previewSettings.children[0].textContent = filming ? "f 2.8   1 50   iso 400   35 mm   24 fps" : "f 2.8   1 250   iso 400   50 mm";
    previewSettings.children[1].textContent = filming ? "subject tracking" : "subject in focus";
  }
  if (document.querySelector('[data-filter-group="camera"]') && !preserveBrand) clickFilter("camera", mode);
  if (document.querySelector('[data-filter-group="shot"]')) clickFilter("shot", mode);
  const workGroup = document.querySelector('[data-choice-group="work"]');
  if (workGroup) workGroup.querySelectorAll(".chip").forEach((item) => item.classList.toggle("active", item.dataset.value === mode));
  const presetButtons = document.querySelectorAll("[data-preset-mode]");
  presetButtons.forEach((button) => { button.hidden = !button.dataset.presetMode.split(" ").includes(mode); });
  if (presetButtons.length) document.querySelector(`[data-camera-preset="${mode === "filming" ? "vlog" : "portrait"}"]`)?.click();
}

function setupModeButtons() {
  const savedMode = sessionStorage.getItem("campassMode") || "photo";
  const hasBrandFilter = new URLSearchParams(window.location.search).has("brand");
  applyMode(savedMode, hasBrandFilter);
  document.querySelectorAll(".modeButton").forEach((button) => button.addEventListener("click", () => {
    const mode = button.dataset.mode; sessionStorage.setItem("campassMode", mode); applyMode(mode);
  }));
  document.querySelector(".tabModeBtn")?.addEventListener("click", () => {
    const mode = document.body.dataset.mode === "filming" ? "photo" : "filming";
    sessionStorage.setItem("campassMode", mode); applyMode(mode);
  });
}

function setupFilter(groupName, itemSelector) {
  const buttons = document.querySelectorAll(`[data-filter-group="${groupName}"] .chip`);
  const items = document.querySelectorAll(itemSelector);
  if (!buttons.length || !items.length) return;
  buttons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => item.classList.remove("active")); button.classList.add("active");
    items.forEach((item) => { item.hidden = filter !== "all" && !(item.dataset.tags || "").split(" ").includes(filter); });
  }));
  if (groupName === "camera") {
    const brand = new URLSearchParams(window.location.search).get("brand");
    [...buttons].find((button) => button.dataset.filter === brand)?.click();
  }
}

function getChoice(form, name) {
  return form.querySelector(`[data-choice-group="${name}"] .active`)?.dataset.value;
}

function getCameraResult(work, priority, brand) {
  const brandChoices = { canon: "canon-r50", sony: "sony-zve10-ii", nikon: "nikon-z50-ii", fujifilm: "fujifilm-xs20" };
  if (brandChoices[brand]) return { id: brandChoices[brand], ...cameras[brandChoices[brand]] };
  if (brand === "dji") { const id = priority === "action" ? "dji-action-5" : "dji-pocket-3"; return { id, ...cameras[id] }; }
  let id = "canon-r50";
  if (priority === "action") id = "dji-action-5";
  else if (priority === "color") id = "fujifilm-xs20";
  else if (priority === "smooth") id = "dji-pocket-3";
  else if (priority === "small") id = work === "filming" ? "dji-pocket-3" : "nikon-z50-ii";
  else if (work === "filming") id = "sony-zve10-ii";
  return { id, ...cameras[id] };
}

function getFinderReason(priority, brand = "all") {
  if (brand !== "all") return `This matches your ${brand} brand choice and gives you a good place to start.`;
  const reasons = {
    easy: "A simple option for beginners who want clear controls.",
    small: "A lighter option that is easier to carry.",
    smooth: "A useful option for smoother handheld video.",
    color: "A good match if creative color matters to you.",
    action: "A tougher choice for movement and action shots."
  };
  return reasons[priority] || reasons.easy;
}

function showFinderResult(result, reason = getFinderReason("easy")) {
  document.querySelector("#result-name").textContent = result.name;
  document.querySelector("#result-note").textContent = result.intro;
  const image = document.querySelector("#result-image"); image.src = result.image; image.alt = result.name;
  document.querySelector("#result-tags").innerHTML = result.tags.map((tag) => `<span class = "tag">${tag}</span>`).join("");
  document.querySelector("#result-reason").textContent = reason;
  document.querySelector("#result-link").href = `camera-info.html?camera=${result.id}`;
  const credit = document.querySelector(".finderResult .imgCredit");
  if (credit) { credit.textContent = result.credit; credit.href = result.creditUrl; }
}

function setupFinder() {
  const form = document.querySelector("#finder-form");
  if (!form) return;
  form.querySelectorAll("[data-choice-group]").forEach((group) => group.querySelectorAll(".chip").forEach((button) => button.addEventListener("click", () => {
    group.querySelectorAll(".chip").forEach((item) => { item.classList.remove("active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("active"); button.setAttribute("aria-pressed", "true");
  })));
  form.querySelectorAll(".chip").forEach((item) => item.setAttribute("aria-pressed", item.classList.contains("active") ? "true" : "false"));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const priority = getChoice(form, "priority");
    const brand = getChoice(form, "brand");
    showFinderResult(getCameraResult(getChoice(form, "work"), priority, brand), getFinderReason(priority, brand));
  });
  form.addEventListener("reset", () => setTimeout(() => {
    form.querySelectorAll("[data-choice-group]").forEach((group) => group.querySelectorAll(".chip").forEach((item, index) => { item.classList.toggle("active", index === 0); item.setAttribute("aria-pressed", index === 0 ? "true" : "false"); }));
    showFinderResult({ id: "dji-pocket-3", ...cameras["dji-pocket-3"] }, getFinderReason("smooth"));
  }, 0));
}

function setupCameraInfo() {
  const name = document.querySelector("#camera-info-name");
  if (!name) return;
  const id = new URLSearchParams(window.location.search).get("camera") || "dji-pocket-3";
  const camera = cameras[id] || cameras["dji-pocket-3"];
  document.title = `${camera.name} | CamPass`; name.textContent = camera.name;
  document.querySelector("#camera-info-intro").textContent = camera.intro;
  const image = document.querySelector("#camera-info-image"); image.src = camera.image; image.alt = camera.name;
  const credit = document.querySelector("#camera-info-credit"); credit.textContent = camera.credit; credit.href = camera.creditUrl;
  document.querySelector("#camera-info-tags").innerHTML = camera.tags.map((tag) => `<span class = "tag">${tag}</span>`).join("");
  document.querySelector("#camera-info-heading").textContent = camera.heading;
  document.querySelector("#camera-info-copy").textContent = camera.copy;
  document.querySelector("#camera-info-fit").textContent = camera.fit;
  document.querySelector("#camera-info-know").textContent = camera.know;
  document.querySelector("#camera-info-official").href = camera.official;
}

function setupCameraControls() {
  const panel = document.querySelector("#camera-controls");
  const preview = document.querySelector("#learn-preview");
  if (!panel || !preview) return;
  const sliders = [...panel.querySelectorAll("input[type='range']")];
  const tips = {
    aperture: "A lower f number gives more light and a softer background.",
    shutter: "A faster shutter freezes movement but lets in less light.",
    iso: "Higher ISO makes the image brighter, but it can add grain.",
    focus: "Move the focus until the main subject looks clear.",
    focal: "A longer focal length makes the subject look closer."
  };
  const presets = {
    portrait: { values: [0, 2, 1, 3, 3], tip: "Good for a person with a soft background." },
    action: { values: [3, 4, 4, 3, 2], tip: "A fast shutter helps freeze quick movement." },
    night: { values: [2, 1, 3, 3, 1], tip: "A wider aperture and higher ISO help in low light." },
    vlog: { values: [2, 0, 2, 3, 1], tip: "A simple starting point for a talking vlog." },
    interview: { values: [1, 0, 0, 3, 2], tip: "Keep the subject clear and the camera steady." },
    handheld: { values: [3, 1, 3, 3, 1], tip: "Useful when filming while holding the camera." }
  };

  function updatePreview(tip) {
    sliders.forEach((slider) => {
      const output = document.querySelector(`#${slider.dataset.output}`);
      if (output) output.textContent = slider.dataset.labels.split("|")[Number(slider.value)];
    });
    const aperture = Number(document.querySelector("#aperture").value);
    const shutter = Number(document.querySelector("#shutter").value);
    const iso = Number(document.querySelector("#iso").value);
    const focus = Number(document.querySelector("#focus").value);
    const focal = Number(document.querySelector("#focal").value);
    const ev = (2 - aperture) * 0.35 + (2 - shutter) * 0.45 + (iso - 2) * 0.4;
    const result = ev < -0.9 ? "too dark" : ev > 0.9 ? "too bright" : "balanced";
    const blur = Math.abs(focus - 3) * 0.65 + Math.max(0, 2 - shutter) * 0.25 + Math.max(0, 2 - aperture) * 0.12;

    preview.style.setProperty("--preview-brightness", Math.max(0.55, Math.min(1.55, 1 + ev * 0.18)));
    preview.style.setProperty("--preview-blur", `${blur.toFixed(2)}px`);
    preview.style.setProperty("--preview-saturation", 1);
    preview.style.setProperty("--preview-zoom", 1 + focal * 0.035);
    preview.style.setProperty("--preview-grain", Math.max(0, iso - 1) * 0.045);
    document.querySelector("#exposure-value").textContent = `${ev >= 0 ? "+" : ""}${ev.toFixed(1)} EV`;
    document.querySelector("#exposure-label").textContent = result;
    document.querySelector("#control-result-label").textContent = result;
    document.querySelector("#preview-values").textContent = `${document.querySelector("#aperture-value").textContent}   ${document.querySelector("#shutter-value").textContent}   iso ${document.querySelector("#iso-value").textContent}   ${document.querySelector("#focal-value").textContent}`;
    if (tip) document.querySelector("#control-tip").textContent = tip;
  }

  function useValues(values, tip) {
    sliders.forEach((slider, index) => { slider.value = values[index]; });
    updatePreview(tip);
  }

  sliders.forEach((slider) => slider.addEventListener("input", () => {
    panel.querySelectorAll("[data-camera-preset]").forEach((button) => button.classList.remove("active"));
    updatePreview(tips[slider.id]);
  }));

  panel.querySelectorAll("[data-camera-preset]").forEach((button) => button.addEventListener("click", () => {
    panel.querySelectorAll("[data-camera-preset]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const preset = presets[button.dataset.cameraPreset];
    useValues(preset.values, preset.tip);
  }));

  document.querySelector("#reset-controls")?.addEventListener("click", () => {
    const filming = document.body.dataset.mode === "filming";
    document.querySelector(`[data-camera-preset="${filming ? "vlog" : "portrait"}"]`)?.click();
  });

  updatePreview("Move a slider or choose a preset.");
}

function setupSimpleButtons() {
  const description = document.querySelector("#description-button"), box = document.querySelector("#description-box");
  description?.addEventListener("click", () => { box.hidden = !box.hidden; });
  document.querySelectorAll("[data-print]").forEach((button) => button.addEventListener("click", () => window.print()));
}

function setupVideoLessons() {
  const buttons = document.querySelectorAll("[data-video-lesson]");
  if (!buttons.length) return;
  const lessons = {
    exposure: {
      title: "Understand exposure.", videoId: "WkZXlfUzuUQ", caption: "Exposure triangle lesson by Mike Jeffrey",
      copy: "See how aperture, shutter speed, and ISO work together before using manual mode.",
      points: ["Aperture controls light and background blur.", "Shutter speed controls motion and light.", "ISO can brighten the image and add grain."]
    },
    aperture: {
      title: "Control background blur.", videoId: "A450nLzqBPg", caption: "Aperture lesson from Camera Basics",
      copy: "Learn what the f number means and how aperture changes the look of a photo.",
      points: ["A lower f number lets in more light.", "A wide aperture can soften the background.", "A smaller aperture can keep more of the scene clear."]
    },
    shutter: {
      title: "Control movement.", videoId: "Y3805SK6wfE", caption: "Shutter speed lesson by Mark Duffy",
      copy: "See when to freeze action and when to show movement in a photo.",
      points: ["A fast shutter helps freeze movement.", "A slow shutter can show motion blur.", "Slower shutter speeds let in more light."]
    },
    frame: {
      title: "Choose a frame rate.", videoId: "qEPHL3K7JF0", caption: "Frame rate lesson by Todd Wolfe",
      copy: "Learn how frame rate changes movement when you record a video.",
      points: ["24 fps gives a common film look.", "30 fps is useful for regular online video.", "Higher frame rates can be used for slow motion."]
    },
    filming: {
      title: "Prepare for filming.", videoId: "nxKt0FrEges", caption: "Beginner filming guide by Steve Ramsden",
      copy: "Check the main camera settings before recording your first clip.",
      points: ["Set your frame rate before shutter speed.", "Check white balance when the lighting changes.", "Keep ISO as low as the scene allows."]
    }
  };

  // one function lang para sabay mapalitan yung lesson details
  buttons.forEach((button) => button.addEventListener("click", () => {
    const lesson = lessons[button.dataset.videoLesson];
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const player = document.querySelector("#video-player");
    player.src = `https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0`;
    player.title = `${lesson.title} YouTube lesson`;
    document.querySelector("#video-youtube-link").href = `https://www.youtube.com/watch?v=${lesson.videoId}`;
    document.querySelector("#video-caption").textContent = lesson.caption;
    document.querySelector("#video-lesson-title").textContent = lesson.title;
    document.querySelector("#video-lesson-copy").textContent = lesson.copy;
    document.querySelector("#video-lesson-points").innerHTML = lesson.points.map((point) => `<li>${point}</li>`).join("");
  }));
}

loadSharedParts();
setupFilter("camera", ".cameraCard");
setupFilter("shot", ".shotCard");
setupCameraControls();
setupModeButtons();
setupMobileMenu();
setupFinder();
setupCameraInfo();
setupSimpleButtons();
setupVideoLessons();
