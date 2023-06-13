// common.jsから読み込み
// const toggleActive = (e) => {
//   e.classList.toggle("active");
// };

// contents
// 3本線から✕に変化するボタン-1
const btn_3x = document.getElementById("btn_3x");
btn_3x.addEventListener("click", () => {
  toggleActive(btn_3x);
});

// 3本線から✕に変化するボタン-2
const btn_3x_2 = document.getElementById("btn_3x_2");
btn_3x_2.addEventListener("click", () => {
  toggleActive(btn_3x_2);
});

// 3本線から✕に変化するボタン-3
const btn_3x_3 = document.getElementById("btn_3x_3");
btn_3x_3.addEventListener("click", () => {
  toggleActive(btn_3x_3);
});

// 2本線から✕に変化するボタン
const btn_2x = document.getElementById("btn_2x");
btn_2x.addEventListener("click", () => {
  toggleActive(btn_2x);
});

// MENUから✕に変化するボタン
const btn_mx = document.getElementById("btn_mx");
btn_mx.addEventListener("click", () => {
  toggleActive(btn_mx);
});

// mockup
const mockup_btn = document.getElementById("mockup_btn");
const mockup_nav = document.getElementById("mockup_nav");
mockup_btn.addEventListener("click", () => {
  toggleActive(mockup_btn), toggleActive(mockup_nav);
});
