import VueRouter from 'vue-router'
// import Home from '../Pages/Home'
import Article from '../Pages/Article'
import Tag from '../Pages/Tag'
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Article
    },
    {
      path: '/tags',
      component: Tag
    }
  ]
})
