import {React} from "react";

// style:
import "./ColorSelect.css";

// hooks:
import {useMousePosition} from "../../../hooks/useMousePosition";
const rainbow = document.querySelector(".ColorSelect");

export const ColorSelect = ({onUpdateColorValue}) => {
  const position = useMousePosition(window);

  let updatedColor = {
    saturation: position.x,
    lightness: position.y,
  };

  const handleColorSelect = () => {
    onUpdateColorValue(updatedColor);
  };

  return <div className="ColorSelect" onClick={handleColorSelect}></div>;
};
