import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'


export default [{
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  }
]
