import React, { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { Container, Box, CssBaseline } from '@mui/material';
import CanvasEditor from './DraggableBox';
import Sidebar from './Sidebar';

const Canvas = () => {
  const [elements, setElements] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: ['text', 'rect'],
    drop: (item, monitor) => {
      const delta = monitor.getClientOffset();
      setElements((prevElements) => [
        ...prevElements,
        {
          ...item,
          x: delta.x,
          y: delta.y,
          width: 200,
          height: 50,
        },
      ]);
    },
  }));

  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh', paddingTop: 2 }}>
        <Sidebar />
        <Box ref={drop} sx={{ flexGrow: 1, position: 'relative', border: '2px dashed #ccc' }}>
          <CanvasEditor elements={elements} setElements={setElements} />
        </Box>
      </Container>
    </Box>
  );
};

export default Canvas;