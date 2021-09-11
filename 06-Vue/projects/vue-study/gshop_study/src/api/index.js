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
  url: '/index_category'

})

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
  params:{
    latitude, 
    longitude
  }
})