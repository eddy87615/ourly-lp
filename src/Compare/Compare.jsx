'use client';
import React from 'react';
//CSS導入
import '@/Compare/style/Compare.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';

export default function Compare() {
  return (
    <Element name="section6">
      <div className="compare relative w-full h-screen bg-[--base-color]">
        <h3 className="text-h3 font-bold text-center pt-16">社内報の比較</h3>
        <img
          src="/img/compare.webp"
          alt="comparison about ourly, paper company news and other web company news tools"
          className="relative w-[55%] my-0 mx-auto mt-[4%] z-2"
        />
      </div>
    </Element>
  );
}
