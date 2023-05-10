import { Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { categories, logo } from "../../Utils/constants";
import SearchBar from "./SearchBar";
//44

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Videos from "../Videos/Videos";
import { NavBarContext } from "../../Contexts/NavBarContext";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: "black",
  color: "#fff",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "black",
  color: "#fff",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
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

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { setSelectedCategory, selectedCategory } =
    React.useContext(NavBarContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex" }}>
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

          <Link to="/">
            <img src={logo} alt="logo" height={45} />
          </Link>

          {/* <SearchBar/> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            width: "100%",
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
          }}
        >
          {categories.map((category, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                background:
                  category.name === selectedCategory
                    ? "#fc1503"
                    : "transparent",
                color: "#fff",
              }}
              onClick={() => setSelectedCategory(category.name)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: category.name === selectedCategory ? "#fff" : "red",
                  }}
                >
                  {<category.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#aaa",
            p: "8px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Copyright © 2023
        </Typography>
      </Drawer>
      <Grid>
        <DrawerHeader />
        <Stack sx={{ marginLeft: "8px" }}>
          {/* <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white", width: "100%" }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography> */}

          {/* <Videos videos={videos} /> */}
        </Stack>
      </Grid>
    </Box>
  );
}

// const NavBar = () => {
//   return (
//     <Stack
//       p={2}
//       sx={{
//         position: "sticky",
//         background: "#000",
//         top: 0,
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexDirection: "row",
//       }}
//     >
//       <Link to="/">
//         <img src={logo} alt="logo" height={45} />
//       </Link>
//       <SearchBar />
//     </Stack>
//   );
// };

// export default NavBar;
