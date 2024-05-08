import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./C_Menu.css"; // Import the CSS file

const Accessorries = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      name: "Straps - Black",
      price: 300, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/straps_black.jpg",
    },
    {
      name: "Ear Hook Pair",
      price: 400, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/y/eye_hooles_4.jpg",
    },
    {
      name: "Vehicle Sunglass Holder Clip",
      price: 2500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/n/untitled_design_17_.png",
    },
    {
      name: "Straps - Blue, Brown And Red",
      price: 4500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1000x1000_framefees.jpg",
    },
    {
      name: "Avizor Enzyme Tablets ",
      price: 1500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/v/avizor-enzyme-tablets-_-protein-removal-__1.jpg",
    },
    {
      name: "Polarized Clip-On Black",
      price: 2500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clip2_grey.jpg",
    },
    {
      name: "Polarized Clip-On Black",
      price: 2500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clip2_grey.jpg",
    },
    {name: "Eye Screening And Educational Toolkits",
    price: 5560, // Sample price
    image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/y/eye-screening-educational-toolkits.jpg",
  },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredOpticals = opticals.filter((optical) =>
      optical.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOpticals(filteredOpticals);
  };

  const displayOpticals = searchTerm === "" ? opticals : filteredOpticals;

  return (
    <div className="container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="search-icon" />
      </div>
      <h1>
        <center>
          <b>Accessorries</b>
        </center>
        <br />
      </h1>

      {displayOpticals.map((optical, index) => (
        <div key={index} className="card">
          <a href={`/view`}>
            {/* Wrap the image within anchor tag */}
            <div className="big-image">
              <img
                className="image"
                src={optical.image}
                alt={optical.name}
              />
            </div>
          </a>
          <div className="details">
            <h4>{optical.name}</h4>
            <div className="price-info">
              <b>
                <h2>
                  <p>Rs {optical.price}</p>
                </h2>
              </b>
            </div>
            <div className="additional-info">
              <button
                className="button"
                onClick={() => addToFavorites(optical)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <Link className="link" to="/more">
        More Details
      </Link>
    </div>
  );
};

export default Accessorries;
