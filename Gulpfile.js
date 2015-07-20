var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/Equality.js')
        .pipe(uglify())
        .pipe(rename('equality.min.js'))
        .pipe(gulp.dest('dist'));
});
