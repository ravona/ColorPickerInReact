import {useEffect, useState} from "react";

export const useMousePosition = (element) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const setFromEvent = (e) => setPosition({x: e.offsetX, y: e.offsetY});

    element.addEventListener("mousemove", setFromEvent);

    return () => {
      element.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
