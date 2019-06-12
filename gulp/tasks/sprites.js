var gulp=require('gulp'),
svgsprite=require('gulp-svg-sprite'),
rename=require('gulp-rename'),
del=require('del'),
svg2png = require('gulp-svg2png');

var config= {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode:{
    css:{
   variables: {
     replaceSvgWithPng: function()
     {
       return function(sprite,render){
        return render(sprite).split('.svg').join('.png');
       }
     }
   } ,
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

function c()
{
  return gulp.src('./app/temp/sprite/css/*.svg')
         .pipe(svg2png())
         .pipe(gulp.dest('./app/temp/sprite/css'));
}

function b()
{
  return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/module'));
}

function d()
{
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
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
gulp.task('icons',['beginClean','createSprite','createPngCopy','copySpriteGrafic','copySpriteCSS','endClean']);
gulp.task('copySpriteGrafic',['createPngCopy'],d);
gulp.task('beginClean',e);
gulp.task('endClean',['copySpriteGrafic','copySpriteCSS'],f);
gulp.task('createPngCopy',['createSprite'],c);
