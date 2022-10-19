<template>
  <div class="mainContainer">
    <navbarComponent/>
    <div class="container">
      <div class="topPart">
        <div class="title">{{ cls.標題 }}</div>
        <div class="date">{{ cls.發布日期 }}</div>
        <img class="img4" src="../assets/img4.png" alt="">
      </div>
      <div class="sencondPart">
        <div class="nav" v-html="cls.內容"></div>
      </div>
    </div>
    <footerComponent/>
  </div>
</template>

<script>
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'
import footerComponent from '@/components/BaseComponent/footerComponent.vue'
import axios from "axios";
export default {
  name: 'MagazinePageView',
  components: {
    navbarComponent,
    footerComponent
  },
  data() {
    return {
      cls: {},
    };
  },
  async mounted() {
    let { data } = await axios.get(
      "https://www.hpa.gov.tw/wf/newsapi.ashx"
    );
    for (let i = 0; i < data.length; i++) {
      if (i == this.$route.params.id) {
        this.cls = data[i];
      }
    }
  },
}
</script>

<style scoped>
  .mainContainer{
    max-width:100%;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .topPart{
    max-width:1000px;
    min-width:500px;
    margin-left:auto;
    margin-right:auto;
    margin-top:57px;
  }
  .title{
    width:100%;
    text-align: left;
    font-weight: 700;
    font-size: 46px;
    line-height: 50px;
    color: #303133;
  }
  .date{
    margin-top:10px;
    margin-bottom:30px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #909399;
  }
  .img4{
    width:100%;
  }
  .sencondPart{
    max-width:1000px;
    min-width:500px;
    margin-left:auto;
    margin-right:auto;
    margin-top:57px;
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    color: #606266;
    text-align: left;
  }
  .nav{
    padding-left:100px;
    padding-right:100px;
  }
</style>