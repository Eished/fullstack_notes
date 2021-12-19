import React, { useRef, useState } from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'
// defaults.font.family = 'Montserrat';
console.log(defaults)
defaults.global.defaultFontFamily = 'Arial'
defaults.global.defaultFontSize = 14

let MockData = {
  datasets: [
    {
      label: 'Over a month',
      data: [15, 72, 25, 52, 5, 22],
      backgroundColor: '#6ED3FF',
    },
    {
      label: 'Over 3 months',
      data: [14, 9, 35, 92, 5, 82],
      backgroundColor: '#60D300',
    },
    {
      label: 'Over 12 months',
      data: [71, 3, 45, 2, 5, 62],
      backgroundColor: '#660066',
    },
    {
      label: 'Over 2 years',
      data: [31, 3, 75, 2, 5, 22],
      backgroundColor: '#ff4466',
    },
  ],
  labels: [
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
    'Project-Name-Prod1',
  ],
}

const HorizontalBarChart = () => {
  const [detailData, setDetailData] = useState('')
  const [data, setData] = useState(MockData)

  const onClickHandle = (e, item) => {
    console.log(e, ref.current, item)
    // ref.current.getElementAtEvent(e);
    // ref.current.getDatasetAtEvent(e);
    // ref.current.getPointsAtEvent(e);
  }
  const ref = useRef()
  const options = {
    // events: ['click'],
    // onClick: onClickHandle,
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    maintainAspectRatio: false, // width
    // elements: {
    //   bar: {
    //     borderWidth: 2,
    //   },
    // },
    responsive: true,
    offsetGridLines: true,
    drawTicks: true,
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      labels: {
        // usePointStyle: true,
        fontSize: 12,
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle: 'bold',
      },
      lineDash: [1, 1],
      lineCap: 'butt',
      lineJoin: 'bevel',
      lineWidth: '5',
      strokeStyle: '#f0f0f0',
      lineDashOffset: '10',
      fillStyle: '#f0f0f0',
    },
    // plugins: {
    // title: {
    //   display: true,
    //   text: 'Chart.js Horizontal Bar Chart',
    // },
    // },
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: {
            padding: 5,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            padding: 5,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      mode: 'nearest',
    },
  }
  console.log(data.labels.length)
  return (
    <div className="" style={{ position: 'relative', height: 50 + data.labels.length * 22 + 'px' }}>
      <button
        onClick={() => {
          data.labels.pop()
          setData({ ...data })
        }}
      >
        remove
      </button>
      <HorizontalBar
        // height={50 + data.labels.length * 22}
        // width={600}
        getElementAtEvent={(elements, event) => {
          if (event.type === 'click' && elements.length) {
            console.log('getElementAtEvent', elements[0])
            // console.log('current', ref.current)
            const index = elements[0]._index
            const datasetIndex = elements[0]._datasetIndex
            const value = data.datasets[datasetIndex].data[index]
            console.log(value)
            setDetailData(value)
          }
        }}
        // getDatasetAtEvent={(elements, event) => {
        //   if (event.type === 'click' && elements.length) {
        //     console.log('getDatasetAtEvent', elements)
        //   }
        // }}
        // getElementsAtEvent={(elements, event) => {
        //   if (event.type === 'click' && elements.length) {
        //     console.log('getElementsAtEvent', elements[0]);
        //   }
        // }}
        ref={ref}
        data={data}
        options={options}
      />
      {detailData ? (
        <div
          className="fixed grid top-0 left-0 w-full h-screen justify-center content-center"
          onClick={() => {
            setDetailData('')
          }}
        >
          <div className="grid grid-cols-2 bg-yellow-400 border-2 shadow h-96 justify-center content-start overflow-auto p-10">
            <span className="border-2 h-10 w-40 bg-red-400 text-2xl">hello</span>
            <span className="border-2 h-10 bg-red-400 text-base">hello</span>
            <span className="border-2 h-10 bg-red-400 text-sm">hello</span>
            <span className="border-2 h-10 bg-red-400 text-sm">hello</span>
            <span className="border-2 h-10 bg-red-400 text-xs">hello</span>
            <span className="border-2 h-10 bg-red-400 text-xs">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2 h-10 bg-red-400">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
            <span className="border-2">hello</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HorizontalBarChart
