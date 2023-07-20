// ボタンを押すと表示されるアニメーション
const loading1 = document.getElementById("loading1");
const loadingBg = document.getElementById("loadingBg");
const btnStart = document.getElementById("btnStart");
const btnCancel = document.getElementById("btnCancel");

// common.jsから読み込み
// const toggleActive = (e) => {
//   e.classList.toggle("active");
// };
// const toggleHide = (e) => {
//   e.classList.toggle("hide");
// };

// スタートボタンを押すとローディング画面を表示する
btnStart.addEventListener("click", () => {
  toggleActive(loading1), toggleActive(loadingBg), toggleHide(loadingBg);
});

// キャンセルボタンを押すとローディング画面を非表示にする
btnCancel.addEventListener("click", () => {
  toggleActive(loading1), toggleActive(loadingBg), toggleHide(loadingBg);
});

// ５秒間だけローディング画面を表示する
// window.addEventListener("load", function () {
//   window.setTimeout(() => toggleLoading(), 5000);
// });
