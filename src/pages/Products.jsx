import React from "react";
import banner from "../images/banner.png";
import "../styles/Products.css";
import Product from "../components/Product";
import image from "../images/espresso.png";

const Products = () => {
  return (
    <>
      <div className="products">
        <img className="products__bannerImage" src={banner} alt="banner" />
        
        <div className="container text-center">
          {/* Categories DropDown */}
          <select className="products__categories" name="" id="">
            <option value="All" selected>All</option>
            <option value="Coffee">Coffee</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Burger">Burger</option>
          </select>
          
          {/* Products Section */}
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <Product id={1} title="Espresso" image={image} price="120" />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <Product id={2} title="Espresso" image={image} price="120" />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <Product id={3} title="Espresso" image={image} price="120" />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <Product id={4} title="Espresso" image={image} price="120" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
