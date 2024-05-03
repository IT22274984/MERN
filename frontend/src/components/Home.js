import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Menu, MenuItem, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import './Home.css'; // Import CSS file for styling

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIconColor, setMenuIconColor] = useState('black');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuIconColor('blue');
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
         
          
          <Button variant="contained" color="primary" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className="admin-content">
        <center><Typography variant="h4">Welcome to Admin Dashboard</Typography></center>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;
