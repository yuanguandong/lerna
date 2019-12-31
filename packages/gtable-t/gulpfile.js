const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');


function js() {
  return src('*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('lib/', { sourcemaps: true }))
}

exports.js = js;
exports.default = parallel(js);