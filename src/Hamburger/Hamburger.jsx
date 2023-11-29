import { React, useState } from 'react';
//
import './Hamburger.css';

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

function Hamburgerbtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <div
      className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg 
      flex flex-col justify-center items-center shadow-ourly-small
      duration-500 relative
      ${isMenuOpen ? 'bg-ourly-theme' : 'bg-white'}`}
      onClick={handleToggle}
    >
      <div
        className={`menu-line01 ${isMenuOpen ? 'menu-line-active01' : ''}`}
      ></div>
      <div
        className={`menu-line02 ${isMenuOpen ? 'menu-line-active02' : ''}`}
      ></div>
      <div
        className={`menu-line03 ${isMenuOpen ? 'menu-line-active03' : ''}`}
      ></div>
    </div>
  );
}

export default function Hamburger() {
  return <Hamburgerbtn />;
}
