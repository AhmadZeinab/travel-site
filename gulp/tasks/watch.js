var gulp = require('gulp'),
browserSync=require('browser-sync').create();

function d(done) {
  browserSync.init({
    notify:false,
    server:{
      baseDir:"app"
    }
  })
  gulp.watch('./app/index.html',b );
  gulp.watch('./app/assets/styles/**/*.css',['styles','cssInject']);
  gulp.watch('./app/assets/scripts/**/*.js',f);

}

function f()
{
gulp.start('scripts');
browserSync.reload();

}


function e()
{
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(browserSync.stream());
}

function b() {
  browserSync.reload();

}

function c() {
  browserSync.reload();
}

gulp.task('watch',d );
gulp.task('cssInject',e);
gulp.task('html',b );
