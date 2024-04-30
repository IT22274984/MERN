import React from "react";
import {useSelector} from 'react-redux';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
      <h1 className="text-center my-4 text-primary">Create E-ticket</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} E-ticket(s) not closed`}</p>
      {/* {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }<br/> */}
      <nav className="header__menu">
      <ul className="header__list">
        <NavLink to="/">Support-System</NavLink><br/>
        <NavLink to="/eticket">Customer</NavLink><br/>
        
      </ul>
      
    </nav>

    </>
  );
};

export default Navbar;
