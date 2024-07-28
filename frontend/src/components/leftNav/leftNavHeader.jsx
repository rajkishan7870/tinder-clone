import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const settings = ["Profile", "Dashboard", "Logout"];

function LeftNavHeader() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profile, setProfile] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    const cookies = document.cookie;
    const token = cookies.split("token=")[1];

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("/api/profile/getprofile", config)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (menu) => {
    if (menu === "Profile"){
      navigate("/profile")
    }
    else if (menu === "Dashboard"){
      navigate("")
    }
    else{
      navigate("/")
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "pink" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Kishan Kumar" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            sx={{
              color: "white",
              leftMargin: "20px",
            }}
          >
            {profile?.createdBy.name}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LeftNavHeader;
