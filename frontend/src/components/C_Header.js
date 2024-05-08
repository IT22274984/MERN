import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Home } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

const C_Header = () => {
  const [value, setValue] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Show sidebar only on /client route
  const showSidebar = location.pathname.startsWith("/client");

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          {showSidebar && (
            <Menu onClick={toggleSidebar} style={{ color: "white", cursor: "pointer" }} />
          )}
          <NavLink to="/client" style={{ color: "white", textDecoration: "none" }}>
            <Typography variant="h6" component="div">
              Product Management
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/about/:id" label="CART" />
            <Tab LinkComponent={NavLink} to="/more" label="More" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={showSidebar && sidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button component={NavLink} to="/" onClick={toggleSidebar}>
            <Home />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/about/:id" onClick={toggleSidebar}>
            <ListItemText primary="CART" />
          </ListItem>
          <ListItem button component={NavLink} to="/more" onClick={toggleSidebar}>
            <ListItemText primary="More" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default C_Header;
