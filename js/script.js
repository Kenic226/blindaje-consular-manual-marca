(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scrollspy: highlight the current section in the spine / mobile menu
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id]")
  );
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-tab]"));

  function setActive(id) {
    tabs.forEach(function (tab) {
      var match = tab.getAttribute("href") === "#" + id;
      tab.setAttribute("aria-current", match ? "true" : "false");
    });
  }

  if ("IntersectionObserver" in window && sections.length && tabs.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      if (s.id !== "hero") observer.observe(s);
    });
  }
})();
