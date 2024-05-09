import React from "react";
import {useSelector} from 'react-redux';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
    {/* <div className='bg-sky-700 text-white' >
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
             <h1 className='font-bold'>I CARE</h1>
             </Link>
             <ul className='flex gap-4'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/'>
                <li>About</li>
                </Link>
                <Link to='/'>
                  {tasksList ? (
                    <img src = {tasksList.profilePicture} 
                    alt='profile' className='h-7 w-7 rounded-full
                    object-cover'/>
                  ):( 
                    <li>Sign In</li>
                  )}
                </Link>
             </ul>
        </div>
    </div> */}


      <h1 className="text-center my-4 text-primary"> Responce to Customers E-tickets </h1>
      <p className="text-center lead">{`Currently ${tasksList.length} E-ticket(s) not closed`}</p>
      {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }<br/>
      <nav className="header__menu">
      <ul className="header__list">
        <NavLink to="/">Support-System</NavLink><br/>
        <NavLink to="/admin">Admin</NavLink>
      </ul>
      
    </nav>

    </>
  );
};

export default Navbar;