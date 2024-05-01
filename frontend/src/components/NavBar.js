import React from 'react';
import {Link} from 'react-router-dom';
import css from '../styles/NavBar.module.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();
    const handleviewreports = () =>{
        navigate("/view-report");
    }

    return (
       
        <div className={css.body}>
            <Link to='/' className={css.logo}>ICare</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>*/ }
            <button onClick={handleviewreports} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Appointment Reports
            <span className="navbar-toggler-icon"></span></button>
            <nav className={css.navigation}> 
  <Link to='/home' className={css.blinkButton}>Home</Link>
  <Link to='/login' className={css.blinkButton}>Login</Link>             
  <Link to='/appoinments'>Appointment</Link>
  <Link to='/support' className={css.blinkButton}>Support</Link>
  
</nav>
        </div>

    )
}


export default NavBar;