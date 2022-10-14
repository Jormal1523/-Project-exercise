<template>
  <div class="navbar">
    <img class="logo" src="../../assets/logo.png" alt="">
    <router-link class="btn1" to="/">analysis</router-link>
    <router-link class="btn2" to="/magazine">magazine</router-link>
    <router-link class="btn3" to="/search">search</router-link>
  </div>
</template>

<style scoped>
  .navbar{
    width: 1440px; 
    height: 80px;
    background-color: #E3D3C3;
  }
  .logo{
    position: absolute;
    width:316px;
    height: 46px;
    left:120px;
    top:19px;
  }
  .btn1{
    position: absolute;
    left:537px;
    top:21px
  }
  .btn2{
    position: absolute;
    left:747px;
    top:21px
  }
  .btn3{
    position: absolute;
    left:957px;
    top:21px
  }
  .btn1,.btn2,.btn3{
    display: flex;
    width: 100px;
    height: 46px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #C0C4CC;
    font-size: 22px;
  }
  .btn1:hover,.btn2:hover,.btn3:hover{
    color:#606266;
    border-bottom:1px solid #0D8ABC
  }
  .router-link-active{
    color:#606266;
    border-bottom:1px solid #0D8ABC 
  }
</style>