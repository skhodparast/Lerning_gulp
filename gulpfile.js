gulp = require('gulp'),
changed = require('gulp-changed'),
imgmin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  gulp.src('a/**/*')
  // .pipe(changed('a/'))
  .pipe(imgmin())
  .pipe(gulp.dest('b'))
});

gulp.task('watch' , function(){
	gulp.watch('a/**/*' , ['imagemin'])
});
