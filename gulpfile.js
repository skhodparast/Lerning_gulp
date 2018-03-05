const dir = {
    src         : '_src/',
    build       : '_build/'
  },

gulp          = require('gulp'),
// runSequence          = require('run-sequence'),
// gutil         = require('gulp-util'),
// newer         = require('gulp-newer'),
// imagemin      = require('gulp-imagemin')
// sass          = require('gulp-sass'),
// postcss       = require('gulp-postcss'),
// deporder      = require('gulp-deporder'),
// concat        = require('gulp-concat'),
// concat_css        = require('gulp-concat-css'),
// stripdebug    = require('gulp-strip-debug'),
// uglify        = require('gulp-uglify')
browserSync        = require('browser-sync').create()
;
// var browsersync = false;

gulp.task('watch', ['browserSync'] , function(){
  gulp.watch(dir.src + 'html/**/*' , browserSync.reload)
})

gulp.task('browserSync', function(){
	browserSync.init({
    // server: './_src/html',
    server: dir.src + 'html',
    port: 8080,
    ui:{ port: 8081}
  })
});
