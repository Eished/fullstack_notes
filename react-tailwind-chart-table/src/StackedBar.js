import React from 'react';
// import './styles.css';
import { Bar, char, HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Organic', 'Sponsored', 'Organic', 'Sponsored'],
  previousDate: {
    label: '08/10/2019 - 09/30/2019',
    dataSet: [10000, 150000, 10000, 150000],
  },
  currentDate: {
    label: '10/01/2019 - 11/20/2019',
    dataSet: [10000, 225000, 10000, 225000],
  },
};

export default function StackBarChart() {
  return (
    <div className='StackBarChart'>
      <Bar
        pointStyle='star'
        data={{
          labels: data.labels,
          responsive: true,
          // offset: true,
          datasets: [
            {
              label: 'Mobile',
              pointStyle: 'rectRounded',
              backgroundColor: '#6ED3FF',
              barThickness: 40,
              categoryPercentage: 1,
              data: data.previousDate.dataSet, //From API
            },
            {
              label: 'Desktop',
              backgroundColor: '#1497FF',
              barThickness: 40,
              categoryPercentage: 1,
              pointStyle: 'triangle',
              data: data.currentDate.dataSet, //From API
            },
          ],
        }}
        height={220}
        options={{
          // offsetGridLines: true,
          // drawTicks: true,
          layout: {
            padding: {
              top: 30,
              right: 40,
              bottom: 40,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'start',
            labels: {
              usePointStyle: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false, // height
          scales: {
            xAxes: [
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
            yAxes: [
              {
                stacked: false,
                gridLines: {
                  drawBorder: false,
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + 'K';
                  },
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
