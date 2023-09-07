import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import styles from './Chart.module.css';

const ChartOne = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
  
    // Hancurkan grafik yang ada jika ada
    if (window.chartOne) {
      window.chartOne.destroy();
    }
  
    // Data dummy persentase kapasitas
    const data = {
      labels: ['Filled', 'Remaining'],
      datasets: [
        {
          data: [35, 65],
          backgroundColor: ['#176B87', '#B4E4FF'],
        },
      ],
    };
  
    // Konfigurasi opsi grafik
    const options = {
      responsive: false, // Diubah ke true jika mau di balikan menjadi responsive ketika dikecilkan
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            color: '#000', // Ganti warna teks label di sini
          }
        }
      }
    };
  
    // Membuat chart dengan Chart.js
    window.chartOne = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
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

export default ChartOne;
