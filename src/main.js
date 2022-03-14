import { createApp } from 'vue'
import App from './App.vue'
import Faq from './pages/faq/App.vue'

const Link = window.location.pathname.slice(1)

if ( window.location.pathname == "/" ) {
  const app = createApp(App)
  app.mount('body')
}

if ( window.location.pathname !== "/" ) {
  const app = createApp(Faq)
  app.mount('body')
}