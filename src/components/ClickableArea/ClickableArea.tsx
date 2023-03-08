import { Dot } from "../../models/Dot";
import "./ClickableArea.css";

type ClickableAreaProps = {
  onClickArea: (dot: Dot) => void;
  children?: string | JSX.Element | JSX.Element[];
};

export function ClickableArea({ onClickArea, children }: ClickableAreaProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClickArea({
      xCoordinate: event.clientX,
      yCoordinate: event.clientY,
    });
  };

  return (
    <div className="clickable-area__container" onClick={handleClick}>
      {children}
    </div>
  );
}
