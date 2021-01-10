import React from "react";
import "./ColorCode.css";

export const ColorCode = ({color}) => {
  const {hue, saturation, lightness} = color;

  return (
    <form className="ColorForm">
      <text class="ColorCode" aria-readonly>
        {`hsl(${hue}, ${saturation}%, ${lightness}%)`}
      </text>
    </form>
  );
};
