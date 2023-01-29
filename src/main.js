import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueParticlesBg from 'particles-bg-vue'
import VueRouter from 'vue-router'
import router from './Router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueParticlesBg)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
