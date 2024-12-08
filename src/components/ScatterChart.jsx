// src/components/ScatterChart.jsx
import React from 'react';
import { Scatter } from 'react-chartjs-2'; //Scatter plot components

const ScatterChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.profits.map((profit, index) => ({ x: data.expenses[index], y: profit })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', //Background color 
      },
    ],
  };

  return <Scatter data={chartData} />;
};

export default ScatterChart;
