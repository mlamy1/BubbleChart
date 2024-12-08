// src/components/BubbleChart.jsx
import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = ({ data }) => { //bubble chart componets
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Sales, Expenses & Profits',
        data: data.profits.map((profit, index) => ({
          x: data.expenses[index],
          y: profit,
          r: data.sales[index] / 1000,
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.6)', //Border color
      },
    ],
  };

  return <Bubble data={chartData} />;
};

export default BubbleChart;
