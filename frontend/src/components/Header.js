/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" style={{color: "blue"}}>ICare</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/appoinments' className="nav-link">Appoinment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-appoinment' className="nav-link">Add Appoinment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}