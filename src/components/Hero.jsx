import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import styles from "../styles/hero.module.css";
import { NavLink } from "react-router-dom";
import illustration from '../images/illustration.svg'

const Hero = () => {
  return (
    <>
      <div className={`container ${styles.content}`}>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center flex-column order-2 order-lg-1">
            <h4 className={styles.tag1}>Don't have anything to do??</h4>
            <h3 className={`my-2 ${styles.tag2}`}>
              Have a cup of <span className={styles.coffee}>Coffeeee!!</span>
            </h3>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              euismod, odio ut semper scelerisque, leo enim condimentum felis,
              ac pulvinar leo neque at lacus.
            </p>
            <NavLink to="/login" className="mb-5">
              <button className={styles.button}>Have it</button>
            </NavLink>
          </div>
          <div className="col-md-6 order-lg-2 order-1 mb-5">
            <img src={illustration} alt="Main_image" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
