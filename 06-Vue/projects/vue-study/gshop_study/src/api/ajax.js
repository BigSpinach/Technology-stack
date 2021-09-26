import axios from 'axios';
import qs from 'qs';
import router from '../router';


//1. 生成Axios的伪实例（伪实例：不是new Axios得到的，但是它拥有axios的所有属性和方法）
const instance = axios.create({
  baseURL: '/api',
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

  //携带token的
  if (config.headers.needToken) {//需要token的轻轻方式 使用header.needToken标识
    let token = localStorage.getItem('token_key');
    if (token) { //有token，自动登录
      config.headers.authorization = token;
    } else { //无token，抛出需要手动登陆的提示
      throw Error('登陆信息失效，请重新登陆');
    }
  }else{
    //不需要token的请求方式
  }

  return config;
});


//3. 添加响应拦截器
instance.interceptors.response.use(
  response => response.data,
  err => {
    console.log(err);
    // console.log('出错了：' + err.message);
    if (!err.response) { //请求都没发出去，就报错了（token都没有的情况）
      alert(err.message);
      //跳转至登录页
      if (router.currentRoute.path !== '/login') {
        router.replace('./login');
      }
    } else { //发出请求后出现的异常
      if (err.response.status === 401) {
        //401,登陆携带的验证信息有误
        alert('登陆信息失效，请重新登陆');
        //跳转至登录页
        if (router.currentRoute.path !== '/login') {
          router.replace('./login');
        } else if (err.response.status === 404) {
          alert('请求资源不存在');
        } else {
          //其他请求错误
          alert('请求错误');
        }
      }
    }
    return Promise.reject(err.response.data);


  }

)

export default instance;
