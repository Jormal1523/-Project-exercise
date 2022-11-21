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
          style="width: 350px; margin-left: auto; margin-right: auto"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'bar'">
        <h2>長條圖</h2>
        <vue3-chart-js
          v-if="data.newsdata !== ''"
          :id="barChart.id"
          :type="barChart.type"
          :data="barChart.data"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'line'">
        <h2>折線圖</h2>
        <vue3-chart-js
          v-if="data.newsdata !== ''"
          :id="lineChart.id"
          :type="lineChart.type"
          :data="lineChart.data"
        ></vue3-chart-js>
      </div>
      <div class="chartContainer" v-if="form == 'radar'">
        <h2>雷達圖</h2>
        <vue3-chart-js
          v-if="data.newsdata !== ''"
          :id="radarChart.id"
          :type="radarChart.type"
          :data="radarChart.data"
          style="width: 350px; margin-left: auto; margin-right: auto"
        ></vue3-chart-js>
      </div>
    </div>
    <div class="sideBar" v-if="form !== ''">
      <div class="btn" :class="{ active: form === 'pie' }" @click="pie">
        圓餅圖
      </div>
      <div class="btn" :class="{ active: form === 'bar' }" @click="bar">
        長條圖
      </div>
      <div class="btn" :class="{ active: form === 'line' }" @click="line">
        折線圖
      </div>
      <div class="btn" :class="{ active: form === 'radar' }" @click="radar">
        雷達圖
      </div>
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
  props: {
    chartData: {
      type: Object,
    },
  },
  components: {
    Vue3ChartJs,
  },
  setup(props) {
    // console.log(props.chartData);
    const data = reactive({
      newsdata: "",
      continent: ["歐洲", "美洲", "大洋洲", "亞洲", "非洲"],
      years: [105, 106, 107, 108, 109],
      chartData: [],
    });

    const form = ref("");

    if (store.state.chartStatus == "pie") {
      form.value = "pie";
    }

    const pie = () => {
      form.value = "pie";
    };
    const bar = () => {
      form.value = "bar";
    };
    const line = () => {
      form.value = "line";
    };
    const radar = () => {
      form.value = "radar";
    };

    // 判斷是用年份還是洲別

    const chartLabels = ref("");
    if (props.chartData.areas && props.chartData.years == "") {
      chartLabels.value = data.years;
    } else if (
      (props.chartData.years || props.chartData.years2) &&
      props.chartData.areas == ""
    ) {
      chartLabels.value = data.continent;
    } else {
      chartLabels.value = [props.chartData.years];
    }

    axios.get("/mock/test.json").then((res) => {
      data.newsdata = res.data;

      let array = res.data.filter(
        (res) =>
          (res["年度"] == props.chartData.years &&
            res["洲別"] == props.chartData.areas) ||
          (res["年度"] == props.chartData.years2 &&
            res["洲別"] == props.chartData.areas)
      );
      let array3 = res.data.filter(
        (res) =>
          res["年度"] == props.chartData.years ||
          res["年度"] == props.chartData.years2 ||
          res["洲別"] == props.chartData.areas
      );
      // console.log(array);
      // console.log(array3);

      if (props.chartData.areas == "") {
        for (let i = 0; i < data.continent.length; i++) {
          let array2 = array3.filter(function (res) {
            return res["洲別"] == data.continent[i];
          });
          let arraySum = ref(0);
          for (let j = 0; j < array2.length; j++) {
            const mount = array2[j].總人數.toString().replace(/[,]+/g, "");
            arraySum.value += Number(mount);
          }

          data.chartData.push(arraySum.value);
          // console.log(array2);
        }
      } else if (props.chartData.years == "") {
        for (let i = 0; i < data.continent.length; i++) {
          let array2 = array3.filter(function (res) {
            return res["年度"] == data.years[i];
          });
          let arraySum = ref(0);
          for (let j = 0; j < array2.length; j++) {
            const mount = array2[j].總人數.toString().replace(/[,]+/g, "");
            arraySum.value += Number(mount);
          }
          data.chartData.push(arraySum.value);
          // console.log(array2);
        }
      } else {
        // console.log(array);
        let arraySum = ref(0);
        for (let i = 0; i < array.length; i++) {
          const mount = array[i].總人數.toString().replace(/[,]+/g, "");
          arraySum.value += Number(mount);
        }
        data.chartData.push(arraySum.value);
      }
    });

    // console.log(data.chartData);

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
              "#2913b9",
              "#333333",
            ],
            data: data.chartData,
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
            data: data.chartData,
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
            data: data.chartData,
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
            data: data.chartData,
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
}
.chartContainer {
  width: 100%;
  height: 500px;
  margin-top: 64px;
  border: 1px solid #b0bec5;
  box-shadow: 0px 4px 8px;
  border-radius: 8px;
  margin-bottom: 64px;
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
.active {
  border-bottom: 1px solid #0d8abc;
}
@media screen and (max-width: 1000px) {
  .mainChartContainer {
    width: 500px;
  }
}
@media screen and (max-width: 750px) {
  .mainChartContainer {
    width: 350px;
  }
  .container {
    flex-direction: column-reverse;
    align-items: center;
  }
  .sideBar {
    width: 368px;
    height: 80px;
    margin-top: 30px;
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 0px 4px 8px #b0bec5;
    border-radius: 8px;
  }
  .chartContainer {
    margin-top: 30px;
  }
  .btn {
    margin-bottom: 0px;
  }
}
</style>
