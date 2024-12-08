// src/components/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2'; //Line chart components 

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Profits',
        data: data.profits,
        backgroundColor: 'rgba(153, 102, 255, 0.6)', //Color
        borderColor: 'rgba(153, 102, 255, 1)', //Border 
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
