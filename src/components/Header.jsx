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

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
              <Button sx={{ textTransform: "none" }} color="inherit">
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
              <IconButton aria-label="gift" color="inherit">
                <Avatar sx={{ width: 24, height: 24 }}>R</Avatar>
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
