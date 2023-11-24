import React from 'react';
//CSS導入
import '@/Intro/style/Intro.css';
import '@/app/globals.css';
//

export default function Intro() {
  return (
    <div
      className="intro w-full h-[580px] lg:h-[650px] relative flex items-center flex-row-reverse"
      id="section0"
    >
      <p
        className="text-h3 lg:text-h2 
        text-center lg:text-right h-full 
        lg:flex lg:flex-row-reverse lg:items-center
      font-bold 
      px-24 
      lg:p-4 lg:pr-[10%] 
      top-[10%] md:top-[16%] lg:top-0
      md:left-1/2 md:translate-x-[-50%] md:w-full
      absolute md:absolute"
      >
        <span
          className=" text-[--ourly-theme] absolute opacity-50 
          lg:top-[10%] lg:right-[30%] 
        text-h3 
        hidden md:hidden lg:block
        font-semibold"
        >
          会社の雰囲気を改善したい…
        </span>
        <span
          className=" text-[--ourly-theme] absolute opacity-50 
          top-[30%] left-[10%] 
          lg:left-[60%] 
      text-h3 
      hidden md:hidden lg:block
        font-semibold"
        >
          コミュニケーションを常にとって欲しい…
        </span>
        あなたも会社のこと悩んでいますか？
        <span
          className=" text-[--ourly-theme] absolute opacity-50 
          top-[64%] right-[4%] 
     text-h3 
     hidden md:hidden lg:block
        font-semibold"
        >
          皆んなの悩みを解決したい…
        </span>
        <span
          className=" text-[--ourly-theme] absolute opacity-50 
          top-[80%] right-[24%]
        text-h3 
        hidden md:hidden lg:block
        font-semibold"
        >
          会社をもっといい職場をさせたい…
        </span>
      </p>
    </div>
  );
}
