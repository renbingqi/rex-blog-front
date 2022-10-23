<template>
  <div class="content">
    <div class="article">
      <div class="articleName">
        <el-link href="https://element.eleme.io" target="_blank">这是我的第一篇博客</el-link>
      </div>
      <div>发表于2022年10月22日</div>
      <div>
        <p>没什么好说的，哈哈哈,没什么好说的，哈哈哈,没什么好说的，哈哈哈,没什么好说的，哈哈哈,没什么好说的，哈哈哈,没什么好说的，哈哈哈,没什么好说的，哈哈哈</p>
        <div>
          <el-row>
            <el-button>阅读全文</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>
<style scoped>
.article {
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 15px;
}
.content{
  line-height: 50px;
}
.el-link{
  font-size: 30px;
}
.el-link.el-link--default:hover{
color: #333333;
}
.el-link.is-underline:hover:after{
  border-bottom-width: 2px;
  border-bottom-color: #d9d9d9;
}
</style>
