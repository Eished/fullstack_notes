import React, { useRef } from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// defaults.font.family = 'Montserrat';
console.log(defaults);
defaults.global.defaultFontFamily = 'Arial';
defaults.global.defaultFontSize = 14;

let data = {
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
  ],
};

const myData = [
  {
    data: [
      {
        primary: 'Project Name 1',
        secondary: 3,
      },
      {
        primary: 'Project Name 2',
        secondary: 6,
      },
    ],
    label: 'Over a month',
    color: '#FFFF99',
    fontSize: '20px',
  },
  {
    data: [
      {
        primary: 'Project Name 1',
        secondary: 7,
      },
      {
        primary: 'Project Name 2',
        secondary: 1,
      },
    ],
    label: 'Over 3 months',
    color: '#FF6666',
  },
  {
    data: [
      {
        primary: 'Project Name 1',
        secondary: 13,
      },
      {
        primary: 'Project Name 2',
        secondary: 2,
      },
    ],
    label: 'Over 12 months',
    color: '#99CCCC',
  },
  {
    data: [
      {
        primary: 'Project Name 1',
        secondary: 5,
      },
      {
        primary: 'Project Name 2',
        secondary: 9,
      },
    ],
    label: 'Over 2 years',
    color: '#666666',
  },
];

const HorizontalBarChart = () => {
  const onClickHandle = (e, item) => {
    console.log(e, ref.current, item);
    // ref.current.getElementAtEvent(e);
    // ref.current.getDatasetAtEvent(e);
    // ref.current.getPointsAtEvent(e);
  };
  const ref = useRef();
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
    //   title: {
    //     display: true,
    //     text: 'Chart.js Horizontal Bar Chart',
    //   },
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
  };

  return (
    <>
      <HorizontalBar
        height={220}
        // width={600}
        getElementAtEvent={(elements, event) => {
          if (event.type === 'click' && elements.length) {
            console.log('getElementAtEvent', elements[0]);
            console.log('current', ref.current);
          }
        }}
        // getDatasetAtEvent={(elements, event) => {
        //   if (event.type === 'click' && elements.length) {
        //     console.log('getDatasetAtEvent', elements[0]);
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
    </>
  );
};

export default HorizontalBarChart;
