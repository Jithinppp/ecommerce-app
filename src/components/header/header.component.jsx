import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div>Shoppie</div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <a className="option" onClick={() => auth.signOut()}>
          Sign Out
        </a>
      ) : (
        <Link to="/signin" className="option">
          Sign in
        </Link>
      )}
    </div>
  </div>
);

const mapToStateProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapToStateProps)(Header);
