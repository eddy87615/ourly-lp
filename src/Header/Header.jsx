'use client';
import React from 'react';
//CSS導入
import './Header.css';
import '@/app/globals.css';
//
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Hamburger from '@/Hamburger/Hamburger';

export default function Header() {
  useEffect(() => {
    const backToTop = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const img = document.querySelector('#logo');
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

        const threshold = window.innerHeight;
        setShowBtn(scrollY > threshold);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const renderbtn = windowWidth >= 1000;

  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-between
      px-4 lg:px-16 mt-4
    w-screen h-[100px]"
    >
      <img
        src="/img/ourly_logo.webp"
        alt="ourly logo"
        className="cursor-pointer w-1/2 lg:w-1/5 h-auto"
        id="logo"
      />
      <ScrollLink
        to="section8"
        smooth={true}
        offset={0}
        duration={500}
        className="otoiawase border-4 border-solid border-ourly-theme shadow-ourly
        px-14 py-2 rounded-full bg-white 
        transition-all duration-300 "
        style={{
          opacity: showBtn && renderbtn ? 1 : 0,
          visibility: showBtn && renderbtn ? 'visible' : 'hidden',
        }}
      >
        <button className="font-bold text-button ">お問い合わせ</button>
      </ScrollLink>
      <Hamburger />
    </div>
  );
}
