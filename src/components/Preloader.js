import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Small delay before showing home
          return 100;
        }
        return prev + 10;
      });
    }, 300); // Adjust speed here

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="preloader-container">
      <div className="circle-loader">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={`dot ${progress >= (i + 1) * 10 ? 'active' : ''}`}
            style={{ transform: `rotate(${i * 36}deg) translate(80px)` }}
          ></span>
        ))}
      </div>
      <p className="loader-text">{progress}%</p>
    </div>
  );
};

export default Preloader;
