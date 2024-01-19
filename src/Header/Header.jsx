'use client';
import React from 'react';
import Image from 'next/image';
//CSS導入
import './Header.css';
import '@/app/globals.css';
//
import { useEffect, useState, useRef } from 'react';
import { Link as ScrollLink, Link } from 'react-scroll';
import Hamburger from '@/Hamburger/Hamburger';

export default function Header() {
  //logo back to top//
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
  //logo back to top//

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
      handleScroll();
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

  const scrollRef = useRef(null);
  // const clicksmooth = (e) => {
  //   e.preventDefault();
  //   const aonclick = document.getElementById('section8');
  //   if (aonclick) {
  //     const targetOffset =
  //       aonclick.getBoundingClientRect().top + window.scrollY;

  //     setTimeout(() => {
  //       if (Math.abs(window.scrollY - targetOffset) > 5) {
  //         aonclick.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //         });
  //       }
  //     }, 500);
  //   }
  // };

  return (
    <div
      className={`fixed top-0 left-0 z-[60] flex items-center justify-between
      px-4 lg:px-16 duration-500
    w-screen ${renderbtn ? '' : showBtn ? 'header' : ''} ${
        renderbtn ? 'h-[150px]' : 'h-[100px]'
      }`}
    >
      <Image
        width={300}
        height={100}
        src="/img/ourly_logo.webp"
        alt="ourly logo"
        className="cursor-pointer w-1/2 lg:w-1/5 h-auto"
        id="logo"
        priority={true} // {false} | {true}
      />
      {/* <button
        className="font-bold text-button cursor-default"
        aria-label="otoiawase button"
      > */}
      {/* <Link
        aria-label="otoiawase button"
        href="section8"
        to="section8"
        smooth={true}
        offset={0}
        duration={3000}
        className="otoiawase border-4 border-solid border-ourly-theme shadow-ourly
        px-14 py-2 rounded-full bg-white font-bold text-button cursor-default
        transition-all duration-500 "
        style={{
          opacity: showBtn && renderbtn ? '1' : '0',
          pointerEvents: showBtn && renderbtn ? 'auto' : 'none',
          cursor: showBtn && renderbtn ? 'pointer' : '',
        }}
      > */}
      <Link
        href="section8"
        to="section8"
        aria-label="お問い合わせ"
        // onClick={clicksmooth}
        // ref={scrollRef}
        alt="to otoiawase section"
        offset={renderbtn ? 0 : -100}
        className="otoiawase border-4 border-solid border-ourly-theme shadow-ourly
        px-14 py-2 rounded-full bg-white font-bold text-button cursor-default
        transition-all duration-500 "
        style={{
          opacity: showBtn && renderbtn ? '1' : '0',
          pointerEvents: showBtn && renderbtn ? 'auto' : 'none',
          cursor: showBtn && renderbtn ? 'pointer' : '',
          // width: showBtn && renderbtn ? '' : '0',
        }}
      >
        お問い合わせ
      </Link>
      {/* </Link> */}
      {/* </button> */}
      <Hamburger />
    </div>
  );
}
