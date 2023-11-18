import React from 'react';
//CSS導入
import '@/Header/style/Header.css';
import '@/app/globals.css';
//

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-30 p-8 w-screen h-28 flex">
      <a href="/">
        <img src="/img/ourly_logo.webp" className="w-56" />
      </a>
      <button
        className="otoiawase 
      border-4 border-solid border-ourly-theme 
      px-10 font-bold text-button rounded-full ml-auto bg-white 
      transition-all duration-300 shadow-ourly"
      >
        お問い合わせ
      </button>
    </div>
  );
}
