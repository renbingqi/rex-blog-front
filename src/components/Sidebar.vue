<template>
  <div class="sidebar">
    <div>
      <div>
        <div class="auth">
          <div class="name">Rex</div>
          <div class="name">知行合一</div>
        </div>
        <div class="menu">
          <el-row class="tac">
            <el-col :span="12" style="width: 100%">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#555555">
                <el-menu-item index="1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-s-flag"></i>
                  <span slot="title">标签</span>
                </el-menu-item>
                <el-menu-item index="3" >
                  <i class="el-icon-menu"></i>
                  <span slot="title">分类</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-s-promotion"></i>
                  <span slot="title">友链</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-user"></i>
                  <span slot="title">关于</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-search"></i>
                  <span slot="title">搜索</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-s-management"></i>
                  <span slot="title">归档</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.sidebar{
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  width: 240px;
  height: auto;
  border-radius: 15px 15px 15px 15px;
  margin-top: 35px;
}

.auth{
  background-color: #262a30;
  width: 240px;
  height: 100px;
  color: white;
  text-align: center;
  position: absolute;
  border-radius: 15px 15px 0 0;
}
.menu{
  width: 240px;
  background-color: white;
  padding-top: 130px;
  padding-bottom: 10px;
  border-radius: 15px 15px 15px 15px;
}

.name{
  padding-top:15px ;
  margin-top: 5px;
}
el-menu-item:hover{
  color: #42b983;
}
.el-menu-item:focus,.el-menu-item:hover,.el-menu-item.is-active{
  background-color: hsl(0, 0%, 97%);
}
.el-menu-item {
  height: 40px;
  line-height:40px;
  padding:0 150px;

}
.el-menu{
  border-right: none;
}
</style>
