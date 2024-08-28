import React from 'react';
import { Button, Typography, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../Authorization/constants";
import { useUser } from "../Authorization/UserContext";
import MainDrawer from '../Modal/MainDrawer';
import LogoText from '../Modal/LogoText';

export default function Navbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <Box sx={{ bgcolor: "primary.main", padding: "10px 20px", position: 'relative' }}>
      {/* Top Row: MainDrawer, Logo, and User Info */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Box>
          <MainDrawer />
        </Box>

        {/* Centered Logo */}
        <Box
          position="absolute"
          left="41%"
        >
          <LogoText />
        </Box>

        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          {user ? (
            <Stack direction="row" alignItems="center">
              <Typography margin="0px 10px">Hey {user.first_name}</Typography>
              <Button variant="outlined" color="secondary" onClick={handleLogout}>Log Out</Button>
            </Stack>
          ) : (
            <Button variant="outlined" color="secondary" href="/login">Log In</Button>
          )}
        </Box>
      </Stack>

      {/* Bottom Row: Navigation Links */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        marginTop="10px"
      >
        <Typography variant="body1" sx={{textDecoration: 'underline'}}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            About
          </Link>
        </Typography>
        <Typography variant="body1" sx={{textDecoration: 'underline'}}>
          <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
            Pricing
          </Link>
        </Typography>
        <Typography variant="body1" sx={{textDecoration: 'underline'}}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}