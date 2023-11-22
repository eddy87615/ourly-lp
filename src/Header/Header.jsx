'use client';
import React from 'react';
//CSS導入
import '@/Header/style/Header.css';
import '@/app/globals.css';
//
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  useEffect(() => {
    const backToTop = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const img = document.querySelector('.cursor-pointer');
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
    <div
      className="fixed top-0 left-0 z-30 
    pt-6 pb-4  lg:pt-10 lg:pb-0
    px-4 md:px-8 lg:px-16 
    w-screen h-20 md:h-24 lg:h-24 flex"
    >
      <img
        src="/img/ourly_logo.webp"
        alt="ourly logo"
        className="cursor-pointer"
      />
      <ScrollLink
        to="section8"
        smooth={true}
        offset={0}
        duration={500}
        className="otoiawase lg:flex
        border-4 border-solid border-ourly-theme 
        px-10  rounded-full ml-auto bg-white 
        transition-all duration-300 shadow-ourly
        hidden "
        style={{
          opacity: showBtn ? 1 : 0,
          visibility: showBtn ? 'visible' : 'hidden',
        }}
      >
        <button className="font-bold text-button ">お問い合わせ</button>
      </ScrollLink>
    </div>
  );
}
