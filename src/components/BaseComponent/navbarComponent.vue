<template>
  <div class="topbar">
    <img class="logo" src="../../assets/logo.png" alt="">
    <div class="btnGroup">
      <router-link class="btn1" to="/">analysis</router-link>
      <router-link class="btn2" to="/magazine">magazine</router-link>
      <router-link class="btn3" to="/search">search</router-link>
      <router-link class="btn4" to="/login">SIGN IN</router-link>
    </div>
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
  .btnGroup{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width:100%;
    margin-left:101px;
    margin-right: auto;
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
  .btn4{
    padding:12px 20px;
    background-color:#FCB040;
    text-decoration: none;
    color:aliceblue;
    border-radius: 10px;
  }
  .btn1:hover,.btn2:hover,.btn3:hover{
    color:#606266;
    border-bottom:1px solid #0D8ABC
  }
  .router-link-active{
    color:#606266;
    border-bottom:1px solid #0D8ABC 
  }
  @media screen and ( max-width: 930px ){
    .logo{
      margin-left: 26px;
    }
    .btnGroup{
      margin-left:0px;
      margin-right:0px;
      justify-content: space-around;
    }
    .btn1{
      margin-left: 0px;
    }
    .btn2,.btn3{
      margin-left:0px;
    }
  }
  @media screen and ( max-width: 750px ){
    .topbar{
      height: 60px;
    }
    .logo{
      display:none;
    }
  }
</style>