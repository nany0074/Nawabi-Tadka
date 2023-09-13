import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

return (
    //desktop navbar starts
<>
<nav>
<Box className="mHide" >
<Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",  }}>
<img src={logo} width={98} height={69} />
<label className="logo">Nawabi Tadka</label>
</Box>

<ul className="list">
<Box sx={{ display: "inline", margin: "auto !important" }}>
<div className="items">
  <li><a href="#">Home</a></li>
  <li><a href="#">Menu</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Pages</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Shop</a></li>
  <li><a href="#">Contact</a></li>
</div>

<Box sx={{ float: "right !important", display: "inline-flex",  justifyContent: "center", alignItems: "center", }}>
<div className="search-btn">
<input value="search" placeholder="search..." />
<SearchIcon  sx={{  color: "white !important ", float: "right !important", boxSizing: "border-box !important", }} />
</div>
<LocalMallIcon sx={{ color: "white", position: "absolute", right: "20px" }}  />
</Box></Box>
</ul>
</Box></nav>
      {/* 
 mobile navbar starts */}

<Box sx={{ display: "flex" }} className="dHide">
<CssBaseline />
<AppBar position="fixed" open={open} sx={{ background: "black" }}>
<Toolbar>
<IconButton color="inherit"  aria-label="open drawer"  onClick={handleDrawerOpen}  edge="start"  sx={{ color: "#f9f0d", mr: 2, ...(open && { display: "none" }) }} sx={{color: "#f9f0d"}} >
<MenuIcon/>
</IconButton>
<Typography  variant="h6" noWrap  component="div"sx={{  flexGrow: 1,  flex: "100",  fontSize: "36px",  fontWeight: "700",  lineHeight: "32px", fontStyle: "italic", color: "#FF9F0D", background: "transparent", }}>
  <Box sx={{display: "flex", alignItems: "center",justifyContent: "center",}}>
  <img src={logo} width={98} height={69} />Nawabi Tadka
  <Box className="search-btn" sx={{right: 0, display: "inline-flex", justifyContent: "center",alignItems: "center",marginLeft: "20px",right: "30%",}}>
  <Box sx={{ background: "black",  border: "1px solid #FF9F0D", borderRadius: "20px", boxSizing: "border-box", display: "inline", padding: "5px", display: "flex", alignItems: "center",  justifyContent: "center", }}>
  <input  placeholder="Search..."  style={{ color: "white", backgroundColor: "#000", outline: "none", border: "#000", }}/>
  <SearchIcon sx={{  color: "white !important ",  float: "right !important",  boxSizing: "border-box !important", }}/>
  </Box>
  
  <LocalMallIcon  sx={{ color: "white", position: "absolute", right: "20px", }}/>
  </Box></Box>
</Typography></Toolbar>
</AppBar>

<Drawer sx={{ width: drawerWidth, flexShrink: 0, "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", }, }} variant="persistent" anchor="left" open={open} >
  <DrawerHeader sx={{ background: " #ff9f0d  " }}>
  <IconButton onClick={handleDrawerClose}>
    {theme.direction === "ltr" ? (<ChevronLeftIcon />) : ( <ChevronRightIcon /> )}
  </IconButton>
          
</DrawerHeader>
<Divider />
<List sx={{ background: "black", color: "#ff9f0d", height: "100vh", }}>
  {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map( (text, index) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton></ListItem>
    ))}
</List>
</Drawer>
<Main open={open}>
<DrawerHeader />
<Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
</Typography>
<Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
</Typography>
</Main>
</Box>
</>
  );
}
