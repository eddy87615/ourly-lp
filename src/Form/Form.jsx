'use client';
import React, { useState } from 'react';
//CSS導入
import './Form.css';
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

function Fee() {
  return (
    <Element className="w-full h-full">
      <h3 className="text-h3 font-bold text-center pt-16">料金案内</h3>
      <h4 className="text-h4 font-bold text-center pt-8">
        登録されるアカウント数に応じた、月額制の料金プラン
      </h4>
      <div className="fee relative flex flex-col lg:flex-row my-0 mx-auto pt-12 gap-56 w-[90%]">
        {FeeData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[100%]
            p-12 border-4 rounded-[16px] border-[--ourly-theme] bg-white"
          >
            <img src={obj.img} alt={obj.alt} />
            <h4 className="text-h4 font-bold text-center py-8">{obj.title}</h4>
            <p className="text-text leading-text font-normal">{obj.content}</p>
          </div>
        ))}
      </div>
      <p className="bottomtxt text-h4 leading-h4 text-center relative bottom-0 py-[8%]">
        お客様ごとに、最適なご提案をいたしますので、
        <br />
        まずは下記お問い合わせフォームよりお問い合わせ下さい。
      </p>
    </Element>
  );
}

export default function Form() {
  const explain = [
    {
      title: '無料デモ・無料トライアルをご希望の方',
      content:
        'ourlyでは、本サービスの機能やサポート体制を実際のご利用から体感いただける「無料デモ・無料トライアル」を提供しています。フォーム上の『無料トライアルを希望する』にチェックの上、ご送信下さい。担当者からメールにて詳細をご連絡差し上げます。',
    },
    {
      title: 'オンライン相談をご希望の方',
      content:
        'ourlyの概要から、実際のUIを用いた機能の解説、好評のサポート体制の紹介などをオンラインで行っております。オンライン相談希望の旨をご記載の上、フォームを送信ください。担当者より、候補日を改めてご連絡差し上げます。',
    },
  ];
  return (
    <Element name="section8" className="form px-32 pb-16 pt-0">
      <Fee />
      <Element id="section9">
        <form
          className=" bg-white border-4 border-purple-dark rounded-[16px] my-0 mx-auto 
        flex flex-col p-32 w-[90%]"
        >
          <div className="mb-8">
            {explain.map((txt, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-h4">{txt.title}</h4>
                <p className="text-text leading-text font-normal">
                  {txt.content}
                </p>
              </div>
            ))}
          </div>
          <label className="name flex">
            <label className="flex flex-col w-1/2">
              姓
              <span
                className="absolute text-[4px] left-[4%] top-[4%] 
            border border-1 border-ourly-theme text-[--ourly-theme] px-1"
              >
                必須
              </span>
              <input id="lastname" placeholder="電子" required />
            </label>
            <label className="flex flex-col w-1/2">
              名
              <span className="absolute text-[4px] left-[4%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
                必須
              </span>
              <input id="firstname" placeholder="太郎" required />
            </label>
          </label>

          <label className="company w-full flex">
            <label className="flex flex-col w-1/2">
              会社名
              <span className="absolute text-[4px] left-[9%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
                必須
              </span>
              <input
                id="company"
                className="w-full"
                placeholder="ourly株式会社"
                required
              />
            </label>
            <label className="flex flex-col w-1/2">
              部属名
              <span className="absolute text-[4px] left-[9%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
                必須
              </span>
              <input
                id="department"
                placeholder="部属名"
                className="w-full"
                required
              />
            </label>
          </label>
          <label className="email w-full">
            E-mail
            <span className="absolute text-[4px] left-[5%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
              必須
            </span>
            <p className="font-normal text-[14px] my-1">
              会社でご使用されるメールアドレスをご入力ください。Gmail等、フリーアドレスは使用できません。
            </p>
            <input
              id="email"
              placeholder="ourly@example.co.jp"
              className="w-full"
              required
            />
          </label>
          <label className="phone w-full flex flex-col">
            電話番号
            <span className="absolute text-[4px] left-[6%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
              必須
            </span>
            <input
              id="phone"
              placeholder="080-1234-5678"
              className="w-full"
              required
            />
          </label>

          <label className="ckeck flex flex-col my-6">
            <label className="flex items-center font-normal">
              <input type="checkbox" id="freetry" />
              無料トライアルを希望する
            </label>
            <label className="flex items-center  font-normal">
              <input type="checkbox" id="document" />
              ourlyサービス資料を希望する
            </label>
          </label>
          <label className="question w-full flex flex-col">
            ご質問・ご相談等
            <p className="font-normal text-[14px] my-1">
              ※ 営業メールはご遠慮ください。
            </p>
            <textarea
              type="textarea"
              placeholder="ご質問 ˙ ご相談等ありましたら、こちらにご記入ください。"
              id="question"
              className="h-[200px]"
            />
          </label>
          <label className="privacy">
            <p className=" font-normal">
              ご提供いただく個人情報は弊社プライバシーポリシーに従い管理されますので、同意の上ダウンロードください。
            </p>
            <label className="flex items-center font-normal">
              <input type="checkbox" id="privacy" required />
              <a
                href="https://service.ourly.jp/privacy"
                target="_black"
                className="text-[--purple-dark] underline"
              >
                プライバシーポリシー
              </a>
              に同意する
              <span
                className="absolute text-[4px] font-bold
            left-[24%] top-[50%] translate-y-[-50%] border border-1 border-ourly-theme text-[--ourly-theme] px-1"
              >
                必須
              </span>
            </label>
          </label>
          <button
            type="submit"
            className="text-text lg:text-[24px] bg-ourly-theme text-white 
          py-2 px-10 lg:py-6 lg:px-20 rounded-2xl my-0 mx-auto mt-10 shadow-ourly duration-500"
          >
            お問い合わせを送信
          </button>
        </form>
        <p className="text-center text-button pt-16">
          ※フォームが送信されないなどの場合は、お手数ですがsupport@ourly.co.jpまでお問い合わせください。
        </p>
      </Element>
    </Element>
  );
}
