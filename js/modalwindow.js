// ボタンを押すと表示されるウィンドウ
// const body = document.getElementById("body");  // common.jsで定義済み
const grayoutModal = document.getElementById("grayoutModal");
const windowModal_1 = document.getElementById("windowModal_1");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const openModal = () => {
  windowModal_1.showModal();
  body.classList.add("scroll-off");
  grayoutModal.classList.remove("hide");
};
const closeModal = () => {
  windowModal_1.close();
  body.classList.remove("scroll-off");
  grayoutModal.classList.add("hide");
};

btn1.addEventListener("click", () => openModal());
btn2.addEventListener("click", () => closeModal());
btn3.addEventListener("click", () => closeModal());
