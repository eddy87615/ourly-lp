'use client';
import { useEffect, useState } from 'react';

import './Loading.css';

import Image from 'next/image';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return showLoading ? (
    <div
      className={`back loading w-screen h-screen z-[90] fixed top-0 left-0 flex justify-center items-center
    ${showLoading ? '' : 'loadingend'}`}
    >
      <Image
        src="/img/ourly_logo.webp"
        alt="ourly logo"
        width={200}
        height={100}
      />
    </div>
  ) : null;
}
