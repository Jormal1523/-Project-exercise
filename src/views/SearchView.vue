<template>
  <div class="mainContainer">
    <navbarComponent />
    <div class="topPart">
      <div class="title">快速分析總覽</div>
      <div class="brownLine"></div>
      <div class="searchBar">
        <div class="area">
          <div>區域</div>
          <select name="areas" v-model="areas">
            <option value="">選擇洲別</option>
            <option value="歐洲">歐洲</option>
            <option value="美洲">美洲</option>
            <option value="大洋洲">大洋洲</option>
            <option value="亞洲">亞洲</option>
            <option value="非洲">非洲</option>
          </select>
        </div>
        <div class="year">
          <div>年分</div>
          <select name="years" v-model="years">
            <option value="">選擇年分</option>
            <option value="105">105</option>
            <option value="106">106</option>
            <option value="107">107</option>
            <option value="108">108</option>
            <option value="109">109</option>
          </select>
        </div>
        <div class="btnGroup">
          <button class="clean" @click="clean">清除</button>
          <button class="send" @click="submitChart">送出</button>
        </div>
      </div>
    </div>
    <div class="chartPart">
      <chartTest22 />
    </div>
    <footerComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarComponent from "@/components/BaseComponent/navbarComponent.vue";
import footerComponent from "@/components/BaseComponent/footerComponent.vue";
import chartTest22 from "@/components/chartTest22.vue";

export default {
  name: "SearchView",
  components: {
    navbarComponent,
    footerComponent,
    chartTest22,
  },
  data() {
    return {
      areas: "",
      years: "",
    };
  },
  methods: {
    submitChart() {
      let chartData = {
        areas: this.areas,
        years: this.years,
      };
      // console.log(chartData);
      this.$store.commit("changeStatus");
      this.$store.commit("addChartInformation", chartData);
      return this.$router.go(0);
    },
    clean() {
      this.areas = "";
      this.years = "";
      this.$store.commit("clearInformation");
      return this.$router.go(0);
    },
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
  max-width: 100%;
  margin-top: 70px;
  margin-left: 120px;
  margin-right: 120px;
}
.title {
  height: 54px;
  text-align: left;
  font-weight: 900;
  font-size: 28px;
  line-height: 28px;
  color: #000000;
  border-bottom: 2px solid #c0c4cc;
}
.brownLine {
  position: absolute;
  left: 120px;
  top: 204px;
  width: 50px;
  height: 2px;
  background-color: #b89068;
}
.searchBar {
  width: 474px;
  height: 220px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  color: #7d8087;
  margin-right: 96px;
  width: 224px;
  height: 3em;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d8dce5;
}
.year {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnGroup {
  width: 228px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}
.clean {
  width: 95px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #124e96;
  background-color: rgba(160, 184, 213, 0.3);
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: #124e96;
  cursor: pointer;
}
.send {
  width: 95px;
  height: 40px;
  border-radius: 40px;
  border: transparent;
  background-color: #124e96;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  cursor: pointer;
}
.chartPart {
  width: 100%;
  margin-top: 84px;
}
</style>
