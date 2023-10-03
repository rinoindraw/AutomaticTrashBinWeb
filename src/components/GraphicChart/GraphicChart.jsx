import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import {database} from "../../firebase"; // Sesuaikan dengan path ke file konfigurasi Firebase And
import { ref, onValue } from "firebase/database";

const TrashCapacityChart = () => {
  const chartRef = useRef(null);
  const [metalCapacity, setMetalCapacity] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.myChart) {
      window.myChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - metalCapacity, metalCapacity], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#176B87", "#B4E4FF"],
        },
      ],
    };

    const options = {
      responsive: false,
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

    window.myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, [metalCapacity]); // Gunakan metalCapacity sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "tong_sampah/kapasitas_metal"); // Replace with your database reference path

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Metal Capacity:", data);
      setMetalCapacity(data); // Perbarui state metalCapacity dengan nilai dari Firebase
      // Handle the retrieved data here
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.cardwrapper}>
        <div>
          <canvas className={styles.chart} ref={chartRef}></canvas>
        </div>
        <p className={styles.chartText}>Metal Trash Bin</p>
      </div>
    </div>
  );
};

export default TrashCapacityChart;
