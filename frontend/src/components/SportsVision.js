import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./C_Menu.css"; // Import the CSS file

const SportsVision = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { SportsVision: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      name: "Shenyu Swimming Goggles",
      price: 2400, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_5_1.jpg",
    },
    {
      name: "Shenyu (Power -5.50)",
      price: 5500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1_2.jpg",
    },
    {
      name: "Safety Swimming Plano",
      price: 12500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_7_1.jpg",
    },
    {
      name: "RGoggles (Power -2.00)",
      price: 4500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_3.jpg",
    },
    {
      name: "Goggles (Power -7.00)",
      price: 7500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_1.jpg",
    },
    {
      name: "Shenyu (Power -5.50)",
      price: 5500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1_2.jpg",
    },
    {
      name: "Safety Swimming Plano",
      price: 12500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_7_1.jpg",
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
          <b>Sports Vision</b>
        </center>
        <br />
      </h1>

      {displayOpticals.map((optical, index) => (
        <div key={index} className="card">
         <Link to={{ pathname: "/view", state: { name: optical.name, image: optical.image } }}>
            {/* Wrap the image within Link tag */}
            <div className="big-image">
              <img className="image" src={optical.image} alt={optical.name} />
            </div>
          </Link>
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

export default SportsVision;
