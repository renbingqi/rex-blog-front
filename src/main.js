import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueParticlesBg from 'particles-bg-vue'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueParticlesBg)

new Vue({
  render: h => h(App)
}).$mount('#app')
