import {React, useState} from "react";
import {ColorPreview} from "./ColorPreview/ColorPreview";
import {ColorCode} from "./ColorCode/ColorCode";

// hooks:
import {useMousePosition} from "../../hooks/useMousePosition";

// style:
import "./ColorPicker.css";

export const ColorPicker = () => {
  const rainbow = document.querySelector(".Rainbow");
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const position = useMousePosition(rainbow);

  return (
    <div className="ColorPicker">
      <div className="Rainbow"></div>
      <ColorPreview />
      <ColorCode saturation={position.x} lightness={position.y} />
    </div>
  );
};
