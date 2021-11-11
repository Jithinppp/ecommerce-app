import React from "react";
import "./cart-item.style.css";

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-detials">
      <span className="name">{name} </span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default cartItem;
