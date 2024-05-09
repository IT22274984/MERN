// Home.js
import "./Home.css";
import logo from '../Logo.jpg'

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="admin-home">
      <header className="header">
        <img src={logo} alt="Your image description" style={{ width: '100px', height: 'auto' }} />
        <nav className="nav-bar">
          <a href="/home">Home</a>
          <a href="/AllPay">All Pay details</a>
          <a href="/appointments">Appointments</a>
          <a href="/support">Support</a>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="main-content">
        <h1>Welcome, Admin!</h1>
        <p>You can manage various aspects of the application here.</p>
        {/* Add more links or content as needed */}
      </div>

      <footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <h3>Pages</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/all-pay-details">All Pay details</a></li>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Services</h3>
      <ul>
        <li>Eye Exams</li>
        <li>Optical Products</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Company</h3>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Connect</h3>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p className="copyright">© 2024 Optical Management. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;
