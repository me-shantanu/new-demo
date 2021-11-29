import React from "react";
import { Link } from "react-router-dom";
import "./SingleNav.css";

function SingleNav({ path, active, Icon, text }) {
  return (
    <Link className="singlenav__link" to={path}>
      <div className={`singlenav`}>
        {/* <Icon className="singlenav__icon" /> */}
        <h2 className="singlenav__text">{text}</h2>
      </div>
    </Link>
  );
}

export default SingleNav;