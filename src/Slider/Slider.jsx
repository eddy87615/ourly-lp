'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
//Swiper導入
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link as ScrollLink } from 'react-scroll';
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
      imgsrc: '/img/office-bg.webp',
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
      imgsrc: '/img/30Ywoman-04-bg.webp',
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
      imgsrc: '/img/happypeople-bg.webp',
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

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-color': '#fff',
      }}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={`${rendernav ? true : false}`}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      id="silder"
      navigation={rendernav ? true : false}
    >
      {slider.map((obj, index) => (
        <SwiperSlide className={`${obj.bgclass} relative`} key={index}>
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
            <ScrollLink
              href="section8"
              to="section8"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button
                className={`${obj.button} relative 
                w-[200px] md:w-[250px] lg:w-[350px] 
                h-[60px] md:h-[80px] lg:h-[100px]
               bg-white border-ourly-theme border-4 rounded-full 
               text-text md:text-[20px] lg:text-h3 mt-[4%] font-bold shadow-ourly 
               transition-all duration-300`}
                to="section8"
              >
                お問い合わせ
              </button>
            </ScrollLink>
          </div>
          <span className={obj.triangleup}></span>
          <span className={obj.triangledown}></span>
          <Image
            width={1350}
            height={940}
            src={obj.imgsrc}
            alt={obj.imgalt}
            className="w-full h-screen "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
