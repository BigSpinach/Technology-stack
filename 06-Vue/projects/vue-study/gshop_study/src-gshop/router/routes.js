//常规路由加载方式
// import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue';
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'

//使用ES10 的import函数
//路由组价懒加载 ：会将每一个组件打包成一个单独的js文件，需要哪个就加载哪个
const Msite = ()=>import('../pages/Msite/Msite.vue');
const Order = ()=>import('../pages/Order/Order.vue');
const Profile = ()=>import('../pages/Profile/Profile.vue');
const Search = ()=>import('../pages/Search/Search.vue');
const Login = ()=>import('../pages/Login/Login.vue');
const Shop = ()=>import('../pages/Shop/Shop.vue');

import Good from '../pages/Shop/Good/Good.vue';
import Rating from '../pages/Shop/Rating/Rating.vue';
import Info from '../pages/Shop/Info/Info.vue';


export default [{
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children:[
      {
        path:'/shop/good',
        component:Good,
      },
      {
        path:'rating',
        component:Rating,
      },
      {
        path:'info',
        component:Info,
      },
      {
        path:'',
        redirect:'good',
      },
    ]
  },
]
