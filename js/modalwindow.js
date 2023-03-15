// リンクを押すと表示れるウィンドウ
const link_login = document.getElementById("link_login");
const window_login = document.getElementById("window_login");
const window_login_cancel = document.getElementById("window_login_cancel");
const grayout = document.getElementById("grayout");
const body = document.getElementById("body");
// リンクが押されたらウィンドウとグレーアウトからhideクラスを削除する
link_login.addEventListener("click", function () {
  window_login.classList.remove("hide");
  grayout.classList.remove("hide");
  body.classList.add("scroll-off");
});
// ウィンドウ内のキャンセルボタンが押されたら
// ウィンドウとグレーアウトにhideクラスを追加する
window_login_cancel.addEventListener("click", function () {
  window_login.classList.add("hide");
  grayout.classList.add("hide");
  body.classList.remove("scroll-off");
});
