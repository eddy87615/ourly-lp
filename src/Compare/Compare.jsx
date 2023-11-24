'use client';
import React from 'react';
import { useRef } from 'react';
//CSS導入
import '@/Compare/style/Compare.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';
import { useInView, motion } from 'framer-motion';

export default function Compare() {
  const reffunction = useRef(null);
  const isInView = useInView(reffunction, { once: true });

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Element name="section6">
      <div className="compare relative w-full h-screen bg-[--base-color]">
        <h3 className="text-h3 font-bold text-center py-16">社内報の比較</h3>
        <motion.img
          src="/img/compare.webp"
          alt="comparison about ourly, paper company news and other web company news tools"
          className="relative w-[50%] my-0 mx-auto mt-[4%] z-2 duration-500 
          md:w-[90%] md:mt-[16%]"
          ref={reffunction}
          variants={imgVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={0.8}
        />
      </div>
    </Element>
  );
}
