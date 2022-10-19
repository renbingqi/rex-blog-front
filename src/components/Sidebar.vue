<template>
  <div class="sidebar">
    <div>
      <div>
        <div class="auth">
          <div class="name"><span>Rex</span></div>
          <div class="name"><span>知行合一</span></div>
        </div>
        <div class="menu"><ul id="menu">
          <li><a href="">首页</a></li>
          <li><a href="">标签</a></li>
          <li><a href="">分类</a></li>
          <li><a href="">归档</a></li>
          <li><a href="">友链</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">搜索</a></li>
          <li></li>
        </ul></div>
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
  float: left;
  margin: 50px 0 0 150px;
  border-radius: 15px 15px 15px 15px;
}
li{
  list-style: none;
  padding-top:8px;
  padding-bottom:8px;
  cursor: pointer;
}
.auth{
  background-color: #262a30;
  width: 240px;
  color: white;
  padding: 15px 0;
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
