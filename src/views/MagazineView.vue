<template>
  <div class="mainContainer">
    <navbarComponent/>
    <div class="headlines">本周熱門頭條</div>
    <div class="brownLine"></div>
    <router-link style="text-decoration: none; color: inherit" :to="`/magazine/0`">
      <div class="headlinesBar">
        <img class="img2" src="../assets/img2.png" alt="">
        <div class="content">
          <div class="title">{{ headline.title }}</div>
          <div class="nav" v-html="headline.nav"></div>
          <div class="date">{{ headline.date }}</div>
        </div>
      </div>
    </router-link>
    <div class="listBar">
      <div class="headlines">文章列表</div>
      <div class="brownLine2"></div>
      <div class="listComponent">
        <div class="lists" v-for="(items,index) in cls" :key="index">
          <router-link style="text-decoration: none; color: inherit" :to="`/magazine/${index+1}`">
            <img src="../assets/img3.png" alt="">
            <div class="listTitle">{{ items.標題 }}</div>
            <div class="listDate">{{ items.發布日期 }}</div>
          </router-link>
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
  name: 'MagazineView',
  components: {
    navbarComponent,
    footerComponent
  },
  data(){
    return{
      headline:{
        title:"",
        nav:"",
        date:""
      },
      cls:[]
    }
  },
  async mounted(){
    let { data } = await axios.get("https://www.hpa.gov.tw/wf/newsapi.ashx");
    this.headline.title=data[0].標題   
    this.headline.nav=data[0].內容   
    this.headline.date=data[0].發布日期   
    for(let i = 1; i < 10; i++){
      this.cls.push(data[i])
    }
    // console.log(this.headline.title)
    // console.log(this.cls)
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
  .headlines{
    max-width:100%;
    height:45px;
    margin-top:61px;
    margin-left:120px;
    margin-right:120px;
    font-weight: 900;
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    color:black;
    border-bottom:2px solid #C0C4CC;
  }
  .brownLine{
    position: absolute;
    left:120px;
    top:186px;
    width:50px;
    height:2px;
    background-color: #B89068;
  }
  .brownLine2{
    position: absolute;
    left:120px;
    top:646px;
    width:50px;
    height:2px;
    background-color: #B89068;
  }
  .headlinesBar{
    display:flex;
    max-width:100%;
    height:300px;
    margin-left:124px;
    margin-top:52px;
  }
  .img2{
    width:500px;
    height:100%;
    display: flex;
  }
  .content{
    margin-left:45px;
    max-width:564px;
  }
  .title{
    margin-top:0px;
    font-weight: 700;
    font-size: 36px;
    line-height: 35px;
    text-align: left;
  }
  .nav{
    margin-top:33px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #606266;
    text-align: left;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .date{
    margin-top:49px;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #909399;
    text-align: left;
  }
  .listComponent{
    max-width:100%;
    margin-left:120px;
    margin-right:120px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .lists{
    margin-right:50px;
    text-align: left;
  }
  .listTitle{
    width:220px;
    margin-top:20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color:#606266;
  }
  .listDate{
    margin-top:7px;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color:#C0C4CC;
  }
</style>