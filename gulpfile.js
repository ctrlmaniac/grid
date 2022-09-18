const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

exports.build = build;
exports.default = series(build);
