<template>
  <div class="classification">
    <div class="tag">分类标签</div>
    <el-button class="class_button" v-for="(item,index) in classificationList" :key="index"
               :style="{background: item.color , fontSize: item.size}" @click="showArticles(item)">{{ item.title }}
    </el-button>
  </div>
</template>

<script>
import axios from 'axios'

// 创建随机生成颜色的函数
export default {
  name: 'classification',
  data () {
    return {
      classificationList: []
    }
  },
  methods: {
    showArticles (item) {
      var classes = item.title
      this.$router.push('/classification/' + classes)
    }
  },
  created () {
    function makeColor () {
      const colorArraw = ['#9AC0CD', '#828282', '#8B795E', '#8B4500', '#EE9A49',
        '#D2B48C', '#CD9B9B', '#548B54', '#483D8B']
      const randomIndex = parseInt(Math.random() * colorArraw.length)
      return colorArraw[randomIndex]
    }

    function makeSize () {
      const randomSize = parseInt(Math.random() * 30) + 5
      var size = randomSize.toString()
      return size + 'px'
    }

    axios.get('/classifications').then(res => {
      this.classificationList = res.data.data
      for (var i in this.classificationList) {
        this.classificationList[i].color = makeColor()
        this.classificationList[i].size = makeSize()
      }
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.classification {
  text-align: left;
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 15px;
  height: 800px;
}

.class_button {
  margin: 20px 0 20px 20px;
  color: white;
}

.class_button:hover {
  color: #97a8be;
}
.tag{
  text-align: center;
  font-size: 30px;
  padding-top: 15px;
}
</style>
