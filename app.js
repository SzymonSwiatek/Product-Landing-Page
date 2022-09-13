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
