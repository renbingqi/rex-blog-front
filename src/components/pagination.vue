<template>
  <div class="paginations">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :page-size= pageSize
      :total= total
      hide-on-single-page
      style="padding-top: 10px">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      total: 0,
      pageSize: 5
    }
  },
  created () {
    this.total = this.$store.state.articleInfo.length
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('changePagination', val)
    },
    handleCurrentChange (val) {
      this.$emit('changePagination', val)
    }
  }
}
</script>

<style scoped>
.paginations {
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 15px;
}
</style>
