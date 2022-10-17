<template>
  <div class="topbar">
    <img class="logo" src="../../assets/logo.png" alt="">
    <router-link class="btn1" to="/">analysis</router-link>
    <router-link class="btn2" to="/magazine">magazine</router-link>
    <router-link class="btn3" to="/search">search</router-link>
  </div>
</template>

<style scoped>
  .topbar{
    width: 100%; 
    height: 80px;
    background-color: #E3D3C3;
    display: flex;
  }
  .logo{
    width:316px;
    height: 46px;
    margin-left:120px;
    margin-top:19px;
  }
  .btn1{
    margin-left:101px;
    margin-top:21px
  }
  .btn2{
    margin-left:110px;
    margin-top:21px
  }
  .btn3{
    margin-left:110px;
    margin-top:21px
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
  @media screen and ( max-width: 768px ){
    .logo{
      margin-left: 26px;
    }
    .btn1{
      margin-left: -20px;
    }
    .btn2,.btn3{
      margin-left:12px;
    }
  }
</style>