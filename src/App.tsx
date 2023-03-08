import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ClickableArea } from "./components/ClickableArea/ClickableArea";
import { VisibleDot } from "./components/VisibleDot/VisibleDot";
import { Dot } from "./models/Dot";

const DOT_SIZE = 8;

function App() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [stack, setStack] = useState<Dot[]>([]);

  const handleClickArea = (dot: Dot) => {
    setDots([
      ...dots,
      {
        xCoordinate: dot.xCoordinate - DOT_SIZE / 2,
        yCoordinate: dot.yCoordinate - DOT_SIZE / 2,
      },
    ]);
    setStack([]);
  };

  const handleRedo = () => {
    if (stack.length > 0) {
      setDots([...dots, stack[0]]);
      setStack(stack.slice(1, stack.length));
    }
  };

  const handleUndo = () => {
    if (dots.length > 0) {
      const lastDot = dots[dots.length - 1];
      setStack([lastDot, ...stack]);
      setDots(dots.slice(0, dots.length - 1));
    }
  };

  const handleClickButtonControll = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <ClickableArea onClickArea={handleClickArea}>
      <>
        <div className="button-controll" onClick={handleClickButtonControll}>
          <Button onClick={handleUndo}>undo</Button>
          <Button onClick={handleRedo}>redo</Button>
        </div>
        {dots.map((dot, index) => (
          <VisibleDot
            key={`visible-dot-${index}`}
            size={DOT_SIZE}
            xCoordinate={dot.xCoordinate}
            yCoordinate={dot.yCoordinate}
          />
        ))}
      </>
    </ClickableArea>
  );
}

export default App;
