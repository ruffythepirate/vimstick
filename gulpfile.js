// Gulp.js configuration
var
// modules
  gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  watch = require('gulp-watch'),
  _ = require('lodash');

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  gulp.task('test', () => {
    freshFiles();
    gulp.src('**/*.spec.js', {
        read: false
      }) // `gulp-mocha` needs filepaths so you can't have any plugins before it
      .pipe(mocha({
        // reporter: 'nyan'
      }))
      return 0;
    });

  gulp.task('print', () => console.log('test'))

gulp.task('stream', function () {
    // Endless stream mode 
    return watch(['src/app/**/*.js', 'specs/**/*.js'], { ignoreInitial: false }, ['test'])
});

// folders
folder = {
  src: 'src/',
  build: 'build/'
};


function freshFiles(chunk, enc, cb){
    _.forOwn(require.cache, function(value, key){
        if (key.indexOf('lib') !== -1 && key.indexOf('node_modules')===-1){
            delete require.cache[key];
        }
    });
}