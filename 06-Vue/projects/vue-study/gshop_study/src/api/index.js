import ajax from "./ajax.js";

/*获取用户地址 */
export const getAddress = (latitude, longitude) => ajax({
  method: 'GET',
  // ulr:`/api/position/${latitude},${longitude}`
  url: `/position/${latitude},${longitude}`

});

/*获取美食列表 */
export const getCateGory = () => ajax({
  method: 'GET',
  // ulr:`/api/position/${latitude},${longitude}`
  url: '/index_category',
  headers: {
    needToken: true,
  }

});

/*获取商家列表 */
// export const getShopList = () => ajax({
//   method: 'GET',
//   url: '/shops?latitude=40.10038&longitude=116.36867'
//   // url:`shop?/latitude=${latitude}&longitude=${longitude}`
// })
export const getShopList = (latitude, longitude) => ajax({
  method: 'GET',
  url: '/shops',
  // url:`shop?/latitude=${latitude}&longitude=${longitude}`
  params: {
    latitude,
    longitude
  },
  headers: {
    needToken: true,
  }
});


/*发送手机验证码 */
export const sendCode = (phone) => ajax({
  url: '/sendcode',
  method: 'GET',
  params: {
    phone
  }
});

/*用户名密码登陆 */
export const loginWithUserName = ({
  username,
  pwd,
  captcha
}) => ajax({
  url: '/login_pwd',
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: {
    'name': username,
    pwd,
    captcha
  }
});

/*手机号验证码登陆 */
export const loginWithPhoneNumber = (obj) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    'phone': obj.phoneNumber,
    'code': obj.code
  }
});

/*自动登录 */
export const autoLogin = () => ajax({
  url: '/auto_login',
  // params:{
  //   token:'xxx'
  // }
  headers: {
    needToken: true
  }
})

//mock 测试
export const test = () => ajax({
  url:'/test',
})
/*回顾一下 发送请求的的过程
  1. ajax('/test') 会请求 '/test' 这个接口地址
  2.此时会走到 请求拦截器中 ，请求拦截器中设置了baseURL：'/api'
    此时真正发送请求的地址是  '/api/test'
    由于地址不全，浏览器默认会补全地址  localhost:8081/api/test
    由于地址中有 /api  字段
    符合 设置的代理服务器 proxy中规定的 键 
  3.所以 走到 代理服务器proxy中
    此时 代理服务器 代理的 target: localhost:4000 
    所以真正请求的地址是 localhost:4000/api/test  
*/
//为什么 ajax('/test')没有被 mock拦截下来呢？ 
//因为 mock 拦截的是服务端的 请求地址，需要携带 /api 字段
//而此时 发送的 请求地址中不含有 /api 
//所以
// 所以   需要使用 ajax('/api/test') 的方式拦截

//mock数据
export const mockDatas =()=>ajax({
  url:'getMockDatas'
})