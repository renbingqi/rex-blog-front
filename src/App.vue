<template>
  <div id="app">
    <vue-particles
      style="height: auto;position: fixed;width: 100%;"
      color="#FFF5EE"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#BF3EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="100"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="container">
      <div><el-container>
        <el-aside width="240px">
          <Sidebar></Sidebar>
        </el-aside>
        <el-container>
          <el-main id="view">
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container></div>
    </div>
  </div>
</template>
<script>
// 事件的定义
// 如果使用触摸屏，当滚动时，将会阻止事件发生
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: { Sidebar }
}

</script>
<style>
@import "./assets/css/main.css";
@import url("//unpkg.com/element-ui@2.15.10/lib/theme-chalk/index.css");
#app{
  position: relative;
}
.container{
  position: absolute;
  width: 80%;
  left: 10%;
  padding: 0;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-main {
  line-height: 50px;
}
</style>
