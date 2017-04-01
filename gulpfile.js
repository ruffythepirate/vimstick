// Gulp.js configuration
var
// modules
  gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  eslint = require('gulp-eslint'),
  _ = require('lodash');

const testFiles = 'specs/**/*.spec.js';
const appFiles = 'src/app/**/*.js';
const allJsFiles = [testFiles, appFiles]

gulp.task('eslint', function () {
  return gulp
  .src(appFiles)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
})


gulp.task('test', (callback) => {
  freshFiles();
  const stream = gulp.src('**/*.spec.js', {
      read: false
    }) // `gulp-mocha` needs filepaths so you can't have any plugins before it
    .pipe(mocha({
      // reporter: 'nyan'
    }))
  return stream;
});

gulp.task('watch', () => gulp.watch(allJsFiles, ['test'])); //['src/app/**/*.js','specs/**/*.spec.js' ], ['test']));

function freshFiles(chunk, enc, cb) {
  console.log('Refreshing files...')
  _.forOwn(require.cache, function(value, key) {
    if (key.indexOf('lib') !== -1 && key.indexOf('node_modules') === -1) {
      delete require.cache[key];
    }
  });
}