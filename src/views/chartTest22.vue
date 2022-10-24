<template>
  <h2>Pie Chart</h2>
  <p>{{ data.mount }}</p>
  <div style="max-width: 400px">
    <!-- <vue3-chart-js v-bind="{ ...pieChart }" /> -->
    <vue3-chart-js
      v-if="data.newsdata != ''"
      :id="pieChart.id"
      :type="pieChart.type"
      :data="pieChart.data"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import axios from "axios";
import { reactive } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const data = reactive({
      newsdata: "",
      year: [],
      mount: [],
    });
    axios.get("/mock/test.json").then((res) => {
      data.newsdata = res.data;
      for (let i = 0; i < res.data.length; i++) {
        data.year.push(res.data[i].年度);
        data.mount.push(res.data[i].總人數);
      }
      console.log(data.newsdata);
      console.log(data.year);
      console.log(data.mount);
    });
    const pieChart = {
      id: "pie",
      type: "pie",
      data: {
        labels: data.year,
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: data.mount,
          },
        ],
      },
    };
    // console.log(pieChart.data.labels)
    // console.log(pieChart.data.datasets[0].data)
    return {
      data,
      pieChart,
    };
  },
};
</script>
