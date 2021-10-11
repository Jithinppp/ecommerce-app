import React from "react";
import "./menu-item.style.css";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, history, links, match }) {
  return (
    <div
      onClick={() => history.push(`${match.url}${links}`)}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="menu-item"
    >
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
