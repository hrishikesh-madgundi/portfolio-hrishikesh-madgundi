import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS file for the animations.

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const phrases = [
    "I'm Hrishikesh Madgundi!",
    'A Frontend Developer!',
    'A Backend Developer!',
    'Fullstack Overall Hahaha!'
  ];

  useEffect(() => {
    let typingTimeout;
    let pauseTimeout;

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 2500); // Adjust duration to match typing animation duration
    } else {
      pauseTimeout = setTimeout(() => {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1000); // Duration of the pause
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isTyping, textIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white container">
      <div>
        <h1 className={`text-4xl font-bold animated-text ${!isTyping ? 'paused' : ''}`}>
          {phrases[textIndex]}
        </h1>
        <p className="mt-4 text-lg text-black">Welcome to my Portfolio, I hope you didn't find me ugly ! Use the Navbar to know more about me</p>
      </div>
      {/* Profile Picture */}
      <div className="rounded-full border-gray-800 ml-8 ">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGnmEnlGNvt3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692136924292?e=1732147200&v=beta&t=J6xt3pWJhLH5V4yzm-WYgfFkEVv_CAWI8tkzK2jlMPA"
          alt="Profile"
          className="profile-picture border-dashed border-8 border-black" /* Updated className */
        />
      </div>
    </div>
  );
};

export default Home;
