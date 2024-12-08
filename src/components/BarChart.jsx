// src/components/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => { //Bar chart components 
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', //color
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
