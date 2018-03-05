const

dir = {
    src         : '_src/',
    build       : '_build/'
  },

gulp          = require('gulp'),
// gutil         = require('gulp-util'),
// newer         = require('gulp-newer'),
// imagemin      = require('gulp-imagemin'),
// sass          = require('gulp-sass'),
// postcss       = require('gulp-postcss'),
// deporder      = require('gulp-deporder'),
concat        = require('gulp-concat')
// stripdebug    = require('gulp-strip-debug'),
// uglify        = require('gulp-uglify')
;
// var browsersync = false;

const images = {
  // src         : dir.src + 'js/*',
  src         : dir.src + 'js/**/*',
  build       : dir.build + 'js/'
};

gulp.task('concat_js_files', function(){
	gulp.src(images.src)
		.pipe(concat("app.js"))
		.pipe(gulp.dest(images.build));
});
