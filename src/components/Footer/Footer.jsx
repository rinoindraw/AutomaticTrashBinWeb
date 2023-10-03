import React from "react";
import navIcon3 from "../../assets/nav-icon3.svg";
import pkmkcLogo from "../../assets/pkmsmall.png";
import gundar from "../../assets/gundarsmall.png";
import kampusMerdeka from "../../assets/kammerdekasmall.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <p>Supported By</p>
        <div className={styles.supportLogo}>
          <img className={styles.footerLogo} src={pkmkcLogo} alt="Logo" />
          <img className={styles.footerLogo} src={gundar} alt="Logo" />
          <img className={styles.footerLogo} src={kampusMerdeka} alt="Logo" />
        </div>
      </div>
      <div className={styles.socialFooter}>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/automatictrashbin_pkmkc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon3} alt="Icon" />
          </a>
          <p>&copy; 2023, PKM-KC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
