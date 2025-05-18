import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursorOuter = document.querySelector('.theBall-outer');

    const moveCursor = (e) => {
      cursorOuter.style.left = `${e.clientX - 50}px`;
      cursorOuter.style.top = `${e.clientY - 50}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="theBall-outer">
      <div className="theBall"></div>
    </div>
  );
};

export default CustomCursor;
