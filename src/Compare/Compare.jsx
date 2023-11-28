'use client';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
//CSS導入
import './Compare.css';
import '@/app/globals.css';
import './ComparePhone';
//
import { Element } from 'react-scroll';
import { useInView, motion } from 'framer-motion';
import ComparePhone from './ComparePhone';

export default function Compare() {
  const reffunction = useRef(null);
  const isInView = useInView(reffunction, { once: false });

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
  const rendercompare = windowWidth >= 800;

  return (
    <Element name="section6">
      <div className="compare relative w-full h-screen bg-[--base-color]">
        <h3 className="text-[24px] lg:text-h3 font-bold text-center py-16">
          社内報の比較
        </h3>
        {rendercompare ? (
          <img
            src="/img/compare.webp"
            alt="comparison about ourly, paper company news and other web company news tools"
            className="relative lg:w-[50%]  z-2 duration-500 
          md:w-[90%] md:mt-[16%] my-0 mx-auto mt-[4%] lg:mt-0"
            // ref={reffunction}
            // variants={imgVariants}
            // initial="hidden"
            // animate={isInView ? 'visible' : 'hidden'}
            // transition={{ duration: 0.5 }}
          />
        ) : (
          <ComparePhone />
        )}
      </div>
    </Element>
  );
}
