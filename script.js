const menuLinks = document.querySelectorAll(".nav__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.target.blur();
  });
});
