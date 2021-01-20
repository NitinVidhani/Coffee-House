import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/register.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.column}></div>
      <div className={styles.signup}>
        <h3 className="text-center overflow-hidden">Signup to CoffeeHouse</h3>
        <form className={styles.form}>
          <div className="row mb-2">
            <div className="col-md-4 offset-md-2">
              <label className={styles.label}>Firstname</label>
              <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className={styles.label}>Lastname</label>
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-8 offset-md-2">
              <label className={styles.label}>Email</label>
              <input type="email" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-8 offset-md-2">
              <label className={styles.label}>Password</label>
              <input type="password" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-3 offset-md-2">
              <button className={styles.btn}>Create Account</button>
            </div>
          </div>
          <div className="row h-10 mt-3">
            <div className="col-md-2 offset-md-5 text-center">or</div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 offset-md-4">
              <span>Already have an account</span>
              <NavLink to="/login">
                <button className={`mx-3 ${styles.btnLogin}`}>Login</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
