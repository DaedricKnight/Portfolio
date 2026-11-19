/* ============================================================
   ПОРТФОЛИО — script.js (vanilla JS, без зависимостей)
   Содержит:
   1. Переключение темы (с сохранением в localStorage)
   2. Мобильное меню (гамбургер)
   3. Scroll-reveal анимации (IntersectionObserver)
   4. Анимация счётчиков и шкал навыков
   5. Подсветка активного пункта меню + «тень» шапки
   6. Демо-обработчик формы
   7. Год в подвале
   8. Кнопка «Записаться на звонок» (BOOKING_URL)
============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     НАСТРОЙКА: ссылка для записи на звонок (Calendly, Cal.com, Google Calendar и т. п.).
     ЗАМЕНИТЕ: вставьте свою ссылку, например "https://cal.com/ваш-логин/30min".
     Пока строка пустая, все кнопки [data-booking] скрыты (см. README, «Запись на звонок»).
  ---------------------------------------------------------- */
  var BOOKING_URL = "";

  /* ----------------------------------------------------------
     1. ТЕМА
  ---------------------------------------------------------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var STORAGE_KEY = "portfolio-theme";

  // Применяем сохранённую тему (или системную) при загрузке.
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      root.setAttribute("data-theme", saved);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      root.setAttribute("data-theme", "light");
    }
  } catch (e) { /* localStorage может быть недоступен — не критично */ }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    });
  }

  /* ----------------------------------------------------------
     2. МОБИЛЬНОЕ МЕНЮ
  ---------------------------------------------------------- */
  var menuToggle = document.getElementById("menu-toggle");
  var navList = document.getElementById("nav-list");

  // Подпись кнопки зависит от состояния и языка: ключ кладём в data-i18n-aria,
  // чтобы i18n.js обновлял её и при смене языка.
  function setMenuLabel(open) {
    var key = open ? "aria.menu.close" : "aria.menu.open";
    menuToggle.setAttribute("data-i18n-aria", key);
    var label = window.I18N && window.I18N.t ? window.I18N.t(key) : "";
    if (label) menuToggle.setAttribute("aria-label", label);
  }

  function closeMenu() {
    if (!navList) return;
    navList.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    setMenuLabel(false);
  }

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      setMenuLabel(open);
    });
    // Закрываем меню при клике по ссылке
    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
  }

  /* ----------------------------------------------------------
     3. SCROLL-REVEAL
  ---------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    // Без анимации — сразу показываем всё
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });

    // Страховка: при быстрой прокрутке или переходе по якорю секция может
    // быть «перепрыгнута», и observer по ней не сработает. Гарантируем, что
    // всё, что уже дошло до нижней границы экрана, становится видимым —
    // контент никогда не остаётся скрытым навсегда.
    var revealOnScroll = function () {
      revealEls.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-visible");
          revealObserver.unobserve(el);
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("hashchange", function () {
      // даём браузеру доскроллить к якорю, затем раскрываем пройденное
      setTimeout(revealOnScroll, 80);
    });
  }

  /* ----------------------------------------------------------
     4. СЧЁТЧИКИ И ШКАЛЫ НАВЫКОВ
  ---------------------------------------------------------- */
  // Счётчики статистики
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = null;
    var dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Только числа с data-count (например, «99,9%» показывается как есть)
  var counters = document.querySelectorAll(".stat-num[data-count]");
  var bars = document.querySelectorAll(".bar-fill");

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCount);
    bars.forEach(function (b) { b.style.width = b.getAttribute("data-level") + "%"; });
  } else {
    var countObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { countObserver.observe(c); });

    var barObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var b = entry.target;
          b.style.width = b.getAttribute("data-level") + "%";
          obs.unobserve(b);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { barObserver.observe(b); });
  }

  /* ----------------------------------------------------------
     5. ТЕНЬ ШАПКИ ПРИ ПРОКРУТКЕ
     (Активная страница в меню отмечается статически через
      aria-current="page" в HTML — см. каждую страницу.)
  ---------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  /* ----------------------------------------------------------
     6. ФОРМА БЕЗ БЭКЕНДА (mailto)
     Проверяет поля и открывает почтовый клиент посетителя с готовым письмом:
     тема «Проект: <имя>» (на языке сайта), в тексте — сообщение и контакты.
     Чтобы принимать заявки на сервер (Formspree и т. п.), удалите этот блок
     и укажите action формы — см. README, «Подключение формы».
  ---------------------------------------------------------- */
  var CONTACT_EMAIL = "artemkhateev.ai@gmail.com";
  var tr = function (key, fallback) {
    return (window.I18N && window.I18N.t) ? window.I18N.t(key) : fallback;
  };
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = tr("form.invalid", "Пожалуйста, заполните все поля корректно.");
        form.reportValidity();
        return;
      }
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var subject = tr("form.subject", "Проект: {name}").replace("{name}", name);
      var body = message + "\n\n— " + name + " <" + email + ">";
      var url = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      status.textContent = tr("form.sent", "Открываю почтовый клиент…");
      // window.portfolioOpenMailto можно переопределить (например, в тестах), иначе — обычный переход.
      var open = window.portfolioOpenMailto || function (u) { window.location.href = u; };
      open(url);
    });
  }

  /* ----------------------------------------------------------
     7. ПЕРЕХОД ПО ЯКОРЮ ПРИ ЗАГРУЗКЕ (например, web.html#contact)
     Браузер плавно прокручивает к якорю сразу, а веб-шрифт догружается позже
     и меняет высоту текста — цель «уезжает». Когда шрифты готовы, выравниваем
     ещё раз, без анимации (отступ под шапку задаёт scroll-padding-top в CSS).
  ---------------------------------------------------------- */
  if (location.hash.length > 1) {
    var hashTarget = null;
    try { hashTarget = document.querySelector(decodeURIComponent(location.hash)); } catch (e) {}
    if (hashTarget) {
      var realign = function () { hashTarget.scrollIntoView({ behavior: "instant", block: "start" }); };
      var afterFonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
      afterFonts.then(function () { requestAnimationFrame(realign); });
      window.addEventListener("load", function () { requestAnimationFrame(realign); });
    }
  }

  /* ----------------------------------------------------------
     8. ГОД В ПОДВАЛЕ
  ---------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  /* ----------------------------------------------------------
     8. ЗАПИСЬ НА ЗВОНОК
  ---------------------------------------------------------- */
  if (BOOKING_URL) {
    document.querySelectorAll("[data-booking]").forEach(function (a) {
      a.setAttribute("href", BOOKING_URL);
      a.hidden = false;
    });
  }
})();
