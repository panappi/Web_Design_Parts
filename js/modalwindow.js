// ダイアログウィンドウ
const body = document.getElementById("body");
const grayout = document.getElementById("grayout");
const windowDialog = document.getElementById("window_dialog");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const openModal = () => {
  windowDialog.showModal();
  body.classList.add("scroll-off");
  grayout.classList.remove("hide");
};
const closeModal = () => {
  windowDialog.close();
  body.classList.remove("scroll-off");
  grayout.classList.add("hide");
};

btn1.addEventListener("click", () => openModal());
btn2.addEventListener("click", () => closeModal());
btn3.addEventListener("click", () => closeModal());
grayout.addEventListener("click", () => closeModal());
