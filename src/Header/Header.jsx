import React from 'react';
import '@/Header/style/Header.css';
import '@/app/globals.css';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-30 p-8 w-screen h-28 flex">
      <a href="/">
        <img src="/img/ourly_logo.webp" className="w-56" />
      </a>
      <button className="otoiawase border-4 border-solid border-[#ff4448] px-10 rounded-full ml-auto text-[18px] bg-white font-bold transition-all duration-300 shadow-ourly">
        お問い合わせ
      </button>
    </div>
  );
}
