import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'

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
