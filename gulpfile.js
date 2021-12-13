'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp');

function buildStyles() {
  return gulp.src('./lib/bootstrap-5.1.3/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/bootstrap-5.1.3/dist/css'));
};

function buildStyles2() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function copy() {
  return gulp.src('./node_modules/**/bootstrap.bundle.min.js')
    .pipe(gulp.dest('./js'));
}

exports.compileSASS = buildStyles;
exports.compileSASS2 = buildStyles2;
exports.copyBootstrapJS = copy;

exports.build = series(buildStyles2, copy);