<template>
  <div id="app">
    <vue-particles
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
    <div style="position: absolute;top: 5%;left: 12%;background-color: white;width: 80%;height: 80%">fadfasf</div>
  </div>
</template>

<script>
// 事件的定义
// 如果使用触摸屏，当滚动时，将会阻止事件发生

export default {
  name: 'App'
}

</script>
<style>
@import "./assets/css/main.css";
#app{
  background-color: #E0FFFF;
  position: relative;
}
</style>
