import React from "react";
import "./menu-item.style.css";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, history, links, match }) {
  console.log(match.url, links);
  return (
    <div
      onClick={() => history.push(`${match.url}${links}`)}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="menu-item"
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
