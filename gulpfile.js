// ----- DEPENDENCIES ----- //
// Include gulp
var gulp = require('gulp');

// Include plugins
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssnext = require('postcss-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var filter = require('gulp-filter');

// ----- SETTINGS ----- //

var stylesInput = 'assets/sass/**/*.scss';
var stylesOutput = 'assets/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// ----- TASKS ----- //

// PHP functions, currently connects to broweser-sync only
gulp.task('php', function () {
  return gulp.src('*.php')
    .pipe(browserSync.stream());
});

// HTML functions, currently connects to broweser-sync only
gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(browserSync.stream());
});


// Sass + autoprefixer
gulp.task('styles',function() {
  var processors = [
    cssnext
  ];

  return gulp.src(stylesInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(stylesOutput))

    .pipe(filter('**/*.css'))
    .pipe(browserSync.stream());
});

// Watch files for changes
gulp.task('watch',function(){
    gulp.watch('*.php', ['php']);
    gulp.watch('*.html', ['html']);
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch(stylesInput, ['styles']);
});

// ----- PRODUCTION TASKS ----- //

// Concatenate & minify JS
gulp.task('scripts',function(){
  return gulp.src('assets/js/*.js')
    // .pipe(concat('bundle.js'))
    // .pipe(gulp.dest('./app/assets'))
    // .pipe(rename('all.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('./app/assets/js'));
    .pipe(browserSync.stream());
});

// clean-css: further compress css files
gulp.task('cleanCSS', function(){
  var cleanCSS = require('gulp-clean-css');

  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: "ie8"}))
    .pipe(gulp.dest(stylesOutput));

});

// --------

gulp.task('serve',function(){
  browserSync.init({
    proxy: "localhost/portfolio-website/"
  });
});

// Default task
gulp.task('default', ['styles','serve','watch']);

// Production task
gulp.task('production', ['default','scripts','cleanCSS']);
