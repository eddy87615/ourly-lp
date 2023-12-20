'use client';
import React, { useState } from 'react';
import Image from 'next/image';
//CSS導入
import './Fee.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';
import { useForm, Controller } from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';

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
    <Element
      id="section8"
      name="section8"
      className="form px-4 lg:px-32  pt-0 w-full h-full overflow-hidden"
    >
      <h3 className="text-h4 lg:text-h3 font-bold text-center pt-10 pb-4 lg:pt-16">
        料金案内
      </h3>
      <h4 className="text-[18px] font-semibold text-center lg:pt-8 px-12">
        登録されるアカウント数に応じた、月額制の料金プラン
      </h4>
      <div className="fee relative flex flex-col lg:flex-row my-0 mx-auto pt-12 gap-56 w-[90%]">
        {FeeData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[100%]
              p-6 lg:p-12 border-4 rounded-[16px] border-[--ourly-theme] bg-white"
          >
            <Image
              width={120}
              height={120}
              src={obj.img}
              alt={obj.alt}
              className="w-[30%]"
            />
            <h4 className="text-[20px] lg:text-h4 font-bold text-center py-8">
              {obj.title}
            </h4>
            <p className="text-[14px] lg:text-text leading-text font-normal">
              {obj.content}
            </p>
          </div>
        ))}
      </div>
      <p className="bottomtxt text-[16px] lg:text-h4 leading-h4 text-center relative bottom-0 sm:px-4 px-0 py-[8%]">
        お客様ごとに、最適なご提案をいたしますので、
        <br />
        まずは下記お問い合わせフォームよりお問い合わせ下さい。
      </p>
    </Element>
  );
}
