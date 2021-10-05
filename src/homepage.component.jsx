import React from "react";
import "./homepage.style.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="container">
            <h1 className="title">HATS</h1>
            <span className="sub-title">shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="container">
            <h1 className="title">SNEAKERS</h1>
            <span className="sub-title">shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="container">
            <h1 className="title">JACKETS</h1>
            <span className="sub-title">shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="container">
            <h1 className="title">WOMENS</h1>
            <span className="sub-title">shop now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="container">
            <h1 className="title">MENS</h1>
            <span className="sub-title">shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
