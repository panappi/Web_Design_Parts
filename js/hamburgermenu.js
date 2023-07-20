// common.jsから読み込み
// const toggleActive = (e) => {
//   e.classList.toggle("active");
// };

// contents
// 3本線から✕に変化するボタン-1
const btn3x = document.getElementById("btn3x");
btn3x.addEventListener("click", () => {
  toggleActive(btn3x);
});

// 3本線から✕に変化するボタン-2
const btn3x_2 = document.getElementById("btn3x_2");
btn3x_2.addEventListener("click", () => {
  toggleActive(btn3x_2);
});

// 3本線から✕に変化するボタン-3
const btn3x_3 = document.getElementById("btn3x_3");
btn3x_3.addEventListener("click", () => {
  toggleActive(btn3x_3);
});

// 2本線から✕に変化するボタン
const btn2x = document.getElementById("btn2x");
btn2x.addEventListener("click", () => {
  toggleActive(btn2x);
});

// MENUから✕に変化するボタン
const btnMx = document.getElementById("btnMx");
btnMx.addEventListener("click", () => {
  toggleActive(btnMx);
});

// mockup
const mockupBtn = document.getElementById("mockupBtn");
const mockupNav = document.getElementById("mockupNav");
mockupBtn.addEventListener("click", () => {
  toggleActive(mockupBtn), toggleActive(mockupNav);
});
