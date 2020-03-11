var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

gulp.task('gulp_nodemon', async function() {
  nodemon({
    'script': 'server.js',
    'ext': 'js html css',
  });
});


gulp.task('ar', async function(){
  gulp.src(['./static/*.*'])
  .pipe(livereload());
});

gulp.task('default', gulp.series('gulp_nodemon', function () {
  livereload.listen();
  gulp.watch(['./static/*.*'], gulp.parallel('ar'));
}));
