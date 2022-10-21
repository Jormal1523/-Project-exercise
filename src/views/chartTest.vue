<template>
<div>
{{doughnutChart.data.datasets[0].data}}
  <div style="height:600px;width: 600px;">
    <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
    ></vue3-chart-js>
  </div>
</div>
</template>

<script>
import reacitve from 'vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
// import { onMounted , ref } from "vue";
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  // setup () {
  //   let dateArr=ref([]);
  //   onMounted(async () => {
  //     let { data } = await axios.get("/mock/test.json");
  //     dateArr.value = data;
  //     for (let i = 0; i < dateArr.value.length; i++) {
  //       console.log(dateArr.value[i].年度);
  //     }   
  //   });
  //   console.log(dateArr.value)
  //   const doughnutChart = {
  //     id: 'doughnut',
  //     type: 'bar',
  //     data: {
  //       labels: dateArr.value.年度,
  //       datasets: [
  //         {
  //           backgroundColor: [
  //             '#41B883',
  //             '#E46651',
  //             '#00D8FF',
  //             '#DD1B16'
  //           ],
  //           data: [40, 20, 80, 10]
  //         }
  //       ]
  //     }
  //   }
  //   return {
  //     doughnutChart,
  //   }
  // },
  data(){
    const doughnutData = reacitve({
        id: 'doughnut',
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [
            {
              backgroundColor: [
                '#41B883',
                '#E46651',
                '#00D8FF',
                '#DD1B16'
              ],
              data: []
            }
          ]
        }
      })

    return {
      doughnutData
      
      // doughnutChart: {
      //   id: 'doughnut',
      //   type: 'doughnut',
      //   data: {
      //     labels: [],
      //     datasets: [
      //       {
      //         backgroundColor: [
      //           '#41B883',
      //           '#E46651',
      //           '#00D8FF',
      //           '#DD1B16'
      //         ],
      //         data: []
      //       }
      //     ]
      //   }
      // }
    }
  },
  async mounted(){
    let { data } = await axios.get("/mock/test.json");
    // let array = []
    for( let i = 0; i < data.length; i++ ){
      this.doughnutChart.data.labels.push(data[i].年度)
      this.doughnutChart.data.datasets[0].data.push(data[i].總人數)
      // this.doughnutChart.data.datasets[0].data
      // array.push(data[i].總人數)
    }
    // console.log(array)
    // this.doughnutChart.data.datasets[0].data =array
    // console.log(this.doughnutChart.data.datasets[0].data)
  }
}
</script>
