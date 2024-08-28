import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@mui/material';

const DropArea = ({ onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'BOX',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      onDrop(item.id, left, top);
    },
  }), [onDrop]);

  return (
    <Box
      ref={drop}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        border: '1px solid #ccc',
      }}
    >
      {/* Render children here */}
    </Box>
  );
};

export default DropArea;