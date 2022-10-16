<template>
  <div class="sidebar">
    <div class="menu">
      <div>
        <div class="auth">
          <div class="name"><span>Rex</span></div>
          <div class="name"><span>知行合一</span></div>
        </div>
        <ul id="menu">
          <li><a href="">
            首页</a></li>
          <li><a href="">分类</a></li>
          <li><a href="">归档</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
<style scoped>
.sidebar{
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  width: 240px;
  height: auto;
  position: absolute;
  left: 15%;
  top: 5%;
  bottom: auto;
  background-color: white;
  border-radius: 10%;
}
li{
  list-style: none;
  padding-top:10px;
  /*padding-bottom:20px;*/
}
.auth{
  background-color: #262a30;
  color: white;
  padding: 20px 0;
  text-align: center;
  border-radius: 10% 10% 0 0 ;
}
.menu{
  height: 100%;
}
a{
  padding: 5px 20px;
  font-size: 13px;
  outline: none;
  color: #555;
}
.name{
  margin-top: 17px;
}
</style>
