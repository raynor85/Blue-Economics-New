var gulp             = require('gulp');
var webpack          = require('webpack');
var uglify           = require('gulp-uglify');
var jshint           = require('gulp-jshint');
var stylish          = require('jshint-stylish');
var gutil            = require('gulp-util');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


var app = {
    js : {
        src   : ['assets/javascripts/src/**/*.js'],
        index : 'assets/javascripts/src/index.js',
        out   : 'assets/javascripts',
        file  : 'app.js'
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
    // run webpack
    function (cb) {
        webpack({
                context : __dirname + '/assets/javascripts/src',
                entry   : {
                    app    : './index.js',
                    vendor : './vendor.js'
                },
                output  : {
                    path     : app.js.out,
                    filename : app.js.file
                },
                resolve : {
                    alias : {
                        'jquery' : 'jquery/dist/jquery.min.js'
                    }
                },
                module  : {
                    loaders : [
                        { test : /\.html$/, loader : 'html-loader' },
                        { test : /\.scss$/, loader : 'style!css!sass?sourceMap' }
                    ]
                },
                plugins : [
                    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
                    new ngAnnotatePlugin({
                        add : true
                    }),
                    new webpack.optimize.UglifyJsPlugin({ compress : { warnings : false } })
                ]
            },
            function (err, stats) {
                if (err) throw new gutil.PluginError("webpack", err);
                gutil.log("[webpack]", stats.toString({
                    // output options
                }));
                cb();
            }
        );
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
