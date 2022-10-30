<template>
  <div>
    <div class="article" v-for="item in article_list" :key="item.id">
      <div class="articleName">
        <el-link href="https://element.eleme.io" target="_blank">{{ item.name }}</el-link>
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
      <div>
        <p>{{ item.content }}</p>
        <div>
          <el-row>
            <el-button>阅读全文</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <div class="paginations" >
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
export default {
  name: 'Article',
  data () {
    return {
      article_list: [{
        id: 1,
        name: '第一篇博客',
        datetime: '2022年10月22日',
        classes: 'Docker',
        heat: '39',
        content: '没有什么好数据可以说的'
      }, { id: 1, name: '第二篇博客', datetime: '2022年10月22日', classes: 'Docker', heat: '39', content: '没有什么好数据可以说的' }, { id: 1, name: '第一篇博客', datetime: '2022年10月22日', classes: 'Docker', heat: '39', content: '没有什么好数据可以说的' }, { id: 1, name: '第一篇博客', datetime: '2022年10月22日', classes: 'Docker', heat: '39', content: '没有什么好数据可以说的' }, { id: 1, name: '第一篇博客', datetime: '2022年10月22日', classes: 'Docker', heat: '39', content: '没有什么好数据可以说的' }, { id: 1, name: '第一篇博客', datetime: '2022年10月22日', classes: 'Docker', heat: '39', content: '没有什么好数据可以说的' }]

    }
  }
}
</script>

<style scoped>
.article,.paginations {
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 15px;
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
.el-pager{
  padding-top: 10px;
}
</style>
