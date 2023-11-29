'use client';
import React from 'react';
//CSS導入
import './Hamburger.css';
import '@/app/globals.css';
//
import { useEffect, useState } from 'react';
import { Link as ScrollLink, Link, Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hamburger() {
  const [windowWidth, setWindowWidth] = useState(0);

  //menu click//
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log('Toggling menu');
    setIsMenuOpen(!isMenuOpen);
  };
  //

  const Menudiv = () => {
    return (
      <div
        className={`menu-line-bg shadow-ourly-small ${
          isMenuOpen ? 'menu-line-bg-active' : 'menu-line-bg-unactive'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`menu-line  ${
            isMenuOpen === true ? 'menu-line-active01' : ''
          }`}
        ></div>
        <div
          className={`menu-line  ${
            isMenuOpen === true ? 'menu-line-active02' : ''
          }`}
        ></div>
        <div
          className={`menu-line  ${
            isMenuOpen === true ? 'menu-line-active03' : ''
          }`}
        ></div>
      </div>
    );
  };

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
  const rendermenu = windowWidth <= 1000;

  const menu = [
    {
      txt: '機能一覧',
      link: 'section5',
      alt: 'all the function in ourly',
    },
    {
      txt: 'よくある質問',
      link: 'section7',
      alt: 'question that often be asked',
    },
    {
      txt: '料金案内',
      link: 'section8',
      alt: 'question form',
    },
    {
      txt: 'お問い合わせ',
      link: 'section9',
      alt: 'question form',
    },
  ];

  return (
    <>
      {rendermenu ? (
        <div>
          <Menudiv toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <AnimatePresence>
            {isMenuOpen && (
              <div
                className={`menu-body fixed top-0 right-[-100%] opacity-0 duration-500
            bg-white w-screen h-screen z-30 ${
              isMenuOpen === true ? ' menu-body-active ' : ''
            }`}
                style={isMenuOpen === true ? { opacity: 1, right: 0 } : {}}
              >
                <a
                  href="https://service.ourly.jp/"
                  alt="ourly official web site"
                  target="_blank"
                >
                  <img
                    src="img/ourly_logo.webp"
                    alt="ourly logo"
                    className="w-1/2 h-auto pt-12 pl-4"
                  />
                </a>
                <ul
                  className="relative flex flex-col justify-center items-center 
            top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[60%] z-10"
                >
                  {menu.map((link, index) => (
                    <motion.li
                      key={index}
                      className="w-full flex justify-center items-center text-center font-semibold
                  border-4 border-ourly-theme bg-white rounded-[100px]
                  m-4"
                      initial={{ opacity: 0, y: '100%' }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: '100%' }}
                    >
                      <Link
                        alt={link.alt}
                        to={link.link}
                        className="w-full h-full py-4"
                        onClick={toggleMenu}
                      >
                        {link.txt}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
