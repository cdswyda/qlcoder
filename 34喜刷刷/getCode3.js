let http = require('http');
let crypto = require('crypto');
let fs = require("fs");

let baseurl = 'http://www.qlcoder.com/train/handsomerank...&user=cdswyda&checkcode=';
let codePrefix = '20170512cdswyda';

let currCode = 640;

// 经过50条的尝试 1000以下仅出现了一次
let index = 100000;
let _getCode = function () {
    return index++;
};


let temp;
let code;
let hash;
while (true) {
    code = _getCode();
    hash = crypto.createHash('md5').update(codePrefix + currCode + code);
    temp = hash.digest('hex').substr(0, 6);
    if (temp == '000000') {
        // 如果找到
        console.log('找到了' + currCode + ':' + code);
        let geturl = baseurl + code;
        // 发送请求
        sendCode(geturl);
        // 使用 utf8 编码写入数据
        fs.appendFileSync('./output3.txt', currCode + ':' + code + ':' + geturl + '\n', 'UTF8');



        // 当前票数+1 index重置
        currCode++;
        index = 100000;
    }

    if (currCode > 820) {
        break;
    }
}
function sendCode(url) {
    // 发送请求            
    console.log(url);
    http.get(url, function name(res) {
            res.on('end', function () {
                console.log('end');
            });
        })
        .on('error', function (e) {
            console.log(`请求错误: ${e.message}`);
        });
}