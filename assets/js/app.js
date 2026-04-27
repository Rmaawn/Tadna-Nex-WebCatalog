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

// =====================
// LEAD FORM ENGINE
// =====================

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("lead-modal");
  const content = document.getElementById("lead-content");

  if (!modal || !content) return;

  // اگر قبلا پر شده → کلا حذف
  if (localStorage.getItem("lead_done") === "1") {
    modal.remove();
    return;
  }

  const STEPS = [
    { key: "name", type: "input", label: "نام و نام خانوادگی:" },
    { key: "phone", type: "input", label: "شماره تماس:" },
    { key: "city", type: "select", label: "شهر:", options: ["تهران","مشهد","اصفهان","شیراز","سایر"] },
    { key: "biz", type: "select", label: "نوع کسب‌وکار:", options: ["فروشگاهی","خدماتی","استارتاپ","پزشکی","سایر"] },
    { key: "budget", type: "select", label: "بودجه:", options: ["کمتر از ۵۰","۵۰ تا ۱۵۰","۱۵۰ تا ۵۰۰","بالای ۵۰۰","نیاز به مشاوره"] },
    { key: "goal", type: "input", label: "هدفت چیه؟" }
  ];

  let step = 0;
  let data = {};

  function render() {
    if (step >= STEPS.length) return finish();

    const s = STEPS[step];

    if (s.type === "input") {
      content.innerHTML = `
        <h3>${s.label}</h3>
        <input class="lead-input" id="lead-input"/>
        <button class="lead-btn" id="nextBtn">ادامه</button>
      `;

      document.getElementById("nextBtn").onclick = () => {
        const val = document.getElementById("lead-input").value.trim();
        if (!val) return;
        data[s.key] = val;
        step++;
        render();
      };
    }

    if (s.type === "select") {
      content.innerHTML = `
        <h3>${s.label}</h3>
        <div class="lead-options">
          ${s.options.map(o => `<div class="lead-option">${o}</div>`).join("")}
        </div>
      `;

      document.querySelectorAll(".lead-option").forEach(el => {
        el.onclick = () => {
          data[s.key] = el.innerText;
          step++;
          render();
        };
      });
    }
  }

  function finish() {
    localStorage.setItem("lead_done", "1");
    localStorage.setItem("lead_data", JSON.stringify(data));

    content.innerHTML = `
      <h3>✅ ثبت شد</h3>
      <p>به زودی با شما تماس میگیریم</p>
      <button class="lead-btn" id="enterSite">ورود به سایت</button>
    `;

    document.getElementById("enterSite").onclick = () => {
      modal.remove();
    };
  }

  // نمایش
  modal.classList.remove("hidden");
  render();

});

document.addEventListener("mousemove", e => {
  document.querySelectorAll(".card").forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});
