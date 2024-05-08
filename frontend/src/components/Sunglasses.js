import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Menu.css"; // Import the CSS file

const Sunglasses = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical._id}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      price: 30000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      id: 2,
      name: "Arnette AN4321 278677",
      price: 33500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 3,
      name: "Coach HC8350U 57088H",
      price: 20500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/coach_8350u.png",
    },
    {
      id: 4,
      name: "Coach HC7103 9331B8 64",
      price: 40500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc00070_-_edited_1.jpg",
    },
    {
      id: 5,
      name: "Arnette AN4321 278677",
      price: 33500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 6,
      name: "David Beckham DB7094 GS I46",
      price: 18000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
    }, 
    {
      id: 7,
      name: "Hugo Boss 1240/S 6070",
      price: 25000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      name: "Michael Kors 338273 2N",
      price: 29500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0084_4.jpg",
    },
    {
      name: "Paris Hilton 802002S",
      price: 40500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000432.jpg",
    },
    {
      name: "DKNY DY4146 53-20-140",
      price: 15500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_60.jpg",
    },
    {
      name: "Arnette AN4321 278677",
      price: 33500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      name: "David Beckham DB7094 GS I46",
      price: 18000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
    }, 
    {
      name: "Arnette AN4321 278677",
      price: 33500, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      name: "David Beckham DB7094 GS I46",
      price: 18000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
    }, {
      name: "Hugo Boss 1240/S 6070",
      price: 25000, // Sample price
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
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
          <b>Sun Glasses</b>
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

export default Sunglasses;
