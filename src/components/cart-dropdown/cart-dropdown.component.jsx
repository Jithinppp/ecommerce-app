import React from "react";
import "./cart-component.style.css";
import { connect } from "react-redux";

import CartItem from "../small-cart-item/cart-item.component";
import SecondButton from "../second-button/second-button.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <SecondButton>Checkout</SecondButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
