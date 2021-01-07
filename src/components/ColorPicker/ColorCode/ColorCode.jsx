import React from "react";
import "./ColorCode.css";

export const ColorCode = ({color}) => {
  const {hue, saturation, lightness} = color;
  return (
    <div className="ColorCode">
      hsl({hue}, {saturation}%, {lightness}%)
    </div>
  );
};
