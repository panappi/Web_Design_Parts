// リンクを押すと表示れるウィンドウ
const link_login = document.getElementById("link_login");
const window_login = document.getElementById("window_login");
const window_login_cancel = document.getElementById("window_login_cancel");
const grayout = document.getElementById("grayout");
const body = document.getElementById("body");
const toggleModal = () => {
  window_login.classList.toggle("hide");
  grayout.classList.toggle("hide");
  body.classList.toggle("scroll-off");
};

// リンクが押されたらウィンドウとグレーアウトからhideクラスを削除する
// link_login.addEventListener("click", () => toggleModal());
window.addEventListener("load", () => toggleModal());

// ウィンドウ内のキャンセルボタンが押されたら
// ウィンドウとグレーアウトにhideクラスを追加する
window_login_cancel.addEventListener("click", () => toggleModal());
grayout.addEventListener("click", () => toggleModal());
