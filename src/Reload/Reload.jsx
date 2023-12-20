'use client';
import { useEffect, react } from 'react';
import { useRouter } from 'next/navigation';

const Reload = () => {
  const router = useRouter();

  useEffect(() => {
    const reloadtop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', reloadtop);

    return () => {
      window.removeEventListener('beforeunload', reloadtop);
    };
  }, []);
  return null;
};

export default Reload;
