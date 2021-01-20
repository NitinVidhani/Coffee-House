import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CheckoutProduct from "../components/CheckoutProduct";
import { StateContext } from "../StateProvider";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cart } = useContext(StateContext);
  useEffect(() => {
    debugger
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div className="container">
      <div className="checkout">
        {cart.products.map((product) => {
          return (
            <CheckoutProduct
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
        {cart.totalPrice > 0 ? (
          <div className="checkout__totalPriceDetails mb-5">
            <p className="checkout__totalPriceLabel">Total Price</p>
            <p className="checkout__totalPrice">
              <small className="rupeeSymbol">₹</small>
              {cart.totalPrice}
            </p>
            <button className="checkout__paymentButton">Proceed to payment</button>
          </div>
        ) : (
          <div className="checkout__empty">
            <p>
              You do not have any product in the cart. <br />
              Add products to see details
            </p>
            <NavLink to="/products">
              <button className="checkout__emptyButton">Buy Products</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
