//模板引擎
//常见模板引擎ejs jade  handlerbar underscore  nunjunks  {{}}


const ejs = require('ejs');
const fs = require('fs');
let template = fs.readFileSync('./template.html', 'utf8');

//使用ejs

// let result = ejs.render(template, {
//   name: 'Tiki',
//   age: 3
// })



/* template.html
//HTML 代码段
//...
<body>
  <%=name%>
  <%=age%>
</body>


*/


//把  {{name}}   {{age}}
//中的name 和age替换掉
//实现模板引擎基本的原理   RegExp
function render(templateStr, obj) {
  templateStr.replace(/\{\{(.+?)\}\}/g, function () {
    return obj[arguments[1]];
  })
}


//模板引擎实现核心原理
//1> with语法
//2> new Function(xxx,函数体)
function render(templateStr, obj) {
  let head = 'let str="";\r\n';
  head += 'with(xxx){\r\n';
  let content = 'str += `';
  templateStr = templateStr.replace(/\{\{(.+?)\}\}/g, function () {
    return '${' + obj[arguments[1]] + '}';
  });
  content += templateStr.replace(/\{\%(.+?)\%\}/g, function () {
    return '`\r\n' + arguments[1] + '\r\nstr+=`'
  });
  let tail = '`\r\n} return str';
  let fn = new Function('xxx', head + content + tail);
  return fn(obj);
}

let r = render(template, {
  arr: [1, 2, 3]
});
console.log(r);