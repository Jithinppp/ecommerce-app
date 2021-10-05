import React from "react";
import "./menu-item.style.css";

function MenuItem({ title, imageUrl }) {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item">
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
}

export default MenuItem;
