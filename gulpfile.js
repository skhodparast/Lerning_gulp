const dir = {
    src         : '_src/',
    build       : '_build/'
  },

gulp          = require('gulp')
// gutil         = require('gulp-util'),
// newer         = require('gulp-newer'),
// imagemin      = require('gulp-imagemin')
// sass          = require('gulp-sass'),
// postcss       = require('gulp-postcss'),
// deporder      = require('gulp-deporder'),
// concat        = require('gulp-concat')
// stripdebug    = require('gulp-strip-debug'),
// uglify        = require('gulp-uglify')
;
// var browsersync = false;

const copy = {
  src         : dir.src + 'html/*.html',
  build       : dir.build + 'html/'
};

gulp.task('copyFiles', function(){
	 gulp.src(copy.src)
		.pipe(gulp.dest(copy.build));
})
