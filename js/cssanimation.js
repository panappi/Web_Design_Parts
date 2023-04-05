const move2 = document.getElementById("move-2");
const toggleActive = (e) => {
  e.classList.toggle("active");
};
const changeTextBye = (e) => {
  e.textContent = "bye";
};
const changeTextHello = (e) => {
  e.textContent = "hello";
};

move2.addEventListener("mouseover", () => {
  toggleActive(move2), changeTextBye(move2);
});
move2.addEventListener("mouseleave", () => {
  toggleActive(move2), changeTextHello(move2);
});
