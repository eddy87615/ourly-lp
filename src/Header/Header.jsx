'use client';
import React from 'react';
//CSS導入
import '@/Header/style/Header.css';
import '@/app/globals.css';
//
import { useEffect, useState } from 'react';

export default function Header() {
  useEffect(() => {
    const backToTop = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const img = document.querySelector('.w-56.cursor-pointer');
    if (img) {
      img.addEventListener('click', backToTop);
    }
    return () => {
      if (img) {
        img.removeEventListener('click', backToTop);
      }
    };
  }, []);

  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'indefined') {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
      }

      const threshold = window.innerHeight;
      setShowBtn(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-30 py-8 px-16 w-screen h-28 flex">
      <img
        src="/img/ourly_logo.webp"
        alt="ourly logo"
        className="w-56 cursor-pointer"
      />

      <button
        className="otoiawase 
      border-4 border-solid border-ourly-theme 
      px-10 font-bold text-button rounded-full ml-auto bg-white 
      transition-all duration-300 shadow-ourly"
        style={{
          opacity: showBtn ? 1 : 0,
        }}
      >
        お問い合わせ
      </button>
    </div>
  );
}
