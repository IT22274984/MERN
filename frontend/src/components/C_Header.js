import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const C_Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/client" style={{ color: "white" }}>
            <Typography>
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
            {/* 
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/opticals" label="Opticals" />*/}
            <Tab LinkComponent={NavLink} to="/about/:id" label="CART" />
            <Tab LinkComponent={NavLink} to="/more" label="More" />
            
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default C_Header;
