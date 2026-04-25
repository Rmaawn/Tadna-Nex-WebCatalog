const SERVICES = {
  "🧠 مشاوره و استراتژی کسب و کار": [],
  "💊 خدمات تخصصی دارو، مکمل، آرایشی و تجهیزات پزشکی": [],
  "🎨 برندینگ و هویت برند": [],
  "💻 طراحی سایت، اپلیکیشن و زیرساخت دیجیتال": [],
  "🚀 سئو و بهینه سازی": [],
  "📱 مدیریت شبکه های اجتماعی": [],
  "🎬 تولید محتوا و رسانه": [],
  "📢 تبلیغات، کمپین و فروش": [],
  "🤖 اتوماسیون، CRM و هوش مصنوعی": [],
  "📰 روابط عمومی و مدیریت بحران": [],
  "🎤 رویداد، نمایشگاه و ایونت": [],
  "⚖️ خدمات حقوقی و ثبتی": [],
  "💰 سرمایه گذاری و استارتاپ": [],
  "🌍 خدمات بین المللی و حمل و نقل": [],
  "🛠 خدمات ویژه و تکمیلی": []
};

// صفحه اصلی
const servicesContainer = document.getElementById("services");

if (servicesContainer) {
  Object.keys(SERVICES).forEach(service => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = service;

    div.onclick = () => {
      window.location.href = "service.html?name=" + encodeURIComponent(service);
    };

    servicesContainer.appendChild(div);
  });
}

// صفحه سرویس
const title = document.getElementById("title");

if (title) {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  title.innerText = name;
}