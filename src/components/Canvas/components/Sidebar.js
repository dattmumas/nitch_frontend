import React from 'react';
import { useDrag } from 'react-dnd';
import { Paper, Typography, Box } from '@mui/material';

const Sidebar = () => {
  const [, dragText] = useDrag(() => ({
    type: 'text',
    item: { type: 'text', content: 'New Text' },
  }));

  const [, dragRect] = useDrag(() => ({
    type: 'rect',
    item: { type: 'rect' },
  }));

  return (
    <Paper sx={{ width: 200, padding: 2, marginRight: 2 }}>
      <Typography variant="h6" gutterBottom>
        Elements
      </Typography>
      <Box
        ref={dragText}
        sx={{
          marginBottom: 2,
          padding: 1,
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        Drag Text
      </Box>
      <Box
        ref={dragRect}
        sx={{
          padding: 1,
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        Drag Rectangle
      </Box>
    </Paper>
  );
};

export default Sidebar;