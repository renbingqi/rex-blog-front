<template>
  <div class="home">
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.home{
  width: 80%;
  height: 100%;
  position: absolute;
  overflow: auto;
}
</style>
