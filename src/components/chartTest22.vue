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
    <div class="sideBar">
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

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const data = reactive({
      newsdata: "",
      continent: ["歐洲", "美洲", "大洋洲", "亞洲", "非洲"],
      mount105: [],
      mount106: [],
      mount107: [],
      mount108: [],
      mount109: [],
    });
    const form = ref("pie");
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
      let sum106Europe = 0;
      let sum106America = 0;
      let sum106Oceania = 0;
      let sum106Asia = 0;
      let sum107Europe = 0;
      let sum107America = 0;
      let sum107Oceania = 0;
      let sum107Asia = 0;
      let sum108Europe = 0;
      let sum108America = 0;
      let sum108Oceania = 0;
      let sum108Asia = 0;
      let sum109Europe = 0;
      let sum109America = 0;
      let sum109Oceania = 0;
      let sum109Asia = 0;
      let sum109Africa = 0;
      let array = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].年度 == 105 && res.data[i].洲別 == "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Europe += array2[i];
        } else if (res.data[i].年度 == 105 && res.data[i].洲別 == "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105America += array2[i];
        } else if (res.data[i].年度 == 105 && res.data[i].洲別 == "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Oceania += array2[i];
        } else if (res.data[i].年度 == 105 && res.data[i].洲別 == "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum105Asia += array2[i];
        } else if (res.data[i].年度 == 106 && res.data[i].洲別 == "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Europe += array2[i];
        } else if (res.data[i].年度 == 106 && res.data[i].洲別 == "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106America += array2[i];
        } else if (res.data[i].年度 == 106 && res.data[i].洲別 == "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Oceania += array2[i];
        } else if (res.data[i].年度 == 106 && res.data[i].洲別 == "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum106Asia += array2[i];
        } else if (res.data[i].年度 == 107 && res.data[i].洲別 == "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Europe += array2[i];
        } else if (res.data[i].年度 == 107 && res.data[i].洲別 == "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107America += array2[i];
        } else if (res.data[i].年度 == 107 && res.data[i].洲別 == "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Oceania += array2[i];
        } else if (res.data[i].年度 == 107 && res.data[i].洲別 == "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum107Asia += array2[i];
        } else if (res.data[i].年度 == 108 && res.data[i].洲別 == "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Europe += array2[i];
        } else if (res.data[i].年度 == 108 && res.data[i].洲別 == "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108America += array2[i];
        } else if (res.data[i].年度 == 108 && res.data[i].洲別 == "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Oceania += array2[i];
        } else if (res.data[i].年度 == 108 && res.data[i].洲別 == "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum108Asia += array2[i];
        } else if (res.data[i].年度 == 109 && res.data[i].洲別 == "歐洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Europe += array2[i];
        } else if (res.data[i].年度 == 109 && res.data[i].洲別 == "美洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109America += array2[i];
        } else if (res.data[i].年度 == 109 && res.data[i].洲別 == "大洋洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Oceania += array2[i];
        } else if (res.data[i].年度 == 109 && res.data[i].洲別 == "亞洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Asia += array2[i];
        } else if (res.data[i].年度 == 109 && res.data[i].洲別 == "非洲") {
          let mount2 = res.data[i].總人數.toString();
          array.push(mount2.replace(/[,]+/g, ""));
          let array2 = array.map(Number);
          sum109Africa += array2[i];
        }
      }
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
      // console.log(sum105Europe);
      // console.log(sum105America);
      // console.log(sum105Oceania);
      // console.log(sum105Asia);
      // console.log(sum106Europe);
      // console.log(sum106America);
      // console.log(sum106Oceania);
      // console.log(sum106Asia);
      // console.log(sum107Europe);
      // console.log(sum107America);
      // console.log(sum107Oceania);
      // console.log(sum107Asia);
      // console.log(sum108Europe);
      // console.log(sum108America);
      // console.log(sum108Oceania);
      // console.log(sum108Asia);
      // console.log(sum109Europe);
      // console.log(sum109America);
      // console.log(sum109Oceania);
      // console.log(sum109Asia);
      // console.log(sum109Africa);
      // console.log(data.newsdata);
      // console.log(data.year);
      // console.log(data.mount);
    });
    const pieChart = {
      id: "pie",
      type: "pie",
      data: {
        labels: data.continent,
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#333333",
            ],
            data: data.mount109,
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
        labels: data.continent,
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
            data: data.mount109,
          },
        ],
      },
    };
    const lineChart = {
      id: "line",
      type: "line",
      // locally registered and available for this chart
      data: {
        labels: data.continent,
        datasets: [
          {
            label: "My First Dataset",
            data: data.mount109,
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
        labels: data.continent,
        datasets: [
          {
            label: "Skip first dataset",
            data: data.mount109,
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
  max-width: 1334px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
.chartContainer {
  width: 800px;
  margin-bottom: 64px;
}
</style>
