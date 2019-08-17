const gulp = require('gulp')
const babel = require('gulp-babel')
const rule = require('babel-preset-es2017')

gulp.task('bulid', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel(rule))
        .pipe(gulp.dest('lib'))
})


gulp.task('watch', () => { 
    gulp.watch('src/**/*.js', gulp.series('bulid'))
    return gulp.src('src/**/*.js')
        .pipe(babel(rule))
        .pipe(gulp.dest('lib'))
})