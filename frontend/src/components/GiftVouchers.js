import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./C_Menu.css"; // Import the CSS file

const GiftVouchers = ({ favorites, setFavorites }) => {
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
      name: "Gift Vouchers Rs.1000",
      price: 1000, // Sample price
      image: "https://www.torgaoptical.co.za/images/thumbs/1370124_r2000-gift-card.png",
    },
    {
      name: "Gift Vouchers Rs.5000",
      price: 5000, // Sample price
      image: "https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/8bfa4ec9-4b95-4309-909c-ad68e6a9723b.jpg",
    },
    {
      name: "Gift Vouchers Rs.8000",
      price: 8000, // Sample price
      image: "https://www.torgaoptical.co.za/images/thumbs/1370130_r3000-gift-card.png",
    },
    {
      name: "Gift Vouchers Rs.10000",
      price: 10000, // Sample price
      image: "https://corbridgelarder.co.uk/cdn/shop/products/CORBRIDGE-LARDER-VOUCHER-ARTWORK_800x.jpg?v=16388884914",
    },
    {
      name: "Gift Vouchers Rs.15000",
      price: 15000, // Sample price
      image: "https://valuevisionopticalph.com/cdn/shop/products/TEMPLATE.jpg?v=1605797976",
    },
    {
      name: "Gift Vouchers Rs.18000",
      price: 18000, // Sample price
      image: "https://mcgreals.ie/wp-content/uploads/2023/07/Gift-Voucher-1.jpg",
    },
    {
      name: "Gift Vouchers Rs.20000",
      price: 20000, // Sample price
      image: "https://www.babyonline.co.nz/cdn/shop/products/Customdimensions800x600px_800x.jpg?v=1689854935",
    },
    {
      name: "Gift Vouchers Rs.50000",
    price: 50000, // Sample price
    image: "https://imaginevinyl.com.au/wp-content/uploads/2021/11/2E4A0DB1-DC48-482B-BEA6-60777195E0E5.jpeg",
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
          <b>Gift Vouchers</b>
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

export default GiftVouchers;
