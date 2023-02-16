<template>
  <div>
    <div class="article" v-for="item in article_list" :key="item.id">
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
      <div >
        <el-row style="padding-bottom: 20px">
          <el-button class="button-border" @click="showArticel(item.id)">阅读全文 »</el-button>
        </el-row>
      </div>
    </div>
    <div class="paginations">
      <div class="paginations-2">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          style="padding-top: 10px">
        </el-pagination>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import 'github-markdown-css'

export default {
  name: 'ArticleList',
  data () {
    return {
      article_list: []

    }
  },
  created () {
    var classes = this.$route.path.split('/')[2]
    console.log(this.$store.state.articleInfo)
    this.$store.state.articleInfo.forEach(item => {
      if (item.classes === classes) {
        this.article_list.push(item)
      }
    })
  },
  methods: {
    showArticel (id) {
      axios.get('/articles/update_hot/' + id).then(res => {
        if (res.data.code === 200) {
          this.$router.push('/article/id=' + id)
        }
      }, err => {
        console.log(err)
      })
    }
  }
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
  opacity:0.7
}
.button-border{
  border: 2px solid black;
  border-radius: 10px;
  opacity: 0.9;
}
.button-border:hover{
  color: white;
  background-color: black;
}
</style>
