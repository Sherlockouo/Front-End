import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MusicPlayer from '../views/MusicPlayer'
import About from '../views/About'
import Works from "../views/Works";
import Blog from "../views/Blog";
import VideoPlayer from "../views/VideoPlayer";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'MusicPlayer',
    component: MusicPlayer
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/works',
    name:'Works',
    component: Works
  },
  {
    path:'/blog',
    name:'Blog',
    component: Blog
  },
  {
    path:'/video',
    name:'Video',
    component: VideoPlayer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
