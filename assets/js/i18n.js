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
      "title.home": "Артём Хатеев — Fullstack & AI/ML инженер",
      "title.web": "Сайты и приложения — Артём Хатеев",
      "title.ai": "AI/ML — Артём Хатеев",
      "desc.home": "Портфолио Артёма Хатеева: разработка сайтов и приложений, а также решения на базе AI/ML.",
      "desc.web": "Разработка сайтов, веб- и мобильных приложений: опыт, проекты и навыки.",
      "desc.ai": "AI/ML: большие языковые модели, обучение и инференс, данные и MLOps.",

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
      "hero.sub": "Fullstack & AI/ML инженер. Помогаю командам запускать продукты и внедрять машинное обучение.",
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
      "card.ai.desc": "LLM, обучение и инференс моделей, данные и MLOps.",
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
      "offer.4": "MLOps и DevOps: CI/CD, мониторинг, инфраструктура",
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
      "cat.data": "Данные",
      "cat.tools": "Инструменты",

      /* Опыт (страницы web/ai) */
      "pg.k.exp": "01 — Опыт",
      "exp.title": "Карьерный путь",
      "exp.company": "Название компании · Город / Удалённо",

      /* Проекты (страницы web/ai) */
      "pg.k.proj": "02 — Проекты",
      "proj.title": "Избранные работы",
      "proj.desc": "Несколько проектов, которыми я горжусь. Замените карточки на свои.",
      "proj.demo": "Демо ↗",
      "proj.code": "Код ↗",
      "proj.label1": "Проект 01",
      "proj.label2": "Проект 02",
      "proj.label3": "Проект 03",

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

      /* Подвал */
      "footer.rights": "Все права защищены.",
      "footer.top": "Наверх",

      /* Специализация: Сайты и приложения */
      "web.exp1.role": "Senior Fullstack-разработчик",
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
      "web.exp3.b1": "Разрабатывал адаптивные интерфейсы на TypeScript и React.",
      "web.exp3.b2": "Улучшил доступность и производительность, подняв оценки Lighthouse.",
      "web.exp3.b3": "Автоматизировал сборку и релизы.",
      "web.proj1.title": "Интернет-магазин",
      "web.proj1.desc": "Быстрый магазин с корзиной, оплатой и админкой. Адаптивный, с хорошим SEO.",
      "web.proj2.title": "SaaS-дашборд",
      "web.proj2.desc": "Панель аналитики с графиками, ролями и обновлениями в реальном времени.",
      "web.proj3.title": "Мобильное приложение",
      "web.proj3.desc": "Кроссплатформенное приложение с офлайн-режимом и push-уведомлениями.",
      "web.bar1": "Frontend-разработка",
      "web.bar2": "Backend-разработка",
      "web.bar3": "Мобильная разработка",

      /* Специализация: AI/ML */
      "ai.exp1.role": "Senior ML-инженер",
      "ai.exp1.period": "2023 — наст. время",
      "ai.exp1.b1": "Дообучал LLM семейства Qwen под доменные задачи, +18% к точности.",
      "ai.exp1.b2": "Перенёс инференс на TPU-ускорители, сократив стоимость запроса в 3 раза.",
      "ai.exp1.b3": "Построил пайплайн оценки качества и регрессионных тестов моделей.",
      "ai.exp2.role": "ML-инженер",
      "ai.exp2.period": "2020 — 2023",
      "ai.exp2.b1": "Разрабатывал сервисы инференса на Python и Kotlin под высокой нагрузкой.",
      "ai.exp2.b2": "Собрал RAG-систему поверх базы знаний, снизив нагрузку на поддержку.",
      "ai.exp2.b3": "Внедрил MLflow и мониторинг моделей в продакшене.",
      "ai.exp3.role": "Data Scientist",
      "ai.exp3.period": "2018 — 2020",
      "ai.exp3.b1": "Строил модели классификации и прогнозирования на реальных данных.",
      "ai.exp3.b2": "Готовил и размечал датасеты, автоматизировал обработку данных.",
      "ai.exp3.b3": "Визуализировал результаты и защищал гипотезы перед бизнесом.",
      "ai.proj1.title": "LLM-ассистент поддержки",
      "ai.proj1.desc": "RAG-система поверх базы знаний: отвечает на запросы и держит контекст диалога.",
      "ai.proj2.title": "Пайплайн инференса на TPU",
      "ai.proj2.desc": "Высокопроизводительный сервинг моделей с батчингом и автоскейлингом.",
      "ai.proj3.title": "Платформа разметки данных",
      "ai.proj3.desc": "Инструмент для сбора и валидации датасетов — ускоряет подготовку данных.",
      "ai.bar1": "Машинное обучение",
      "ai.bar2": "LLM / NLP",
      "ai.bar3": "MLOps / инфраструктура"
    },

    /* --------------------- ENGLISH --------------------- */
    en: {
      "name": "Artem Khateev",
      "initials": "AK",
      "skip": "Skip to main content",

      "title.home": "Artem Khateev — Fullstack & AI/ML Engineer",
      "title.web": "Websites & Apps — Artem Khateev",
      "title.ai": "AI/ML — Artem Khateev",
      "desc.home": "Portfolio of Artem Khateev: web and app development plus AI/ML solutions.",
      "desc.web": "Websites, web and mobile app development: experience, projects and skills.",
      "desc.ai": "AI/ML: large language models, training and inference, data and MLOps.",

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
      "hero.sub": "Fullstack & AI/ML engineer. I help teams launch products and adopt machine learning.",
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
      "card.ai.desc": "LLMs, model training and inference, data and MLOps.",
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
      "offer.4": "MLOps and DevOps: CI/CD, monitoring, infrastructure",
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
      "cat.data": "Data",
      "cat.tools": "Tools",

      "pg.k.exp": "01 — Experience",
      "exp.title": "Career path",
      "exp.company": "Company name · City / Remote",

      "pg.k.proj": "02 — Projects",
      "proj.title": "Selected work",
      "proj.desc": "A few projects I'm proud of. Replace the cards with your own.",
      "proj.demo": "Demo ↗",
      "proj.code": "Code ↗",
      "proj.label1": "Project 01",
      "proj.label2": "Project 02",
      "proj.label3": "Project 03",

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

      "footer.rights": "All rights reserved.",
      "footer.top": "Back to top",

      "web.exp1.role": "Senior Fullstack Developer",
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
      "web.exp3.b1": "Built responsive interfaces with TypeScript and React.",
      "web.exp3.b2": "Improved accessibility and performance, raising Lighthouse scores.",
      "web.exp3.b3": "Automated builds and releases.",
      "web.proj1.title": "E-commerce store",
      "web.proj1.desc": "A fast store with cart, checkout and admin panel. Responsive and SEO-friendly.",
      "web.proj2.title": "SaaS dashboard",
      "web.proj2.desc": "An analytics panel with charts, roles and real-time updates.",
      "web.proj3.title": "Mobile app",
      "web.proj3.desc": "A cross-platform app with offline mode and push notifications.",
      "web.bar1": "Frontend development",
      "web.bar2": "Backend development",
      "web.bar3": "Mobile development",

      "ai.exp1.role": "Senior ML Engineer",
      "ai.exp1.period": "2023 — present",
      "ai.exp1.b1": "Fine-tuned Qwen-family LLMs for domain tasks, +18% accuracy.",
      "ai.exp1.b2": "Moved inference to TPU accelerators, cutting cost per request 3×.",
      "ai.exp1.b3": "Built a model quality-evaluation and regression-testing pipeline.",
      "ai.exp2.role": "ML Engineer",
      "ai.exp2.period": "2020 — 2023",
      "ai.exp2.b1": "Built inference services in Python and Kotlin under high load.",
      "ai.exp2.b2": "Built a RAG system over a knowledge base, reducing support load.",
      "ai.exp2.b3": "Introduced MLflow and production model monitoring.",
      "ai.exp3.role": "Data Scientist",
      "ai.exp3.period": "2018 — 2020",
      "ai.exp3.b1": "Built classification and forecasting models on real-world data.",
      "ai.exp3.b2": "Prepared and labeled datasets, automated data processing.",
      "ai.exp3.b3": "Visualized results and presented hypotheses to stakeholders.",
      "ai.proj1.title": "LLM support assistant",
      "ai.proj1.desc": "A RAG system over a knowledge base: answers queries and keeps dialog context.",
      "ai.proj2.title": "TPU inference pipeline",
      "ai.proj2.desc": "High-performance model serving with batching and autoscaling.",
      "ai.proj3.title": "Data labeling platform",
      "ai.proj3.desc": "A tool for collecting and validating datasets — speeds up data prep.",
      "ai.bar1": "Machine learning",
      "ai.bar2": "LLM / NLP",
      "ai.bar3": "MLOps / infrastructure"
    },

    /* --------------------- SVENSKA --------------------- */
    sv: {
      "name": "Artem Khateev",
      "initials": "AK",
      "skip": "Hoppa till huvudinnehållet",

      "title.home": "Artem Khateev — Fullstack- & AI/ML-ingenjör",
      "title.web": "Webbplatser & appar — Artem Khateev",
      "title.ai": "AI/ML — Artem Khateev",
      "desc.home": "Artem Khateevs portfolio: webb- och apputveckling samt AI/ML-lösningar.",
      "desc.web": "Webbplatser, webb- och mobilapputveckling: erfarenhet, projekt och färdigheter.",
      "desc.ai": "AI/ML: stora språkmodeller, träning och inferens, data och MLOps.",

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
      "hero.sub": "Fullstack- & AI/ML-ingenjör. Jag hjälper team att lansera produkter och införa maskininlärning.",
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
      "card.ai.desc": "LLM, modellträning och inferens, data och MLOps.",
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
      "offer.4": "MLOps och DevOps: CI/CD, övervakning, infrastruktur",
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
      "cat.data": "Data",
      "cat.tools": "Verktyg",

      "pg.k.exp": "01 — Erfarenhet",
      "exp.title": "Karriärväg",
      "exp.company": "Företagsnamn · Stad / Distans",

      "pg.k.proj": "02 — Projekt",
      "proj.title": "Utvalda arbeten",
      "proj.desc": "Några projekt jag är stolt över. Ersätt korten med dina egna.",
      "proj.demo": "Demo ↗",
      "proj.code": "Kod ↗",
      "proj.label1": "Projekt 01",
      "proj.label2": "Projekt 02",
      "proj.label3": "Projekt 03",

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

      "footer.rights": "Alla rättigheter förbehållna.",
      "footer.top": "Till toppen",

      "web.exp1.role": "Senior Fullstack-utvecklare",
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
      "web.exp3.b1": "Byggde responsiva gränssnitt med TypeScript och React.",
      "web.exp3.b2": "Förbättrade tillgänglighet och prestanda och höjde Lighthouse-poängen.",
      "web.exp3.b3": "Automatiserade bygg och releaser.",
      "web.proj1.title": "E-handelsbutik",
      "web.proj1.desc": "En snabb butik med varukorg, kassa och adminpanel. Responsiv och SEO-vänlig.",
      "web.proj2.title": "SaaS-instrumentpanel",
      "web.proj2.desc": "En analyspanel med diagram, roller och realtidsuppdateringar.",
      "web.proj3.title": "Mobilapp",
      "web.proj3.desc": "En plattformsoberoende app med offline-läge och push-notiser.",
      "web.bar1": "Frontend-utveckling",
      "web.bar2": "Backend-utveckling",
      "web.bar3": "Mobilutveckling",

      "ai.exp1.role": "Senior ML-ingenjör",
      "ai.exp1.period": "2023 — nutid",
      "ai.exp1.b1": "Finjusterade LLM:er i Qwen-familjen för domänuppgifter, +18% träffsäkerhet.",
      "ai.exp1.b2": "Flyttade inferens till TPU-acceleratorer och minskade kostnaden per förfrågan 3×.",
      "ai.exp1.b3": "Byggde en pipeline för kvalitetsutvärdering och regressionstester av modeller.",
      "ai.exp2.role": "ML-ingenjör",
      "ai.exp2.period": "2020 — 2023",
      "ai.exp2.b1": "Byggde inferenstjänster i Python och Kotlin under hög belastning.",
      "ai.exp2.b2": "Byggde ett RAG-system ovanpå en kunskapsbas och minskade supportbelastningen.",
      "ai.exp2.b3": "Införde MLflow och modellövervakning i produktion.",
      "ai.exp3.role": "Data Scientist",
      "ai.exp3.period": "2018 — 2020",
      "ai.exp3.b1": "Byggde klassificerings- och prognosmodeller på verkliga data.",
      "ai.exp3.b2": "Förberedde och märkte datauppsättningar och automatiserade databehandling.",
      "ai.exp3.b3": "Visualiserade resultat och presenterade hypoteser för intressenter.",
      "ai.proj1.title": "LLM-supportassistent",
      "ai.proj1.desc": "Ett RAG-system ovanpå en kunskapsbas: svarar på frågor och behåller dialogkontext.",
      "ai.proj2.title": "TPU-inferenspipeline",
      "ai.proj2.desc": "Högpresterande modellservering med batchning och autoskalning.",
      "ai.proj3.title": "Plattform för datamärkning",
      "ai.proj3.desc": "Ett verktyg för att samla in och validera datauppsättningar — snabbar upp dataförberedelse.",
      "ai.bar1": "Maskininlärning",
      "ai.bar2": "LLM / NLP",
      "ai.bar3": "MLOps / infrastruktur"
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
