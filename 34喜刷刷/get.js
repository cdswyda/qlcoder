let http = require('http');

let arr = [
    // 放入每个链接
];

arr.forEach(function (url, i) {
    setTimeout(function () {
        http.get(url, function name(res) {
            res.on('end', function () {
                console.log('end');
            })
        })
        console.log(url);
    }, i * 2000);
})