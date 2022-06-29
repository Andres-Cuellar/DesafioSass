function myToggle() {
  let navBar = document.getElementById("navBar");
  let navBar__menu__open = document.getElementById("navBar__menu__open");
  let navBar__menu__close = document.getElementById("navBar__menu__close");
  let navBar__logo = document.getElementById("navBar__logo");
  let navBar__mode = document.getElementById("navBar__mode");

  navBar.classList.toggle("minWidth");
  navBar__menu__open.classList.toggle("close");
  navBar__menu__close.classList.toggle("close");
  navBar__logo.classList.toggle("close");
  navBar__mode.classList.toggle("close");
}
