import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import Links from '../pages/Links.vue'
import NotFound from '../pages/404.vue'

export const routes = [
  { path: '/', 
   component: Home,  
  },
  {
    path: '/faq',
    component: Faq,
  },
  {
    path: '/links',
    component: Links,
  },
  { path: '/:path(.*)',
    component: NotFound 
  },
]