import React from "react";
import "./checkout.style.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout">
    <div className="checkout-header">
      <div className="checkout-block">
        <span className="checkout-span">product</span>
      </div>
      <div className="checkout-block">
        <span className="checkout-span">description</span>
      </div>
      <div className="checkout-block">
        <span className="checkout-span">quantity</span>
      </div>
      <div className="checkout-block">
        <span className="checkout-span">price</span>
      </div>
      <div className="checkout-block">
        <span className="checkout-span">remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => cartItem.name)}
    <span>TOTAL : ${total}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
