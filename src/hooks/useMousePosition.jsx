import {useEffect, useState} from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const setFromEvent = (e) => setPosition({x: e.offsetX, y: 100 - e.offsetY});

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
