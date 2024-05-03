import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  // Function to handle sign out
  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log("Signing out...");
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography gutterBottom variant="h5" component="div">
              <b>ICARE</b>
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/opticals" label="Opticals" />
            <Tab LinkComponent={NavLink} to="/list" label="Data" />
            <Tab LinkComponent={NavLink} to="/chart" label="Chart" />
          </Tabs>
          {/* Sign out button */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
