// import "./Home.css";
import { useNavigate } from "react-router-dom";


const Support = () => {

  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <div className="header">
      <div className="header-inner">
        <div className="group-child" />
      </div>
      <div className="logout"><nav >
				<button onClick={handleLogout}>
					Logout
				</button>
			</nav>
      </div>
      <div className="library">Library</div>
      <div className="support">Support</div>
      <div className="home">Home</div>
      <div className="appointment">Appointment</div>
      
      <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
    </div>
  );
};

export default Support;