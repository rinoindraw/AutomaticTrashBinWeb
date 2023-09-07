import React from "react";
import TrashCapacityChart from "../GraphicChart/GraphicChart";
import OrganicCapacityChart from "../GraphicChart/OrganicCapacityChart";
import UnOrganicCapacityChart from "../GraphicChart/UnOrganicCapacityChart";
import BarChart from "../GraphicChart/BarChart";
import Footer from "../Footer/Footer";
import styles from "./TrashBinOne.module.css";
import pkmLogo from "../../assets/pkm_logo.png";

const TrashBinOne = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={pkmLogo} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Trash Bin 1</h2>
              <p>AutomaticTrashBin</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <TrashCapacityChart />
            <OrganicCapacityChart />
            <UnOrganicCapacityChart />
          </div>
          <BarChart />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </section>
  );
};

export default TrashBinOne;
