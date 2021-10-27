<script>
import { Line } from "vue-chartjs";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-dragdata'

export default {
  extends: Line,
  mounted () {
    this.addPlugin(ChartDataLabels);
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            // label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
            lineTension: 0, // 线的贝塞尔曲线张力。0 为直线
            label: "Point点",                              //名称
            // borderColor: 'red',                            //线条颜色
            // data: chartData,                               //数据
            // borderWidth: '1px',                            //线条大小
            // pointBackgroundColor: 'red',                   //点填充颜色
            pointBorderColor: '#000',                      //点边框颜色
            pointBorderWidth: '1px',                       //点边框大小
            pointRadius: '10',                              //点的半径
            pointStyle: 'rectRot',                         //点样式
            fill: false,                                   //填充颜色
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        },
        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        },
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            // color: '#36A2EB',
            anchor: 'center',
            color: '#fff',
          },
          dragData: {
            dragX: true,
            round: 1
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              display: true //this will remove only the label
            }
          },
            //   {
            //   display: true //this will remove all the x-axis grid lines
            // }
          ]
        },
        dragData: true,
        // dragOptions: {
        //   // magnet: {
        //   //   to: Math.round // to: (value) => value + 5
        //   // },
        //   showTooltip: true // Recommended. This will show the tooltip while the user 
        // },
        // dragX: true,
        dragDataRound: 0, // round to full integers (0 decimals)

        // onDragStart: function (e, element) {
        //   // where e = event
        // },
        // onDrag: function (e, datasetIndex, index, value) {
        //   // change cursor style to grabbing during drag action
        //   e.target.style.cursor = 'grabbing'
        //   // where e = event
        // },
        // onDragEnd: function (e, datasetIndex, index, value) {
        //   // restore default cursor style upon drag release
        //   e.target.style.cursor = 'default'
        //   // where e = event
        // },
        // animation: {
        //   onComplete: function () {
        //     var chartInstance = [2, 10, 5, 9, 0, 6, 20],
        //       ctx = chartInstance.ctx;

        //     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        //     ctx.textAlign = 'center';
        //     ctx.textBaseline = 'bottom';

        //     this.data.datasets.forEach(function (dataset, i) {
        //       var meta = chartInstance.controller.getDatasetMeta(i);
        //       meta.data.forEach(function (bar, index) {
        //         var data = dataset.data[index];
        //         ctx.fillText(data, bar._model.x, bar._model.y - 5);
        //       });
        //     });
        //   }
        // }
      },
    );

  }
};
</script>