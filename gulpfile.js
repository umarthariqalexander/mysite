const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src(__dirname+'/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
