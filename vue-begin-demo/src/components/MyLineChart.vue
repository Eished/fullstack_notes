<template>
  <div id="container" style="width: 50%">
    <LineChart :chart-data="datasheet" :options="options" @chart="onChartHandle" @canvas="onCanvasHandle"></LineChart>
    <button @click="resetZoom">resetZoom</button>
    <button @click="zoomIn">ZoomIn</button>
    <button @click="zoomOut">ZoomOut</button>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import 'chartjs-plugin-zoom'
import 'hammerjs'

var randomScalingFactor = function () {
  return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100)
}

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chart: {},
      canvas: {},
      datasheet: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(220,220,220,0.5)',
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
          },
          {
            hidden: false,
            label: 'Dataset 2',
            backgroundColor: 'rgba(255,187,205,1)',
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
          },
          {
            label: 'Dataset 3',
            backgroundColor: 'rgba(151,187,205,0.5)',
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
          },
        ],
      },
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
          rectangle: {
            borderWidth: 2,
            borderColor: 'rgb(0, 255, 0)',
            borderSkipped: 'bottom',
          },
        },
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
        scales: {
          xAxes: [
            {
              ticks: {
                min: 'March',
                max: 'August',
              },
            },
          ],
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
              speed: 10,
              threshold: 1,
              // overScaleMode: 'x'
              onPan: (e) => {
                console.log(e.chart)
              },
              onPanComplete: (e) => {
                console.log(e.chart)
              },
            },
            zoom: {
              enabled: true,
              // wheel: {
              //   enabled: true,
              // },
              mode: 'x',
              // overScaleMode: 'x'
              onZoom: (e) => {
                console.log(e.chart)
              },
              onZoomComplete: (e) => {
                console.log(e.chart)
              },
            },
          },
        },
        onHover: (e, item, what) => {
          console.log(e, item, what)
        },
        onClick: (e) => {
          console.log(e)
        },
      },
    }
  },
  mounted() {},
  methods: {
    onChartHandle(chart) {
      this.chart = chart
      console.log(this.chart)
      // this.chart.doZoom = function (percentage) {
      //   this.chart.doZoom(this.chart, 1 + percentage / 100, 1 + percentage / 100, undefined, undefined, true)
      //   // Manually trigger zoom complete callback.
      //   const zoomOptions = this.chart.$zoom._options.zoom
      //   if (typeof zoomOptions.onZoomComplete === 'function') {
      //     zoomOptions.onZoomComplete({ chart: this.chart })
      //   }
      // }
    },
    onCanvasHandle(canvas) {
      this.canvas = canvas
      console.log(this.canvas)
    },
    resetZoom() {
      this.chart.resetZoom()
    },
    zoomIn() {
      for (let index = 0; index < 4; index++) {
        const evt = document.createEvent('MouseEvents')
        evt.initEvent('wheel', true, true)
        evt.deltaY = -150
        // document.getElementById('canvasInstance').dispatchEvent(evt)

        // const app = document.getElementById('app')

        this.canvas.dispatchEvent(evt)
      }
      // app.dispatchEvent(evt)
      // app.addEventListener('mousewheel', (e) => {
      //   console.log(e)
      // })

      // console.log(this.canvas, app)
      // this.chart.zoom(1.1)
    },
    zoomOut() {
      // console.log(this.chart.isZoomedOrPanned())
      // const event = new Event('mousewheel', { bubbles: true, cancelable: false, deltaY: -1 })
      // this.canvas.dispatchEvent(event)
      // this.chart.doZoom(10)

      // const evt = document.createEvent('MouseEvents')
      // evt.initEvent('wheel', true, true)
      // evt.deltaY = 150
      // document.getElementById('canvasInstance').dispatchEvent(evt)

      // const app = document.getElementById('app')

      // this.canvas.dispatchEvent(evt)

      for (let index = 0; index < 4; index++) {
        const evt = document.createEvent('MouseEvents')
        evt.initEvent('wheel', true, true)
        evt.deltaY = 150
        // document.getElementById('canvasInstance').dispatchEvent(evt)

        // const app = document.getElementById('app')

        this.canvas.dispatchEvent(evt)
      }
    },
  },
}
</script>

<style>
/* #container {
  max-width: 500px;
  max-height: 500px;
  overflow: hidden;
} */
</style>
