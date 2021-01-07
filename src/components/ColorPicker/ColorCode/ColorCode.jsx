import React from "react";
import "./ColorCode.css";

export const ColorCode = ({color}) => {
  const {hue, saturation, lightness} = color;
  return (
    <div>
      hsl({hue}, {saturation}, {lightness})
    </div>
  );
};
