let xhr = new XMLHttpRequest();
xhr.open('GET', 'API(URL)接口地址');
//URL的地址中，get请求方式是 基于？传参的方式向服务器发送数据的
//例如 https://www.cnblogs.com/bigspinach/p/9194366.html?id=250&pages=12

/*   
xhr.onreadystatechange =function(){
   if(xhr.readyState === 4 &&xhr.status ===200){
       console.log(JSON.parse(xhr.responseText));
   }
};
*/
xhr.onreadystatechange = () => {
   if(xhr.readyState === 4 &&xhr.status ===200){
       console.log(JSON.parse(xhr.responseText));
   }
};


xhr.send(null);




