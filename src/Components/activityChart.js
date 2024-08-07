// ActivityChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 3000, 4000, 2000, 10000, 5000, 6000, 8000, 12000, 11000, 10000, 9000, 8000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 15,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 15000,
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full mx-auto bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Activity</h2>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none">
          Weekly
        </button>
      </div>
      <div className="relative h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
