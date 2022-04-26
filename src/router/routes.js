import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import Templates from '../pages/Templates.vue'
import QuickReply from '../pages/templates/QuickReply.vue'
import ContactUs from '../pages/templates/ContactUs.vue'
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
    path: '/templates',
    component: Templates,
  },
  {
    path: '/templates/quickreply',
    component: QuickReply,
  },
  {
    path: '/templates/contactus',
    component: ContactUs,
  },
  { path: '/:path(.*)',
    component: NotFound 
  },
]