'use client';
import React, { useState } from 'react';
//CSS導入
import '@/Form/style/Form.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';

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
    <Element name="section8" className=" p-32 pt-16">
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
            <input type="checkbox" id="privacy" />
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
          className="text-[24px] bg-ourly-theme text-white py-6 px-20 rounded-2xl my-0 mx-auto mt-10 shadow-ourly"
        >
          お問い合わせを送信
        </button>
      </form>
    </Element>
  );
}
