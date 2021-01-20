import React from "react";
import styles from '../styles/login.module.css'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className={styles.column}></div>
      <div className={styles.signin}>
        <h3 className="text-center overflow-hidden">Login</h3>
        <form className={styles.form}>
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
              <button className={styles.btn}>Login</button>
            </div>
          </div>
          <div className="row h-10 mt-3">
            <div className="col-md-2 offset-md-5 text-center">or</div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-4">
              <span>Don't have an account??</span>
              <NavLink to="/register">
                <button className={`mx-3 ${styles.btnCreateAccount}`}>Create Account</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
