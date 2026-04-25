const SERVICES = [
  {
    title: "مشاوره و استراتژی کسب و کار",
    slug: "business-strategy",
    subs: [
      { title: "تحلیل و ارزیابی کسب و کار", slug: "business-analysis" },
      { title: "طراحی مدل کسب و کار", slug: "business-model" },
      { title: "تدوین استراتژی رشد و توسعه", slug: "growth-strategy" },
      { title: "تحلیل بازار، رقبا و رفتار مشتری", slug: "market-analysis" },
      { title: "طراحی مسیر جذب، نگهداشت و بازگشت مشتری", slug: "customer-journey" },
      { title: "طراحی قیف فروش و سیستم فروش", slug: "sales-funnel" },
      { title: "طراحی KPI، داشبورد مدیریتی و گزارش گیری", slug: "kpi-dashboard" },
      { title: "مشاوره تحول دیجیتال", slug: "digital-transformation" },
      { title: "طراحی ساختار سازمانی، منابع انسانی و فرآیندها", slug: "org-structure" },
      { title: "مشاوره توسعه بازار، صادرات و فرانچایز", slug: "market-expansion" }
    ]
  },
  {
    title: "خدمات تخصصی دارو، مکمل، آرایشی و تجهیزات پزشکی",
    slug: "medical-services",
    subs: [
      { title: "مشاوره فروش شرکت های پخش، تولیدکننده و واردکننده", slug: "medical-sales" },
      { title: "طراحی استراتژی فروش و شبکه توزیع", slug: "distribution-strategy" },
      { title: "طراحی ساختار ویزیتوری، پورسانت و نمایندگان فروش", slug: "sales-structure" },
      { title: "طراحی سیستم جذب داروخانه، کلینیک، پزشک و مراکز درمانی", slug: "medical-acquisition" },
      { title: "طراحی کمپین فروش و لانچ محصول", slug: "product-launch" },
      { title: "مشاوره ورود محصول به بازار", slug: "market-entry" },
      { title: "تحلیل رفتار مصرف کننده و رقبا", slug: "consumer-analysis" },
      { title: "طراحی CRM و باشگاه مشتریان", slug: "crm-club" },
      { title: "مشاوره قیمت گذاری، توسعه بازار و صادرات", slug: "pricing-export" }
    ]
  },
  {
    title: "برندینگ و هویت برند",
    slug: "branding",
    subs: [
      { title: "طراحی هویت برند و برندبوک", slug: "brand-identity" },
      { title: "طراحی لوگو، رنگ سازمانی و المان های بصری", slug: "logo-design" },
      { title: "طراحی لحن و زبان برند", slug: "brand-tone" },
      { title: "طراحی پرسونال برندینگ", slug: "personal-brand" },
      { title: "طراحی بسته بندی، ست اداری و هویت بصری", slug: "packaging" },
      { title: "بازطراحی و توسعه برند", slug: "rebranding" }
    ]
  },
  {
    title: "طراحی سایت، اپلیکیشن و زیرساخت دیجیتال",
    slug: "web-app",
    subs: [
      { title: "طراحی سایت شرکتی، فروشگاهی، خبری و پزشکی", slug: "website-design" },
      { title: "طراحی اپلیکیشن و وب اپلیکیشن", slug: "app-design" },
      { title: "طراحی پنل، داشبورد و سامانه های اختصاصی", slug: "dashboard-system" },
      { title: "طراحی CRM، سامانه فروش و مدیریت مشتری", slug: "crm-system" },
      { title: "طراحی UI و UX", slug: "ui-ux" },
      { title: "مدیریت و پشتیبانی سایت و اپلیکیشن", slug: "support-maintenance" }
    ]
  },
  {
    title: "سئو و بهینه سازی",
    slug: "seo",
    subs: [
      { title: "سئو داخلی، خارجی و تکنیکال", slug: "seo-full" },
      { title: "سئو محلی و تولید محتوای سئو شده", slug: "local-seo" },
      { title: "لینک سازی و بهینه سازی سرعت سایت", slug: "link-speed" },
      { title: "بهینه سازی نرخ تبدیل", slug: "conversion" },
      { title: "تبلیغات گوگل و تبلیغات کلیکی", slug: "google-ads" },
      { title: "تحلیل رفتار کاربران و داده ها", slug: "user-analytics" }
    ]
  },
  {
    title: "مدیریت شبکه های اجتماعی",
    slug: "social-media",
    subs: [
      { title: "مدیریت و ادمینی شبکه های اجتماعی", slug: "management" },
      { title: "طراحی تقویم محتوایی و برنامه انتشار", slug: "content-calendar" },
      { title: "تحلیل عملکرد پیج و رقبا", slug: "page-analysis" },
      { title: "افزایش تعامل و رشد پیج", slug: "engagement" },
      { title: "آموزش الگوریتم اینستاگرام و بلاگری", slug: "instagram-training" },
      { title: "تدوین استراتژی شبکه های اجتماعی", slug: "social-strategy" }
    ]
  },
  {
    title: "تولید محتوا و رسانه",
    slug: "content-media",
    subs: [
      { title: "تولید محتوای ویدیویی، تصویری و متنی", slug: "content-production" },
      { title: "تولید موشن گرافیک، CG، انیمیشن و پادکست", slug: "motion-graphic" },
      { title: "تولید تیزر، مستند و محتوای وایرال", slug: "video-production" },
      { title: "ایده پردازی، سناریونویسی و ساخت سریال تبلیغاتی", slug: "scenario-writing" },
      { title: "طراحی محتوای تخصصی حوزه سلامت", slug: "medical-content" },
      { title: "تولید محتوای مبتنی بر AI", slug: "ai-content" },
      { title: "طراحی آواتار و ویدیوهای هوش مصنوعی", slug: "ai-avatar" },
      { title: "طراحی بروشور، کاتالوگ و فایل ارائه", slug: "catalog-design" }
    ]
  },
  {
    title: "تبلیغات، کمپین و فروش",
    slug: "ads-campaign",
    subs: [
      { title: "تبلیغات دیجیتال و محیطی", slug: "digital-ads" },
      { title: "تبلیغات گوگل، اینستاگرام، تلگرام و رسانه ها", slug: "platform-ads" },
      { title: "تبلیغات اینفلوئنسری و بلاگری", slug: "influencer" },
      { title: "رپورتاژ آگهی و تبلیغات خبری", slug: "reportage" },
      { title: "تبلیغات تلویزیونی، رادیویی و فروشگاهی", slug: "tv-radio" },
      { title: "طراحی و اجرای کمپین فروش، برندینگ و لانچ محصول", slug: "campaign-design" },
      { title: "طراحی کمپین های مناسبتی و چندمرحله ای", slug: "seasonal-campaign" }
    ]
  },
  {
    title: "اتوماسیون، CRM و هوش مصنوعی",
    slug: "automation-ai",
    subs: [
      { title: "طراحی و پیاده سازی CRM", slug: "crm-setup" },
      { title: "اتوماسیون بازاریابی و فروش", slug: "marketing-automation" },
      { title: "طراحی سیستم پاسخگویی و پیگیری مشتری", slug: "support-system" },
      { title: "طراحی چت بات و ربات فروش", slug: "chatbot" },
      { title: "طراحی ربات برای بله، تلگرام، واتساپ و سایت", slug: "bot-design" },
      { title: "طراحی Workflow و اتوماسیون اختصاصی مشابه N8N", slug: "workflow" },
      { title: "طراحی AI Agent اختصاصی برای کسب و کارها", slug: "ai-agent" },
      { title: "طراحی سیستم های چندهوش مصنوعی", slug: "multi-ai" },
      { title: "طراحی دستیار هوشمند اختصاصی برند", slug: "ai-assistant" }
    ]
  },
  {
    title: "روابط عمومی و مدیریت بحران",
    slug: "pr",
    subs: [
      { title: "طراحی استراتژی روابط عمومی", slug: "pr-strategy" },
      { title: "مدیریت بحران و افکار عمومی", slug: "crisis-management" },
      { title: "تولید و انتشار خبر", slug: "news-production" },
      { title: "برندسازی رسانه ای", slug: "media-branding" },
      { title: "نشست خبری و مصاحبه رسانه ای", slug: "press-conference" },
      { title: "حضور در خبرگزاری ها، رسانه ها و مجلات", slug: "media-presence" },
      { title: "طراحی کمپین رسانه ای و افزایش اعتبار برند", slug: "media-campaign" }
    ]
  },
  {
    title: "رویداد، نمایشگاه و ایونت",
    slug: "event",
    subs: [
      { title: "برگزاری همایش، سمینار، کنفرانس و وبینار", slug: "seminar" },
      { title: "برگزاری رونمایی محصول و رویدادهای تخصصی", slug: "launch-event" },
      { title: "برگزاری نمایشگاه و طراحی غرفه", slug: "exhibition" },
      { title: "مدیریت کامل ایونت و تشریفات", slug: "event-management" },
      { title: "برگزاری رویدادهای سلامت، زیبایی و تجهیزات پزشکی", slug: "medical-event" }
    ]
  },
  {
    title: "خدمات حقوقی و ثبتی",
    slug: "legal",
    subs: [
      { title: "ثبت برند، لوگو و شرکت", slug: "registration" },
      { title: "ثبت مالکیت فکری", slug: "intellectual-property" },
      { title: "تنظیم قراردادهای تجاری و تبلیغاتی", slug: "contracts" },
      { title: "مشاوره حقوقی تبلیغات و رسانه", slug: "legal-ads" },
      { title: "مدیریت بحران حقوقی", slug: "legal-crisis" },
      { title: "مشاوره قراردادهای سرمایه گذاری", slug: "investment-contracts" }
    ]
  },
  {
    title: "سرمایه گذاری و استارتاپ",
    slug: "investment",
    subs: [
      { title: "جذب سرمایه و سرمایه گذار", slug: "fundraising" },
      { title: "طراحی Pitch Deck و بیزینس پلن", slug: "pitch-deck" },
      { title: "طراحی مدل ارزش گذاری و مالی", slug: "valuation" },
      { title: "راه اندازی و شتابدهی استارتاپ", slug: "startup-launch" },
      { title: "سرمایه گذاری در پروژه ها و استارتاپ ها", slug: "investment-projects" },
      { title: "طراحی ساختار مشارکت و سهامداری", slug: "equity-structure" }
    ]
  },
  {
    title: "خدمات بین المللی و حمل و نقل",
    slug: "international",
    subs: [
      { title: "خدمات صادرات و واردات", slug: "import-export" },
      { title: "حمل و نقل دریایی، هوایی، زمینی و ریلی", slug: "transport" },
      { title: "خدمات کشتیرانی، ترخیص و کانتینر", slug: "shipping" },
      { title: "خدمات لجستیک و زنجیره تامین", slug: "logistics" },
      { title: "خدمات تبلیغات و بازاریابی در دبی", slug: "dubai-marketing" },
      { title: "طراحی برند و کمپین برای بازارهای بین المللی", slug: "global-branding" }
    ]
  },
  {
    title: "خدمات ویژه و تکمیلی",
    slug: "special",
    subs: [
      { title: "چاپ و نشر", slug: "printing" },
      { title: "طراحی و چاپ کاتالوگ، بروشور و بسته بندی", slug: "catalog-print" },
      { title: "عکاسی صنعتی و فیلم برداری", slug: "photography" },
      { title: "طراحی غرفه، دکور و استیج", slug: "booth-design" },
      { title: "خدمات هدایای تبلیغاتی", slug: "gifts" },
      { title: "خدمات ترجمه، تایپ و تدوین", slug: "translation" },
      { title: "تحقیق بازار و نظرسنجی", slug: "market-research" },
      { title: "خدمات آموزش سازمانی", slug: "training" },
      { title: "خدمات جذب نیرو و مشاوره منابع انسانی", slug: "hr-services" }
    ]
  }
];