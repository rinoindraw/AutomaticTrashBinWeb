import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SidebarLink from "./SidebarLink";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiHomeAlt, BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { BsPersonFill, BsFillTrash2Fill } from "react-icons/bs";
import pkmLogo from "../../assets/pkm_logo.png";

const SideBar = ({
  darkMode,
  toggleDarkMode,
  sidebarClosed,
  handleSidebarToggle,
}) => {
  const switchClassName = darkMode ? "switch dark" : "switch";
  const sidebarClassName = `${styles.sidebar} ${
    sidebarClosed ? styles.close : ""
  }`;

  return (
    <nav
      className={`${styles.sidebar} ${darkMode ? styles.dark : ""} ${
        sidebarClosed ? styles.close : ""
      }`}
    >
      <header>
        <div className={styles.imageText}>
          <span className={styles.image}>
            {darkMode ? (
              <img src={pkmLogo} alt="logo" />
            ) : (
              <img src={pkmLogo} alt="logo" />
            )}
          </span>

          <div className={`${styles.text} ${styles.headerText}`}>
            <span className={styles.name}>AutomaticTrashBin</span>
          </div>
        </div>

        <MdOutlineKeyboardArrowRight
          className={styles.toggle}
          onClick={handleSidebarToggle}
        />
      </header>
      <div className={styles.menuBar}>
        <div className={styles.menu}>
          <ul className={styles["menu-links"]}>
            <SidebarLink
              icon={<BiHomeAlt className={styles.icon} />}
              text={"Dashboard"}
              to={"/"}
            />
            <SidebarLink
              icon={<BsFillTrash2Fill className={styles.icon} />}
              text={"Trash Bin 1"}
              to={"/trashbin1"}
            />
            <SidebarLink
              icon={<BsFillTrash2Fill className={styles.icon} />}
              text={"Trash Bin 2"}
              to={"/trashbin2"}
            />
            <SidebarLink
              icon={<BsFillTrash2Fill className={styles.icon} />}
              text={"Trash Bin 3"}
              to={"/trashbin3"}
            />
            <SidebarLink
              icon={<BsPersonFill className={styles.icon} />}
              text={"About Us"}
              to={"/about"}
            />
          </ul>
        </div>

        <div className={styles.bottomContent}>
          <li className={styles.mode}>
            <div className={styles.moonSun}>
              {darkMode ? (
                <i className={`${styles.icon} ${styles.moon}`}>
                  <MdDarkMode />
                </i>
              ) : (
                <i className={`${styles.icon} ${styles.sun}`}>
                  <MdOutlineLightMode />
                </i>
              )}
            </div>
            <span className={`${styles.modeText} ${styles.text}`}>
              Theme{darkMode ? " Light" : " Dark"}
            </span>
            <div
              className={`${styles.toggleSwitch} ${styles[switchClassName]}`}
              onClick={toggleDarkMode}
            >
              <span className={styles.switch}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
