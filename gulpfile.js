const dir = {
    src         : '_src/',
    build       : '_build/'
  },

gulp          = require('gulp'),
runSequence          = require('run-sequence'),
// gutil         = require('gulp-util'),
// newer         = require('gulp-newer'),
// imagemin      = require('gulp-imagemin')
sass          = require('gulp-sass'),
// postcss       = require('gulp-postcss'),
// deporder      = require('gulp-deporder'),
concat        = require('gulp-concat'),
concat_css        = require('gulp-concat-css')
// stripdebug    = require('gulp-strip-debug'),
// uglify        = require('gulp-uglify')
;
// var browsersync = false;


gulp.task('copyFiles', function(){
	 gulp.src(dir.src + 'html/*.html')
		.pipe(gulp.dest(dir.build + 'html/'));
});

gulp.task('Sass2css', function(){
	return gulp
		.src(dir.src + 'sass/**/*.scss')
		.pipe(sass({outputstyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(dir.src + 'css/'));
});

gulp.task('processCss', function(){
	gulp.src(dir.src + 'css/*.css')
		.pipe(concat_css("style.css"))
		.pipe(gulp.dest(dir.build + 'css/'));
});

gulp.task('concat_js_files', function(){
	gulp.src(dir.src + 'js/**/*')
		.pipe(concat("app.js"))
		.pipe(gulp.dest(dir.build + 'js/'));
});

gulp.task('build', function(callback){
	 runSequence('Sass2css', ['copyFiles', 'processCss', 'concat_js_files'], callback)
})
