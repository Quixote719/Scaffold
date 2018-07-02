//gulpfile.js
const gulp = require('gulp')
const path = require('path')
const shell = require('gulp-shell')


//目录常量
const SERVER_PATHS = {
    files:['./server/**/*.js'],
    watchFiles:['./server/**/*.js'],
    output:'./build/server'
}

const STATIC_RES = {
    files: [path.resolve(__dirname, 'res', '**/*'), path.resolve(__dirname, 'index.html')],
    output: path.resolve(__dirname, 'build', 'www')
}

//拷贝服务器文件
gulp.task('build-server',function(){
    return gulp.src(SERVER_PATHS.files)
        .pipe(gulp.dest(SERVER_PATHS.output))
})


//监视服务器文件变化
gulp.task('watch-server',['build-server'],function(){
    gulp.watch(SERVER_PATHS.watchFiles,['build-server'])
})

//将res和index.html拷贝到build/www中
gulp.task('copy-resource', function() {
    gulp.src(STATIC_RES.files)
        .pipe(gulp.dest(STATIC_RES.output))
})

gulp.task('git:diff', shell.task('git diff --name-status --cached HEAD > script/git_diff.log'))
