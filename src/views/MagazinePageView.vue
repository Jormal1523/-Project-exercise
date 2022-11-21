<template>
  <div class="mainContainer">
    <h2 v-if="status == true">載入中...</h2>
    <div class="container">
      <div class="topPart">
        <div class="title">{{ cls.標題 }}</div>
        <div class="date">{{ cls.發布日期 }}</div>
        <img class="img4" src="https://picsum.photos/id/1074/1000/600" alt="" />
      </div>
      <div class="sencondPart">
        <div class="nav" v-html="cls.內容"></div>
      </div>
    </div>
    <div class="listBar">
      <div class="headlines">文章列表</div>
      <h2 v-if="status == true">載入中...</h2>
      <div class="listComponent">
        <div class="lists" v-for="(items, index) in article" :key="index">
          <router-link class="listBtn" :to="`/magazine/${index}`">
            <img
              class="img3"
              src="https://picsum.photos/id/1079/500/300"
              alt=""
            />
            <div class="listContent">
              <div class="listTitle">{{ items.標題 }}</div>
              <div class="listDate">{{ items.發布日期 }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MagazinePageView",
  components: {},
  data() {
    return {
      status: true,
      cls: {},
      article: [],
    };
  },
  async mounted() {
    let { data } = await axios.get("https://www.hpa.gov.tw/wf/newsapi.ashx");
    for (let i = 0; i < data.length; i++) {
      if (i == this.$route.params.id) {
        this.cls = data[i];
      }
    }
    for (let i = 0; i < 10; i++) {
      this.article.push(data[i]);
    }
    this.status = false;
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
.topPart {
  max-width: 1000px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 57px;
}
.title {
  max-width: 100%;
  text-align: left;
  font-weight: 700;
  font-size: 46px;
  line-height: 50px;
  color: #303133;
}
.date {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #909399;
}
.img4 {
  width: 100%;
}
.sencondPart {
  max-width: 1000px;
  /* min-width:500px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 57px;
  font-weight: 400;
  font-size: 18px;
  line-height: 31px;
  color: #606266;
  text-align: left;
}
.nav {
  padding-left: 100px;
  padding-right: 100px;
}

/* 設置v-html渲染的的圖片樣式，使用:deep()，代表修改子组件内的样式*/
:deep() .contentImg img {
  width: 100%;
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
.listComponent {
  max-width: 100%;
  margin-top: 33px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}
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
  width: 100%;
  object-fit: cover;
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
    margin-left: 21px;
    margin-right: 21px;
  }
  .title {
    font-size: 36px;
    line-height: 35px;
  }
  .date {
    font-size: 14px;
  }
  .sencondPart {
    max-width: 571px;
  }
  .nav {
    padding-left: 0px;
    padding-right: 0px;
  }
  .listComponent {
    margin-left: 21px;
    margin-right: 21px;
  }
}
@media screen and (max-width: 750px) {
  .title,
  .date {
    padding: 0px 18px;
  }
  .sencondPart {
    margin-left: 26px;
    margin-right: 26px;
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
    min-width: 120px;
    height: 100%;
    margin-right: 10px;
  }
  .listBtn {
    display: flex;
    justify-content: space-around;
    height: 126.97px;
  }
}
</style>
