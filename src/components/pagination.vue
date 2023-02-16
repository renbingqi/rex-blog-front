<template>
  <div class="paginations">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="11"
      style="padding-top: 10px">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination'
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
