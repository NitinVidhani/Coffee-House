import React, { useContext, useEffect } from "react";
import appIcon from "../images/logo.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import styles from "../styles/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import basketIcon from '../images/basketicon.svg'
import {StateContext} from '../StateProvider'

const Navbar = () => {
  const {cart, setCart} = useContext(StateContext)

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if(data) {
      setCart(JSON.parse(data))
    }
  }, [])

  const displayAccount = () => {
    document.querySelector('.account').classList.toggle(styles.active)
  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink
            className="navbar-brand"
            to="/"
          >
            <img className={styles.logo} src={appIcon} alt="" />
            CoffeeHouse
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink exact
                  className={`nav-link ${styles.link}`}
                  to="/"
                  activeClassName="link-active"
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink exact
                  className={`nav-link ${styles.link}`}
                  to="/products"
                  activeClassName="link-active"
                >
                  Products
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink exact
                  className={`nav-link ${styles.link}`}
                  to="/contact"
                  activeClassName="link-active"
                >
                  Contact
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink exact
                  className={`nav-link ${styles.link}`}
                  to="/login"
                  activeClassName="link-active"
                >
                  Login
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <p onClick={displayAccount}
                  className={`nav-link ${styles.link} ${styles.profile}`}
                >
                  Profile
                </p>
                <div className={`${styles.account} account`} onMouseLeave={displayAccount}>
                <ul>
                  {/* Protected Route manage store */}
                  <li><Link to="/admin">Manage Store</Link></li>
                  <li>Your Orders</li>
                  <li>Logout</li>
                </ul>
              </div>
              </li>
              
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink exact
                  className={`nav-link ${styles.link}`}
                  to="/checkout"
                  activeClassName="link-active"
                >
                  <img className={styles.cartIcon} src={basketIcon} alt="cart"/>
                  <span className="ml-1">{cart.products.length}</span>
                </NavLink>
              </li>
            </ul>
           
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
