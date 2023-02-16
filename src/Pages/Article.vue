<template>
  <div class="article">
    <div class="articleName" style="padding-top: 20px">
      <el-link>{{ this.title }}</el-link>
    </div>
    <div>
      <span class="el-icon-edit-outline"></span>
      <span>发表于</span>
      <span style="border-bottom: 1px dashed black">{{ this.datetime }}</span>
      <span>|</span>
      <span class="el-icon-folder-opened"></span>
      <span>分类于</span>
      <span style="border-bottom: 1px solid black"><a href="">{{ this.classes }}</a></span>
      <span>|</span>
      <span class="el-icon-view"></span>
      <span>热度</span>
      <span>{{ this.heat }}℃</span>
    </div>
    <div v-html="this.body" class="markdown-body"></div>
  </div>
</template>
<script>
export default {
  name: 'Article',
  data () {
    return {
      body: '',
      title: '',
      heat: '',
      datetime: '',
      classes: ''
    }
  },
  created () {
    for (var item in this.$store.state.articleInfo) {
      if (this.$store.state.articleInfo[item].id === Number(this.$route.fullPath.split('=')[1])) {
        this.body = this.$store.state.articleInfo[item].content
        console.log(this.body)
        this.title = this.$store.state.articleInfo[item].name
        this.heat = this.$store.state.articleInfo[item].heat
        this.datetime = this.$store.state.articleInfo[item].datetime
        this.classes = this.$store.state.articleInfo[item].classes
      }
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
