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
    <mavon-editor class="mavonEditor" v-model="content"/>
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
    axios.get('http://127.0.0.1:8080/classifications').then(res => {
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
      axios.post('http://127.0.0.1:8080/articles/create', data).then(res => {
        if (res.status === 200 && res.statusText === 'OK') {
          this.$router.push('/')
        }
      }, err => {
        console.log(err)
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
