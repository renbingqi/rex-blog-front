// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {}
// 准备mutations——用于操作数据（state）
const mutations = {
  saveArticleInfo (state, value) {
    state.articleInfo = value
  },
  saveTempArticleInfo (state, value) {
    state.tempArticleInfo = value
  }
}
// 准备state——用于存储数据
const state = {
  articleInfo: '',
  tempArticleInfo: ''
}
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
