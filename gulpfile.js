var gulp = require('gulp'),
    sass = require('gulp-sass');

// Build
gulp.task('build', function() {
  var config = {
    includePaths: ['./node_modules/support-for/sass']
  };

  gulp.src('src/**/*.scss')
    .pipe(sass(config).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
})

// Watch
gulp.task('default', function() {
  gulp.watch('src/**/*.scss', ['build']);
});
 
