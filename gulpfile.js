const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const fontmin = require('gulp-fontmin');
const cleanCss = require('gulp-clean-css');
const gulpSass = require('gulp-sass');

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

gulp.task('sass', ()=>{
    return gulp.src(__dirname+'/styles/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/*.scss', ['sass']);
});

gulp.task('tasks', function(){
    gulp.start('imagemin', 'fontmin', 'sass', 'sass:watch')
});

