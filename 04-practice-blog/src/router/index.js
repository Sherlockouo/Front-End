import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
    {
      path: '/works',
      name: 'Works',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Works')
    },
    {
      path: '/blog',
      name: 'Blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Blog')
    },
    {
      path: '/video',
      name: 'Video',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Video')
    },
    {
      path: '/music',
      name: 'Music',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "music" */ '../views/Music'),
      children:[
        {
          path:'/music/listening',
          component:()=>import(/* webpackChunkName: "music" */ '../components/music/MusicPlaying')
        },
        {
          path: '/music/recommend',
          component:()=>import(/* webpackChunkName: "music" */ '../components/music/MusicRecommend')
        },
        {
          path: '/music/search',
          component:()=>import(/* webpackChunkName: "music" */ '../components/music/MusicSearch')
        },
        {
          path: '/music/list',
          component:()=>import(/* webpackChunkName: "music" */ '../components/music/MusicList')
        },
        {
          path: '/music/history',
          component:()=>import(/* webpackChunkName: "music" */ '../components/music/MusicHistory')
        }
      ]
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
