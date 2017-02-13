//引入模块
var gulp= require("gulp"),
	liverload = require("gulp-livereload"),
	webserver = require("gulp-webserver"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sass = require("gulp-ruby-sass"),
	imagemin = require("gulp-imagemin"),
	pngquant = require("imagemin-pngquant")
	//concat = require("gulp-concat")
//注册任务
gulp.task("webserver",function(){
	gulp.src("dist").pipe(webserver({
		liverload:true,
		open:true
	}))
})
gulp.task("html",function(){
	gulp.src("src/**/*.html").pipe(gulp.dest("dist"))
})
gulp.task("ys",function(){
	return gulp.src("src/build/**/*.js")
//	.pipe(uglify({preserveComments:'some'}))
	.pipe(gulp.dest("dist/js"))
})
gulp.task("sass",function(){
	return sass("src/scss/**/*.scss",{style:"compact"})
	.on('error',function(err){
		console.log(err.message)
	})
	.pipe(gulp.dest("dist/css"))
})
gulp.task("images",function(){
	return gulp.src("src/images/**/*.{png,jpg,gif,svg,JPG}")
//	 .pipe(imagemin({
//	 	progressive:true,
//	 	svgoPlugins:[{removeViewBox:false}],
//	 	use:[pngquant()]
//	 }))
	.pipe(gulp.dest('dist/images'))
})

gulp.task("fonts",function(){
	return gulp.src("src/fonts/**/*.{eot,svg,ttf,woff}")
//	 .pipe(imagemin({
//	 	progressive:true,
//	 	svgoPlugins:[{removeViewBox:false}],
//	 	use:[pngquant()]
//	 }))
	.pipe(gulp.dest('dist/fonts'))
})


// gulp.task("concat",function(){
//	gulp.src("src/js/**/*.js")
// 	.pipe(concat("libs.js"))
// 	.pipe(gulp.dest("dist/js"))
// })
gulp.task("watch",function(){
	gulp.watch("src/**/*.scss",["sass"]);
	gulp.watch("src/**/*.html",["html"]);
	gulp.watch("src/**/*.js",["ys"]);
	
});
gulp.task("default",["watch","webserver","images","fonts","sass","html","ys"]);