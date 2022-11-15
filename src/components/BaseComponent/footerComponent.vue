<template>
  <div class="footer">
    <div class="leftBtn">
      <router-link to="/"
        ><img
          src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
      /></router-link>
      <router-link to="/"
        ><img
          src="https://img.icons8.com/material-outlined/48/000000/email.png"
      /></router-link>
      <router-link to="/"
        ><img
          src="https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png"
      /></router-link>
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
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap");
.footer {
  display: flex;
  margin-top: auto;
  max-width: 100%;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c0c4cc;
  font-family: "Lato", sans-serif;
}
.leftBtn {
  display: flex;
  justify-content: space-between;
  width: 90px;
  height: 20px;
  margin-left: 120px;
}
img {
  height: 100%;
}
.rightBtn {
  display: flex;
  justify-content: space-between;
  margin-right: 120px;
  width: 480px;
}
.textLink {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #303133;
}
@media screen and (max-width: 930px) {
  .leftBtn {
    margin-left: 27px;
    width: 143px;
    height: 32px;
  }
  img {
    height: 100%;
  }
  .rightBtn {
    margin-right: 27px;
  }
  .textLink {
    font-size: 18px;
    line-height: 18px;
  }
}
@media screen and (max-width: 750px) {
  .leftBtn {
    margin-left: 13px;
  }
  .rightBtn {
    margin-right: 8px;
  }
  .textLink {
    font-size: 14px;
    line-height: 14px;
  }
}
</style>
