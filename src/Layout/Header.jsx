import { styled, useTheme } from "@mui/material/styles";
import {
  /* AppBar, */
  Typography,
  makeStyles,
  /* Box */ CssBaseline,
} from "@material-ui/core";
import { Toolbar } from "@mui/material";
import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
/* import Navbar from './Navbar'; */
import Avatar from "@mui/material/Avatar";
import { useAuthContext } from "../Components/Auth/AuthContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@material-ui/core";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DialogKonfirmasi from "../Components/DialogKonfirmasi";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

export default function Header({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {
    userName,
    setopenToken,
    setuserName,
    openLogOut,
    dialogLogOut,
    setopenLogOut,
  } = useAuthContext();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{femmecubatorLogo}</Toolbar>;
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Dashboard
    </Typography>
  );

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  //   const openMenu = Boolean(anchorElUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(false);
  };
  //   --------------------------------------------

  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setopenLogOut(true);
  };

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/login";

  const LogOut = (event) => {
    localStorage.setItem("username", "");
    localStorage.setItem("token", "");

    navigate(from, { replace: true });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <DrawerHeader></DrawerHeader> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              // style={{ marginRight: 920 }}
            >
              Data Pengelolaan Lampu PT. Diginet Media
            </Typography>
          </Box>

          <div>
            <Box>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                sx={{ mr: 2 }}
                /* tyle={{
                  marginLeft: 940,
                }} */
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ color: "white" }}
                >
                  Hello {userName}
                </Typography>
                <Avatar
                  src="/broken-image.jpg"
                  style={{
                    // marginLeft: 940,
                    position: "static",
                    marginRight: 7,
                    width: 25,
                    height: 25,
                  }}
                />
              </IconButton>
              <Menu
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
                onClose={handleClose}
                PaperProps={{
                  style: {
                    transform: "translateX(1200px) translateY(30px)",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  onClick={(event) => {
                    handleLogout(event);
                  }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <DialogKonfirmasi
        open={openLogOut}
        title="Anda yakin ingin keluar?"
        setOpen={setopenLogOut}
        onConfirm={LogOut}
      />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {children}
        {/* <AppBar className={header}>{displayDesktop()}</AppBar> */}
      </Drawer>
    </>
  );
}
