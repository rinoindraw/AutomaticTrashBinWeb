import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";

const OrganicCapacityChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.organicChart) {
      window.organicChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [65, 35],
          backgroundColor: ["#176B87", "#B4E4FF"],
        },
      ],
    };

    const options = {
      responsive: false, // Diubah ke true jika mau di balikan menjadi responsive ketika dikecilkan
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
      },
    };

    window.organicChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options,
    });
  }, [data]);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.cardwrapper}>
        <div>
          <canvas className={styles.chart} ref={chartRef}></canvas>
        </div>
        <p className={styles.chartText}>Organic Trash Bin</p>
      </div>
    </div>
  );
};

export default OrganicCapacityChart;
