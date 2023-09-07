import React from "react";
import ChartOne from "../Chart/ChartOne";
import ChartTwo from "../Chart/ChartTwo";
import ChartThree from "../Chart/ChartThree";
import BarChartOne from "../Chart/BarChartOne";
import Footer from "../Footer/Footer";
import styles from "./TrashBinTwo.module.css";
import pkmLogo from "../../assets/pkm_logo.png";

const TrashBinTwo = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={pkmLogo} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Trash Bin 2</h2>
              <p>AutomaticTrashBin</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <ChartOne />
            <ChartTwo />
            <ChartThree />
          </div>
          <BarChartOne />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </section>
  );
};

export default TrashBinTwo;
