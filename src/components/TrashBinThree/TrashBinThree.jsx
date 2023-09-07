import React from "react";
import ChartFour from "../Chart/ChartFour";
import ChartFive from "../Chart/ChartFive";
import ChartSix from "../Chart/ChartSix";
import BarChartTwo from "../Chart/BarChartTwo";
import Footer from "../Footer/Footer";
import styles from "./TrashBinThree.module.css";
import pkmLogo from "../../assets/pkm_logo.png";

const TrashBinThree = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={pkmLogo} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Trash Bin 3</h2>
              <p>AutomaticTrashBin</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <ChartFour />
            <ChartFive />
            <ChartSix />
          </div>
          <BarChartTwo />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </section>
  );
};

export default TrashBinThree;
