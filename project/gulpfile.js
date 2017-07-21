var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('hello',function(){
	console.log('hello sass');
	/*var cssSrcArr = ['sass/*.scss','sass/mixins/*.scss']*/

	return gulp.src('gulptest/sass/index.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('gulptest/css'))
	});
/*
gulp.task('hello-mix',function(){
	console.log('hello sass');

	return gulp.src('gulptest/sass/mixins/*.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('gulptest/css'))
});
*/