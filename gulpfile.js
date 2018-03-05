const dir = {
    src         : '_src/',
    build       : '_build/'
  },

gulp          = require('gulp'),
// gutil         = require('gulp-util'),
// newer         = require('gulp-newer'),
// imagemin      = require('gulp-imagemin')
sass          = require('gulp-sass'),
// postcss       = require('gulp-postcss'),
// deporder      = require('gulp-deporder'),
concat        = require('gulp-concat')
// stripdebug    = require('gulp-strip-debug'),
// uglify        = require('gulp-uglify')
;
// var browsersync = false;

const Sass = {
  src         : dir.src + 'sass/**/*.scss',
  build       : dir.build + 'css/'
};

gulp.task('convertSass', function(){
	return gulp
		.src(Sass.src)
    .pipe(concat("style.css"))
		.pipe(sass({outputstyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(Sass.build));
})
