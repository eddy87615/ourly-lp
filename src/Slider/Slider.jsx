'use client';
import React, { useState, useRef, useEffect } from 'react';
//Swiper導入
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//
//CSS導入
import '@/Slider/style/Slider.css';
import '@/app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//

export default function Slider() {
  const slider = [
    {
      titleclass: 'title01',
      h1text: 'ourlyを導入してから<br />会社に関する悩みが全部解決できました！',
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
      h1text:
        'ourlyを導入してから<br />読みさすい社内報を<br />簡単に作れるようになりました！',
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
      h1text: 'ourlyを導入してから<br />一体感が生まれました！',
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

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-color': '#fff',
      }}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slider.map((obj, index) => (
        <SwiperSlide className={`${obj.bgclass} relative`} key={index}>
          <div className={obj.titleclass}>
            <h1
              className="text-h1 font-bold mb-6 leading-h1"
              dangerouslySetInnerHTML={{ __html: obj.h1text }}
            ></h1>
            <p
              className="text-h4 leading-h3"
              dangerouslySetInnerHTML={{ __html: obj.ourlytext }}
            ></p>
            <button
              className={`${obj.button} relative w-[350px] h-[100px]
               bg-white border-ourly-theme border-4 rounded-full text-h3 mt-[4%] font-bold shadow-ourly 
               transition-all duration-300`}
            >
              お問い合わせ
            </button>
          </div>
          <span className={obj.triangleup}></span>
          <span className={obj.triangledown}></span>
          <img src={obj.imgsrc} alt={obj.imgalt} className="w-full h-screen " />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
