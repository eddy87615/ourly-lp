'use client';
import React, { useState } from 'react';
//CSS導入
import '@/Fee/style/Fee.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';

const FeeData = [
  {
    img: '/img/fee-box.svg',
    alt: 'illustration of a box represents the package you will receive initially.',
    title: '初期導入費用',
    content:
      'システムの初期設定や運用体制の設計だけでなく、記事のリリースから数値分析までサポートさせていただきます。',
  },
  {
    img: '/img/fee-calendar.svg',
    alt: 'illustration of a calendar with a money mark on it represents the monthly fee.',
    title: '月額費用',
    content:
      '従業員数ごとのお得な料金プランをご用意。基本料金のみで、豊富な記事テンプレートや数値分析など、全ての機能をご利用いただけます。',
  },
];

export default function Fee() {
  return (
    <Element className="w-full h-screen">
      <h3 className="text-h3 font-bold text-center pt-16">料金案内</h3>
      <h4 className="text-h4 font-bold text-center pt-8">
        登録されるアカウント数に応じた、月額制の料金プラン
      </h4>
      <div className="fee relative flex my-0 mx-auto pt-32 pb-16 gap-56 w-[80%]">
        {FeeData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[100%]
            p-16 border-4 rounded-[16px] border-[--ourly-theme] bg-white"
          >
            <img src={obj.img} alt={obj.alt} />
            <h4 className="text-h4 font-bold text-center py-8">{obj.title}</h4>
            <p className="text-text leading-text font-normal">{obj.content}</p>
          </div>
        ))}
      </div>
      <p className="text-h4 leading-h4 text-center">
        お客様ごとに、最適なご提案をいたしますので、
        <br />
        まずは下記お問い合わせフォームよりお問い合わせ下さい。
      </p>
    </Element>
  );
}
