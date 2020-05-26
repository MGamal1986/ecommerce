// Setup Constants
const gulp = require('gulp');

/******************
** SASS variables**
*******************/
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
// set the const for minifing css
const cleanCss = require('gulp-clean-css');
// set name of output file for each gulp task
const rename = require('gulp-rename');
// select sass compiler to be node sass we can choose dart sass
sass.compiler = require('node-sass');

/*
 > source map configuration
*/
const sourcemaps = require('gulp-sourcemaps');

/*
 > gulp notify
*/
const notify = require("gulp-notify");

/******************
** babel variables**
*******************/
const babel = require('gulp-babel');

/*
  > utilities variable
*/
const concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// sass task
gulp.task('sass',()=>{
    return gulp.src('src/scss/style.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(prefixer('last 2 versions'))
            .pipe(cleanCss())
            .pipe(rename('style..min.css'))
            .pipe(sourcemaps.write('.')) // to make map file with css file
            .pipe(gulp.dest('dist/css'))
})

// babel task
gulp.task('babel_all', () =>{
    return gulp.src('src/js/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'))
    }
);
gulp.task('babel_shop', () =>{
    return gulp.src(['src/js/includes/*.js','!src/js/includes/slider.js'])
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(concat('shop.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'))
    }
);


gulp.task('watch',()=>{
    gulp.watch('src/**/*.scss',gulp.series('sass'));
    gulp.watch('src/js/**/*.js',gulp.series('babel_all'));
    gulp.watch('src/js/**/*.js',gulp.series('babel_shop'));
})

// add defualt task
gulp.task('default',gulp.series('watch'));