const parent = document.querySelector("#membership");

parent.addEventListener("click", (btn) => {
  if (
    btn.target.classList.contains("price-options") &&
    !btn.target.classList.contains("active")
  ) {
    const ancestor = btn.target.closest(".switch");
    ancestor.querySelector(".active").classList.toggle("active");
    btn.target.classList.toggle("active");
  }
});
