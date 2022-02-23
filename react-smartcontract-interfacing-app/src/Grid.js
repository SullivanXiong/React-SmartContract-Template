import React from "react";
import "./Grid.css";

export default function Grid(props) {
  return <div className="gridWrapper">{props.children}</div>;
}
