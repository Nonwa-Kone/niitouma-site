window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".navbar");
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
      header.classList.add("navbar--fixed-top");
    } else if (window.scrollY < 100) {
      header.classList.remove(".navbar--fixed-top");
    }
  });
});
