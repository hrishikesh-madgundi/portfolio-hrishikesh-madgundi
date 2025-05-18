import React, { useState } from 'react';
import './Home.css';
import Home_Image from '../assets/Home_Image.jpeg';
import Preloader from '../components/Preloader';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const phrases = [
    "I'm Hrishikesh Madgundi!",
    'A Frontend Developer!',
    'A Backend Developer!',
    'Fullstack Overall Hahaha!',
  ];

  React.useEffect(() => {
    if (!loaded) return;

    let typingTimeout;
    let pauseTimeout;

    if (isTyping) {
      typingTimeout = setTimeout(() => setIsTyping(false), 2500);
    } else {
      pauseTimeout = setTimeout(() => {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % phrases.length);
      }, 1000);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isTyping, textIndex, loaded]);

  if (!loaded) return <Preloader onFinish={() => setLoaded(true)} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white container">
      <div>
        <h1 className={`text-4xl font-bold animated-text ${!isTyping ? 'paused' : ''}`}>
          {phrases[textIndex]}
        </h1>
        <p className="mt-4 text-md text-black">
          Welcome to my Portfolio, I hope you didn't find me ugly! Use the Navbar to know more about me
        </p>
      </div>
      <div className="rounded-full border-gray-800 ml-8">
        <img src={Home_Image} alt="Profile" className="profile-picture border-dashed border-8 border-black" />
      </div>
    </div>
  );
};

export default Home;
