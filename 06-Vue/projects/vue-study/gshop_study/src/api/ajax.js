import axios from 'axios';
import qs from 'qs';


//1. 生成Axios的伪实例（伪实例：不是new Axios得到的，但是它拥有axios的所有属性和方法）
const instance = axios.create({
  baseURL:'/api',
})

//2.添加请求拦截器
instance.interceptors.request.use(config => {
  //config是什么？  包含了当前请求的所有请求信息的对象（url，methods,data....）
  //默认config.data 是 json格式的数据{name:xxx,age:12}
  //但是当前服务器只能处理 en-coding 格式的数据，name=xxx&age=12
  //所以需要转换格式 
  //使用 node自带模块 qs
  config.data = qs.stringify(config.data);
  // console.log(config);
  return config;
});


//3. 添加响应拦截器
instance.interceptors.response.use(
  response => response.data,
  err => {
    console.log('出错了：' + err.message);
  }
)

export default instance;


