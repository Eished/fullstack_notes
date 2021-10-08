var randomScalingFactor = function () {
  return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100)
}

var barChartData = {
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
}

window.onload = function () {
  var ctx = document.getElementById('canvas').getContext('2d')
  window.myBar = new window.Chart(ctx, {
    type: 'bar',
    data: barChartData,
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
            threshold: 10,
          },
          zoom: {
            enabled: true,
            mode: 'y',
          },
        },
      },
    },
  })
}
