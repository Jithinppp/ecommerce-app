import React from "react";
import "./cart-component.style.css";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />

    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CartDropdown;
