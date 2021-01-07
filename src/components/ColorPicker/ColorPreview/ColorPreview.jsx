import React from "react";

// style:
import "./ColorPreview.css";

export const ColorPreview = ({color}) => {
  return (
    <div
      className="ColorPreview"
      style={{
        backgroundColor: `rgb(${[...color]})`,
      }}
    ></div>
  );
};
