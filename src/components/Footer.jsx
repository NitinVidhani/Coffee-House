import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container} d-flex align-items-center`}>
      <div
        className={`container d-flex justify-content-around ${styles.content}`}
      >
        <div className={`text-white ${styles.appName}`}>
          <h4 className="overflow-hidden">CoffeeHouse</h4>
        </div>
        <div className={styles.explore}>
          <h5 className="overflow-hidden text-white">Explore</h5>
          <ul className="p-0">
            <li className="m-0">
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li className="m-0">
              <NavLink to="/products" className={styles.navLink}>
                Products
              </NavLink>
            </li>
            <li className="m-0">
              <NavLink to="/about" className={styles.navLink}>
                About
              </NavLink>
            </li>
            <li className="m-0">
              <NavLink to="/contact" className={styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.connect}>
          <h5 className="text-white overflow-hidden">Connect</h5>
          <ul className="p-0">
            <li className="m-0">
              <a href="#" className={styles.navLink}>
                Instagram
              </a>
            </li>
            <li className="m-0">
              <a href="#" className={styles.navLink}>
                Twitter
              </a>
            </li>
            <li className="m-0">
              <a href="#" className={styles.navLink}>
                Facebook
              </a>
            </li>
            <li className="m-0">
              <a href="#" className={styles.navLink}>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
