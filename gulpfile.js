var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');


const buildFunction = ()=> {

        gulp.src(['assets/js/!(app)*.js', 'assets/js/app.js'])
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(uglify())
            .pipe(concat('belel.js'))
            .pipe(gulp.dest('dist'));

};
gulp.task('build', ()=> {
    return watch('assets/js/*.js', buildFunction)
});
