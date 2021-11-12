import React from "react";
import "./cart-component.style.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import CartItem from "../small-cart-item/cart-item.component";
import SecondButton from "../second-button/second-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-msg">Your cart is empty</span>
      )}
    </div>

    <SecondButton onClick={() => history.push("/checkout")}>
      Checkout
    </SecondButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
