import { Dot } from "../../models/Dot";

import "./VisibleDot.css";

interface VisibleDotProps extends Dot {
  size: number;
}

export function VisibleDot({
  xCoordinate,
  yCoordinate,
  size = 8,
}: VisibleDotProps) {
  return (
    <div
      className="visible-dot__container"
      style={{ left: xCoordinate, top: yCoordinate, height: size, width: size }}
    ></div>
  );
}
