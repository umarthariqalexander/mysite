const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const fontmin = require('gulp-fontmin');
const cleanCss = require('gulp-clean-css');

gulp.task('imagemin', () =>
    gulp.src(__dirname+'/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('fontmin', () =>
    gulp.src(__dirname+'/styles/myfonts/*.ttf')
        .pipe(fontmin())
        .pipe(gulp.dest('dist/fonts'))
);

gulp.task('minify-css', ()=>{
    return gulp.src(__dirname+'/styles/*.css')
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'));
});
