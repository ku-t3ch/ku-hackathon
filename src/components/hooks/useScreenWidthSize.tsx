import { useEffect, useState } from 'react';

export const useScreenWidthSize = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
