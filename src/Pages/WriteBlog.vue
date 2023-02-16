<template>
  <div id="main">
    <el-input
      placeholder="请输入文章标题"
      v-model="title"
      clearable
      style="width: 55%; margin-right: 3%">
    </el-input>
    <el-select v-model="classification" clearable placeholder="请选择分类" style="width: 25%;margin-right: 3%">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label">
      </el-option>
    </el-select>
    <el-button type="danger" round style="width: 14%" @click="onSubmit">发布文章</el-button>
    <mavon-editor ref=md @imgAdd="$imgAdd" class="mavonEditor" v-model="content"/>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'WriteBlog',
  data () {
    return {
      title: '',
      options: [],
      classification: '',
      content: ''
    }
  },
  created () {
    axios.get('/classifications').then(res => {
      var classList = []
      for (var i in res.data.data) {
        var value = res.data.data[i].id
        var label = res.data.data[i].title
        classList.push({ value: value, label: label })
      }
      this.options = classList
    }, err => {
      console.log(err)
    })
  },
  methods: {
    onSubmit () {
      const data = new FormData()
      data.append('title', this.title)
      data.append('class', this.classification)
      data.append('body', this.content)
      axios.post('/articles/create', data).then(res => {
        if (res.status === 200 && res.statusText === 'OK') {
          this.$router.push('/')
        }
      }, err => {
        console.log(err)
      })
    },
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('img', $file)
      axios({
        url: 'articles/upload_picture',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        console.log(res.data.data)
        this.$refs.md.$img2Url(pos, res.data.data)
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
