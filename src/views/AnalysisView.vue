<template>
  <div class="mainContainer">
    <navbarComponent/>
    <div class="container">
      <div class="title">探索週報</div>
      <div class="content">快速了解當日討論度最高新聞、當月當周的重要國際大事，依據使用者喜好，每天產出分析主題，自動產出摘要</div>
      <div class="linkBar">
        <div class="linkTitle">
          熱門新知<router-link class="moreLink" to="/">看更多>></router-link>
        </div>
        <div class="linkPageContainer">
          <div class="linkPage" v-for="(items, index) in cls" :key="index">
            <img class="img1" src="../assets/img1.png" alt="">
            <div class="textTitle" >{{items.標題}}
              <div class="date">{{items.發布日期}}</div>
            </div>
          </div>
        </div>
      </div>     
    </div>  
    <footerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'
import footerComponent from '@/components/BaseComponent/footerComponent.vue'
import axios from "axios";
export default {
  name: 'AnalysisView',
  components: {
    navbarComponent,
    footerComponent
  },
  data(){
    return{
      cls:[
        // {
        //   title:"數據與設計應用",
        //   date:"10/14"
        // },
        // {
        //   title:"麥當勞咖啡選用雨林聯盟認證豆策略",
        //   date:"10/13"
        // },        
        // {
        //   title:"人工智慧的神經網絡機制",
        //   date:"10/12"
        // },
        // {
        //   title:"辦公室色彩學與心理情緒研究討論",
        //   date:"10/11"
        // },
      ]
    }
  },
  async mounted(){
    let { data } = await axios.get("https://www.hpa.gov.tw/wf/newsapi.ashx");
    for(let i = 0; i < 4; i++){
      this.cls.push(data[i])
    }
    console.log(this.cls)
  }
}
</script>

<style scoped>
  .mainContainer{
    max-width:100%;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .container{
    background-image: url("../assets/cover.jpg");
    /* background-attachment: fixed; */
    /* background-position: center; */
    background-size: cover;
    width: 100%;
    height: 709px;
  }
  .title{
    max-width: 208px;
    height:46px;
    padding-left:120px;
    padding-top:422px;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 46px;
    line-height: 46px;
    letter-spacing: 6px;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  }
  .content{
    max-width: 703px;
    height: 95px;
    margin-left: 120px;
    margin-top: 31px;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
  .linkBar{
    position: absolute;
    width: 396px;
    height: 599px;
    left:924px;
    top: 134px;
    background: rgba(0, 0, 0, 0.6);
  }
  .linkTitle{
    display:flex;
    justify-content:space-between;
    align-items: flex-end;
    width:343px;
    padding-left:8px;
    padding-right:8px;
    margin-left:auto;
    margin-right:auto;
    margin-top:40px;
    border-left:1px solid #B89068;
    font-weight: 900;
    font-size: 22px;
    line-height: 22px;
    color:#FFFFFF;
  }
  .moreLink{
    font-weight: 800;
    font-size: 11px;
    line-height: 12px;
    color:#FFFFFF;
    text-decoration: none;
  }
  .linkPage{
    display:flex;
    justify-content: space-between;
    width:327px;
    height:90px;
    margin-left:34px;
    margin-top:41px;
  }
  .textTitle{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    width:214px;
    height:90px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: left;
    color:#FFFFFF;
  }
  .date{
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
  }
  .img1{
    width: 95px;
    height: 96px;
  }
  @media screen and ( max-width: 1440px ){

  }
  @media screen and ( max-width: 768px ){
    .container{
      background-image: url("../assets/cover768.png");
      height: 727px;
    }
    .title{
      max-width: 135px;
      padding-top:125px;
      padding-left:0px;
      margin-left:auto;
      margin-right:auto;
      font-size: 27px;
      text-align: center;
    }
    .content{
      max-width: 468px;
      height: 76px;
      margin-left: auto;
      margin-right:auto;
      margin-top: 8px; 
      font-size: 16px;
      line-height: 29px;
      text-align: center;
    }
    .linkBar{
      position: relative;
      left:0;
      top:0;
      width:100%;
      height:335px;
      margin-top:137px;
    }
    .linkTitle{
      display:flex;
      justify-content:space-between;
      align-items: center;
      min-width:630px;
      padding-left:8px;
      padding-right:8px;
      margin-left:96px;
      margin-right:auto;
      margin-bottom:25px;
      padding-top:30px;
      border:none;
      font-weight: 900;
      font-size: 28px;
      line-height: 22px;
      color:#FFFFFF;
    }
    .moreLink{
      font-size: 9px;
    }
    .linkPageContainer{
      min-width:630px;
      margin-left:96px;
      margin-right:26px;
    }
    .linkPage{
      display:inline-flex;
      justify-content: space-between;
      width:263px;
      height:90px;
      margin-right:50px;
      margin-left:0px;
      margin-top:20px;
    }
  }
</style>