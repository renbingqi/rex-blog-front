<template>
  <div id="main">
    <el-input
      placeholder="请输入文章标题"
      v-model="title"
      clearable
      style="width: 42%; margin-right: 5%">
    </el-input>
    <el-select v-model="classification" clearable placeholder="请选择分类" style="width: 20%;margin-right: 3%">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label">
      </el-option>
    </el-select>
    <el-button round style="width: 14%" @click="saveTemp">保存草稿</el-button>
    <el-button type="danger" round style="width: 14%" @click="publishArticle">发布文章</el-button>
    <mavon-editor ref=md @imgAdd="$imgAdd" class="mavonEditor" v-model="content"/>
  </div>
</template>
<script>
import axios from 'axios'
import { marked } from 'marked'

export default {
  name: 'WriteBlog',
  data () {
    return {
      id: '',
      title: '',
      options: [],
      classification: '',
      content: '',
      type: ''
    }
  },
  created () {
    var id = this.$route.fullPath.split('=')[1]
    axios.get('/classifications').then(res => {
      var classList = []
      for (var i in res.data.data) {
        var value = res.data.data[i].id
        var label = res.data.data[i].title
        classList.push({
          value: value,
          label: label
        })
      }
      this.options = classList
    }, err => {
      console.log(err)
    })
    if (id !== undefined) {
      var tempArticleList = this.$store.state.tempArticleInfo
      for (var i in tempArticleList) {
        if (tempArticleList[i].id === Number(id)) {
          var articleJson = tempArticleList[i]
          this.content = articleJson.ori_content
          this.title = articleJson.name
          this.classification = articleJson.classes
          this.id = articleJson.id
        }
      }
    }
  },
  methods: {
    publishArticle () {
      // 创建文章：分为创建新的文章，把草稿创建成文章
      // 有id的数据是草稿
      var id = this.$route.fullPath.split('=')[1]
      const data = new FormData()
      data.append('title', this.title)
      data.append('class', this.classification)
      data.append('body', this.content)
      data.append('temp', '0')
      if (id === undefined) {
        // 创建文章
        axios.post('/articles/create', data).then(res => {
          if (res.status === 200 && res.statusText === 'OK') {
            // 更新state里面的信息
            axios.get('/articles', {
              params: {
                temp: 0
              }
            }).then(res => {
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
              console.log(articlesList)
              this.$store.commit('saveArticleInfo', articlesList)
              this.$router.push('/')
            }).catch(err => {
              console.log(err)
            })
          }
        }, err => {
          console.log(err)
        })
      } else {
        // 更新文章
        axios.post('/articles/update/' + id, data).then(res => {
          if (res.status === 200 && res.statusText === 'OK') {
            axios.get('/articles', {
              params: {
                temp: 0
              }
            }).then(res => {
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
              console.log(articlesList)
              this.$store.commit('saveArticleInfo', articlesList)
              this.$router.push('/')
            }).catch(err => {
              console.log(err)
            })
          }
        }, err => {
          console.log(err)
        })
      }
    },
    saveTemp () {
      // 创建草稿：创建新草稿，将原有的草稿更新后再存为草稿
      var id = this.$route.fullPath.split('=')[1]
      const data = new FormData()
      data.append('title', this.title)
      data.append('class', this.classification)
      data.append('body', this.content)
      data.append('temp', '1')
      if (id === undefined) {
        axios.post('/articles/create', data).then(res => {
          if (res.status === 200 && res.statusText === 'OK') {
            this.$router.push('/')
          }
        }, err => {
          console.log(err)
        })
      } else {
        axios.post('/articles/update/' + id, data).then(res => {
          if (res.status === 200 && res.statusText === 'OK') {
            this.$router.push('/')
          }
        }, err => {
          console.log(err)
        })
      }
    },
    $imgAdd (pos, $file) {
      // 上传图片至本地服务器
      // var formdata = new FormData()
      // formdata.append('img', $file)
      // axios({
      //   url: 'articles/upload_picture',
      //   method: 'post',
      //   data: formdata,
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // }).then((res) => {
      //   console.log(res.data.data)
      //   this.$refs.md.$img2Url(pos, res.data.data)
      // })
      // 上传图片至imgbb图床
      var formdata = new FormData()
      formdata.append('image', $file)
      formdata.append('key', '934f0362253b2e48ed95641e09c316b3')
      axios({
        url: 'https://api.imgbb.com/1/upload?key=934f0362253b2e48ed95641e09c316b3',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        var displayUrl = res.data.data.display_url
        this.$refs.md.$img2Url(pos, displayUrl)
      })
    }
  }
}
</script>

<style scoped>
#main {
  margin-top: 10px;
}

.mavonEditor {
  width: 100%;
  height: 800px;
}
</style>
