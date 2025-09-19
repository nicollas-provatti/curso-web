const btnToggle = document.getElementById("btn-toggle");
const menuMobile = document.getElementById("menu-mobile");
const btnTema = document.getElementById("btn-tema");

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

btnTema.addEventListener("click", () =>{
  if (document.documentElement.hasAttribute("data-tema")) {
    document.documentElement.removeAttribute("data-tema");
    btnTema.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  } else {
    document.documentElement.setAttribute("data-tema", "escuro");
    btnTema.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
})