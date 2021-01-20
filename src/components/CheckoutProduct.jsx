import React, { useContext, useEffect } from "react";
import "../styles/CheckoutProduct.css";
import { StateContext } from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price }) => {
  const { cart, setCart } = useContext(StateContext);
  const removeFromCart = () => {

    let newProducts = [...cart.products]
    console.log(newProducts);
    let index = newProducts.findIndex(item => item.id === id)
    console.log(newProducts.splice(index, 1));
    console.log(newProducts);
    setCart({...cart, 
      products: newProducts,
      totalPrice: cart.totalPrice - parseInt(price)
    })  
  };
  
  return (
    <div className="checkoutProduct my-2">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="checkout_product"
      />
      <div className="checkoutProduct__details mx-4">
        <div className="checkoutProduct__title my-1">{title}</div>
        <div className="checkoutProduct__price my-1">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <button onClick={removeFromCart} className="my-1">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
