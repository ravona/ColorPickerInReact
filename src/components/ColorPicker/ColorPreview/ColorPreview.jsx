import React from "react";

// style:
import "./ColorPreview.css";

export const ColorPreview = ({color}) => {
  const {hue, saturation, lightness} = color;

  return (
    <div
      className="ColorPreview"
      style={{
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      }}
    ></div>
  );
};
