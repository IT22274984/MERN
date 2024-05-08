import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const More = () => {
  // Sample data for optical company details
  const companyDetails = {
    name: "ICare Vision Center",
    location: "123 Main Street, Malabe, Colombo",
    phone: "+94 76 830 8767",
    email: "icareoptical@gmail.com",
    website: "www.icare.com",

    images: [
      "https://indiancompanies.in/wp-content/uploads/2020/11/Top-Optical-Companies-Brand-Eye-wear-Industry-in-India.png",
      "https://img2023.weyesimg.com/uploads/www.ouyeedisplays.allweyes.com/images/15350151317970.jpg",
      "https://theopticalco.com.au/wp-content/uploads/2018/06/3-scaled.jpg",
      "https://media.licdn.com/dms/image/C5622AQFEdnSxW54L5w/feedshare-shrink_800/0/1679017575522?e=2147483647&v=beta&t=IjQrjtO1lXITBJO24MTPHjgFaWJicPORy8S6kGybgb8",
      "https://wwd.com/wp-content/uploads/2017/04/unspecified-1.jpg"
    ],
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        {companyDetails.name}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={companyDetails.images[0]}
              alt="Optical Company Image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <strong>Location:</strong> {companyDetails.location}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> {companyDetails.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {companyDetails.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Website:</strong> {companyDetails.website}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Typography variant="h5" align="center" sx={{ paddingTop: 4, paddingBottom: 2 }}>
        Other Images
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {companyDetails.images.slice(1).map((imageUrl, index) => (
          <Grid item key={index}>
            <Card>
              <CardMedia component="img" height="200" image={imageUrl} alt={`Image ${index + 2}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default More;
