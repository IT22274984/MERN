import React from "react";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cardsList, error } = useSelector((state) => state.cards);

    return (
        <>
            <h1 className="text-center my-4 text-success">ADD NEW CARD HERE.</h1>
            
            {
                error !== '' && <h5 className="text-center text-danger">{error}</h5>
            }
            <a href="/payment" className="premium-button">Back To PAY Page</a>
        </>
        
    );
};

export default Navbar;
