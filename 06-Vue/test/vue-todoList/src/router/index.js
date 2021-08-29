//router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Shouye from '../pages/Shouye.vue';
import Inland from '../pages/Inland.vue';
import International from '../pages/International.vue';
import MessageDetail from '../pages/MessageDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:Home
    },{
      path:'/home',
      component:Home,
      children:[
        {
          path:'',
          component:Shouye
        },
        {
          path:'/home/shouye',
          component:Shouye
        },
        {
          // path:'/home/inland',
          path:'guonei',
          component:Inland,
          children:[
            {
              path:'detail/:mid',
              component:MessageDetail
            }
          ]
        },{
          // path:'/home/international',
          path:'guoji',
          component:International
        },
      ]
    },{
      path:'/about',
      component:About
    }
  ]
})