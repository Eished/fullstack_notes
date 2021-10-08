import { Line } from 'vue-chartjs'
import 'chartjs-plugin-zoom'
import 'hammerjs'
import 'chart.js'

export default {
  extends: Line,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pan: {
          // Boolean to enable panning
          enabled: true,

          // Panning directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow panning in the y direction
          mode: 'xy',
        },
        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: true,

          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'xy',
        },
        plugins: [
          {
            id: 'kwhWeek',
            beforeDraw(chart) {
              console.log(chart)
              const width = chart.chart.width
              const height = chart.chart.height
              const ctx = chart.chart.ctx
              ctx.restore()
              const fontSize = (height / 114).toFixed(2)
              ctx.font = `${fontSize}em sans-serif`
              ctx.textBaseline = 'middle'
              const text = '4511kWh'
              const textX = Math.round((width - ctx.measureText(text).width) / 2)
              const textY = height / 2
              ctx.fillText(text, textX, textY)
              ctx.save()
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: ['January', 'Feb', 'seb', 'kek', 'dev'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            pointBackgroundColor: ['#F2A727', '#f1f1f1', '#0275D8'],
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      this.options
    )
  },
}
