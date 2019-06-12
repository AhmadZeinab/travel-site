var gulp = require('gulp'),
webpack = require('webpack');

function a(){
  webpack(require('../../webpack.config.js'),b);
}
function b(error,status){
  if(error)
  {
    console.log(error.toString());
  }
console.log(status.toString());

}

gulp.task('scripts',['modernizr'],a);
