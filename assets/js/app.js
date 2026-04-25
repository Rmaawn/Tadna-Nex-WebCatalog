// اطمینان از لود دیتا
if (typeof SERVICES === "undefined") {
  console.error("SERVICES not loaded");
}

// ساخت کارت
function createCard(service) {
  const div = document.createElement("div");
  div.className = "card";

div.innerHTML = `
  <div class="card-image">
    <img src="assets/img/logo.png" alt="${service.title}">
  </div>
  <div class="card-content">
    <h3>${service.title}</h3>
  </div>
`;

  div.addEventListener("click", () => {
    window.location.href = `service.html?slug=${service.slug}`;
  });

  return div;
}

// =====================
// صفحه اصلی
// =====================
const container = document.getElementById("services");

if (container && Array.isArray(SERVICES)) {
  SERVICES.forEach(service => {
    container.appendChild(createCard(service));
  });
}

// =====================
// صفحه سرویس
// =====================
const title = document.getElementById("title");

if (title) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  function findService(slug) {
  for (const s of SERVICES) {
    if (s.slug === slug) return s;

    if (s.subs) {
      const found = s.subs.find(sub => sub.slug === slug);
      if (found) return found;
    }
  }
  return null;
}

const service = findService(slug);

  if (service) {
    title.innerText = service.title;

    // ویدیو
    const video = document.getElementById("video");
    video.innerHTML = `
      <source src="assets/video/services/${slug}.mp4" type="video/mp4">
    `;

    // ساخت لیست زیرخدمات
const subContainer = document.getElementById("subservices");
const finalBox = document.getElementById("final-action");

if (service.subs && service.subs.length) {
service.subs.forEach(sub => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-image">
      <img src="assets/img/logo.png" alt="${sub.title}">
    </div>
    <div class="card-content">
      <h3>${sub.title}</h3>
    </div>
  `;

  div.addEventListener("click", () => {
    window.location.href = `service.html?slug=${sub.slug}`;
  });

  subContainer.appendChild(div);
});
} else {
  // اگر زیرخدمت نداشت → دکمه نهایی
  const btn = document.createElement("div");
  btn.className = "final-btn";
  btn.innerText = "ثبت درخواست";

  btn.onclick = () => {
    alert("درخواست شما ثبت شد");
  };

  finalBox.appendChild(btn);
}

  } else {
    title.innerText = "سرویس پیدا نشد";
  }
}