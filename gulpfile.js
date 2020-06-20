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
            .pipe(rename('style.min.css'))
            .pipe(sourcemaps.write('.')) // to make map file with css file
            .pipe(gulp.dest('dist/css'))
})

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');

gulp.task('js-all', () =>{
     return browserify('src/js/all.js')
            .transform('babelify', {presets: ['@babel/preset-env']})
            .bundle()
            .pipe(source('all.js')) // Readable Stream -> Stream Of Vinyl Files
            .pipe(buffer()) // Vinyl Files -> Buffered Vinyl Files
            // Pipe Gulp Plugins Here
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
    }
);
gulp.task('js-shop', () =>{
    return browserify('src/js/shop.js')
           .transform('babelify', {presets: ['@babel/preset-env']})
           .bundle()
           .pipe(source('shop.js')) // Readable Stream -> Stream Of Vinyl Files
           .pipe(buffer()) // Vinyl Files -> Buffered Vinyl Files
           // Pipe Gulp Plugins Here
        //    .pipe(uglify())
           .pipe(gulp.dest('dist/js'));
   }
);

gulp.task('js-single', () =>{
    return browserify('src/js/single-product.js')
           .transform('babelify', {presets: ['@babel/preset-env']})
           .bundle()
           .pipe(source('single-product.js')) // Readable Stream -> Stream Of Vinyl Files
           .pipe(buffer()) // Vinyl Files -> Buffered Vinyl Files
           // Pipe Gulp Plugins Here
        //    .pipe(uglify())
           .pipe(gulp.dest('dist/js'));
   }
);

gulp.task('js-checkout', () =>{
    return browserify('src/js/checkout.js')
           .transform('babelify', {presets: ['@babel/preset-env']})
           .bundle()
           .pipe(source('checkout.js')) // Readable Stream -> Stream Of Vinyl Files
           .pipe(buffer()) // Vinyl Files -> Buffered Vinyl Files
           // Pipe Gulp Plugins Here
        //    .pipe(uglify())
           .pipe(gulp.dest('dist/js'));
   }
);


gulp.task('watch',()=>{
    gulp.watch('src/**/*.scss',gulp.series('sass'));
    gulp.watch('src/**/*.js',gulp.series('js-all'));
    gulp.watch('src/**/*.js',gulp.series('js-shop'));
    gulp.watch('src/**/*.js',gulp.series('js-single'));
    gulp.watch('src/**/*.js',gulp.series('js-checkout'));
})

// add defualt task
gulp.task('default',gulp.series('watch'));