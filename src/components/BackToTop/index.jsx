import React, { useState, useEffect } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import './index.scss';

const BackToTop = () => {
  const [showBackToTop, setshowBackToTop] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setshowBackToTop(true);
    } else {
      setshowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
      <div
        className={showBackToTop ? 'backToTop' : 'backToTop__hide'}
        onClick={scrollToTop}
      >
        <BsFillArrowDownCircleFill className="backToTop__icon" />
      </div>
  );
};

export default BackToTop;
