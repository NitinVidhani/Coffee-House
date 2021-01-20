import React, {useContext, useEffect} from "react";
import { StateContext } from "../StateProvider";
import "../styles/Product.css";

const Product = ({ id, title, image, price }) => {
  const {cart, setCart} = useContext(StateContext);

  const addToCart = () => {
    setCart({...cart,
      products: [...cart.products, {id, title, image, price}], 
      totalPrice: cart.totalPrice + parseInt(price)
    })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div className="product my-3">
      <div className="product__info my-2 text-center">
        <p className="product__title my-0">{title}</p>
        <p className="product__price my-1">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <img className="product__image my-0" src={image} alt="product image" />
        <button onClick={addToCart} className="my-2 mx-auto">Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
