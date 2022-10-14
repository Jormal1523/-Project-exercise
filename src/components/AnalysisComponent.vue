<template>
  <div class="container">
    <div class="title">探索週報</div>
    <div class="content">快速了解當日討論度最高新聞、當月當周的重要國際大事，依據使用者喜好，每天產出分析主題，自動產出摘要</div>
    <div class="link"></div>
  </div>
</template>

<script>
export default {
  name: 'AnalysisComponent',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    background-image: url("../assets/cover.jpg");
    width: 1440px;
    height: 709px;
  }
  .title{
    position:absolute;
    width: 208px;
    height:46px;
    left:120px;
    top:502px;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 46px;
    line-height: 46px;
    letter-spacing: 6px;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  }
  .content{
    position: absolute;
    width: 703px;
    height: 95px;
    left: 120px;
    top: 579px;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
  .link{
    position: absolute;
    width: 396px;
    height: 599px;
    left: 924px;
    top: 134px;
    background: rgba(0, 0, 0, 0.6);
  }
</style>
