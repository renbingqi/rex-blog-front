import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueParticlesBg from 'particles-bg-vue'
import VueRouter from 'vue-router'
import router from './Router'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueParticlesBg)
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
