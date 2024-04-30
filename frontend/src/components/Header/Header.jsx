import "./Header.css";
import img from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {

  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload("/");
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
      <div className="library"><NavLink to ="/">Library</NavLink></div>
      <div className="support"><NavLink to ="/">Support</NavLink></div>
      <div className="home"><NavLink to ="/">Home</NavLink></div>
      <div className="appointment"><NavLink to ="/">Appointment</NavLink></div>
      
      <img className="logo-1-icon" alt="" src={img} />
    </div>
  );
};

export default Header;
