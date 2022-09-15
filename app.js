const parent = document.querySelector("#membership");

parent.addEventListener("click", (btn) => {
  if (
    btn.target.classList.contains("price-options") &&
    !btn.target.classList.contains("active")
  ) {
    const ancestor = btn.target.closest(".option");
    ancestor.querySelector(".active").classList.toggle("active");
    btn.target.classList.toggle("active");

    ancestor.querySelector(".one-month").classList.toggle("price-visible");
    ancestor.querySelector(".six-months").classList.toggle("price-visible");
  }
});

const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  let curr;

  sections.forEach((section) => {
    const topSection = section.offsetTop;

    if (scrollY >= topSection - 60) {
      curr = section.getAttribute("id");
    }
  });

  nav.forEach((link) => {
    link.classList.remove("nav-active");

    if (link.classList.contains(curr)) {
      link.classList.add("nav-active");
    }
  });
};
