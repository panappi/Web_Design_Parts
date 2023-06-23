// リンクを押すと表示れるウィンドウ
const body = document.getElementById("body");
const grayout = document.getElementById("grayout");
const window_modal_2 = document.getElementById("window_modal_2");
const btn_cancel = document.getElementById("btn_cancel");
const toggleModal = () => {
  window_modal_2.classList.toggle("hide");
  grayout.classList.toggle("hide");
  body.classList.toggle("scroll-off");
};

window.addEventListener("load", () => toggleModal());
btn_cancel.addEventListener("click", () => toggleModal());
// ウィンドウ外をクリックしてもウィンドウを閉じる
grayout.addEventListener("click", () => toggleModal());
