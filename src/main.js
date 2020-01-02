import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'
import App from './App.vue'

import Data from './components/Data'
import Task from './components/Task'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
  { path: '/data/:type', component: Data},
  { path: '/task', component: Task}
]  

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
