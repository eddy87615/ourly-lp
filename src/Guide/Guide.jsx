'use client';
import React, { useState, useEffect } from 'react';
//CSS導入
import './Guide.css';
import '@/app/globals.css';
//
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

//type animation //
const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        '社内報に関するお悩みありませんか？',
        4000,
        '社内報のツールを探していますか？',
        3000,
        '社内報に関するお悩みありませんか？',
        4000,
        '社内報nikannsuru...',
        2000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '48px', display: 'inline-block' }}
    />
  );
};
//

export default function Guide() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();
      document.body.style.overflow = 'hidden';

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(
        ' .container,#guide01, #guide02, #guide03, .open'
      );
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, (index + 1) * 300);
      });
    };

    animateElements();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflowY = 'auto';
  };

  const [isGuideOpen, setGuideOpen] = useState({
    guide01: false,
    guide02: false,
    guide03: false,
  });
  const handleGuide = (guideNum) => {
    setGuideOpen((prevGuideOpen) => ({
      ...prevGuideOpen,
      [`guide0${guideNum}`]: true,
    }));
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  const handleTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
      });
    }
  };

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const shouldHide = window.innerWidth < 1440;
        if (!shouldHide) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'auto';
        }
        setIsHidden(shouldHide);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };
    handleResize();
  }, []);

  const guideinfo = [
    {
      id: 'guide01',
      id02: 'guide01-1',
      frontTitle: '私はリモートワーカーです。<br />私は…',
      frontImg: '/img/20Yman-06-bgN.webp',
      frontImgAlt: '20 years old man.',
      backTxt01: 'ずっとリモートだから会社に何が起きたのか全然わからない...',
      backTxt02: '会社との交流が少なくなった…',
      backImg: '/img/20Yman-02-bgN.webp',
      backAlt: '20 years old man annoying about his work and company.',
    },
    {
      id: 'guide02',
      id02: 'guide02-1',
      frontTitle: '私は会社の役員です。<br />私は…',
      frontImg: '/img/30Yman-07-bgN.webp',
      frontImgAlt: '30 years old man.',
      backTxt01: 'どうやって自分の声がちゃんと届けるのかな？',
      backTxt02: '職場をさらによくしたいな…',
      backImg: '/img/30Yman-06.webp',
      backAlt: '30 years old man annoying about how to improve the company.',
    },
    {
      id: 'guide03',
      id02: 'guide03-1',
      frontTitle: '私は社内報編集者です。<br />私は…',
      frontImg: '/img/30Ywoman-05-bgN.webp',
      frontImgAlt: '30 years old woman.',
      backTxt01: 'みんなは自分の作った内容に興味あるかな…',
      backTxt02: '社内報の制作と管理が難しい…',
      backImg: '/img/30Ywoman-01-bgN-2.webp',
      backAlt: '30 years old woman annoying about her work the company news.',
    },
  ];

  return (
    <div
      className={`back  fixed top-0 left-0 w-full h-screen z-[90] bg-white ${
        isOpen
          ? 'translate-y-[-200vh] opacity-0 transition-all duration-[2000ms] ease-out'
          : ''
      }${isHidden ? 'hidden' : ''}`}
    >
      <div
        className="fixed top-0 left-0 z-50 flex items-center
      px-4 lg:px-8 mt-4
    w-screen h-[100px]"
      >
        <img
          src="/img/ourly_logo.webp"
          alt="ourly logo"
          className="w-1/2 lg:w-1/5 h-auto"
        />
      </div>
      <h1 className="guideh1 text-h1 font-bold text-center lg:py-20 xl:pt-20 xl:pb-10 2xl:py-20 px-0">
        <Type />
      </h1>
      <div className="guide flex justify-center items-center w-full h-[500px] gap-16 ">
        {guideinfo.map((obj, index) => (
          <Link
            href={`section${index + 1}`}
            to={`section${index + 1}`}
            key={index}
            className={`container list01 
            w-[20%] h-[55%] lg:w-[24%] xl:w-[24%] 2xl:w-[21%]
            absolute cursor-pointer  ${
              obj.id === 'guide01'
                ? 'lg:left-[10%] xl:left-[10%] 2xl:left-[16%]'
                : obj.id === 'guide03'
                ? 'lg:right-[10%] xl:right-[10%] 2xl:right-[16%]'
                : ''
            }`}
            onClick={() => handleGuide(`${index + 1}`)}
          >
            <div
              id={obj.id}
              className={`front border-4 border-[--ourly-theme] rounded-[16px] w-full h-full absolute bg-white 
              shadow-ourly ${
                obj.id === 'guide01'
                  ? 'left-0'
                  : obj.id === 'guide03'
                  ? 'right-0'
                  : ''
              }${
                isGuideOpen[`guide0${index + 1}`]
                  ? 'translate-y-full opacity-0 transition-all duration-[1500ms] ease-out'
                  : ''
              }`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: obj.frontTitle }}
                className="text-[25px] font-bold flex justify-center mt-5 leading-[60px]"
              ></p>
              <img
                src={obj.frontImg}
                alt={obj.frontImgAlt}
                className="absolute bottom-0 left-[50%] translate-x-[-50%] rounded-[16px]"
              />
            </div>
            <div
              key={obj.backAlt}
              id={obj.id02}
              className={`back border-4 border-[--ourly-theme] rounded-[16px] w-full h-full absolute bg-white 
              shadow-ourly ${
                obj.id02 === 'guide01-1'
                  ? 'left-0'
                  : obj.id02 === 'guide03-1'
                  ? 'right-0'
                  : ''
              }`}
            >
              <p className="text-[20px] px-4 pt-8 font-semibold">
                {obj.backTxt01}
              </p>
              <p className="text-[20px] px-4 pt-8  font-semibold text-right">
                {obj.backTxt02}
              </p>
              <img
                src={obj.backImg}
                alt={obj.backAlt}
                className="absolute bottom-0 left-[50%] translate-x-[-50%] rounded-[16px]"
              />
            </div>
          </Link>
        ))}
      </div>
      <button
        aria-label="最初からourlyを知る read the page from the top"
        className="open text-[18px] font-bold bottom-[10%] lg:bottom-[2%] xl:bottom-[8%] 2xl:bottom-[10%] right-[10%] absolute"
        onClick={() => {
          handleOpen();
          handleTop();
        }}
      >
        最初からourlyを知る
      </button>
    </div>
  );
}
