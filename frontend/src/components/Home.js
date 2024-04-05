import { Button, Typography, Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIconColor, setMenuIconColor] = useState('black');
  const [searchIconColor, setSearchIconColor] = useState('black');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuIconColor('blue'); // Change menu icon color
  };

  const handleSearchClick = () => {
    setSearchIconColor('red'); // Change search icon color
  };

  const handleMenuItemClick = (optionId) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <header>
        <Typography className="header-icons">
          <MenuIcon onClick={handleMenuClick} style={{ color: menuIconColor }} />
        </Typography>
        <Typography className="header-icons">
          <Link to="/opticals">
            <SearchIcon className="search-icon" onClick={handleSearchClick} style={{ color: searchIconColor }} />
          </Link>
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick("option1")}><a href="#option1">Sun Glasses</a></MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("option2")}><a href="#option2">Spectacles</a></MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("option3")}><a href="#option3">Contact Lenses</a></MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("option4")}><a href="#option4">Gift Vouchers</a></MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("option5")}><a href="#option5">Accessories</a></MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("option6")}><a href="#option6">Sports Vision</a></MenuItem>
        </Menu>
        <h1>Welcome to My Perfect Home Page!</h1>
      </header>
      <main>
        <section className="image-section" id="top">
          <img src="https://www.mouqy.com/wp-content/uploads/2023/03/gigi-hadid-geometric-wire-frame.webp" alt="Your Image" style={{ maxWidth: "100%", height: "auto" }} />
        </section>
        <section className="options-section" id="option1">
          <h2>Option 1</h2>
          <p>This is the content for Option 1.</p>
        </section>
        <section className="options-section" id="option2">
          <h2>Option 2</h2>
          <p>This is the content for Option 2.</p>
        </section>
        <section className="options-section" id="option3">
          <h2>Option 3</h2>
          <p>This is the content for Option 3.</p>
        </section>
        <section className="options-section" id="option4">
          <h2>Option 4</h2>
          <p>This is the content for Option 4.</p>
        </section>
        <section className="options-section" id="option5">
          <h2>Option 5</h2>
          <p>This is the content for Option 5.</p>
        </section>
        <section className="options-section" id="option6">
          <h2>Option 6</h2>
          <p>This is the content for Option 6.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Perfect Home Page</p>
      </footer>
    </div>
  );
}

export default Home;
