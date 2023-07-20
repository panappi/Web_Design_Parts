// リンクを押すと表示れるウィンドウ
// const body = document.getElementById("body");  // common.jsで定義済み
const grayoutModal = document.getElementById("grayoutModal");
const windowModal_2 = document.getElementById("windowModal_2");
const btnCancel = document.getElementById("btnCancel");
const toggleModal = () => {
  windowModal_2.classList.toggle("hide");
  grayoutModal.classList.toggle("hide");
  body.classList.toggle("scroll-off");
};

window.addEventListener("load", () => toggleModal());
btnCancel.addEventListener("click", () => toggleModal());
// ウィンドウ外をクリックしてもウィンドウを閉じる
grayoutModal.addEventListener("click", () => toggleModal());
