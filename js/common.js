// sp用のハンバーガーメニュー
const body = document.getElementById("body");
const navBtn = document.getElementById("navBtn");
const navTb = document.getElementById("navTb");
const navSp = document.getElementById("navSp");
const breakpointTb = window.matchMedia("(min-width: 744px)"); // 744px以上

const toggleActive = (e) => {
  e.classList.toggle("active");
};
const toggleHide = (e) => {
  e.classList.toggle("hide");
};
const removeActive = (e) => {
  e.classList.remove("active");
};
const toggleNav = (e) => {
  if (e.matches) {
    toggleHide(navTb),
      toggleHide(navBtn),
      removeActive(navSp),
      removeActive(navBtn);
  } else {
    toggleHide(navTb), toggleHide(navBtn);
  }
};
const toggleOverflow = () => {
  body.classList.toggle("scroll-off");
};

// 画面サイズに合わせてナビメニューの表示を切り替える
// ページを読み込んだときに実行(744px以上の場合sp用からtb用に切り替える)
if (breakpointTb.matches) {
  toggleHide(navTb), toggleHide(navBtn);
}
// ウィンドウサイズを変更したときに実行（ブレイクポイントを監視する）
breakpointTb.addEventListener("change", toggleNav);

// sp用ナビメニューリストの表示・非表示、ボタンのスタイルを切り替える
navBtn.addEventListener("click", () => {
  toggleActive(navSp), toggleActive(navBtn), toggleOverflow();
});
