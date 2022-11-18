<template>
  <div class="mainContainer">
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
          <div style="white-space: nowrap">年分</div>
          <div class="yearSelect">
            <select name="years" v-model="years" class="rwdSelect">
              <option value="">選擇年分</option>
              <option value="105">105</option>
              <option value="106">106</option>
              <option value="107">107</option>
              <option value="108">108</option>
              <option value="109">109</option>
            </select>
            <span></span>
            <select name="years" v-model="years2" class="rwdSelect">
              <option value="">選擇年分</option>
              <option value="105">105</option>
              <option value="106">106</option>
              <option value="107">107</option>
              <option value="108">108</option>
              <option value="109">109</option>
            </select>
          </div>
        </div>
        <div class="btnGroup">
          <button class="clean" @click="clean">清除</button>
          <button class="send" @click="submitChart">送出</button>
        </div>
      </div>
    </div>
    <div
      class="chartPart"
      v-if="
        changeKey !== null &&
        (chartData.areas !== '' ||
          chartData.years !== '' ||
          chartData.years2 !== '')
      "
    >
      <div class="chartTitle">
        {{ chartData.years }}{{ `  ${chartData.years2} `
        }}{{ chartData.areas }}之我國留學生人數加總
      </div>
      <div class="brownLine2"></div>
      <!-- <chartTest22 :chartData="this.chartData" :key="changeKey" /> -->
      <chart :chartData="this.chartData" :key="changeKey" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import chartTest22 from "@/components/chartTest22.vue";
import chart from "@/components/chart.vue";

export default {
  name: "SearchView",
  components: {
    // chartTest22,
    chart,
  },
  data() {
    return {
      areas: "",
      years: "",
      years2: "",
      chartData: {},
      changeKey: null,
    };
  },
  methods: {
    submitChart() {
      this.chartData = {
        areas: this.areas,
        years: this.years,
        years2: this.years2,
      };
      this.$store.commit("changeStatus");

      //vue 点击父组件，刷新子组件，改變key值
      this.changeKey = Math.random();
    },
    clean() {
      this.areas = "";
      this.years = "";
      this.years2 = "";
      this.chartData = "";
      this.changeKey = null;
      // return this.$router.go(0);
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
.area,
.year {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yearSelect {
  display: flex;
  margin-right: 96px;
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
.rwdSelect {
  margin-left: 10px;
  margin-right: 0px;
  width: 108px;
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
.chartTitle {
  height: 54px;
  font-weight: 900;
  font-size: 28px;
  line-height: 28px;
  color: #000000;
  text-align: left;
  margin-left: 120px;
  margin-right: 120px;
  border-bottom: 2px solid #c0c4cc;
}
.brownLine2 {
  position: absolute;
  left: 120px;
  top: 654px;
  width: 50px;
  height: 2px;
  background-color: #b89068;
}
.chartPart {
  width: 100%;
  margin-top: 84px;
}
@media screen and (max-width: 750px) {
  .topPart {
    margin-left: auto;
    margin-right: auto;
  }
  .brownLine,
  .brownLine2 {
    display: none;
  }
  .searchBar {
    width: 350px;
  }
  .area,
  .year {
    justify-content: space-around;
  }
  select {
    margin-right: 0px;
  }
  .yearSelect {
    margin-right: 0px;
  }
  .chartTitle {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }
}
</style>
