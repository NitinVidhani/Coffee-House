import React from "react";
import MPCard from "./MPCard";
import styles from '../styles/mostpopular.module.css';

const MostPopular = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <h2 className="heading text-center my-5 overflow-hidden">Most Popular</h2>
        <div className="row">
          <div className="col-md-4">
            <MPCard />
          </div>
          <div className="col-md-4">
            <MPCard />
          </div>
          <div className="col-md-4">
            <MPCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
