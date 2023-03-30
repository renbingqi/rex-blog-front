import VueRouter from 'vue-router'
// import Home from '../Pages/Home'
import Articles from '../Pages/ArticleList'
import Tag from '../Pages/Tag'
import WriteBlog from '../Pages/WriteBlog'
import Article from '../Pages/Article'
import Classification from '../Pages/classification'
import ArticleListClasses from '../Pages/ArticleListClasses'
import TempArticleList from '../Pages/TempArticleList'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Articles,
      meta: {
        title: 'ArticlesList'
      }
    },
    {
      path: '/temp_articles',
      component: TempArticleList,
      meta: {
        title: 'TempArticleList'
      }
    },
    {
      path: '/tags',
      component: Tag,
      meta: {
        title: 'Tag'
      }
    },
    {
      path: '/write_blog',
      component: WriteBlog,
      meta: {
        title: 'WriteBlog'
      }
    },
    {
      path: '/article',
      component: Article,
      meta: {
        title: 'Article'
      },
      children: [{
        path: 'id=:id',
        component: Article,
        meta: {
          title: 'Article'
        }
      }]
    },
    {
      path: '/classification',
      component: Classification,
      meta: {
        title: 'Classification'
      }
    },
    {
      path: '/classification/:classes',
      component: ArticleListClasses,
      meta: {
        title: 'ArticleListClasses'
      }
    }
  ]
})
