import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink to="/mfaqs">Admin</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;