import VueRouter from 'vue-router'
// import Home from '../Pages/Home'
import Articles from '../Pages/ArticleList'
import Tag from '../Pages/Tag'
import WriteBlog from '../Pages/WriteBlog'
import Article from '../Pages/Article'
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Articles
    },
    {
      path: '/tags',
      component: Tag
    },
    {
      path: '/write_blog',
      component: WriteBlog
    },
    {
      path: '/article',
      component: Article,
      children: [{
        path: 'id=:id',
        component: Article
      }]
    }
  ]
})
