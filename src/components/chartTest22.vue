<template>
  <div class="container">
    <div class="mainChartContainer">
      <div class="chartContainer" v-if="form == 'pie'">
        <h2>圓餅圖</h2>
        <!-- v-if="data.newsdata != ''" 判斷取得資料後再渲染 -->
        <vue3-chart-js
          v-if="data.newsdata !== ''"
          :id="pieChart.id"
          :type="pieChart.type"
          :data="pieChart.data"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'bar'">
        <h2>長條圖</h2>
        <vue3-chart-js
          v-if="data.newsdata != ''"
          :id="barChart.id"
          :type="barChart.type"
          :data="barChart.data"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'line'">
        <h2>折線圖</h2>
        <vue3-chart-js
          v-if="data.newsdata != ''"
          :id="lineChart.id"
          :type="lineChart.type"
          :data="lineChart.data"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'radar'">
        <h2>雷達圖</h2>
        <vue3-chart-js
          v-if="data.newsdata != ''"
          :id="radarChart.id"
          :type="radarChart.type"
          :data="radarChart.data"
        ></vue3-chart-js>
      </div>
    </div>
    <div class="sideBar" v-if="form !== ''">
      <div class="btn" @click="pie">圓餅圖</div>
      <div class="btn" @click="bar">長條圖</div>
      <div class="btn" @click="line">折線圖</div>
      <div class="btn" @click="radar">雷達圖</div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import axios from "axios";
import { reactive, ref } from "@vue/runtime-core";
import store from "../store";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const data = reactive({
      newsdata: "",
      continent: ["歐洲", "美洲", "大洋洲", "亞洲", "非洲"],
      years: [105, 106, 107, 108, 109],
      mount105: [],
      mount106: [],
      mount107: [],
      mount108: [],
      mount109: [],
      mountEurope: [],
      mountAmerica: [],
      mountOceania: [],
      mountAsia: [],
      mountAfrica: [],
      mount105Europe: [],
      mount105America: [],
      mount105Oceania: [],
      mount105Asia: [],
      mount105Africa: [],
      mount106Europe: [],
      mount106America: [],
      mount106Oceania: [],
      mount106Asia: [],
      mount106Africa: [],
      mount107Europe: [],
      mount107America: [],
      mount107Oceania: [],
      mount107Asia: [],
      mount107Africa: [],
      mount108Europe: [],
      mount108America: [],
      mount108Oceania: [],
      mount108Asia: [],
      mount108Africa: [],
      mount109Europe: [],
      mount109America: [],
      mount109Oceania: [],
      mount109Asia: [],
      mount109Africa: [],
    });

    const form = ref("");

    if (store.state.chartStatus == "pie") {
      form.value = "pie";
    }

    function pie() {
      form.value = "pie";
      console.log(form);
    }
    function bar() {
      form.value = "bar";
      console.log(form);
    }
    function line() {
      form.value = "line";
      console.log(form);
    }
    function radar() {
      form.value = "radar";
      console.log(form);
    }
    axios.get("/mock/test.json").then((res) => {
      data.newsdata = res.data;
      let sum105Europe = 0;
      let sum105America = 0;
      let sum105Oceania = 0;
      let sum105Asia = 0;
      let sum105Africa = 0;
      let sum106Europe = 0;
      let sum106America = 0;
      let sum106Oceania = 0;
      let sum106Asia = 0;
      let sum106Africa = 0;
      let sum107Europe = 0;
      let sum107America = 0;
      let sum107Oceania = 0;
      let sum107Asia = 0;
      let sum107Africa = 0;
      let sum108Europe = 0;
      let sum108America = 0;
      let sum108Oceania = 0;
      let sum108Asia = 0;
      let sum108Africa = 0;
      let sum109Europe = 0;
      let sum109America = 0;
      let sum109Oceania = 0;
      let sum109Asia = 0;
      let sum109Africa = 0;
      let array = [];

      //filter 函數寫法
      console.log(data.newsdata);
      let array3 = res.data.filter(
        (res) => res["年度"] == 105 && res["洲別"] == "歐洲"
      );
      console.log(array3[0].總人數.replace(/[,]+/g, ""));

      //手刻filter
      //重構res.data,去除千分位,並依照年份以及洲別篩選
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].年度 === 105 && res.data[i].洲別 === "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Europe += array2[i];
        } else if (res.data[i].年度 === 105 && res.data[i].洲別 === "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105America += array2[i];
        } else if (res.data[i].年度 === 105 && res.data[i].洲別 === "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Oceania += array2[i];
        } else if (res.data[i].年度 === 105 && res.data[i].洲別 === "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Asia += array2[i];
        } else if (res.data[i].年度 === 106 && res.data[i].洲別 === "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Europe += array2[i];
        } else if (res.data[i].年度 === 106 && res.data[i].洲別 === "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106America += array2[i];
        } else if (res.data[i].年度 === 106 && res.data[i].洲別 === "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Oceania += array2[i];
        } else if (res.data[i].年度 === 106 && res.data[i].洲別 === "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Asia += array2[i];
        } else if (res.data[i].年度 === 107 && res.data[i].洲別 === "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Europe += array2[i];
        } else if (res.data[i].年度 === 107 && res.data[i].洲別 === "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107America += array2[i];
        } else if (res.data[i].年度 === 107 && res.data[i].洲別 === "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Oceania += array2[i];
        } else if (res.data[i].年度 === 107 && res.data[i].洲別 === "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Asia += array2[i];
        } else if (res.data[i].年度 === 108 && res.data[i].洲別 === "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Europe += array2[i];
        } else if (res.data[i].年度 === 108 && res.data[i].洲別 === "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108America += array2[i];
        } else if (res.data[i].年度 === 108 && res.data[i].洲別 === "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Oceania += array2[i];
        } else if (res.data[i].年度 === 108 && res.data[i].洲別 === "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Asia += array2[i];
        } else if (res.data[i].年度 === 109 && res.data[i].洲別 === "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Europe += array2[i];
        } else if (res.data[i].年度 === 109 && res.data[i].洲別 === "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109America += array2[i];
        } else if (res.data[i].年度 === 109 && res.data[i].洲別 === "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Oceania += array2[i];
        } else if (res.data[i].年度 === 109 && res.data[i].洲別 === "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Asia += array2[i];
        } else if (res.data[i].年度 === 109 && res.data[i].洲別 === "非洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Africa += array2[i];
        }
      }

      //依照年份跟洲別單一組合
      data.mount105Europe.push(sum105Europe);
      data.mount106Europe.push(sum106Europe);
      data.mount107Europe.push(sum107Europe);
      data.mount108Europe.push(sum108Europe);
      data.mount109Europe.push(sum109Europe);
      data.mount105America.push(sum105America);
      data.mount106America.push(sum106America);
      data.mount107America.push(sum107America);
      data.mount108America.push(sum108America);
      data.mount109America.push(sum109America);
      data.mount105Oceania.push(sum105Oceania);
      data.mount106Oceania.push(sum106Oceania);
      data.mount107Oceania.push(sum107Oceania);
      data.mount108Oceania.push(sum108Oceania);
      data.mount109Oceania.push(sum109Oceania);
      data.mount105Asia.push(sum105Asia);
      data.mount106Asia.push(sum106Asia);
      data.mount107Asia.push(sum107Asia);
      data.mount108Asia.push(sum108Asia);
      data.mount109Asia.push(sum109Asia);
      data.mount105Africa.push(sum105Africa);
      data.mount106Africa.push(sum106Africa);
      data.mount107Africa.push(sum107Africa);
      data.mount108Africa.push(sum108Africa);
      data.mount109Africa.push(sum109Africa);

      // 只依照年分,各洲別的組合
      data.mount105.push(
        sum105Europe,
        sum105America,
        sum105Oceania,
        sum105Asia
      );
      data.mount106.push(
        sum106Europe,
        sum106America,
        sum106Oceania,
        sum106Asia
      );
      data.mount107.push(
        sum107Europe,
        sum107America,
        sum107Oceania,
        sum107Asia
      );
      data.mount108.push(
        sum108Europe,
        sum108America,
        sum108Oceania,
        sum108Asia
      );
      data.mount109.push(
        sum109Europe,
        sum109America,
        sum109Oceania,
        sum109Asia,
        sum109Africa
      );

      //只依照洲別,各年度的組合
      data.mountEurope.push(
        sum105Europe,
        sum106Europe,
        sum107Europe,
        sum108Europe,
        sum109Europe
      );
      data.mountAmerica.push(
        sum105America,
        sum106America,
        sum107America,
        sum108America,
        sum109America
      );
      data.mountOceania.push(
        sum105Oceania,
        sum106Oceania,
        sum107Oceania,
        sum108Oceania,
        sum109Oceania
      );
      data.mountAsia.push(
        sum105Asia,
        sum106Asia,
        sum107Asia,
        sum108Asia,
        sum109Asia
      );
      data.mountAfrica.push(
        sum105Africa,
        sum106Africa,
        sum107Africa,
        sum108Africa,
        sum109Africa
      );
    });
    // console.log(store.state.chartInformation.areas);
    // console.log(store.state.chartInformation.years);

    // 判斷是用年份還是洲別
    const chartLabels = ref("");
    if (store.state.chartInformation.areas) {
      chartLabels.value = data.years;
    } else if (store.state.chartInformation.years) {
      chartLabels.value = data.continent;
    } else {
      chartLabels.value = "";
    }

    const chartData = ref("");
    //選擇區域
    if (store.state.chartInformation.areas == "歐洲") {
      chartData.value = data.mountEurope;
    } else if (store.state.chartInformation.areas == "美洲") {
      chartData.value = data.mountAmerica;
    } else if (store.state.chartInformation.areas == "大洋洲") {
      chartData.value = data.mountOceania;
    } else if (store.state.chartInformation.areas == "亞洲") {
      chartData.value = data.mountAsia;
    } else if (store.state.chartInformation.areas == "非洲") {
      chartData.value = data.mountAfrica;
    }

    //選擇年分
    if (store.state.chartInformation.years == 105) {
      chartData.value = data.mount105;
    } else if (store.state.chartInformation.years == 106) {
      chartData.value = data.mount106;
    } else if (store.state.chartInformation.years == 107) {
      chartData.value = data.mount107;
    } else if (store.state.chartInformation.years == 108) {
      chartData.value = data.mount108;
    } else if (store.state.chartInformation.years == 109) {
      chartData.value = data.mount109;
    }

    //同時選擇年分與洲別
    if (
      store.state.chartInformation.areas == "歐洲" &&
      store.state.chartInformation.years == 105
    ) {
      chartData.value = data.mount105Europe;
      chartLabels.value = [105];
    } else if (
      store.state.chartInformation.areas == "歐洲" &&
      store.state.chartInformation.years == 106
    ) {
      chartData.value = data.mount106Europe;
      chartLabels.value = [106];
    } else if (
      store.state.chartInformation.areas == "歐洲" &&
      store.state.chartInformation.years == 107
    ) {
      chartData.value = data.mount107Europe;
      chartLabels.value = [107];
    } else if (
      store.state.chartInformation.areas == "歐洲" &&
      store.state.chartInformation.years == 108
    ) {
      chartData.value = data.mount108Europe;
      chartLabels.value = [108];
    } else if (
      store.state.chartInformation.areas == "歐洲" &&
      store.state.chartInformation.years == 109
    ) {
      chartData.value = data.mount109Europe;
      chartLabels.value = [109];
    } else if (
      store.state.chartInformation.areas == "美洲" &&
      store.state.chartInformation.years == 105
    ) {
      chartData.value = data.mount105America;
      chartLabels.value = [105];
    } else if (
      store.state.chartInformation.areas == "美洲" &&
      store.state.chartInformation.years == 106
    ) {
      chartData.value = data.mount106America;
      chartLabels.value = [106];
    } else if (
      store.state.chartInformation.areas == "美洲" &&
      store.state.chartInformation.years == 107
    ) {
      chartData.value = data.mount107America;
      chartLabels.value = [107];
    } else if (
      store.state.chartInformation.areas == "美洲" &&
      store.state.chartInformation.years == 108
    ) {
      chartData.value = data.mount108America;
      chartLabels.value = [108];
    } else if (
      store.state.chartInformation.areas == "美洲" &&
      store.state.chartInformation.years == 109
    ) {
      chartData.value = data.mount109America;
      chartLabels.value = [109];
    } else if (
      store.state.chartInformation.areas == "大洋洲" &&
      store.state.chartInformation.years == 105
    ) {
      chartData.value = data.mount105Oceania;
      chartLabels.value = [105];
    } else if (
      store.state.chartInformation.areas == "大洋洲" &&
      store.state.chartInformation.years == 106
    ) {
      chartData.value = data.mount106Oceania;
      chartLabels.value = [106];
    } else if (
      store.state.chartInformation.areas == "大洋洲" &&
      store.state.chartInformation.years == 107
    ) {
      chartData.value = data.mount107Oceania;
      chartLabels.value = [107];
    } else if (
      store.state.chartInformation.areas == "大洋洲" &&
      store.state.chartInformation.years == 108
    ) {
      chartData.value = data.mount108Oceania;
      chartLabels.value = [108];
    } else if (
      store.state.chartInformation.areas == "大洋洲" &&
      store.state.chartInformation.years == 109
    ) {
      chartData.value = data.mount109Oceania;
      chartLabels.value = [109];
    } else if (
      store.state.chartInformation.areas == "亞洲" &&
      store.state.chartInformation.years == 105
    ) {
      chartData.value = data.mount105Asia;
      chartLabels.value = [105];
    } else if (
      store.state.chartInformation.areas == "亞洲" &&
      store.state.chartInformation.years == 106
    ) {
      chartData.value = data.mount106Asia;
      chartLabels.value = [106];
    } else if (
      store.state.chartInformation.areas == "亞洲" &&
      store.state.chartInformation.years == 107
    ) {
      chartData.value = data.mount107Asia;
      chartLabels.value = [107];
    } else if (
      store.state.chartInformation.areas == "亞洲" &&
      store.state.chartInformation.years == 108
    ) {
      chartData.value = data.mount108Asia;
      chartLabels.value = [108];
    } else if (
      store.state.chartInformation.areas == "亞洲" &&
      store.state.chartInformation.years == 109
    ) {
      chartData.value = data.mount109Asia;
      chartLabels.value = [109];
    } else if (
      store.state.chartInformation.areas == "非洲" &&
      store.state.chartInformation.years == 105
    ) {
      chartData.value = data.mount105Africa;
      chartLabels.value = [105];
    } else if (
      store.state.chartInformation.areas == "非洲" &&
      store.state.chartInformation.years == 106
    ) {
      chartData.value = data.mount106Africa;
      chartLabels.value = [106];
    } else if (
      store.state.chartInformation.areas == "非洲" &&
      store.state.chartInformation.years == 107
    ) {
      chartData.value = data.mount107Africa;
      chartLabels.value = [107];
    } else if (
      store.state.chartInformation.areas == "非洲" &&
      store.state.chartInformation.years == 108
    ) {
      chartData.value = data.mount108Africa;
      chartLabels.value = [108];
    } else if (
      store.state.chartInformation.areas == "非洲" &&
      store.state.chartInformation.years == 109
    ) {
      chartData.value = data.mount109Africa;
      chartLabels.value = [109];
    }

    const pieChart = {
      id: "pie",
      type: "pie",
      data: {
        labels: chartLabels.value,
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#333333",
            ],
            data: chartData.value,
          },
        ],
      },
    };
    const barChart = {
      id: "bar",
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: chartLabels.value,
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
            data: chartData.value,
          },
        ],
      },
    };
    const lineChart = {
      id: "line",
      type: "line",
      // locally registered and available for this chart
      data: {
        labels: chartLabels.value,
        datasets: [
          {
            label: "My First Dataset",
            data: chartData.value,
            fill: false,
            borderColor: "#41B883",
            backgroundColor: "black",
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
        },
      },
    };
    const radarChart = {
      type: "radar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: chartLabels.value,
        datasets: [
          {
            label: "Skip first dataset",
            data: chartData.value,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      },
    };

    return {
      data,
      pieChart,
      barChart,
      lineChart,
      radarChart,
      pie,
      line,
      bar,
      radar,
      form,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.mainChartContainer {
  width: 800px;
  /* display: flex; */
}
.chartContainer {
  width: 800px;
  margin-top: 64px;
}
.sideBar {
  width: 150px;
  height: 368px;
  margin-top: 67px;
  margin-left: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px #b0bec5;
  border-radius: 8px;
}
.btn {
  margin-bottom: 22px;
  cursor: pointer;
}
</style>
