import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the chart   
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#26408B',
        '#2BA189',
        '#FFCE564D',
        '#4BC0C04D',
        '#9966FF4D',
        '#FF9F404D',
      ],
      borderColor: [
        '#6F89D8',
        '#5ED4BC',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
      ],
      borderWidth: 1,
    },
  ],
};

// Chart options with custom label, grid, and tooltip colors
const options = {
  plugins: {
    legend: {
      labels: {
        color: '#E0E0E0', // Legend label text color
      },
    },
    tooltip: {
      backgroundColor: '#1F1F1F',
      titleColor: '#FFCC00',
      bodyColor: '#FFFFFF',
    },
    title: {
      display: true,
    //   text: 'Doughnut Chart - Votes',
      color: '#FFFFFF',
      font: {
        size: 16,
      },
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className="w-full h-90 flex justify-center items-center  p-4 rounded-xl">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
