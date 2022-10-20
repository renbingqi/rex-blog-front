<template>
  <div class="sidebar">
    <div>
      <div>
        <div class="auth">
          <div class="name">Rex</div>
          <div class="name">知行合一</div>
        </div>
        <div class="menu">
<!--          <ul id="menu">-->
<!--          <li><a href="">首页</a></li>-->
<!--          <li><a href="">标签</a></li>-->
<!--          <li><a href="">分类</a></li>-->
<!--          <li><a href="">归档</a></li>-->
<!--          <li><a href="">友链</a></li>-->
<!--          <li><a href="">关于</a></li>-->
<!--          <li><a href="">搜索</a></li>-->
<!--          <li></li>-->
<!--        </ul>-->
          <el-row class="tac">
            <el-col :span="12" style="width: 100%">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#555555">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" >
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
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
  border-radius: 15px 15px 15px 15px;
}

.name{
  padding-top:15px ;
  margin-top: 5px;
}
</style>
