// ボタンを押すと表示されるアニメーション
const loading_1 = document.getElementById("loading_1");
const loading_bg = document.getElementById("loading_bg");
const btn_start = document.getElementById("btn_start");
const btn_cancel = document.getElementById("btn_cancel");

// common.jsから読み込み
// const toggleActive = (e) => {
//   e.classList.toggle("active");
// };
// const toggleHide = (e) => {
//   e.classList.toggle("hide");
// };

// スタートボタンを押すとローディング画面を表示する
btn_start.addEventListener("click", () => {
  toggleActive(loading_1), toggleActive(loading_bg), toggleHide(loading_bg);
});

// キャンセルボタンを押すとローディング画面を非表示にする
btn_cancel.addEventListener("click", () => {
  toggleActive(loading_1), toggleActive(loading_bg), toggleHide(loading_bg);
});

// ５秒間だけローディング画面を表示する
// window.addEventListener("load", function () {
//   window.setTimeout(() => toggleLoading(), 5000);
// });
