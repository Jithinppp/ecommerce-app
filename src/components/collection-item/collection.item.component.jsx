import React from "react";
import "./collection.item.style.css";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
// import CustomButton from "../custom-button/custom-button.component";
import SecondButton from "../second-button/second-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <SecondButton onClick={() => addItem(item)}>Add to cart</SecondButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
