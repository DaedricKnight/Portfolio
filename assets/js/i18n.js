/* ============================================================
   ПОРТФОЛИО — i18n.js
   Трёхъязычный словарь: Русский (ru) · English (en) · Svenska (sv)
   Язык по умолчанию — ru, выбор сохраняется в localStorage.

   КАК ДОБАВИТЬ / ИЗМЕНИТЬ ПЕРЕВОД:
   1. Найдите нужный ключ в объекте DICT ниже (например "nav.home").
   2. Отредактируйте строку для ru / en / sv.
   3. Чтобы добавить новый текст: задайте элементу атрибут
      data-i18n="мой.ключ" в HTML и добавьте "мой.ключ" во все три локали.
      Для плейсхолдеров — data-i18n-ph, для aria-label — data-i18n-aria,
      для атрибута title — data-i18n-attr-title.
   4. Чтобы добавить новый язык — скопируйте целиком блок (например en),
      переведите значения и добавьте кнопку в переключатель языков в HTML.
============================================================ */
(function () {
  "use strict";

  var DICT = {
    /* --------------------- РУССКИЙ --------------------- */
    ru: {
      "name": "Артём Хатеев",
      "initials": "АХ",
      "skip": "К основному содержимому",

      /* Заголовки вкладок и описания (по страницам) */
      "title.home": "Артём Хатеев — Software & AI/ML инженер",
      "title.web": "Сайты и приложения — Артём Хатеев",
      "title.ai": "AI/ML — Артём Хатеев",
      "desc.home": "Портфолио Артёма Хатеева: разработка сайтов и приложений, а также решения на базе AI/ML.",
      "desc.web": "Разработка сайтов, веб- и мобильных приложений: опыт, проекты и навыки.",
      "desc.ai": "AI/ML: ИИ на устройстве, распознавание речи, классификация намерений и компьютерное зрение.",

      /* Навигация */
      "nav.home": "Главная",
      "nav.web": "Сайты и приложения",
      "nav.ai": "AI/ML",
      "nav.contact": "Контакты",
      "nav.cta": "Связаться",
      "aria.theme": "Переключить тему",
      "aria.menu": "Меню",
      "aria.lang": "Выбрать язык",

      /* Hero (главная) */
      "hero.badge": "Открыт для проектов и сотрудничества",
      "hero.lead": "Создаю сайты, приложения и AI-решения — от идеи до продакшена.",
      "hero.sub": "Software & AI/ML инженер. Помогаю командам запускать продукты и внедрять машинное обучение.",
      "cta.discuss": "Обсудить проект",
      "cta.resume": "Скачать резюме",
      "stat.years": "лет опыта",
      "stat.projects": "проектов",
      "stat.tech": "технологий",
      "stat.clients": "довольных клиентов",

      /* Направления (главная) */
      "home.k.choose": "01 — Направления",
      "home.choose.title": "Чем я занимаюсь",
      "home.choose.desc": "Два направления, в которых я работаю. Выберите, что ближе к вашей задаче.",
      "card.web.title": "Сайты и приложения",
      "card.web.desc": "Frontend, backend и мобильная разработка — быстрые и надёжные продукты.",
      "card.ai.title": "AI/ML",
      "card.ai.desc": "ИИ на устройстве: голосовые пайплайны, классификация намерений, компьютерное зрение и нейросети.",
      "card.more": "Подробнее →",

      /* Обо мне */
      "home.k.about": "02 — О себе",
      "about.title": "Кто я и чем полезен",
      "about.p1": "Привет! Я инженер-универсал: строю веб- и мобильные приложения и внедряю решения на базе машинного обучения. Соединяю продуктовое мышление с инженерной надёжностью.",
      "about.p2": "Одинаково уверенно работаю и с фронтендом и бэкендом, и с ML-моделями — от прототипа до продакшена под нагрузкой. Пишу чистый код и оставляю понятную документацию.",
      "about.p3": "Сейчас открыт для freelance- и контрактных проектов. Готов подключиться как на короткую консультацию, так и на полный цикл разработки.",
      "about.offer.title": "Чем могу помочь",
      "offer.1": "Веб- и мобильные приложения: от идеи до продакшена",
      "offer.2": "Внедрение AI/ML: LLM, RAG, дообучение, инференс",
      "offer.3": "Надёжные бэкенды и API под нагрузкой",
      "offer.4": "MLOps: CI/CD, мониторинг и инфраструктура для моделей",
      "about.photo": "Ваше фото",
      "about.badge1": "Удалённо / по всему миру",
      "about.badge2": "RU · EN · SV",

      /* Навыки — общие заголовки */
      "home.k.skills": "03 — Навыки",
      "pg.k.skills": "03 — Навыки",
      "skills.title": "Компетенции",
      "skills.desc": "Инструменты и технологии, с которыми работаю ежедневно.",
      "cat.languages": "Языки",
      "cat.frontend": "Frontend",
      "cat.backend": "Backend",
      "cat.mobile": "Мобильные",
      "cat.ml": "ML / AI",
      "cat.tools": "Инструменты",

      /* Опыт (страницы web/ai) */
      "pg.k.exp": "01 — Опыт",
      "exp.title": "Карьерный путь",
      "exp.company": "Название компании · Город / Удалённо",

      /* Проекты (страницы web/ai) */
      "pg.k.proj": "02 — Проекты",
      "proj.title": "Избранные работы",
      "proj.desc": "Избранные проекты и приложения, над которыми я работал.",
      "proj.store": "Google Play ↗",
      "proj.github": "GitHub ↗",
      "proj.status.closed": "Проект закрыт",

      /* Отзывы (главная) */
      "home.k.testi": "04 — Отзывы",
      "testi.title": "Что обо мне говорят",
      "testi1.quote": "«Разобрался в задаче быстрее, чем мы успели её объяснить. Результат был в проде уже через две недели.»",
      "testi1.name": "Имя клиента",
      "testi1.role": "CTO, Название компании",
      "testi2.quote": "«Чистый код, понятная документация и честные сроки. С таким подрядчиком спокойно.»",
      "testi2.name": "Имя клиента",
      "testi2.role": "Product Lead, Название компании",

      /* Контакты (общие) */
      "home.k.contact": "05 — Контакты",
      "pg.k.contact": "04 — Контакты",
      "contact.title": "Давайте работать вместе",
      "contact.desc": "Расскажите о задаче — отвечу в течение рабочего дня.",
      "form.name.label": "Имя",
      "form.name.ph": "Как к вам обращаться",
      "form.email.label": "Email",
      "form.email.ph": "you@example.com",
      "form.message.label": "Сообщение",
      "form.message.ph": "Опишите задачу, сроки и бюджет",
      "form.submit": "Отправить сообщение",
      "form.note": "Форма демонстрационная — подключите Formspree или свой backend (см. комментарий в HTML).",
      "form.invalid": "Пожалуйста, заполните все поля корректно.",
      "form.sent": "Спасибо! Это демо-форма — подключите backend, чтобы получать сообщения.",
      "contact.direct.title": "Или напишите напрямую",
      "contact.available": "Сейчас беру новые проекты",
      "contact.linkedin": "LinkedIn — по запросу",

      /* Подвал */
      "footer.rights": "Все права защищены.",
      "footer.top": "Наверх",

      /* Специализация: Сайты и приложения */
      "web.exp1.role": "Senior Software-инженер",
      "web.exp1.period": "2023 — наст. время",
      "web.exp1.b1": "Запустил SPA на React и сервис на Node.js, ускорив загрузку на 45%.",
      "web.exp1.b2": "Внедрил дизайн-систему и покрытие тестами, снизив число багов в релизах.",
      "web.exp1.b3": "Настроил CI/CD и мониторинг, сократив время деплоя в несколько раз.",
      "web.exp2.role": "Backend-разработчик",
      "web.exp2.period": "2020 — 2023",
      "web.exp2.b1": "Проектировал REST- и gRPC-API для высоконагруженных сервисов.",
      "web.exp2.b2": "Оптимизировал запросы к БД и кеширование, снизив p99-латентность на 40%.",
      "web.exp2.b3": "Наставлял junior-разработчиков, внедрил код-ревью.",
      "web.exp3.role": "Frontend-разработчик",
      "web.exp3.period": "2018 — 2020",
      "web.exp3.b1": "Разрабатывал адаптивные интерфейсы на React.",
      "web.exp3.b2": "Улучшил доступность и производительность, подняв оценки Lighthouse.",
      "web.exp3.b3": "Автоматизировал сборку и релизы.",
      "web.proj1.title": "Reddit",
      "web.proj1.desc": "Мобильное приложение крупнейшей платформы сообществ и обсуждений: ленты, посты, комментарии, голосование и тематические сабреддиты.",
      "web.proj2.title": "iRobot Home",
      "web.proj2.desc": "Приложение для управления роботами-пылесосами и швабрами iRobot (Roomba, Braava): запуск и расписание уборки, карты помещений и настройки устройств.",
      "web.proj3.title": "Wildberries",
      "web.proj3.desc": "Мобильное приложение крупного маркетплейса: каталог товаров, поиск, корзина, оформление заказов и отслеживание доставки.",
      "web.proj4.title": "Guava Pay",
      "web.proj4.desc": "Финтех-приложение для платежей, которое предлагало мультивалютные счета, карты, переводы и кэшбэк с поддержкой Apple Pay и Google Pay.",
      "web.proj5.title": "Copilot Money (Android)",
      "web.proj5.desc": "Приложение для личных финансов на Android: дашборд бюджета, лента транзакций, импорт CSV, цели накоплений и регулярные платежи. Синхронизация через Firebase.",
      "web.proj6.title": "MedVoice",
      "web.proj6.desc": "Прототип Android-планшета для ведения медкарт без рук: врач диктует команду, а приложение офлайн распознаёт речь, определяет намерение и вносит значение в карту пациента.",
      "web.proj7.title": "Car Diagnostics",
      "web.proj7.desc": "Диагностическое приложение для Android Automotive OS: мониторинг параметров автомобиля (обороты, скорость, давление в шинах, ABS) в реальном времени через VHAL.",
      "web.bar1": "Frontend-разработка",
      "web.bar2": "Backend-разработка",
      "web.bar3": "Мобильная разработка",

      /* Специализация: AI/ML */
      "ai.proj1.title": "LocalEdgeAI",
      "ai.proj1.desc": "Эксперименты с локальным инференсом ИИ на устройстве (edge): запуск моделей без облака, с упором на приватность и работу офлайн.",
      "ai.proj2.title": "HinnerJag",
      "ai.proj2.desc": "Прототип для Android Automotive OS: подскажет, успеете ли вы на паром. Оценивает время в пути до причала и сравнивает с расписанием, не советуя превышать скорость.",
      "ai.proj3.title": "Hermi",
      "ai.proj3.desc": "Приватный офлайн-голосовой ассистент для Android Automotive OS: распознаёт речь и классифицирует намерения прямо на устройстве (Silero VAD, BERT-Tiny, Vosk) — без облака.",
      "ai.proj4.title": "MedVoice",
      "ai.proj4.desc": "Офлайн-конвейер ИИ для медицинской диктовки: Silero VAD определяет речь, whisper.cpp транскрибирует, а INT8-модель BERT-Tiny классифицирует намерение среди 106 команд — всё на устройстве.",
      "ai.exp1.role": "Независимые AI-проекты",
      "ai.exp1.period": "2026 — наст. время",
      "ai.exp1.org": "Собственные проекты · GitHub",
      "ai.exp1.b1": "Голосовые пайплайны на устройстве для Android и Android Automotive: Silero VAD, whisper.cpp и Vosk — полностью офлайн, без облака.",
      "ai.exp1.b2": "Классификация намерений квантизованной моделью BERT-Tiny (INT8, ONNX Runtime) в MedVoice и Hermi.",
      "ai.exp1.b3": "Приватные офлайн-ассистенты и локальный edge-инференс: Hermi, MedVoice, LocalEdgeAI, а также прототип HinnerJag для Android Automotive OS.",
      "ai.exp1.b4": "Постоянно изучаю новые техники обучения нейронных сетей.",
      "ai.exp2.role": "Android / ML-разработчик",
      "ai.exp2.period": "Годы",
      "ai.exp2.org": "Компания",
      "ai.exp2.b1": "Нейросеть для сегментации тела человека — двухмодульная система, которая может работать в режиме видео.",
      "ai.exp2.b2": "Распознавание блюд в ресторане на базе Google Vision API; приложение, превращающее обычную камеру в VR; AR-функции.",
      "ai.exp2.b3": "GPU-вычисления на шейдерах и OpenCL; собственная система кодирования видео на FFmpeg.",
      "ai.exp2.b4": "Android-приложения с нуля на Java и Kotlin, в том числе Hyperkey — клавиатура-виджет для чатов с 300 000+ пользователей — и видео-селфи-приложение Emoji Challenge Camera.",
      "cert.title": "Сертификаты",
      "cert.name": "Название сертификата",
      "cert.meta": "Организация · Год",
      "cat.ondevice": "ИИ на устройстве",
      "cat.speech": "Речь",
      "cat.cv": "Компьютерное зрение",
      "ai.bar1": "ИИ на устройстве",
      "ai.bar2": "Речь и NLP",
      "ai.bar3": "Компьютерное зрение",
    },

    /* --------------------- ENGLISH --------------------- */
    en: {
      "name": "Artem Khateev",
      "initials": "AK",
      "skip": "Skip to main content",

      "title.home": "Artem Khateev — Software & AI/ML Engineer",
      "title.web": "Websites & Apps — Artem Khateev",
      "title.ai": "AI/ML — Artem Khateev",
      "desc.home": "Portfolio of Artem Khateev: web and app development plus AI/ML solutions.",
      "desc.web": "Websites, web and mobile app development: experience, projects and skills.",
      "desc.ai": "AI/ML: on-device AI, speech recognition, intent classification and computer vision.",

      "nav.home": "Home",
      "nav.web": "Websites & Apps",
      "nav.ai": "AI/ML",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "aria.theme": "Toggle theme",
      "aria.menu": "Menu",
      "aria.lang": "Choose language",

      "hero.badge": "Open to projects and collaboration",
      "hero.lead": "I build websites, apps, and AI solutions — from idea to production.",
      "hero.sub": "Software & AI/ML engineer. I help teams launch products and adopt machine learning.",
      "cta.discuss": "Discuss a project",
      "cta.resume": "Download resume",
      "stat.years": "years of experience",
      "stat.projects": "projects",
      "stat.tech": "technologies",
      "stat.clients": "happy clients",

      "home.k.choose": "01 — Specializations",
      "home.choose.title": "What I do",
      "home.choose.desc": "Two areas I work in. Pick whichever is closest to your task.",
      "card.web.title": "Websites & Apps",
      "card.web.desc": "Frontend, backend and mobile development — fast, reliable products.",
      "card.ai.title": "AI/ML",
      "card.ai.desc": "On-device AI: voice pipelines, intent classification, computer vision and neural networks.",
      "card.more": "Learn more →",

      "home.k.about": "02 — About",
      "about.title": "Who I am and how I help",
      "about.p1": "Hi! I'm a versatile engineer: I build web and mobile apps and ship machine-learning solutions. I combine product thinking with engineering reliability.",
      "about.p2": "I'm equally comfortable across frontend, backend, and ML models — from prototype to production under load. I write clean code and leave clear documentation.",
      "about.p3": "I'm currently open to freelance and contract projects. Happy to join for a short consultation or a full development cycle.",
      "about.offer.title": "What I can help with",
      "offer.1": "Web and mobile apps: from idea to production",
      "offer.2": "AI/ML integration: LLMs, RAG, fine-tuning, inference",
      "offer.3": "Reliable backends and APIs under load",
      "offer.4": "MLOps: CI/CD, monitoring and infrastructure for models",
      "about.photo": "Your photo",
      "about.badge1": "Remote / worldwide",
      "about.badge2": "RU · EN · SV",

      "home.k.skills": "03 — Skills",
      "pg.k.skills": "03 — Skills",
      "skills.title": "Skills",
      "skills.desc": "Tools and technologies I use every day.",
      "cat.languages": "Languages",
      "cat.frontend": "Frontend",
      "cat.backend": "Backend",
      "cat.mobile": "Mobile",
      "cat.ml": "ML / AI",
      "cat.tools": "Tools",

      "pg.k.exp": "01 — Experience",
      "exp.title": "Career path",
      "exp.company": "Company name · City / Remote",

      "pg.k.proj": "02 — Projects",
      "proj.title": "Selected work",
      "proj.desc": "Selected projects and apps I've worked on.",
      "proj.store": "Google Play ↗",
      "proj.github": "GitHub ↗",
      "proj.status.closed": "Discontinued",

      "home.k.testi": "04 — Testimonials",
      "testi.title": "What people say",
      "testi1.quote": "“He understood the task faster than we could explain it. The result shipped to production in two weeks.”",
      "testi1.name": "Client name",
      "testi1.role": "CTO, Company name",
      "testi2.quote": "“Clean code, clear documentation and honest timelines. A contractor you can rely on.”",
      "testi2.name": "Client name",
      "testi2.role": "Product Lead, Company name",

      "home.k.contact": "05 — Contact",
      "pg.k.contact": "04 — Contact",
      "contact.title": "Let's work together",
      "contact.desc": "Tell me about your task — I'll reply within a business day.",
      "form.name.label": "Name",
      "form.name.ph": "Your name",
      "form.email.label": "Email",
      "form.email.ph": "you@example.com",
      "form.message.label": "Message",
      "form.message.ph": "Describe your task, timeline and budget",
      "form.submit": "Send message",
      "form.note": "Demo form — connect Formspree or your own backend (see the comment in the HTML).",
      "form.invalid": "Please fill in all fields correctly.",
      "form.sent": "Thanks! This is a demo form — connect a backend to receive messages.",
      "contact.direct.title": "Or reach out directly",
      "contact.available": "Available for new projects",
      "contact.linkedin": "LinkedIn — available on request",

      "footer.rights": "All rights reserved.",
      "footer.top": "Back to top",

      "web.exp1.role": "Senior Software Engineer",
      "web.exp1.period": "2023 — present",
      "web.exp1.b1": "Launched a React SPA and a Node.js service, improving load time by 45%.",
      "web.exp1.b2": "Introduced a design system and test coverage, reducing bugs in releases.",
      "web.exp1.b3": "Set up CI/CD and monitoring, cutting deploy time several times over.",
      "web.exp2.role": "Backend Developer",
      "web.exp2.period": "2020 — 2023",
      "web.exp2.b1": "Designed REST and gRPC APIs for high-load services.",
      "web.exp2.b2": "Optimized DB queries and caching, cutting p99 latency by 40%.",
      "web.exp2.b3": "Mentored junior developers and introduced code review.",
      "web.exp3.role": "Frontend Developer",
      "web.exp3.period": "2018 — 2020",
      "web.exp3.b1": "Built responsive interfaces with React.",
      "web.exp3.b2": "Improved accessibility and performance, raising Lighthouse scores.",
      "web.exp3.b3": "Automated builds and releases.",
      "web.proj1.title": "Reddit",
      "web.proj1.desc": "Mobile app for the large communities-and-discussion platform: feeds, posts, comments, voting and topic-based subreddits.",
      "web.proj2.title": "iRobot Home",
      "web.proj2.desc": "Companion app for iRobot vacuum and mopping robots (Roomba, Braava): start and schedule cleaning, room maps and device settings.",
      "web.proj3.title": "Wildberries",
      "web.proj3.desc": "Mobile app for a large online marketplace: product catalog, search, cart, checkout and delivery tracking.",
      "web.proj4.title": "Guava Pay",
      "web.proj4.desc": "Fintech payments app that offered multi-currency accounts, cards, transfers and cashback, with Apple Pay and Google Pay support.",
      "web.proj5.title": "Copilot Money (Android)",
      "web.proj5.desc": "Personal-finance Android app: budget dashboard, transaction feed, CSV import, savings goals and recurring bills. Sync via Firebase.",
      "web.proj6.title": "MedVoice",
      "web.proj6.desc": "Android tablet prototype for hands-free medical records: a clinician dictates a command and the app transcribes speech offline, classifies the intent and writes the value into the patient chart.",
      "web.proj7.title": "Car Diagnostics",
      "web.proj7.desc": "Diagnostics app for Android Automotive OS: real-time monitoring of vehicle data (RPM, speed, tire pressure, ABS) via the VHAL.",
      "web.bar1": "Frontend development",
      "web.bar2": "Backend development",
      "web.bar3": "Mobile development",
      "ai.proj1.title": "LocalEdgeAI",
      "ai.proj1.desc": "Experiments with local, on-device (edge) AI inference: running models without the cloud, focused on privacy and offline use.",
      "ai.proj2.title": "HinnerJag",
      "ai.proj2.desc": "Android Automotive OS prototype that tells you whether you'll make the ferry: it estimates drive time to the port and compares it with the timetable, never advising you to speed.",
      "ai.proj3.title": "Hermi",
      "ai.proj3.desc": "Privacy-focused offline voice assistant for Android Automotive OS: on-device speech recognition and intent classification (Silero VAD, BERT-Tiny, Vosk) — no cloud.",
      "ai.proj4.title": "MedVoice",
      "ai.proj4.desc": "Offline AI pipeline for clinical dictation: Silero VAD detects speech, whisper.cpp transcribes, and an INT8 BERT-Tiny model classifies the intent across 106 commands — all on-device.",
      "ai.exp1.role": "Independent AI projects",
      "ai.exp1.period": "2026 — present",
      "ai.exp1.org": "Own projects · GitHub",
      "ai.exp1.b1": "On-device voice pipelines for Android and Android Automotive: Silero VAD, whisper.cpp and Vosk — fully offline, no cloud.",
      "ai.exp1.b2": "Intent classification with a quantized BERT-Tiny model (INT8, ONNX Runtime) in MedVoice and Hermi.",
      "ai.exp1.b3": "Privacy-first offline assistants and local edge inference: Hermi, MedVoice, LocalEdgeAI, plus the HinnerJag prototype for Android Automotive OS.",
      "ai.exp1.b4": "Continuously studying new techniques for training neural networks.",
      "ai.exp2.role": "Android & ML Developer",
      "ai.exp2.period": "Years",
      "ai.exp2.org": "Company",
      "ai.exp2.b1": "Neural network for human body segmentation — a two-module system that can run in video mode.",
      "ai.exp2.b2": "Restaurant dish recognition built with the Google Vision API; an app that turns a regular camera view into VR; AR features.",
      "ai.exp2.b3": "GPU compute with shaders and OpenCL; a custom video encoding system built on FFmpeg.",
      "ai.exp2.b4": "Android apps built from scratch in Java and Kotlin, including Hyperkey — a chat-widget keyboard with 300,000+ users — and the video-selfie app Emoji Challenge Camera.",
      "cert.title": "Certificates",
      "cert.name": "Certificate name",
      "cert.meta": "Issuer · Year",
      "cat.ondevice": "On-device AI",
      "cat.speech": "Speech",
      "cat.cv": "Computer vision",
      "ai.bar1": "On-device AI",
      "ai.bar2": "Speech & NLP",
      "ai.bar3": "Computer vision",
    },

    /* --------------------- SVENSKA --------------------- */
    sv: {
      "name": "Artem Khateev",
      "initials": "AK",
      "skip": "Hoppa till huvudinnehållet",

      "title.home": "Artem Khateev — Software- & AI/ML-ingenjör",
      "title.web": "Webbplatser & appar — Artem Khateev",
      "title.ai": "AI/ML — Artem Khateev",
      "desc.home": "Artem Khateevs portfolio: webb- och apputveckling samt AI/ML-lösningar.",
      "desc.web": "Webbplatser, webb- och mobilapputveckling: erfarenhet, projekt och färdigheter.",
      "desc.ai": "AI/ML: AI på enheten, taligenkänning, avsiktsklassificering och datorseende.",

      "nav.home": "Hem",
      "nav.web": "Webbplatser & appar",
      "nav.ai": "AI/ML",
      "nav.contact": "Kontakt",
      "nav.cta": "Kontakta mig",
      "aria.theme": "Växla tema",
      "aria.menu": "Meny",
      "aria.lang": "Välj språk",

      "hero.badge": "Öppen för projekt och samarbete",
      "hero.lead": "Jag bygger webbplatser, appar och AI-lösningar — från idé till produktion.",
      "hero.sub": "Software- & AI/ML-ingenjör. Jag hjälper team att lansera produkter och införa maskininlärning.",
      "cta.discuss": "Diskutera projekt",
      "cta.resume": "Ladda ner CV",
      "stat.years": "års erfarenhet",
      "stat.projects": "projekt",
      "stat.tech": "teknologier",
      "stat.clients": "nöjda kunder",

      "home.k.choose": "01 — Inriktningar",
      "home.choose.title": "Vad jag gör",
      "home.choose.desc": "Två områden jag arbetar inom. Välj det som ligger närmast din uppgift.",
      "card.web.title": "Webbplatser & appar",
      "card.web.desc": "Frontend, backend och mobilutveckling — snabba och pålitliga produkter.",
      "card.ai.title": "AI/ML",
      "card.ai.desc": "AI på enheten: röstpipelines, avsiktsklassificering, datorseende och neurala nätverk.",
      "card.more": "Läs mer →",

      "home.k.about": "02 — Om mig",
      "about.title": "Vem jag är och hur jag hjälper till",
      "about.p1": "Hej! Jag är en mångsidig ingenjör: jag bygger webb- och mobilappar och levererar lösningar baserade på maskininlärning. Jag kombinerar produkttänk med teknisk pålitlighet.",
      "about.p2": "Jag är lika bekväm med frontend, backend och ML-modeller — från prototyp till produktion under belastning. Jag skriver ren kod och lämnar tydlig dokumentation.",
      "about.p3": "Just nu är jag öppen för frilans- och kontraktsuppdrag. Jag kan hoppa in för en kort konsultation eller en hel utvecklingscykel.",
      "about.offer.title": "Vad jag kan hjälpa till med",
      "offer.1": "Webb- och mobilappar: från idé till produktion",
      "offer.2": "AI/ML-integration: LLM, RAG, finjustering, inferens",
      "offer.3": "Pålitliga backends och API:er under belastning",
      "offer.4": "MLOps: CI/CD, övervakning och infrastruktur för modeller",
      "about.photo": "Ditt foto",
      "about.badge1": "Distans / världen över",
      "about.badge2": "RU · EN · SV",

      "home.k.skills": "03 — Färdigheter",
      "pg.k.skills": "03 — Färdigheter",
      "skills.title": "Kompetens",
      "skills.desc": "Verktyg och teknologier jag använder dagligen.",
      "cat.languages": "Språk",
      "cat.frontend": "Frontend",
      "cat.backend": "Backend",
      "cat.mobile": "Mobil",
      "cat.ml": "ML / AI",
      "cat.tools": "Verktyg",

      "pg.k.exp": "01 — Erfarenhet",
      "exp.title": "Karriärväg",
      "exp.company": "Företagsnamn · Stad / Distans",

      "pg.k.proj": "02 — Projekt",
      "proj.title": "Utvalda arbeten",
      "proj.desc": "Utvalda projekt och appar jag har arbetat med.",
      "proj.store": "Google Play ↗",
      "proj.github": "GitHub ↗",
      "proj.status.closed": "Avvecklad",

      "home.k.testi": "04 — Omdömen",
      "testi.title": "Vad folk säger",
      "testi1.quote": "“Han förstod uppgiften snabbare än vi hann förklara den. Resultatet var i produktion på två veckor.”",
      "testi1.name": "Kundens namn",
      "testi1.role": "CTO, Företagsnamn",
      "testi2.quote": "“Ren kod, tydlig dokumentation och ärliga tidsramar. En leverantör man kan lita på.”",
      "testi2.name": "Kundens namn",
      "testi2.role": "Product Lead, Företagsnamn",

      "home.k.contact": "05 — Kontakt",
      "pg.k.contact": "04 — Kontakt",
      "contact.title": "Låt oss jobba ihop",
      "contact.desc": "Berätta om din uppgift — jag svarar inom en arbetsdag.",
      "form.name.label": "Namn",
      "form.name.ph": "Ditt namn",
      "form.email.label": "E-post",
      "form.email.ph": "du@exempel.se",
      "form.message.label": "Meddelande",
      "form.message.ph": "Beskriv din uppgift, tidsram och budget",
      "form.submit": "Skicka meddelande",
      "form.note": "Demoformulär — anslut Formspree eller din egen backend (se kommentaren i HTML).",
      "form.invalid": "Fyll i alla fält korrekt.",
      "form.sent": "Tack! Detta är ett demoformulär — anslut en backend för att ta emot meddelanden.",
      "contact.direct.title": "Eller hör av dig direkt",
      "contact.available": "Tillgänglig för nya projekt",
      "contact.linkedin": "LinkedIn — på begäran",

      "footer.rights": "Alla rättigheter förbehållna.",
      "footer.top": "Till toppen",

      "web.exp1.role": "Senior Software-ingenjör",
      "web.exp1.period": "2023 — nutid",
      "web.exp1.b1": "Lanserade en React-SPA och en Node.js-tjänst och förbättrade laddtiden med 45%.",
      "web.exp1.b2": "Införde ett designsystem och testtäckning och minskade buggar i releaser.",
      "web.exp1.b3": "Satte upp CI/CD och övervakning och minskade deploytiden flera gånger om.",
      "web.exp2.role": "Backend-utvecklare",
      "web.exp2.period": "2020 — 2023",
      "web.exp2.b1": "Designade REST- och gRPC-API:er för tjänster med hög belastning.",
      "web.exp2.b2": "Optimerade databasfrågor och cachning och minskade p99-latensen med 40%.",
      "web.exp2.b3": "Handledde junior-utvecklare och införde kodgranskning.",
      "web.exp3.role": "Frontend-utvecklare",
      "web.exp3.period": "2018 — 2020",
      "web.exp3.b1": "Byggde responsiva gränssnitt med React.",
      "web.exp3.b2": "Förbättrade tillgänglighet och prestanda och höjde Lighthouse-poängen.",
      "web.exp3.b3": "Automatiserade bygg och releaser.",
      "web.proj1.title": "Reddit",
      "web.proj1.desc": "Mobilapp för den stora community- och diskussionsplattformen: flöden, inlägg, kommentarer, röstning och ämnesbaserade subreddits.",
      "web.proj2.title": "iRobot Home",
      "web.proj2.desc": "Följeapp för iRobots dammsugar- och moppningsrobotar (Roomba, Braava): starta och schemalägg städning, rumskartor och enhetsinställningar.",
      "web.proj3.title": "Wildberries",
      "web.proj3.desc": "Mobilapp för en stor onlinemarknadsplats: produktkatalog, sökning, varukorg, kassa och leveransspårning.",
      "web.proj4.title": "Guava Pay",
      "web.proj4.desc": "Fintech-betalapp som erbjöd flervalutakonton, kort, överföringar och cashback, med stöd för Apple Pay och Google Pay.",
      "web.proj5.title": "Copilot Money (Android)",
      "web.proj5.desc": "Android-app för privatekonomi: budgetöversikt, transaktionsflöde, CSV-import, sparmål och återkommande räkningar. Synk via Firebase.",
      "web.proj6.title": "MedVoice",
      "web.proj6.desc": "Android-surfplatteprototyp för handsfree-journaler: en kliniker dikterar ett kommando och appen transkriberar tal offline, klassificerar avsikten och skriver värdet i patientjournalen.",
      "web.proj7.title": "Car Diagnostics",
      "web.proj7.desc": "Diagnostikapp för Android Automotive OS: realtidsövervakning av fordonsdata (varvtal, hastighet, däcktryck, ABS) via VHAL.",
      "web.bar1": "Frontend-utveckling",
      "web.bar2": "Backend-utveckling",
      "web.bar3": "Mobilutveckling",
      "ai.proj1.title": "LocalEdgeAI",
      "ai.proj1.desc": "Experiment med lokal AI-inferens på enheten (edge): att köra modeller utan molnet, med fokus på integritet och offline-användning.",
      "ai.proj2.title": "HinnerJag",
      "ai.proj2.desc": "Android Automotive OS-prototyp som säger om du hinner med färjan: den uppskattar körtiden till hamnen och jämför med tidtabellen, utan att råda dig att köra fortare.",
      "ai.proj3.title": "Hermi",
      "ai.proj3.desc": "Integritetsfokuserad offline-röstassistent för Android Automotive OS: taligenkänning och avsiktsklassificering på enheten (Silero VAD, BERT-Tiny, Vosk) — utan moln.",
      "ai.proj4.title": "MedVoice",
      "ai.proj4.desc": "Offline-AI-pipeline för klinisk diktering: Silero VAD upptäcker tal, whisper.cpp transkriberar och en INT8 BERT-Tiny-modell klassificerar avsikten bland 106 kommandon — allt på enheten.",
      "ai.exp1.role": "Oberoende AI-projekt",
      "ai.exp1.period": "2026 — nutid",
      "ai.exp1.org": "Egna projekt · GitHub",
      "ai.exp1.b1": "Röstpipelines på enheten för Android och Android Automotive: Silero VAD, whisper.cpp och Vosk — helt offline, utan moln.",
      "ai.exp1.b2": "Avsiktsklassificering med en kvantiserad BERT-Tiny-modell (INT8, ONNX Runtime) i MedVoice och Hermi.",
      "ai.exp1.b3": "Integritetsfokuserade offline-assistenter och lokal edge-inferens: Hermi, MedVoice, LocalEdgeAI samt prototypen HinnerJag för Android Automotive OS.",
      "ai.exp1.b4": "Lär mig kontinuerligt nya tekniker för att träna neurala nätverk.",
      "ai.exp2.role": "Android- & ML-utvecklare",
      "ai.exp2.period": "År",
      "ai.exp2.org": "Företag",
      "ai.exp2.b1": "Neuralt nätverk för segmentering av människokroppen — ett system i två moduler som kan köras i videoläge.",
      "ai.exp2.b2": "Igenkänning av restaurangrätter med Google Vision API; en app som gör om en vanlig kameravy till VR; AR-funktioner.",
      "ai.exp2.b3": "GPU-beräkningar med shaders och OpenCL; ett eget videokodningssystem byggt på FFmpeg.",
      "ai.exp2.b4": "Android-appar från grunden i Java och Kotlin, bland annat Hyperkey — ett chattwidget-tangentbord med över 300 000 användare — och selfievideoappen Emoji Challenge Camera.",
      "cert.title": "Certifikat",
      "cert.name": "Certifikatets namn",
      "cert.meta": "Utfärdare · År",
      "cat.ondevice": "AI på enheten",
      "cat.speech": "Tal",
      "cat.cv": "Datorseende",
      "ai.bar1": "AI på enheten",
      "ai.bar2": "Tal och NLP",
      "ai.bar3": "Datorseende",
    }
  };

  var LANGS = ["ru", "en", "sv"];
  var STORAGE_KEY = "portfolio-lang";

  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return "ru"; // язык по умолчанию
  }

  // Публичный помощник: получить перевод ключа в текущем языке.
  function t(key) {
    var lang = getLang();
    var table = DICT[lang] || DICT.ru;
    return (table[key] !== undefined) ? table[key] : (DICT.ru[key] !== undefined ? DICT.ru[key] : key);
  }

  function apply(lang) {
    var table = DICT[lang] || DICT.ru;
    function val(key) { return table[key] !== undefined ? table[key] : DICT.ru[key]; }

    // Текстовое содержимое
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n"));
      if (v !== undefined) el.textContent = v;
    });
    // Плейсхолдеры
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n-ph"));
      if (v !== undefined) el.setAttribute("placeholder", v);
    });
    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n-aria"));
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    // title-атрибут
    document.querySelectorAll("[data-i18n-attr-title]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n-attr-title"));
      if (v !== undefined) el.setAttribute("title", v);
    });

    // <html lang>
    document.documentElement.setAttribute("lang", lang);

    // <title> и meta description — ключи заданы на <body data-title-key / data-desc-key>
    var titleKey = document.body.getAttribute("data-title-key");
    if (titleKey && val(titleKey)) document.title = val(titleKey);
    var descKey = document.body.getAttribute("data-desc-key");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (descKey && metaDesc && val(descKey)) metaDesc.setAttribute("content", val(descKey));

    // Активная кнопка языка
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "ru";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
    // Сообщаем остальному коду (например, об обновлении aria-меток)
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  // Применяем сохранённый язык как можно раньше.
  var initLang = getLang();
  function init() {
    apply(initLang);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Экспортируем для script.js
  window.I18N = { t: t, setLang: setLang, getLang: getLang, langs: LANGS };
})();
