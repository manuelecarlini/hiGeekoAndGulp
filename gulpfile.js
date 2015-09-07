// Include gulp
var gulp = require('gulp');

// Define main directories
var assets = 'assets/';
var destination = 'build/';
var bowerDir = 'vendors/' ;
var serverCommand = 'python -m SimpleHTTPServer';

// Run Bower
var bower = require('gulp-bower');

gulp.task('bower', function() { 
  return bower()
    .pipe(gulp.dest(bowerDir)) 
});

// Move Fontawesome fonts to Build
gulp.task('icons', ['bower'], function() { 
  return gulp.src(bowerDir + '/font-awesome/fonts/**.*') 
    .pipe(gulp.dest(destination + 'fonts')); 
});

// Concatenate & Minify JS
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('customeScripts', ['bower'], function() {
  return gulp.src(assets + 'js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destination + 'js'));
});
gulp.task('vendorScripts', ['bower'], function() {
  return gulp.src(bowerDir + '**/*.min.js')
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destination + 'js'))
})

// Preprocess CSS
var less = require('gulp-less');
var path = require('path');

gulp.task('less', ['bower'], function () {
  return gulp.src(assets +'less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(destination + 'css'));
});

// Add Fontawesome css to the minified main.min.js
gulp.task('fontawesomeCSS', ['bower', 'less'], function() { 
  return gulp.src([bowerDir + 'font-awesome/css/*.min.css', destination + 'css/main.min.css']) 
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(destination + 'css'));
});

// Images optimization
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

 gulp.task('images', function() {
  return gulp.src(assets + 'images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(destination + 'img'));
});

// Watch for changes in our custom assets
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(assets + 'js/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch(assets + 'scss/*.less', ['less']);
  // Watch image files
  gulp.watch(assets + 'images/**/*', ['images']);
 });

// Run python server on localhost:8000
var shell = require('gulp-shell');
gulp.task('runServer', shell.task([
  serverCommand
]))

// Default Task
gulp.task('default', ['bower', 'customeScripts', 'vendorScripts', 'images', 'less', 'icons', 'fontawesomeCSS', 'watch', 'runServer']);
