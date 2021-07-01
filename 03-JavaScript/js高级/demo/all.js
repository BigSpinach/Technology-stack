//  我们希望 读取数据 node 异步 会等待同步代码都执行完成后在执行
const fs = require('fs');

let school = {}
// 并发的问题 如何解决 计数器
const after = (times, fn) => () => --times === 0 && fn();
let newAfter = after(2, () => {
  console.log(school);
});
fs.readFile('./03-JavaScript/js高级/demo/name.txt', 'utf8', (err, data) => {
  school['name'] = data;
  newAfter();
});
fs.readFile('./03-JavaScript/js高级/demo/age.txt', 'utf8', (err, data) => {
  school['age'] = data;
  newAfter();
});
