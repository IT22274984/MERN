import React from 'react';
import css from '../styles/NavBar.module.css';


function NavBar() {

    

    const getGreetingMessage = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour < 12) {
            return "Good morning!";
        } else if (currentHour < 18) {
            return "Good afternoon!";
        } else {
            return "Good evening!";
        }
    }

    return (
        <div>
            
            <div className={css.greeting}>
                {getGreetingMessage()}
            </div>
            <p className={css.appointmentBooking}>
                Welcome to ICare, your premier destination for online optical solutions! Our appointment booking system ensures a seamless experience for scheduling your eye check-ups and consultations. With just a few clicks, you can secure a convenient time slot to meet with our experienced optometrists. Whether you're due for a routine examination, seeking new eyewear, or experiencing any vision concerns, our dedicated team is here to provide personalized care tailored to your needs. Book your appointment today and embark on a journey towards clearer vision and optimal eye health.
            </p>
        </div>
    )
}

export default NavBar;
