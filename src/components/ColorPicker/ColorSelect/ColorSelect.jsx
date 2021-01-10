import {React} from "react";

// hooks:
import {useMousePosition} from "../../../hooks/useMousePosition";

// style:
import "./ColorSelect.css";

export const ColorSelect = ({onUpdateColorValue}) => {
  const position = useMousePosition();

  const updatedColor = {saturation: position.x, lightness: position.y};

  const handleColorSelect = () => {
    onUpdateColorValue(updatedColor);
  };

  return <div className="ColorSelect" onClick={handleColorSelect}></div>;
};
