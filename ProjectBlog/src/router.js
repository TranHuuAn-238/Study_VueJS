import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import BlogDetail from './pages/BlogDetail';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs
    },
    {
        path: '/blog-detail/:title.:id',
        name: 'blog-detail',
        component: BlogDetail
    }
]

const router = new VueRouter({
    routes
});

export default router