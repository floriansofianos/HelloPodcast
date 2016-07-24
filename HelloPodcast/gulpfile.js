/// <binding BeforeBuild='lint' />
var gulp = require('gulp');
var config = require('./gulp.config.js')();
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
    gulp.src(config.alljs)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});