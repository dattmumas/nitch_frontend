import React, { useState } from 'react';
import DraggableBox from './DraggableBox';
import DropArea from './DropArea';

const Canvas = () => {
  const [boxes, setBoxes] = useState({
    'box1': { top: 20, left: 80 },
    'box2': { top: 180, left: 20 },
  });

  const moveBox = (id, left, top) => {
    setBoxes({
      ...boxes,
      [id]: { left, top },
    });
  };

  return (
      <DropArea onDrop={moveBox}>
        {Object.keys(boxes).map((key) => {
          const { left, top } = boxes[key];
          return (
            <DraggableBox key={key} id={key} left={left} top={top}>
              {key}
            </DraggableBox>
          );
        })}
      </DropArea>
  );
};

export default Canvas;