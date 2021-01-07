import React from "react";

export const ColorCode = ({saturation, lightness}) => {
  return (
    <div>
      hsl(0, {saturation}%, {lightness}%
    </div>
  );
};
