import {React, useState} from "react";

// components:
import {ColorSelect} from "./ColorSelect/ColorSelect";
import {ColorPreview} from "./ColorPreview/ColorPreview";
import {ColorCode} from "./ColorCode/ColorCode";

// style:
import "./ColorPicker.css";

export const ColorPicker = () => {
  const [color, setColor] = useState({
    hue: 0,
    saturation: "50%",
    lightness: "50%",
  });

  const {hue, saturation, lightness} = color;

  const updateColorValue = (updatedColor) => {
    setColor({...color, ...updatedColor});
  };

  return (
    <div className="ColorPicker">
      <ColorSelect color={color} onUpdateColorValue={updateColorValue} />
      <ColorPreview color={color} />
      <ColorCode color={color} />
    </div>
  );
};
