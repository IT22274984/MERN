import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./C_Menu.css"; // Import the CSS file

const Spectacles = ({ favorites, setFavorites }) => {
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
      name: "JA9 2203 C9 56",
      price: 10200, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000477.jpg",
    },
    {
      name: "Giordano 01229 52",
      price: 9500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg",
    },
    {
      name: "Che 528 C34 49",
      price: 12500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_165.jpg",
    },
    {
      name: "Reebok 8014 BLK 52-18-135",
      price: 40500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_52.jpg",
    },
    {
      name: "Che 602 C17 53",
      price: 33500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_155.jpg",
    },
    {
      name: "Carlo Rino 1249 C14",
      price: 18000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0094_merged_.jpg",
    }, {
      name: "Giordano 01229 52",
      price: 13000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg",
    },
    {
      name: "Che 624 C6S 53",
      price: 20500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_179.jpg",
    },
    {
      name: "Bonia BNI1423 48",
      price: 14500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_51.jpg",
    },
    {
      name: "SB Polo & Racquet",
      price: 15500, // Sample pric
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_98.jpg",
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
          <b>Spectacles</b>
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

export default Spectacles;
