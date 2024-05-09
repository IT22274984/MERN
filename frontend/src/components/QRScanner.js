import React, { useState } from 'react';

function QRScanner() {
  const [productName, setProductName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = event => {
    setProductName(event.target.value);
    setError('');
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!productName) {
      setError('Please enter a product name');
      return;
    }
    const searchQuery = encodeURIComponent(productName);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
    setProductName('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="productName">Enter Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleInputChange}
          placeholder="E.g., Product Name"
        />
        <button type="submit">Search Online</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default QRScanner;
