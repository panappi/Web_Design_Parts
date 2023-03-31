// ページを開くと表示される画面
var images = document.getElementsByTagName("img"); // ページ内の画像取得
var percent = document.getElementById("percent-text"); // パーセントのテキスト部分
var gauge = document.getElementById("gauge"); // ゲージ
var loadingBg = document.getElementById("loadingBg"); // ローディング背景
var loading = document.getElementById("loading"); // ローディング要素
var imgCount = 0;
var baseCount = 0;
var gaugeMax = 400; // ゲージの幅指定
var current;

// 画像の読み込み
for (var i = 0; i < images.length; i++) {
  var img = new Image(); // 画像の作成 Imageクラスを呼び出す
  // 画像読み込み完了したとき
  img.onload = function () {
    imgCount += 1;
  };
  // 画像読み込み失敗したとき
  img.onerror = function () {
    imgCount += 1;
  };
  img.src = images[i].src; // 画像にsrcを指定して読み込み開始
}

// ローディング処理
var nowLoading = setInterval(function () {
  if (baseCount <= imgCount) {
    // baseCountがimgCountを追い抜かないようにする
    // 現在の読み込み具合のパーセントを取得
    current = Math.floor((baseCount / images.length) * 100);
    // パーセント表示の書き換え
    percent.innerHTML = current;
    // ゲージの変更
    gauge.style.width = Math.floor((gaugeMax / 100) * current) + "px";
    baseCount += 1;
    // 全て読み込んだ時
    if (baseCount == images.length) {
      setTimeout(function () {
        // 100％になってもすぐに消えないようにする
        // ローディング要素の非表示
        loadingBg.style.display = "none";
        loading.style.display = "none";
        // ローディングの終了
        clearInterval(nowLoading);
      }, 300);
    }
  }
}, 100);

// ボタンを押すと表示される画面
const loading2 = document.getElementById("loading-2");
const toggleLoading = () => {
  loading2.classList.toggle("active");
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
