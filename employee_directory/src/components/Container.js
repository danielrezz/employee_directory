import React from "react";
import "./containerStyle.css";

function Container(props) {
    return <div className="container">{props.children}</div>;
  }

export default Container;