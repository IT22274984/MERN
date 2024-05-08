import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const StyledTabs = styled(Tabs)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const StyledTab = styled(Tab)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
    color: "inherit",
  },
});

const C_Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const images = [
    "https://imatrix.com/wp-content/uploads/sites/12/2020/09/shutterstock_1716928600-1024x536.png",
    "https://www.eyefashionoptical.com/img/EFO_2.jpg",
    "https://storage.googleapis.com/website-production/uploads/2023/04/what-is-contextual-advertising.webp",
  ];
  const sunglassesImages = [
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_21.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/n/untitled_design_30_.png",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_60.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 40000,
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer anchor="left" open={showSidebar} onClose={toggleSidebar}>
        <List>
          <ListItem button component={NavLink} to="/" onClick={toggleSidebar}>
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header>
          <StyledTabs value={false} textColor="inherit">
            <StyledTab
              component={NavLink}
              to="/sun"
              label="Sunglasses"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/spectacles"
              label="Spectacles"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/contact"
              label="Contact Lenses"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/gift"
              label="Gift Vouchers"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/accessories"
              label="Accessories"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/sport"
              label="Sports Vision"
              activeClassName="active-tab"
            />
            <IconButton color="inherit" component={NavLink} to="/about/:id">
              <ShoppingCartIcon />
            </IconButton>
          </StyledTabs>
          <h1>Welcome to ICARE</h1>
        </header>
        <div className="image-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <Card className="image-card">
                  <CardMedia
                    component="img"
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </div>
            ))}
          </Slider>
          <Typography gutterBottom variant="h5" component="div">
            <b>ICARE</b>
          </Typography>
          <CardContent>
            <center>
              <h1>
                <b>Featured</b> Products
              </h1>
            </center>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Sunglasses
            </Typography>
            <div className="sunglasses-images">
              {sunglassesImages.map((image, index) => (
                <Card key={index} className="sunglasses-card">
                  <CardMedia
                    component="img"
                    src={image}
                    alt={`Sunglasses ${index + 1}`}
                    className="sunglasses-image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              ))}
            </div>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default C_Home;
