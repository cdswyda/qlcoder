let http = require('http');

let baseUrl = 'https://movie.douban.com/top250?start=';
const PAGE_SIZE = 25;

let endPage = 166 / 25 >> 0;
let i = 0;

let pagesData = [];
let promiseArr = [];
do {
    promiseArr.push(new Promise(function (resolve) {
        http.get(baseUrl + i * PAGE_SIZE, function (res) {
            var html = [];
            res.on('data', function (data) {
                html.push(data);
            });
            res.on('end', function () {
                // pagesData.push(Buffer.concat(html));
                resolve(pagesData.push(Buffer.concat(html)));
            });
        });
    }));
    ++i;
} while (i > endPage);

Promise.all(promiseArr).then(function (datas) {
    datas.forEach(function(data) {
        console.log(data);
    });
})