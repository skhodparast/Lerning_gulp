var gulp = require('gulp');


gulp.task('default', ['one', 'two'] , function(){
  console.log('Hello World');
})

gulp.task('one', function(){
  console.log('task one');
})

gulp.task('two', ['one'] , function(){
  console.log('task two');
})

gulp.task('three', ['one'] , function(){
  gulp.start('two');
})
