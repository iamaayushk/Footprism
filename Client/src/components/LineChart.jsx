import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2, 5, 58, 8, 5, 8, 5],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#E0E0E0',
      },
    },
    title: {
      display: true,
      // text: 'Line Chart Example',
      color: '#FFFFFF',
      font: {
        size: 18,
      },
    },
    tooltip: {
      backgroundColor: '#1F1F1F',
      titleColor: '#FFCC00',
      bodyColor: '#FFFFFF',
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#CCCCCC',
      },
      grid: {
        color: '#333333',
      },
    },
    y: {
      ticks: {
        color: '#CCCCCC',
      },
      grid: {
        color: '#333333',
      },
    },
  },
};

export function LineChart() {
  return (
    <div className="w-full h-80 p-4  flex justify-center items-center">
      <Line options={options} data={data} />
    </div>
  );
}
