const { src, dest, series, watch } = require('gulp')
const browserSync = require('browser-sync').create();

// 压缩js
function js (cb) {
  console.log("Hello scripts!");
  // [gulp-uglify]
  src('js/*.js')
    .pipe(dest('./dist/js'))
    .pipe(browserSync.reload({ stream: true }))
  cb();
}

// 压缩scss
function css (cb) {
  // gulp-sass
  console.log("Hello styles!");
  src('css/*.css')
    .pipe(dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }))
  cb();
}

// 监听文件变化
function watcher (cb) {
  watch('js/*.js', js);
  watch('css/*css', css);
  cb();
}

// 删除dist目录内容
function clean (cb) {
  // gulp-dest-clean
  console.log("clean!");
  cb();
}

// server 任务 // Static Server + watching scss/html files
function serve (cb) {
  browserSync.init({
    server: "./"
  });
  cb();
}

exports.scripts = js;
exports.styles = css;
exports.clean = clean;
exports.default = series([
  clean,
  js,
  css,
  serve,
  watcher
])