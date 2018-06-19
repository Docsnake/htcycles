var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var taskToWatch = ['sass', 'scripts'];
var sassFile = 'app/scss/style.scss'
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function(){
  return gulp.src(sassFile)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var startBrowserSync = function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
};

gulp.task('watch', function(){
  startBrowserSync();
  gulp.watch('app/scss/**/*.scss', taskToWatch);
  gulp.watch('index.html', taskToWatch);
  gulp.watch('app/js/**/*.js', taskToWatch);
});
