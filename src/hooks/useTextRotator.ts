import { useState, useEffect } from 'react';
import convertTextArray from '@/utils/covertTextToArray';

const useTextRotator = (texts: string[], interval = 100) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const introAllTexts = texts.map((text) => convertTextArray(text)).flat();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % introAllTexts.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, []);

  return introAllTexts[currentTextIndex];
};

export default useTextRotator;
