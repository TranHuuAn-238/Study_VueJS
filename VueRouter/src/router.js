import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

import Login from './pages/Login.vue';
import ListUser from './pages/ListUser.vue';


Vue.use(VueRouter)


let isLogin = true;

const routes = [
    { path: '/', component: HomePage,

      // nested routes
      children: [
        { path: '', component: Home },
        { path: 'about-us', component: AboutUs }
      ]
    },
    // { path: '/about-us', component: AboutUs },
    { path: '/login', component: Login },
    { path: '/user/:id?', name: 'userABC', component: ListUser,
      beforeEnter: (to, from, next) => {
        // tuong tu router.beforeEach nhung chi ap dung voi 1 route
        if (isLogin) {
          next();
        } else {
          // next('/login');
          next({ path: '/login', query: { redirect: 'user' } })
        }
      }
    },       // dynamic route (data trong comp tuy vao :id , ? co nghia la id nay co the co hoac khong)
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    mode: 'history', // mac dinh mode la hash thi URL se co dang dau # dau, VD: #/my-path
    routes
});
// router.beforeEach((to, from, next) => {
//   // chay voi moi route
//   console.log('to = ', to );
//   console.log('from = ', from );
//   console.log('next = ', next );
//   next();
// })

export default router;