(function () {
  var path = window.location.pathname.replace(/\/$/, "") || "/";
  var navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach(function (link) {
    var href = link.getAttribute("href").replace(/\/$/, "") || "/";
    if (href === path || (path === "/portfolio" && href === "/")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();
