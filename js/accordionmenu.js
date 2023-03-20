// css・jsで実装
// メニューを開く関数
const slideDown = function (el) {
  el.style.height = "auto"; //いったんautoに
  let h = el.offsetHeight; //autoにした要素から高さを取得
  el.style.height = h + "px";
  el.animate(
    {
      //高さ0から取得した高さまでのアニメーション
      height: [0, h + "px"],
    },
    {
      duration: 300, //アニメーションの時間（ms）
    }
  );
  el.style.height = "auto"; //ブラウザの表示幅を途中で閲覧者が変えた時を考慮してautoに戻す
};
// メニューを閉じる関数
const slideUp = function (el) {
  let h = el.offsetHeight;
  el.style.height = h + "px";
  el.animate({ height: [h + "px", 0] }, { duration: 300 });
  el.style.height = 0;
};
let activeIndex = null; //開いているアコーディオンのindex
//アコーディオンコンテナ全てで実行
const accordions = document.querySelectorAll(".include-accordion");
accordions.forEach((accordion) => {
  //アコーディオンボタン全てで実行
  const accordionBtns = accordion.querySelectorAll(".accordionBtn");
  accordionBtns.forEach(function (accordionBtn, index) {
    accordionBtn.addEventListener("click", function () {
      activeIndex = index; //クリックされたボタンを把握
      accordionBtn.parentNode.classList.toggle("active"); //ボタンの親要素(ul>li)にクラスを付与／削除
      const content = accordionBtn.nextElementSibling; //ボタンの次の要素を取得
      if (accordionBtn.parentNode.classList.contains("active")) {
        slideDown(content); //クラス名がactive（＝閉じていた）なら上記で定義した開く関数を実行
      } else {
        slideUp(content); //クラス名にactiveがない（＝開いていた）なら上記で定義した閉じる関数を実行
      }
      accordionBtns.forEach(function (accordionBtn, index) {
        if (activeIndex !== index) {
          accordionBtn.parentNode.classList.remove("active");
          const openedContent = accordionBtn.nextElementSibling;
          slideUp(openedContent); //現在開いている他のメニューを閉じる
        }
      });
      //スクロール制御のために上位階層ulのクラス名を変える
      let container = accordion.closest(".scroll-control"); // クラス名がscroll-controlである近傍の要素
      if (
        accordionBtn.parentNode.classList.contains("active") == false &&
        container !== null
      ) {
        container.classList.remove("active");
      } else if (container === null) {
        container.classList.add("active");
      }
    });
  });
});
