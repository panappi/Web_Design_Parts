const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("scss", function (done) {
  gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css"));
  done();
});

gulp.task("watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.series(["scss"]));
});
