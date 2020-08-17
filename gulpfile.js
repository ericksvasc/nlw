'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.sass')
    .pipe(watch('./public/sass/**/*.sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});



 
//gulp.task('sass:watch', function () {
 // gulp.watch('./sass/**/*.sass', ['sass']);
//);