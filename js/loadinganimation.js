const loading = document.getElementById("loading");
const toggleLoading = () => {
  loading.classList.toggle("active");
};

// ５秒間だけローディング画面を表示する
// window.addEventListener("load", function () {
//   window.setTimeout(() => toggleLoading(), 5000);
// });

// スタートボタンを押すとローディング画面を表示する
const btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", () => toggleLoading());

// キャンセルボタンを押すとローディング画面を非表示にする
const btnCancel = document.getElementById("btn-cancel");
btnCancel.addEventListener("click", () => toggleLoading());
