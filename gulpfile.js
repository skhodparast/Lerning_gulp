var gulp = require('gulp');


gulp.task('default', function(){
  console.log('Hello World');
})

gulp.task('one', function(){
  console.log('task one');
})

gulp.task('two', ['one'] , function(){
  console.log('task two');
})
