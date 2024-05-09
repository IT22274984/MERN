import React from 'react';
import backgroundImage from './specs2.jpeg';

export default function About() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      // Add any other styles you need
    }}>
      <div className='px-4 py-12 max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
        <p className='mb-4 text-slate-700'>
          At ICARE, we're dedicated to revolutionizing the way you prioritize
          and manage your eye health. Our app is designed with a clear mission:
          to empower individuals with personalized tools and insights for optimal
          vision wellness. As you explore our platform, you'll find a comprehensive
          suite of features tailored to enhance your eye care routine. From personalized
          recommendations based on your unique eye health profile to engaging eye
          exercise programs crafted to reduce strain and improve focus, our app is
          your go-to resource for proactive eye care. We also offer convenient reminders
          for breaks and appointments, along with powerful vision tracking tools to monitor changes over time.
        </p>
        <p className='mb-4 text-slate-700'>
          What sets us apart is our commitment to accessibility and effectiveness. Our user-friendly
          interface ensures a seamless experience, allowing you to navigate through our features effortlessly.
          Every recommendation and exercise is backed by scientific research, ensuring that you receive the most
          accurate and beneficial guidance for your eye health journey. Whether you're looking to adopt healthier
          eye care habits or manage existing conditions, our app is here to support you. Join our community of like-minded
          individuals to share experiences and motivation, and together, let's prioritize your vision wellness.
        </p>
        <p className='mb-4 text-slate-700'>
          Discover the difference with ICARE and unlock a new level of care for your eyes. Our team is
          passionate about empowering you with the tools and knowledge needed to maintain optimal eye health.
          Embrace a holistic approach to eye care, encompassing daily habits, personalized insights, and expert
          guidance.
        </p>
      </div>
    </div>
  );
}
