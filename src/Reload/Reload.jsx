'use client';
import { useEffect, react } from 'react';
import { useRouter } from 'next/navigation';

const Reload = () => {
  const router = useRouter();

  useEffect(() => {
    const reloadtop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('pagehide', reloadtop);

    return () => {
      window.removeEventListener('pagehide', reloadtop);
    };
  }, []);
  return null;
};

export default Reload;
