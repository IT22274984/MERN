import React from 'react';
import {Link} from 'react-router-dom';
import css from '../styles/NavBar.module.css';


function NavBar() {

    

    return (
       
        <div className={css.body}>
            <nav className={css.navigation}>           
  <Link to='/appoinments'>Appointment</Link>
</nav>
        </div>
        
    )
}


export default NavBar;