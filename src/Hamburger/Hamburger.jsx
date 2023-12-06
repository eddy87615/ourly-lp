import { React, useState, useEffect } from 'react';
//
import './Hamburger.css';
//
import { Link as ScrollLink, Link, Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Hamburger({ isVisible }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  //if  writting component inside a component, react will rerender the insider component once again//
  // const Hamburgerbtn = function () {
  //   return (
  //     <div
  //       className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg
  //       flex flex-col justify-center items-center shadow-ourly-small
  //       duration-500 relative z-50
  //       ${isMenuOpen ? 'bg-ourly-theme' : 'bg-white'}`}
  //       onClick={handleToggle}
  //     >
  //       <div
  //         className={`menu-line01 ${isMenuOpen ? 'menu-line-active01' : ''}`}
  //       ></div>
  //       <div
  //         className={`menu-line02 ${isMenuOpen ? 'menu-line-active02' : ''}`}
  //       ></div>
  //       <div
  //         className={`menu-line03 ${isMenuOpen ? 'menu-line-active03' : ''}`}
  //       ></div>
  //     </div>
  //   );
  // };

  //width listener
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

  return (
    <>
      {rendermenu ? (
        <nav>
          <div
            className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg 
        flex flex-col justify-center items-center shadow-ourly-small
        duration-500 relative z-50
        ${isMenuOpen ? 'bg-ourly-theme' : 'bg-white'}`}
            onClick={handleToggle}
          >
            <div
              className={`menu-line01 ${
                isMenuOpen ? 'menu-line-active01' : ''
              }`}
            ></div>
            <div
              className={`menu-line02 ${
                isMenuOpen ? 'menu-line-active02' : ''
              }`}
            ></div>
            <div
              className={`menu-line03 ${
                isMenuOpen ? 'menu-line-active03' : ''
              }`}
            ></div>
          </div>
          <div
            className={`menu-bg w-full h-screen bg-white fixed top-0 
          flex flex-col justify-center items-center duration-500 ${
            isMenuOpen ? 'right-0 opacity-1' : 'right-[-100%] opacity-0'
          }`}
          >
            {
              <motion.ul
                className="flex flex-col justify-center items-center sm:w-full md:w-[80%] h-full relative"
                // initial={{ opacity: 0, y: '100%' }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: '100%' }}
                // transition={{
                //   duration: 1,
                // }}
                // key="modal"
              >
                <li>
                  <a
                    className="flex justify-center items-center"
                    href="https://service.ourly.jp/"
                    target="blank"
                    onClick={handleToggle}
                  >
                    <img
                      src="/img/ourly_logo.webp"
                      alt="ourly logo"
                      className="w-1/2 h-auto "
                    />
                  </a>
                </li>
                {menu.map((link, index) => (
                  <motion.li
                    layout
                    initial={{
                      y: 100,
                      opacity: 0.01,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: index * 0.1,
                      },
                    }}
                    key={`li--${index}`}
                    className="flex justify-center items-center mt-10 bg-white border-4 border-ourly-theme rounded-[100px]
                  w-[56%] h-[8%]"
                  >
                    <Link
                      href={link.link}
                      to={link.link}
                      offset={-50}
                      alt={link.alt}
                      className="w-full h-full text-center flex justify-center items-center text-button font-bold cursor-pointer"
                      onClick={handleToggle}
                    >
                      {link.txt}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            }
          </div>
        </nav>
      ) : (
        ''
      )}
    </>
  );
}
