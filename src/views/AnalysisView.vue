<template>
  <div class="mainContainer">
    <navbarComponent />
    <div class="container">
      <div class="leftBar">
        <div class="title">探索週報</div>
        <div class="content">
          快速了解當日討論度最高新聞、當月當周的重要國際大事，依據使用者喜好，每天產出分析主題，自動產出摘要
        </div>
      </div>
      <div class="linkBar">
        <div class="linkTitle">
          熱門新知<router-link class="moreLink" to="/magazine"
            >看更多>></router-link
          >
        </div>
        <!-- <h1 style="color: white; margin-top: 200px" v-if="status == true">
          載入中...
        </h1> -->
        <content-loader
          v-if="status == true"
          class="loader1"
          viewBox="0 0 476 600"
          primaryColor="#f3f3f3"
          secondaryColor="#878485"
        >
          <rect x="48" y="50" rx="3" ry="3" width="95" height="96" />
          <rect x="180" y="50" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="80" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="110" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="140" rx="3" ry="3" width="50" height="6" />
          <rect x="48" y="200" rx="3" ry="3" width="95" height="96" />
          <rect x="180" y="200" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="230" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="260" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="290" rx="3" ry="3" width="50" height="6" />
          <rect x="48" y="350" rx="3" ry="3" width="95" height="96" />
          <rect x="180" y="350" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="380" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="410" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="440" rx="3" ry="3" width="50" height="6" />
          <rect x="48" y="500" rx="3" ry="3" width="95" height="96" />
          <rect x="180" y="500" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="530" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="560" rx="3" ry="3" width="210" height="16" />
          <rect x="180" y="590" rx="3" ry="3" width="50" height="6" />
        </content-loader>

        <content-loader
          v-if="status == true"
          class="loader2"
          viewBox="0 0 900 400"
          primaryColor="#f3f3f3"
          secondaryColor="#878485"
        >
          <rect x="148" y="20" rx="3" ry="3" width="95" height="96" />
          <rect x="280" y="20" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="50" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="80" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="110" rx="3" ry="3" width="50" height="6" />
          <rect x="148" y="150" rx="3" ry="3" width="95" height="96" />
          <rect x="280" y="150" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="180" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="210" rx="3" ry="3" width="180" height="16" />
          <rect x="280" y="240" rx="3" ry="3" width="50" height="6" />
          <rect x="500" y="20" rx="3" ry="3" width="95" height="96" />
          <rect x="630" y="20" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="50" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="80" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="110" rx="3" ry="3" width="50" height="6" />
          <rect x="500" y="150" rx="3" ry="3" width="95" height="96" />
          <rect x="630" y="150" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="180" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="210" rx="3" ry="3" width="180" height="16" />
          <rect x="630" y="240" rx="3" ry="3" width="50" height="6" />
        </content-loader>

        <content-loader
          v-if="status == true"
          class="loader3"
          viewBox="0 0 400 600"
          primaryColor="#f3f3f3"
          secondaryColor="#878485"
        >
          <rect x="30" y="40" rx="3" ry="3" width="156" height="96" />
          <rect x="30" y="160" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="180" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="200" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="220" rx="3" ry="3" width="50" height="6" />

          <rect x="30" y="300" rx="3" ry="3" width="156" height="96" />
          <rect x="30" y="420" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="440" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="460" rx="3" ry="3" width="150" height="16" />
          <rect x="30" y="480" rx="3" ry="3" width="50" height="6" />

          <rect x="220" y="40" rx="3" ry="3" width="156" height="96" />
          <rect x="220" y="160" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="180" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="200" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="220" rx="3" ry="3" width="50" height="6" />

          <rect x="220" y="300" rx="3" ry="3" width="156" height="96" />
          <rect x="220" y="420" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="440" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="460" rx="3" ry="3" width="150" height="16" />
          <rect x="220" y="480" rx="3" ry="3" width="50" height="6" />
        </content-loader>
        <div class="linkPageContainer">
          <router-link
            class="linkPage"
            v-for="(items, index) in cls"
            :key="index"
            :to="`/magazine/${index}`"
          >
            <img
              class="img1"
              src="https://picsum.photos/id/1062/500/300"
              alt=""
            />
            <div class="textTitle">
              {{ items.標題 }}
              <div class="date">{{ items.發布日期 }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <footerComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarComponent from "@/components/BaseComponent/navbarComponent.vue";
import footerComponent from "@/components/BaseComponent/footerComponent.vue";
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "AnalysisView",
  components: {
    navbarComponent,
    footerComponent,
    ContentLoader,
  },
  data() {
    return {
      status: true,
      cls: [],
    };
  },
  async mounted() {
    let { data } = await axios.get("https://www.hpa.gov.tw/wf/newsapi.ashx");
    for (let i = 0; i < 4; i++) {
      this.cls.push(data[i]);
    }
    this.status = false;
    // console.log(this.cls)
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap");
.mainContainer {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
}
.container {
  background-image: url("../assets/cover.jpg");
  background-size: cover;
  width: 100%;
  height: 709px;
  display: flex;
  justify-content: space-around;
}
.loader2 {
  display: none;
}
.loader3 {
  display: none;
}
.title {
  max-width: 208px;
  height: 46px;
  padding-left: 120px;
  padding-top: 422px;
  color: #ffffff;
  font-weight: 900;
  font-size: 46px;
  line-height: 46px;
  letter-spacing: 6px;
  text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
}
.content {
  max-width: 703px;
  height: 95px;
  margin-left: 120px;
  margin-top: 31px;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 1px;
  color: #ffffff;
  text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  text-align: left;
}
.linkBar {
  width: 396px;
  height: 599px;
  margin-top: 54px;
  margin-left: 101px;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.linkTitle {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 343px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border-left: 1px solid #b89068;
  font-weight: 900;
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
}
.moreLink {
  font-weight: 800;
  font-size: 11px;
  line-height: 12px;
  color: #ffffff;
  text-decoration: none;
}
.linkPage {
  display: flex;
  justify-content: space-between;
  width: 327px;
  height: 90px;
  margin-left: 34px;
  margin-top: 41px;
  text-decoration: none;
}
.textTitle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 214px;
  height: 90px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
}
.date {
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
}
.img1 {
  width: 95px;
  height: 96px;
}
@media screen and (max-width: 930px) {
  .loader1 {
    display: none;
  }
  .loader2 {
    display: block;
  }
  .loader3 {
    display: none;
  }
  .container {
    flex-direction: column;
    background-image: url("../assets/cover768.png");
    height: 727px;
  }
  .title {
    max-width: 135px;
    padding-top: 125px;
    padding-left: 0px;
    margin-left: auto;
    margin-right: auto;
    font-size: 27px;
    text-align: center;
  }
  .content {
    max-width: 468px;
    height: 76px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    font-size: 16px;
    line-height: 29px;
    text-align: center;
  }
  .linkBar {
    width: 100%;
    height: 335px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 137px;
  }
  .linkTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 630px;
    padding-left: 0px;
    margin-top: 0px;
    margin-left: 96px;
    margin-right: auto;
    margin-bottom: 25px;
    padding-top: 30px;
    border: none;
    font-weight: 900;
    font-size: 28px;
    line-height: 22px;
    color: #ffffff;
  }
  .moreLink {
    font-size: 9px;
  }
  .linkPageContainer {
    min-width: 630px;
    margin-left: 96px;
    margin-right: 26px;
  }
  .linkPage {
    display: inline-flex;
    justify-content: space-between;
    width: 263px;
    height: 90px;
    margin-right: 50px;
    margin-left: 0px;
    margin-top: 20px;
  }
}
@media screen and (max-width: 750px) {
  .mainContainer {
    min-height: 120vh;
  }
  .container {
    height: 279px;
    background-position: center;
  }
  .loader2 {
    display: none;
  }
  .loader3 {
    display: block;
  }
  .title {
    position: absolute;
    width: 171px;
    height: 62.81px;
    left: 50%;
    transform: translateX(-50%);
    top: 129.89px;
    padding: 0px;
  }
  .content {
    max-width: 431px;
    margin-top: 50px;
  }
  .linkBar {
    position: absolute;
    top: 339px;
    margin-top: 0px;
    background: #fff;
  }
  .linkTitle {
    min-width: 0px;
    color: #303133;
    margin-left: 36px;
    margin-bottom: 0px;
    padding-left: 0px;
  }
  .textTitle {
    color: #606266;
  }
  .date {
    color: #606266;
  }
  .img1 {
    width: 100%;
    /* height:149.57px; */
  }
  .linkPageContainer {
    min-width: 0px;
    width: 100%;
    margin-left: 0px;
  }
  .linkPage {
    height: 250px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 40%;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
