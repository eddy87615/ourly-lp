'use client';
import { useEffect, useState } from 'react';

import './Loading.css';

import Image from 'next/image';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
      document.body.style.overflow = 'hidden';
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!showLoading) {
      const loadingbg = document.querySelector('#loadingBG');
      if (loadingbg) {
        loadingbg.classList.add('loadingend');
      }
    }
  }, [showLoading]);

  return showLoading ? (
    <div
      className="back loading w-screen h-screen z-[9999] fixed top-0 left-0 flex justify-center items-center"
      id="loadingBG"
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
