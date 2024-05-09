import React from 'react'
import backgroundImage from './specs.jpg';


export default function Home() {

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '120vh',
      // Add any other styles you need
    }}>
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4
      text-slate-800'>Welcome to ICARE!</h1>
      <p className='mb-4 text-slate-700'>We're excited to introduce you to a revolutionary
       approach to eye health management. Our innovative app is designed to empower you with 
       personalized tools and insights to prioritize your vision wellness. Onour home page,
       you'll discover a comprehensive suite of features aimed at enhancing your eye care routine.
       Receive tailored recommendations based on your unique eye health profile and usage patterns.
       Engage in customized eye exercise programs crafted to reduce strain and enhance focus. Set 
       convenient reminders for breaks and appointments to ensure you stay proactive about your 
       eye health. Our vision tracking tools allow you to monitor changes over time, providing 
       valuable insights into your eye health journey. Moreover, tap into a vast library of expert 
       resources, including articles curated by eye care professionals, to stay informed and empowered.
      </p>
      <p className='mb-4 text-slate-700'>At the heart of our ICARE is a commitment to making 
      eye care accessible and effective for everyone.Our user-friendly interface ensures a seamless 
      experience, allowing you to navigate through our features effortlessly. We prioritize scientific
        rigor, with all our recommendations and exercises backed by proven research. Whether you're looking 
        to adopt healthier eye care habits or manage existing conditions, our app serves as your trusted
         companion. Join a supportive community of like-minded individuals to share experiences and motivation.
         Together, we'll embark on a journey towards better eye health, one personalized step at a time.
      </p>
      <p className='mb-4 text-slate-700'>Take the first step towards healthier eyes today by 
      downloading our Eye Care App. We're not just an app; we're your dedicated partner in vision
       wellness. Embrace a holistic approach to eye care, encompassing daily habits, personalized 
       insights, and expert guidance. Our mission is to empower you with the tools and knowledge 
       needed to maintain optimal eye health. Discover the difference with our app and unlock a new level
       of care for your eyes. Let's prioritize your vision wellness together and embark on a 
       journey towards healthier eyes!
      </p>
      </div> 
      </div>    
  );
};

