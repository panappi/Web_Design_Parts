// リンクを押すと表示れるウィンドウ
// const body = document.getElementById("body");  // common.jsで定義済み
const grayout_modal = document.getElementById("grayout_modal");
const window_modal_2 = document.getElementById("window_modal_2");
const btn_cancel = document.getElementById("btn_cancel");
const toggleModal = () => {
  window_modal_2.classList.toggle("hide");
  grayout_modal.classList.toggle("hide");
  body.classList.toggle("scroll-off");
};

window.addEventListener("load", () => toggleModal());
btn_cancel.addEventListener("click", () => toggleModal());
// ウィンドウ外をクリックしてもウィンドウを閉じる
grayout_modal.addEventListener("click", () => toggleModal());
