const btnToggle = document.getElementById("btn-toggle");
const menuMobile = document.getElementById("menu-mobile");

btnToggle.addEventListener("click", () => {
  // menuMobile.classList.toggle("show");
  if (menuMobile.classList.contains("show")) {
    menuMobile.classList.remove("show");
    btnToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuMobile.classList.add("show");
    btnToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
});