import { useState, useEffect } from 'react';

const useGetScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const normalizedScrollPosition = (window.scrollY / (document.body.scrollHeight - viewportHeight)) * 100;

      setScrollPosition(normalizedScrollPosition);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    setViewportHeight(window.innerHeight);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportHeight]);

  return scrollPosition;
};

export default useGetScrollPosition;
