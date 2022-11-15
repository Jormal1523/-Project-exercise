<template>
  <div class="mainContainer">
    <navbarComponent />
    <div class="headlines">本周熱門頭條</div>
    <div class="brownLine"></div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`/magazine/0`"
    >
      <div class="headlinesBar">
        <img class="img2" src="https://picsum.photos/id/1015/1000/600" alt="" />
        <div class="content">
          <h2 v-if="status == true" style="width: 400px">載入中...</h2>
          <div class="title">{{ headline.title }}</div>
          <div class="nav" v-html="headline.nav"></div>
          <div class="date">{{ headline.date }}</div>
        </div>
      </div>
    </router-link>
    <div class="listBar">
      <div class="headlines">文章列表</div>
      <div class="brownLine2"></div>
      <h2 v-if="status == true">載入中...</h2>
      <div class="listComponent">
        <div class="lists" v-for="(items, index) in cls" :key="index">
          <router-link class="listBtn" :to="`/magazine/${index + 1}`">
            <img
              class="img3"
              src="https://picsum.photos/id/177/300/500?grayscale"
              alt=""
            />
            <div>
              <div class="listTitle">{{ items.標題 }}</div>
              <div class="listDate">{{ items.發布日期 }}</div>
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

export default {
  name: "MagazineView",
  components: {
    navbarComponent,
    footerComponent,
  },
  data() {
    return {
      status: true,
      headline: {
        title: "",
        nav: "",
        date: "",
      },
      cls: [],
    };
  },
  async mounted() {
    let { data } = await axios.get("https://www.hpa.gov.tw/wf/newsapi.ashx");
    this.headline.title = data[0].標題;
    this.headline.nav = data[0].內容;
    this.headline.date = data[0].發布日期;
    for (let i = 1; i < 10; i++) {
      this.cls.push(data[i]);
    }
    this.status = false;
    // console.log(this.headline.title)
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
.headlines {
  max-width: 100%;
  height: 45px;
  margin-top: 61px;
  margin-left: 120px;
  margin-right: 120px;
  font-weight: 900;
  font-size: 28px;
  line-height: 28px;
  text-align: left;
  color: black;
  border-bottom: 2px solid #c0c4cc;
}
.brownLine {
  position: absolute;
  left: 120px;
  top: 186px;
  width: 50px;
  height: 2px;
  background-color: #b89068;
}
.brownLine2 {
  position: absolute;
  left: 120px;
  top: 646px;
  width: 50px;
  height: 2px;
  background-color: #b89068;
}
.headlinesBar {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: 300px;
  margin-left: 124px;
  margin-right: 124px;
  margin-top: 52px;
  /* overflow: hidden; */
}
.img2 {
  max-width: 500px;
  /* min-width:300px; */
  height: 100%;
  display: flex;
}
.content {
  margin-left: 45px;
  max-width: 564px;
  min-width: 200px;
}
.title {
  width: 100%;
  margin-top: 0px;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  text-align: left;
}
.nav {
  width: 100%;
  margin-top: 33px;
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
.date {
  margin-top: 49px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #909399;
  text-align: left;
}
.listComponent {
  max-width: 100%;
  margin-top: 33px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}

/* 更改滑軌樣式 */
.listComponent::-webkit-scrollbar {
  background-color: #c0c4cc;
  height: 8px;
}
.listComponent::-webkit-scrollbar-thumb {
  background-color: #606266;
  border-radius: 10px;
}
.lists {
  margin-right: 50px;
  text-align: left;
}
.img3 {
  width: 220px;
  height: 200.52px;
}
.listTitle {
  width: 220px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #606266;
}
.listDate {
  margin-top: 7px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #c0c4cc;
}
.listBtn {
  text-decoration: none;
  color: inherit;
}
@media screen and (max-width: 930px) {
  .headlines {
    margin-left: 23px;
    margin-right: 23px;
    margin-top: 55px;
  }
  .brownLine {
    left: 23px;
    top: 180px;
  }
  .brownLine2 {
    left: 23px;
    top: 616px;
  }
  .headlinesBar {
    max-width: 727px;
    height: 287.51px;
    margin-left: 23px;
    margin-right: 23px;
    margin-top: 46px;
  }
  .img2 {
    min-width: 420px;
    height: 100%;
    display: flex;
  }
  .listComponent {
    margin-left: 23px;
    margin-right: 23px;
  }
  .title {
    font-size: 22px;
    line-height: 25px;
  }
  .nav {
    margin-top: 33px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 750px) {
  .headlines {
    border: transparent;
  }
  .brownLine {
    left: 20px;
    top: 160px;
  }
  .brownLine2 {
    left: 20px;
    top: 846px;
  }
  .headlinesBar {
    flex-direction: column;
    max-width: 498px;
    margin-left: 20px;
    margin-right: 20px;
    /* padding-left: 20px; */
    /* padding-right: 20px; */
    min-height: 538px;
    overflow: hidden;
  }
  .img2 {
    width: 100%;
  }
  .content {
    width: 100%;
    margin-top: 54px;
    margin-left: auto;
    margin-right: auto;
  }
  .nav {
    margin-top: 21px;
    height: 96px;
  }
  .date {
    margin-top: 18px;
  }
  .listComponent {
    margin-top: 25px;
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  .lists {
    margin-right: 0px;
    margin-top: 28px;
  }
  .img3 {
    /* width: 246.8px; */
    height: 126.97px;
  }
  .listBtn {
    display: flex;
    justify-content: space-around;
  }
}
</style>
