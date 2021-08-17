//CORS（ Cross-Origin Resource Sharing， 跨 源 资 源 共 享）

//IE8中引入了XDR（XDomainRequest）类型

//常用跨源技术
//1. img标签
var img = new Image();
img.onload = img.onerror = function(){
    alert(" Done!");
}; 
img.src = "http:// www.example.com/ test? name = Nicholas";
//1.只 能 发 送 GET 请 求， 
//2.无 法 访 问 服 务 器 的 响 应 文 本。 
//因 此， 图 像 Ping 只 能 用 于 浏 览 器 与 服 务 器 间 的 单 向 通 信。