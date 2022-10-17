<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Content></Content>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Content
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  position: absolute;
  /*overflow: auto;*/
}
</style>
