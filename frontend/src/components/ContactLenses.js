import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./C_Menu.css"; // Import the CSS file

const ContactLenses = ({ favorites, setFavorites }) => {
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
      name: "Renu Multi-Purpose Solution 60ml",
      price: 1000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/60ml_renu.jpg",
    },
    {
      name: "Bio True - Multi Purpose Solution 60ml",
      price: 1100, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_1_15.jpg",
    },
    {
      name: "Renu Multi-Purpose Solution 120ml",
      price: 2500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/120mlss_1.jpg",
    },
    {
      name: "Bio True - Multi Purpose Solution 120ml",
      price: 4500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_8.jpg",
    },
    {
      name: "Twinkle Cosmetic Contact Lenses",
      price: 1500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/w/twinkle_1000x1000_s.jpg",
    },
    {
      name: "Bausch + Lomb SofLens Daily Disposable",
      price: 5500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bausch-lomb-10-pack_1.jpg",
    },
    {
      name: "Colored Contact Lenses - Jade",
      price: 2500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clj_1.jpg",
    },
    {name: "Colored Contact Lenses - Pacific",
    price: 5560, // Sample price
    image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clj_1.jpg",
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
          <b>Contact Lenses</b>
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

export default ContactLenses;
