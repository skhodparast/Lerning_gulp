const dir = {
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

const java = {
  // src         : dir.src + 'js/*',
  src         : [dir.src + 'js/**/*.js'],
  build       : dir.build + 'js/'
};

gulp.task('task1', function(){
	return gulp
		.src(java.src)
		.pipe(concat("app.js"))
		.pipe(gulp.dest(java.build));
});

gulp.task('task2', function(){
	return gulp
  .src(java.src)
  .pipe(concat("app2.js"))
  .pipe(gulp.dest(java.build));
});

gulp.task('task3', function(){
	return gulp
  .src(java.src)
  .pipe(concat("app3.js"))
  .pipe(gulp.dest(java.build));
});

gulp.task('default', ['task1', 'task2', 'task3']);
