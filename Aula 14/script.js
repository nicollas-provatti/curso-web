const btnTheme = document.getElementById("btn-theme");
const html = document.documentElement;
const btnOpenNavMobile = document.getElementById("btn-open");
const btnCloseNavMobile = document.getElementById("btn-close");
const navMobile = document.getElementById("nav-mobile");

btnOpenNavMobile.addEventListener("click", () => {
  navMobile.classList.remove("hidden");
  navMobile.classList.add("show");
});

btnCloseNavMobile.addEventListener("click", () => {
  navMobile.classList.add("hidden");
  navMobile.classList.remove("show");
});

btnTheme.addEventListener("click", () => {
  if (html.hasAttribute("data-theme")) {
    html.removeAttribute("data-theme");
    btnTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  } else {
    html.setAttribute("data-theme", "dark");
    btnTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
});