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
============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  function closeMenu() {
    if (!navList) return;
    navList.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Открыть меню");
  }

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
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

  var counters = document.querySelectorAll(".stat-num");
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
     6. ДЕМО-ОБРАБОТЧИК ФОРМЫ
     Удалите этот блок, когда подключите Formspree / backend,
     чтобы форма отправлялась по-настоящему (см. комментарий в HTML).
     Тексты статусов берутся из словаря i18n (ключи form.invalid / form.sent).
  ---------------------------------------------------------- */
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
      status.textContent = tr("form.sent", "Спасибо! Это демо-форма — подключите backend, чтобы получать сообщения.");
      form.reset();
    });
  }

  /* ----------------------------------------------------------
     7. ГОД В ПОДВАЛЕ
  ---------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
