import React from 'react';
//CSS導入
import '@/Intro/style/Intro.css';
import '@/app/globals.css';
//

export default function Intro() {
  return (
    <div
      className="intro w-full h-[650px] relative flex items-center flex-row-reverse"
      id="section0"
    >
      <p className="text-[40px] font-bold pr-[10%]">
        <span className=" text-[--ourly-theme] absolute opacity-50 top-[10%] right-[30%] text-[32px] font-semibold">
          会社の雰囲気を改善したい…
        </span>
        <span className=" text-[--ourly-theme] absolute opacity-50 top-[30%] left-[60%] text-[32px] font-semibold">
          コミュニケーションを常にとって欲しい…
        </span>
        あなたも会社のこと悩んでいますか？
        <span className=" text-[--ourly-theme] absolute opacity-50 top-[64%] right-[4%] text-[32px] font-semibold">
          皆んなの悩みを解決したい…
        </span>
        <span className=" text-[--ourly-theme] absolute opacity-50 top-[80%] right-[24%] text-[32px] font-semibold">
          会社をもっといい職場をさせたい…
        </span>
      </p>
    </div>
  );
}
