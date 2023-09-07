import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import styles from "./Chart.module.css";

const BarChartTwo = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.barChartTwo) {
      window.barChartTwo.destroy();
    }

    const data1 = 25;
    const data2 = 75;
    const data3 = 65;

    const chartData = {
      labels: ["Trash Bin"],
      datasets: [
        {
          label: "Metal Trash Bin",
          backgroundColor: "rgba(23, 107, 135, 0.3)",
          borderColor: "#176B87",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(23, 107, 135, 0.7)",
          hoverBorderColor: "#176B87",
          data: [data1],
        },
        {
          label: "Organic Trash Bin",
          backgroundColor: "rgba(0, 128, 0, 0.3)",
          borderColor: "rgba(0, 128, 0, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 128, 0, 0.7)",
          hoverBorderColor: "rgba(0, 128, 0, 1)",
          data: [data2],
        },
        {
          label: "UnOrganic Trash Bin",
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 0, 0, 0.7)",
          hoverBorderColor: "rgba(255, 0, 0, 1)",
          data: [data3],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
      },
    };

    window.barChartTwo = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  }, []);

  return (
    <div className={styles.barContainer}>
      <div className={styles.cardwrapper}>
        <div>
          <canvas className={styles.barChart} ref={chartRef}></canvas>
        </div>
        <p className={styles.chartLabel}>Bar Graphic</p>
      </div>
    </div>
  );
};

export default BarChartTwo;
