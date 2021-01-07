import React from "react";

// style:
import "./ColorPreview.css";

export const ColorPreview = (color) => {
  return (
    <div
      className="ColorPreview"
      style={{
        backgroundColor: `hsl(${color.hue} ${color.saturation}% ${color.lightness}%)`,
      }}
    ></div>
  );
};
