import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import NotFound from './views/404.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/faq',
    meta: { title: 'Faq' },
    component: Faq,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]