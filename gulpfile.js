var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var istanbul = require("gulp-istanbul");


// Set up the file coverage
function cover (cb) {
  return gulp.src("lib/**/*.js")
        .pipe(istanbul())
        .on('end', cb);
};

// Run tests and output reports
gulp.task('default', function () {
  return cover(function () {
    gulp.src('test/specs/*.js')
      .pipe(mocha()) // Run any unit test frameworks here
      .pipe(istanbul.writeReports());
  });
});