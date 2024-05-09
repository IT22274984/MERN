import React, { useState } from 'react';
import QRScanner from './QRScanner'; // Import the QRScanner component
import { useLocation } from 'react-router-dom';
import './View.css'; // Import the CSS file for styling if needed

const View = () => {
  const [bigImages, setBigImages] = useState({}); // State to store the big image URLs for each optical card
  const location = useLocation();
  const { name = '', image = '' } = location.state || {};

  const opticalItems = [
     {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      description: "Stylish sunglasses with UV protection.",
      price: 30000, // Sample price
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000362_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000363_1.jpg",
      ]
    },
    
    {
      id: 2,
      name: "Burberry BE4292",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000157_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000158_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000159_1.jpg",
      ]
    },
    {
      id: 4,
      name: "Arnette AN4321 278677",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000406.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000407.jpg",
      ]
    },
    {
      id: 5,
      name: "Arnette AN4321 278677",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000432.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000433.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000435.jpg",
      ]
    },
    {
      id: 5,
      name: "Coach HC7103 9331B8 64",
      description: "Classic sunglasses with a modern twist.",
      price: 40500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc00070_-_edited_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc00071_2.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc00072_1.jpg",
      ]
    },
    
    {
      id: 6,
      name: "David Beckham DB1118/G/S RH",
      description: "Classic sunglasses with a modern twist.",
      price: 18000,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000414.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000415.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000416.jpg",
      ]
    },
    {
      id: 7,
      name: "Carrera 272/S 807",
      description: "Classic sunglasses with a modern twist.",
      price: 20000,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000372.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000373.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000375.jpg",
      ]
    },

  ];

  // Function to handle click on small image
  const handleSmallImageClick = (opticalId, image) => {
    setBigImages((prevImages) => ({
      ...prevImages,
      [opticalId]: image,
    }));
  };

  return (
    <div>
      <h1>{name}</h1>
      <QRScanner /> {/* Render the QRScanner component */}
      <div>
        {opticalItems.map((optical) => (
          <div className="optical-container1" key={optical.id}>
            <div className="card">
              <div className="big-image">
                <img src={bigImages[optical.id] || optical.images[0]} alt={optical.name} />
              </div>
              <div className="small-images">
                {optical.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={optical.name}
                    onClick={() => handleSmallImageClick(optical.id, image)}
                  />
                ))}
              </div>
              <div className="details">
                <h4>{optical.name}</h4>
                <p>{optical.description}</p>
                <div className="price-info">
                  <p>Rs {optical.price}</p>
                </div>
                <div className="additional-info">
                  <p>{optical.additional_information}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
