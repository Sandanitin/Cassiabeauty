import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed to:', location.pathname);
    // Force scroll to top instantly, overriding any CSS scroll-behavior settings
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    console.log('Scrolled to top');
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;