var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var taskToWatch = ['sass'];
var sassFile = 'app/scss/style.scss'

gulp.task('sass', function(){
  return gulp.src(sassFile)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
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
  gulp.watch('app/scss/**/*.js', taskToWatch);
});
