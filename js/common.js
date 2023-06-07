const nav_sp = document.getElementById("nav_sp");
const nav_btn = document.getElementById("nav_btn");
const toggleActive = (e) => {
  e.classList.toggle("active");
};
nav_btn.addEventListener("click", () => {
  toggleActive(nav_sp), toggleActive(nav_btn);
});
