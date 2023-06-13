const nav_btn = document.getElementById("nav_btn");
const nav_tb = document.getElementById("nav_tb");
const nav_sp = document.getElementById("nav_sp");
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
    toggleHide(nav_tb),
      toggleHide(nav_btn),
      removeActive(nav_sp),
      removeActive(nav_btn);
  } else {
    toggleHide(nav_tb), toggleHide(nav_btn);
  }
};

// 画面サイズに合わせてナビメニューの表示を切り替える
// ページを読み込んだときに実行(744px以上の場合sp用からtb用に切り替える)
if (breakpointTb.matches) {
  toggleHide(nav_tb), toggleHide(nav_btn);
}
// ウィンドウサイズを変更したときに実行（ブレイクポイントを監視する）
breakpointTb.addEventListener("change", toggleNav);

// sp用ナビメニューリストの表示・非表示、ボタンのスタイルを切り替える
nav_btn.addEventListener("click", () => {
  toggleActive(nav_sp), toggleActive(nav_btn);
});
