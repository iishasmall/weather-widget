var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var sftp = require('gulp-sftp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var htmlminify = require('gulp-htmlmin');
var clean = require('gulp-clean');
var minify = require('gulp-minify');
var gulpCopy = require('gulp-copy');
var concat = require('gulp-concat');
var clone = require('gulp-clone');

var cloneSink = clone.sink();

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var sassSources = './src/scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'src/html/index.html';
var htmlOutput = './app/'
var jsSource = './src/js/**/*.js';
var jsOutput = './app/js/';







gulp.task('htmlmin', function() {
  return gulp.src(htmlSource)
    .pipe(htmlminify({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlOutput));
});

gulp.task('sass', function(){
	return gulp.src(sassSources)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(cleanCSS({debug:true},function(details){

		console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(sassOutput))
	.pipe(browserSync.stream())
});

gulp.task('compress', function() {
 return gulp.src(jsSource)
 .pipe(gulp.dest(jsOutput));
});

gulp.task('serve', ['htmlmin','sass','compress'], function(){

	browserSync.init({
		server: './app',
		browser: "google chrome"
	})


	gulp.watch(sassSources, ['sass'])
	gulp.watch(jsSource, ['compress'])
	gulp.watch(htmlSource, ['htmlmin'])
	gulp.watch(htmlSource).on('change', browserSync.reload);
});

gulp.task('deploy', function(){
	return gulp.src('./app/**/*')
	.pipe(sftp({
		host: 'iishasmall.com',
		user: '****',
		pass: '****',
		remotePath: '/home/i/smalli/web/'
	}));
});


gulp.task('default', ['serve']);












