import VueRouter from 'vue-router'
import Home from '../Pages/Home'
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    }
  ]
})
