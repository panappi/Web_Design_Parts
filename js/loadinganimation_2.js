// ページを開くと表示されるアニメーション
const images = document.getElementsByTagName("img"); // ページ内の画像取得
const percent = document.getElementById("percent"); // パーセントのテキスト部分
const gauge = document.getElementById("gauge"); // ゲージ
const loadingBg = document.getElementById("loadingBg"); // ローディング背景
const loading2 = document.getElementById("loading2"); // ローディング要素
const gaugeMax = 400; // ゲージの幅指定
let imgCount = 0;
let baseCount = 0;
let current;

// TODO: 改良の余地あり
// 画像の読み込み
for (let i = 0; i < images.length; i++) {
  const img = new Image(); // 画像の作成 Imageクラスを呼び出す
  // 画像読み込み完了したとき
  img.onload = () => {
    imgCount += 1;
  };
  // 画像読み込み失敗したとき
  img.onerror = () => {
    imgCount += 1;
  };
  img.src = images[i].src; // 画像にsrcを指定して読み込み開始
}

// ローディング処理
const nowLoading = setInterval(() => {
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
      setTimeout(() => {
        // 100％になってもすぐに消えないようにする
        // ローディング要素の非表示
        loadingBg.style.display = "none";
        loading2.style.display = "none";
        // ローディングの終了
        clearInterval(nowLoading);
      }, 300);
    }
  }
}, 100);
