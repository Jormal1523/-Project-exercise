<template>
  <div class="footer">
    <div class="leftBtn">
      <router-link to="/"><img src="../../assets/Vector1.png" alt=""></router-link>
      <router-link to="/"><img src="../../assets/Vector2.png" alt=""></router-link>
      <router-link to="/"><img src="../../assets/Vector3.png" alt=""></router-link>
    </div>
    <div class="rightBtn">
      <router-link to="/" class="textLink">About us</router-link>
      <router-link to="/" class="textLink">Contect</router-link>
      <router-link to="/" class="textLink">Privacy</router-link>
      <router-link to="/" class="textLink">Terms of Service</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap');
  .footer{
    display: flex;
    margin-top: auto;
    max-width:100%;
    height:52px;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid #C0C4CC;
    font-family: 'Lato', sans-serif;
  }
  .leftBtn{
    display:flex;
    justify-content: space-between;
    width:90px;
    height:20px;
    margin-left:120px;
  }
  .rightBtn{
    display: flex;
    justify-content: space-between;
    margin-right:120px;
    width:480px;

  }
  .textLink{
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #303133;
  }
  @media screen and ( max-width: 930px ){
    .leftBtn{
      margin-left:27px;
      width:143px;
      height:32px;
    }
    img{
      height: 100%;
    }
    .rightBtn{
      margin-right:27px;
    }
    .textLink{
      font-size: 18px;
      line-height: 18px;
    }
  }
</style>