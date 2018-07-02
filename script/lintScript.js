/**
 * Created by yaojia7 on 2017/7/7.
 */
const fs = require('fs');
const shelljs = require('shelljs');
const resolve = require('path').resolve;

const logFile = resolve(__dirname, 'git_diff.log');

let data = fs.readFileSync(logFile).toString();

let files = data.split('\n').filter(f => {
        return f && !f.startsWith('D');  //不检查被删除的文件
}).map(f => {
    return f.split('\t')[1];
});

let srcFiles = files.filter(f => {
        return f.startsWith('src') && (f.endsWith('.js') || f.endsWith('.jsx'));
});

let serverFiles = files.filter(f => {
        return f.startsWith('server') && f.endsWith('.js');
});

let allFiles = srcFiles.concat(serverFiles);

let command = `eslint ${allFiles.join(' ')}`;

let result = shelljs.exec(command);

if(result.code !== 0) {
    process.exit(1);
}else{
    process.exit(0);
}
