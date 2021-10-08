<template>
  <div id="chartjs">
    <RandomChart></RandomChart>
    <MyChart></MyChart>
    <AreaChart />
    <PieChart />
    <BarChart />
    <RadarChart />
    <LineChart />
    <LineChartVue></LineChartVue>
    <span>hello</span>
  </div>
</template>

<script>
import AreaChart from "../components/AreaChart.vue";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue"
import RandomChart from "../components/MyLineChart.vue"
import LineChartVue from "../components/LineChartVue"
import MyChart from "../components/MyBarChart"

export default {
  name: "Chartjs",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart,
    RandomChart,
    LineChartVue,
    MyChart
  },
  // data () {
  //   return {
  //     chartData: {
  //       Books: 24,
  //       Magazine: 30,
  //       Newspapers: 10
  //     }
  //   };
  // }
};
</script>

<style>
#chartjs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
