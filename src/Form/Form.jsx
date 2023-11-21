'use client';
import React, { useState } from 'react';
//CSS導入
import '@/Form/style/Form.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';

export default function Form() {
  return (
    <Element name="section8" className="p-32">
      <form
        className=" bg-white border-4 border-purple-dark rounded-[16px] my-0 mx-auto
      flex flex-col p-32"
      >
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
            <span className="absolute text-[4px] left-[8%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
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
            <span className="absolute text-[4px] left-[8%] top-[4%] border border-1 border-ourly-theme text-[--ourly-theme] px-1">
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
          <p className="font-normal">
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
          <input
            id="phone"
            placeholder="080-1234-5678"
            className="w-full"
            required
          />
        </label>

        <label className="ckeck flex flex-col">
          <label className="flex items-center">
            <input type="checkbox" id="freetry" />
            無料トライアルを希望する
          </label>
          <label className="flex items-center">
            <input type="checkbox" id="document" />
            ourlyサービス資料を希望する
          </label>
        </label>
        <label className="question w-full flex flex-col">
          ご質問・ご相談等
          <textarea
            type="textarea"
            placeholder="ご質問 ˙ ご相談等ありましたら、こちらにご記入ください。"
            id="question"
            className="h-[200px]"
          />
          <p>※ 営業メールはご遠慮ください。</p>
        </label>
        <label className="privacy">
          <p>
            ご提供いただく個人情報は弊社プライバシーポリシーに従い管理されますので、同意の上ダウンロードください。
          </p>
          <label className="flex items-center">
            <input type="checkbox" id="privacy" />
            プライバシーポリシーに同意する*
          </label>
        </label>
        <button
          type="submit"
          className="bg-ourly-theme text-white w-[30%] p-8 rounded-2xl my-0 mx-auto"
        >
          お問い合わせを送信
        </button>
      </form>
    </Element>
  );
}
