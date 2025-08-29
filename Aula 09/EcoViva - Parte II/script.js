const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const btnTopo = document.getElementById("btn-topo");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const elementos = document.querySelectorAll(".scroll-anim");

const observar = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("show");
    }
    // else {
    //   entrada.target.classList.remove("show");
    // }
  });
}, { threshold: 0.2 });

elementos.forEach(el => observar.observe(el));


