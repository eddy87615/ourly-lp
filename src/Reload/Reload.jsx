'use client';
import { useEffect, react } from 'react';
import { useRouter } from 'next/navigation';

const Reload = () => {
  const router = useRouter();

  useEffect(() => {
    const reloadtop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('unload', reloadtop);

    return () => {
      window.removeEventListener('unload', reloadtop);
    };
  }, []);
  return null;
};

export default Reload;
