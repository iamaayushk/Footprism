import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Labels and data
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3, 9],
      backgroundColor: '#3B9CBA',
      
    },
    {
      label: 'Dataset 2',
      data: [8, 11, 7, 6, 4, 5, 10],
      backgroundColor: '#3C3D7C',
      
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels:{
        color: 'white',
      }
    },
    title: {
      display: true,
      // text: 'Performance',
      color: 'white',
    },
  },
  scales: {
    x: {
      grid: {
        color: '#ffff', // 👈 X-axis grid line color
      },
      ticks: {
        color: 'white', // 👈 X-axis labels
      },
    },
    y: {
      grid: {
        color: '#ffff', // 👈 Y-axis grid line color
      },
      ticks: {
        color: '#ffff', // 👈 Y-axis labels
      },
    },
  },
  backgroundColor: '#ffff',
};

// BarChart component
export function BarChart() {
  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar options={options} data={data} />
    </div>
  );
}
