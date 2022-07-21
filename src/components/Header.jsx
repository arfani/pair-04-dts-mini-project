import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { auth, logoutUser } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#808080",
    },
  },
});

export default function Header() {
  let navigate = useNavigate();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navColor, setNavColor] = React.useState("rgba(20, 20, 20, 0.5)");
  const navRef = React.useRef();
  navRef.current = navColor;

  const [user] = useAuthState(auth)
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    
    const handleScroll = () => {

      const show = window.scrollY > 250;
      if (show) {
        setNavColor("rgba(20, 20, 20)");
      } else {
        setNavColor("rgba(20, 20, 20, 0.5)");
      }
    };
    
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{
            boxShadow: "none",
            backgroundColor: navRef.current,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <VideocamIcon />
            </IconButton>
            <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
              MOVIES
            </Typography>
            <Stack direction={"row"} sx={{ flexGrow: 1 }} spacing={1}>
              <Button
                sx={{ textTransform: "none" }}
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
              <Button sx={{ textTransform: "none" }} color="inherit">
                Series
              </Button>
              <Button sx={{ textTransform: "none" }} color="inherit">
                Movies
              </Button>
              <Button sx={{ textTransform: "none" }} color="inherit">
                News and Popular
              </Button>
              <Button sx={{ textTransform: "none" }} color="inherit">
                My list
              </Button>
            </Stack>
            <Stack direction={"row"}>
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="gift" color="inherit">
                <RedeemIcon />
              </IconButton>
              <IconButton aria-label="gift" color="inherit">
                <NotificationsIcon />
              </IconButton>
              <IconButton
                aria-label="gift"
                color="inherit"
                onClick={handleMenu}
              >
                <Avatar sx={{ width: 24, height: 24 }}>R</Avatar>
              </IconButton>
            </Stack>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  user ? logoutUser() : navigate("/login");
                }}
              >
                {user ? 'Logout' : 'Login'}
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
