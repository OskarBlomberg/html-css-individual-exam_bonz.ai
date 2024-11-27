const menuLinks = document.querySelectorAll(".header__nav__list__item__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.target.blur();
  });
});
