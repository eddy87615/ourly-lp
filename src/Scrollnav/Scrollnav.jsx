'use client';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
//CSS導入
import '@/Scrollnav/style/Scrollnav.css';
import '@/app/globals.css';
//
//
import {
  Link as ScrollLink,
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSPy,
} from 'react-scroll';
import _debounce from 'lodash/debounce';
//

const scrollnav = [
  {
    id: 'section1',
    text: '一体感について…',
    link: '#section1',
  },
  {
    id: 'section2',
    text: '会社の雰囲気について…',
    link: '#section2',
  },
  {
    id: 'section3',
    text: '社内報の編集について…',
    link: '#section3',
  },
  {
    id: 'section4',
    text: '優れている分析機能',
    link: '#section4',
  },
  {
    id: 'section5',
    text: '機能一覧',
    link: '#section5',
  },
  {
    id: 'section6',
    text: '社内報の比較',
    link: '#section6',
  },
  {
    id: 'section7',
    text: 'よくある質問',
    link: '#section7',
  },
  {
    id: 'section8',
    text: 'お問い合わせ',
    link: '#section8',
  },
];

export default function Scrollnav() {
  //scroll setting//

  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    //Scrollのリスニング
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    //Scrollリスニングを解除
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  const handleScroll = _debounce(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > window.innerHeight / 2) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }

    //今のところを検査してactivesectionを設置
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollPositionTop = window.scrollY;
      const scrollPositionBottom = window.scrollY + window.innerHeight;
    }
    const section = [
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
      'section8',
    ];
    for (let i = 0; i < section.length; i++) {
      const element = document.getElementById(section[i]);
      if (
        element &&
        element.offsetTop <= scrollPositionTop &&
        element.offsetTop + element.offsetHeight >= scrollPositionTop
      ) {
        setActiveSection(section[i]);
        break;
      }
    }
  }, 20);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      //Effectを削除
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  //

  return (
    <nav
      className={`scroll-nav fixed top-1/2 translate-y-[-50%] left-[3%]
      flex flex-col justify-center z-20 opcaity-100 duration-500
    ${showNav ? '' : 'duration-500 flex left-[-10%] opacity-0'}
    hidden lg:flex
    `}
    >
      {scrollnav.map((section, index) => (
        <Link
          to={section.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          key={section.link}
          activeClass="active"
          alt={section.text}
        ></Link>
      ))}
    </nav>
  );
}
