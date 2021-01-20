import React from "react";
import { NavLink } from "react-router-dom";
import espresso from "../images/espresso.png";
import styles from "../styles/mostpopularcard.module.css";

const MPCard = () => {
  return (
    <>
      <div className={`card ${styles.card}`}>
        <img
          src={espresso}
          alt=""
          className={`card-img-top ${styles.cardImg}`}
        />
        <div className="card-body">
          <h4 className="card-title text-center overflow-hidden">Espresso</h4>
          <p className={`card-text text-center ${styles.desc}`}>
            Espresso as a standalone coffee is served everywhere. It contains
            literally the basic essence. Coffee and water. No strings attached.
            Ideal serving: 30ml Espresso in a 90ml cup.
          </p>
          <div className="text-center">
            <NavLink to="#" className={`btn btn-primary ${styles.button}`}>
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MPCard;
