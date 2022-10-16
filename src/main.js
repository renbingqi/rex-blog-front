import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueParticlesBg from 'particles-bg-vue'
import VueRouter from 'vue-router'
import router from './Router'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueParticlesBg)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
