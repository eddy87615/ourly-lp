'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';
// import Link from 'next/link';
import Image from 'next/image';
import { SlArrowDown } from 'react-icons/sl';
//Swiper導入
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//
//CSS導入
import './Slider.css';
import '@/app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//

export default function Slider() {
  const slider = [
    {
      titleclass: 'title01',
      // h1text: 'ourlyを導入してから<br />会社に関する悩みが全部解決できました！',
      h1text: [
        'ourlyを導入してから',
        '会社に関する悩みが全部',
        '解決できました！',
      ],
      ourlytext:
        'ourlyは、社員のエンゲージメントを向上させる、<br />web社内報ツールです。',
      bgclass: 'page01',
      triangleup: 'triangle01',
      triangledown: 'triangle02',
      imgsrcPC: '/img/office-bg.webp',
      imgsrcPAD: '/img/KVimg-Pad-01.webp',
      imgsrcPHONE: '/img/KVimg-Phone-01.webp',
      imgalt: 'bulish normal office background',
      button: 'btn01',
    },
    {
      titleclass: 'title02',
      h1text: [
        'ourlyを導入してから',
        '読みやすい社内報を',
        '簡単に作れるようになりました！',
      ],
      // h1text:
      //   'ourlyを導入してから<br />読みやすい社内報を<br />簡単に作れるようになりました！',
      ourlytext:
        'ourlyは、社員のエンゲージメントを向上させる、<br />web社内報ツールです。',
      bgclass: 'page02',
      triangleup: 'triangle03',
      triangledown: 'triangle04',
      imgsrcPC: '/img/30Ywoman-04-bg.webp',
      imgsrcPAD: '/img/KVimg-Pad-02.webp',
      imgsrcPHONE: '/img/KVimg-Phone-02.webp',
      imgalt: 'sunshine office background',
      button: 'btn02',
    },
    {
      titleclass: 'title03',
      h1text: ['ourlyを導入してから', '一体感が生まれました！'],
      // h1text: 'ourlyを導入してから<br />一体感が生まれました！',
      ourlytext:
        'ourlyは、社員のエンゲージメントを向上させる、<br />web社内報ツールです。',
      bgclass: 'page03',
      triangleup: 'triangle05',
      triangledown: 'triangle06',
      imgsrcPC: '/img/happypeople-bg.webp',
      imgsrcPAD: '/img/KVimg-Pad-03.webp',
      imgsrcPHONE: '/img/KVimg-Phone-03.webp',
      imgalt: 'office background for a cheering team',
      button: 'btn03',
    },
  ];

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

  const rendernav = windowWidth >= 1000;
  const renderPC = windowWidth >= 1440;
  const renderPAD = windowWidth <= 1440;
  const renderPHONE = windowWidth <= 768;

  // function otoiawasebtn() {
  //   if (typeof document !== 'undefined') {
  //     const formsection = document.querySelector('.bottomtxt');
  //     if (formsection) {
  //       const offsetPHONE = -100;
  //       const offsetPC = 0;
  //       const sectionpositionPHONE = formsection.offsetTop + offsetPHONE;
  //       const sectionpositionPC = formsection.offsetTop + offsetPC;

  //       window.scrollTo({
  //         top: `${rendernav ? sectionpositionPC : sectionpositionPHONE}`,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }

  //   document.addEventListener('DOMContentLoaded', function () {
  //     const sliderbtn = document.querySelector('.sliderbtn');
  //     if (sliderbtn && sliderbtn.addEventListener) {
  //       sliderbtn.addEventListener('click', otoiawasebtn);
  //     }
  //   });
  // }

  // const handleButtonClick = () => {
  //   // 使用 getElementById 取得目標元素
  //   const targetElement = document.getElementById('section8');

  //   if (targetElement) {
  //     // 獲取元素位置信息
  //     const rect = targetElement.getBoundingClientRect();

  //     // 計算頂部到目標元素的距離
  //     const distance = rect.top + window.scrollY - 120;

  //     // 使用 window.scrollTo 滾動到計算出的距離
  //     window.scrollTo({
  //       top: distance,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRef = useRef(null);
  // const clicksmooth = (e) => {
  //   e.preventDefault();
  //   const aonclick = document.getElementById('section8');
  //   if (aonclick) {
  //     aonclick.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-color': '#fff',
      }}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      id="silder"
      navigation={rendernav ? true : false}
    >
      {slider.map((obj, index) => (
        <SwiperSlide
          className={`${obj.bgclass} relative`}
          key={index}
          style={{ overflow: 'hidden' }}
        >
          <div className={obj.titleclass}>
            {/* {obj.h1text.split('<br />').map((txt, index) => (
              <h1
                key={index}
                className="text-[32px] md:text-h2 lg:text-h1 2xl:text-h1 
              font-bold 
              leading-h2 lg:leading-h1"
              >
                {txt}
              </h1>
            ))} */}
            <h1
              className="text-[32px] md:text-h2 lg:text-h1 2xl:text-h1 
              font-bold 
              leading-h2 lg:leading-h1 m-0"
            >
              {obj.h1text[0]}
              <br />
              {obj.h1text[1]}
              <br />
              {obj.h1text[2]}
            </h1>

            {/* {obj.h1text.map((txt, index) => (
              <React.Fragment key={index}>
                <h1
                  className="text-[32px] md:text-h2 lg:text-h1 2xl:text-h1
              font-bold "
                >
                  {txt}
                </h1>
              </React.Fragment>
            ))} */}

            {/* <h1
              className="text-[32px] md:text-h2 lg:text-h1 
              font-bold mb-2 lg:mb-6 
              leading-h2 lg:leading-h1 2xl:leading-[100px]"
              dangerouslySetInnerHTML={{ __html: obj.h1text }}
            ></h1> */}
            {/* {obj.ourlytext.split('<br />').map((ourly, index) => (
              <p
                key={index}
                className="text-[18px] md:text-[20px] lg:text-h4 
                leading-h4 lg:leading-h3"
              >
                {ourly}
              </p>
            ))} */}
            <p
              className="text-[18px] md:text-[20px] lg:text-h4 
              leading-h4 lg:leading-h4"
              dangerouslySetInnerHTML={{ __html: obj.ourlytext }}
            ></p>
            <Link
              href="section8"
              to="section8"
              offset={rendernav ? 0 : -100}
              aria-label="to otoiawase section"
              alt="to otoiawase section"
            >
              <button
                // onClick={otoiawasebtn}
                // onClick={handleButtonClick}
                className={`${obj.button} sliderbtn relative 
                w-[200px] md:w-[250px] lg:w-[350px] 
                h-[60px] md:h-[80px] lg:h-[100px]
               bg-white border-ourly-theme border-4 rounded-full 
               text-text md:text-[20px] lg:text-h3 mt-[4%] font-bold shadow-ourly 
               transition-all duration-300`}
              >
                お問い合わせ
              </button>
            </Link>
          </div>
          <span className={obj.triangleup}></span>
          <span className={obj.triangledown}></span>
          <Image
            width={renderPC ? 1440 : renderPAD ? 675 : renderPHONE ? 525 : ''}
            height={renderPC ? 1080 : renderPAD ? 900 : renderPHONE ? 700 : ''}
            src={
              renderPC
                ? obj.imgsrcPC
                : renderPAD
                ? obj.imgsrcPAD
                : renderPHONE
                ? obj.imgsrcPHONE
                : ''
            }
            alt={obj.imgalt}
            className="w-full h-screen "
          />
        </SwiperSlide>
      ))}
      <span className="slide-hint absolute bottom-[4%] left-1/2 translate-x-[-50%] z-10 w-[10%] md:w-[5%] h-auto">
        <SlArrowDown style={{ color: 'white' }} className="w-full h-full" />
      </span>
    </Swiper>
  );
}
