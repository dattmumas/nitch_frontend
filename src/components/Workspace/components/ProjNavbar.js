import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import * as React from "react";
import MainDrawer from "../../Modal/MainDrawer";
import { useUser } from "../../Authorization/UserContext";
import { ACCESS_TOKEN } from "../../Authorization/constants";
import { useNavigate as navigate } from "react-router-dom";

export default function ProjNavbar() {
  const { user, setUser } = useUser();

  return (
    <Box alignItems="center" sx={{bgcolor: "primary.main" }}>
        <Stack direction="row" alignItems="center" padding="10px">
          <Stack direction="row" alignItems="center">
            <MainDrawer />
            <Box padding='0 0 0 10px'>
                <Typography variant="h5" color="secondary.main" sx={{fontWeight: '900'}}>
                  { user ? `${user.first_name}` : "Hey there!" }
                </Typography>
            </Box>
                <Stack direction="row" alignItems="center" justifyContent="left"> 
                </Stack>
                <Box>
            </Box> 
            <Box justifyContent='right'>
            </Box>
            </Stack>
        </Stack>
    </Box>
  );
}

