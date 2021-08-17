import React from "react";
import { useDispatchCart } from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ product }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <article className="card">
      <img src={product.imageUrl} className="box" alt="kitten looking menacing." />
          <div>
            <h5>{product.title}</h5>
          </div>
            <h6>
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </h6>
        <p>{product.desc}</p>
        <button className="btn btn-lg btn-primary"  onClick={() => addToCart(product)}>Add to cart</button>
    </article>
  );
};

export default Product;
