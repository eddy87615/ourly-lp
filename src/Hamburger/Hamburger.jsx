'use client';
import React from 'react';
//CSS導入
import './Hamburger.css';
import '@/app/globals.css';
//
import { useEffect, useState } from 'react';
import { Link as ScrollLink, Link, Element } from 'react-scroll';

export default function Hamburger() {
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
  const render = windowWidth <= 1000;

  const menu = [
    {
      txt: '機能一覧',
      link: 'section5',
      alt: 'all the function in ourly',
    },
    {
      txt: 'よくある質問',
      link: 'section6',
      alt: 'question that often be asked',
    },
    {
      txt: '料金案内',
      link: 'section7',
      alt: 'question form',
    },
    {
      txt: 'お問い合わせ',
      link: 'section8',
      alt: 'question form',
    },
  ];

  return (
    <div>
      {render ? (
        <>
          <div>
            <div className="">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
            <div>
              <ul>
                {menu.map((link, index) => (
                  <li>
                    <Link alt={link.alt} to={link.link}>
                      {link.txt}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
