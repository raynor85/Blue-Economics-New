var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var uglify  = require('gulp-uglify');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');


var app = {
    js: {
        src  : ['assets/javascripts/src/**/*.js'],
        index: 'assets/javascripts/src/index.js',
        out  : 'assets/javascripts',
        file : 'app.js'
    }
};


/**
 * Runs through jshint to catch common code errors and style issues
 */
gulp.task('jshint',
    function () {
        return gulp.src(app.js.src)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });


/**
 * Runs webpack using assets/javascripts/src/index.js as an entry point.
 */
gulp.task('webpack',
    ['jshint'],
    function () {
        return gulp.src(app.js.index)
            .pipe(webpack({
                output : {
                    filename: app.js.file
                },
                resolve: {
                    alias: {
                        'jquery': 'jquery/dist/jquery.min.js'
                    }
                }
            }))
            .pipe(uglify())
            .pipe(gulp.dest(app.js.out));
    });


/**
 * Watches assets/javascripts/src for changes in .js files and reruns webpack.
 */
gulp.task('watch',
    ['webpack'],
    function () {
        gulp.watch(app.js.src, ['webpack']);
    });


/**
 * Runs the watch task by default if gulp is called with no parameters
 */
gulp.task('default', ['watch']);
