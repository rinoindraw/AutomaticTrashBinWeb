import React from "react";
import TrashCapacityChart from "../GraphicChart/GraphicChart";
import OrganicCapacityChart from "../GraphicChart/OrganicCapacityChart";
import UnOrganicCapacityChart from "../GraphicChart/UnOrganicCapacityChart";
import BarChart from "../GraphicChart/BarChart";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";
import pkmLogo from "../../assets/pkm_logo.png";
import navIcon3 from "../../assets/nav-icon3.svg";

const Dashboard = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img className={styles.dashLogo} src={pkmLogo} alt="Logo" />
            <div className="social-icon">
              <a
                href="https://www.instagram.com/automatictrashbin_pkmkc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className={styles.tittleText}>
              <h2>Dashboard</h2>
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

export default Dashboard;
