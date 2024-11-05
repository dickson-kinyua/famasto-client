// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

export default function Chemicals() {
  const { products } = useFetch("http://localhost:4002/fetchChemicals");

  return (
    <div className="chemicals">
      {products.map((product) => {
        return (
          <div className="item_wrapper" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img className="item_image" src="7.jpeg" alt="item image" />
              <p className="product">{product.name}</p>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
