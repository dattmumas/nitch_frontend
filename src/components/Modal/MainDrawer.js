import * as React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function MainDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/workspaces">
          <ListItemText primary="Workspaces" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <ListItemText primary="Projects" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button 
        variant="outlined" 
        sx={{ 
          bgcolor: "secondary.main", 
          border: "2px solid", 
          minWidth: 40,  // Set a minimum width to make the button square
          minHeight: 40, // Set a minimum height to make the button square
          padding: 0,
        }} 
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}