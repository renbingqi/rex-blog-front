<template>
  <div>
A    <div class="article" v-for="item in show_article_list" :key="item.id">
      <div class="articleName" style="padding-top: 20px">
        <el-link @click="showArticel(item.id) "> {{ item.name }}</el-link>
      </div>
      <div>
        <span class="el-icon-edit-outline"></span>
        <span>发表于</span>
        <span style="border-bottom: 1px dashed black">{{ item.datetime }}</span>
        <span>|</span>
        <span class="el-icon-folder-opened"></span>
        <span>分类于</span>
        <span style="border-bottom: 1px solid black"><a href="">{{ item.classes }}</a></span>
        <span>|</span>
        <span class="el-icon-view"></span>
        <span>热度</span>
        <span>{{ item.heat }}℃</span>
      </div>
      <div v-html="item.abstract" class="markdown-body"></div>
      <div>
        <el-row style="padding-bottom: 20px">
          <el-button class="button-border" @click="showArticel(item.id)">阅读全文 »</el-button>
        </el-row>
      </div>
    </div>
    <Pagination v-if='show' @changePagination="changePagination"></Pagination>
  </div>

</template>
<script>
import axios from 'axios'
import { marked } from 'marked'
import 'github-markdown-css'
import Pagination from '../components/pagination'
export default {
  name: 'ArticleList',
  data () {
    return {
      article_list: [],
      show_article_list: [],
      show: false,
      numberPerPage: 5
    }
  },
  created () {
    axios.get('/articles').then(res => {
      // console.log(res.data.data)
      var articlesList = []
      var articleJson = res.data.data
      for (var i in articleJson) {
        var articleObj = {}
        var id = articleJson[i].id
        var name = articleJson[i].title
        var datetime = articleJson[i].created
        var classes = articleJson[i].classifications
        var heat = articleJson[i].hot
        var content = marked(articleJson[i].body)
        var abstract = marked(articleJson[i].body.split('\n')[0])
        articleObj.id = id
        articleObj.name = name
        articleObj.datetime = datetime
        articleObj.classes = classes
        articleObj.heat = heat
        articleObj.content = content
        articleObj.abstract = abstract
        articlesList.push(articleObj)
      }
      this.article_list = articlesList
      this.show_article_list = this.article_list.slice(0, this.numberPerPage)
      if (this.article_list.length > 10) {
        this.show = true
      }
      this.$store.commit('saveArticleInfo', this.article_list)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    showArticel (id) {
      axios.get('/articles/update_hot/' + id).then(res => {
        if (res.data.code === 200) {
          this.$store.state.articleInfo.forEach(item => {
            if (item.id === id) {
              item.heat += 1
            }
          })
          this.$router.push('/article/id=' + id)
        }
      }, err => {
        console.log(err)
      })
    },
    changePagination (val) {
      this.show_article_list = this.article_list.slice((val - 1) * this.numberPerPage, val * this.numberPerPage)
    }
  },
  components: { Pagination }
}
</script>

<style scoped>
.article, .paginations {
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 15px;
}

#main {
  margin-top: 10px;
}

.content {
  line-height: 50px;
}

.el-link {
  font-size: 30px;
}

.el-link.el-link--default:hover {
  color: #333333;
}

.el-link.is-underline:hover:after {
  border-bottom-width: 2px;
  border-bottom-color: #d9d9d9;
}

span {
  font-size: 13px;
  margin-left: 8px;
  opacity: 0.7;
  /*padding-left: 5px;*/
}

.el-icon-edit-outline, .el-icon-folder-opened, .el-icon-view {
  color: #67C23A;
}

.el-pager {
  padding-top: 10px;
}

.markdown-body {
  font-size: 15px;
  text-align: left;
  padding: 30px 0 30px 50px;
  opacity: 0.7
}

.button-border {
  border: 2px solid black;
  border-radius: 10px;
  opacity: 0.9;
}

.button-border:hover {
  color: white;
  background-color: black;
}
</style>
