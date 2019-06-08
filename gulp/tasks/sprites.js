var gulp=require('gulp'),
svgsprite=require('gulp-svg-sprite'),
rename=require('gulp-rename'),
del=require('del');

var config= {
  mode:{
    css:{
sprite:'sprite.svg',
render: {
  css: {
    template: './gulp/templates/sprite.css'
  }
}
    }
  }
}

function a()
{
  return gulp.src('./app/assets/images/icons/**/*.svg')
         .pipe(svgsprite(config))
         .pipe(gulp.dest('./app/temp/sprite/'));

}

function b()
{
  return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/module'));
}

function d()
{
  return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
}

function e()
{
return del(['./app/temp/sprite','./app/assets/images/sprites']);
}

function f()
{
  return del('./app/temp/sprite');
}

gulp.task('createSprite',['beginClean'],a);
gulp.task('copySpriteCSS',['createSprite'],b);
gulp.task('icons',['beginClean','createSprite','copySpriteGrafic','copySpriteCSS','endClean']);
gulp.task('copySpriteGrafic',['createSprite'],d);
gulp.task('beginClean',e);
gulp.task('endClean',['copySpriteGrafic','copySpriteCSS'],f);
