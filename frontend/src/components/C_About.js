import React from "react";

const C_About = ({ favorites }) => {
  const styles = {
    opticalContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
    },
    sunglassImages: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    sunglassImage: {
      width: "100%",
      height: "auto",
      position: "relative",
    },
    sunglassDetails: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      color: "#fff",
      background: "rgba(0, 0, 0, 0.5)",
      padding: "5px",
    },
    viewButton: {
      padding: "5px 10px",
      background: "#",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "5px",
    },
    center: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.opticalContainer}>
      <h1 style={styles.center}>
        <b>Cart</b><br/>
      </h1>
      <div style={styles.sunglassImages}>
        {favorites.length === 0 ? (
         <center> <h3><p style={styles.center}>No opticals added to favorites yet.</p></h3></center>
        ) : (
          favorites.map((sunglass, index) => (
            <div key={index} style={styles.sunglassImage} className="sunglass-image">
              <img src={sunglass.image} alt={sunglass.name} style={styles.sunglassImage} />
              <div style={styles.sunglassDetails}>
                <p>{sunglass.name}</p>
                <button style={styles.viewButton}>View</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default C_About;
