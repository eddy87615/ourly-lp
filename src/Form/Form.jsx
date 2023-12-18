'use client';
import React, { useState } from 'react';
import Image from 'next/image';
//CSS導入
import './Form.css';
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

function Fee() {
  return (
    <Element
      name="section8"
      className="form px-4 lg:px-32 pb-16 pt-0 w-full h-full overflow-hidden"
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    window.alert('送信済み！！');
    reset();
  };

  return (
    // <Element name="section8" className="form px-4 lg:px-32 pb-16 pt-0">
    <>
      <Fee />
      <Element id="section9">
        <form
          className=" bg-white border-4 border-purple-dark rounded-[16px] my-0 mx-auto 
        flex flex-col 
        px-4 pb-8 lg:px-32 lg:py-20 w-[90%]"
          id="freetryform"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-8">
            {explain.map((txt, index) => (
              <div key={index} className="lg:mb-8">
                <h4 className="text-[20px] lg:text-h4 px-2 text-center py-10">
                  {txt.title}
                </h4>
                <p
                  className="text-[14px] lg:text-text leading-[30px] lg:leading-text 
                font-normal"
                >
                  {txt.content}
                </p>
              </div>
            ))}
          </div>
          <label className="name lg:flex">
            <label className="flex flex-col w-full lg:w-1/2 mb-4">
              姓
              <span
                className="absolute text-[10px] lg:text-[10px]
                w-fit right-0 lg:left-[10%] xl:left-[6%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
              >
                必須
              </span>
              <input
                type="text"
                id="lastname"
                placeholder="電子"
                {...register('lastname', { required: true })}
              />
              {errors.lastname && (
                <p className="text-red-500 text-[12px] mt-1">
                  姓を入力してください。
                </p>
              )}
            </label>
            <label className="flex flex-col  w-full lg:w-1/2 mb-4">
              名
              <span
                className="absolute text-[10px] lg:text-[10px] 
                w-fit right-0 lg:left-[10%] xl:left-[6%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
              >
                必須
              </span>
              <input
                type="text"
                id="firstname"
                placeholder="太郎"
                {...register('firstname', { required: true })}
              />
              {errors.firstname && (
                <p className="text-red-500 text-[12px] mt-1">
                  名を入力してください。
                </p>
              )}
            </label>
          </label>

          <label className="company w-full lg:flex">
            <label className="flex flex-col w-full lg:w-1/2 mb-4">
              会社名
              <span
                className="absolute text-[10px] lg:text-[10px] 
                w-fit right-0 lg:left-[24%] xl:left-[12%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
              >
                必須
              </span>
              <input
                id="company"
                className="w-full"
                placeholder="ourly株式会社"
                type="text"
                {...register('company', { required: true })}
              />
              {errors.company && (
                <p className="text-red-500 text-[12px] mt-1">
                  会社名を入力してください。
                </p>
              )}
            </label>
            <label className="flex flex-col w-full lg:w-1/2 mb-4">
              部属名
              <span
                className="absolute text-[10px] lg:text-[10px] 
                w-fit right-0 lg:left-[24%] xl:left-[12%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
              >
                必須
              </span>
              <input
                id="department"
                placeholder="部属名"
                type="text"
                className="w-full"
                {...register('department', { required: true })}
              />
              {errors.department && (
                <p className="text-red-500 text-[12px] mt-1">
                  部属名を入力してください。
                </p>
              )}
            </label>
          </label>
          <label className="email w-full mb-4">
            E-mail
            <span
              className="absolute text-[10px] lg:text-[10px] 
                w-fit right-0 lg:left-[12%] xl:left-[6%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
            >
              必須
            </span>
            <p className="font-normal text-[12px] lg:text-[14px] my-1">
              会社でご使用されるメールアドレスをご入力ください。Gmail等、フリーアドレスは使用できません。
            </p>
            <input
              id="email"
              type="text"
              placeholder="ourly@example.co.jp"
              className="w-full"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">
                E-mailを入力してください。
              </p>
            )}
          </label>
          <label className="phone w-full flex flex-col">
            電話番号
            <span
              className="absolute text-[10px] lg:text-[10px] 
                w-fit right-0 lg:left-[14%] xl:left-[7%] top-[5%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
            >
              必須
            </span>
            <input
              id="phone"
              type="text"
              placeholder="080-1234-5678"
              className="w-full"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <p className="text-red-500 text-[12px] mt-1">
                電話番号を入力してください。
              </p>
            )}
          </label>

          <label className="ckeck flex flex-col my-2 lg:my-6">
            <label className="flex items-center font-normal">
              <input type="checkbox" id="freetry" {...register('freetry')} />
              無料トライアルを希望する
            </label>
            <label className="flex items-center  font-normal">
              <input type="checkbox" id="document" {...register('document')} />
              ourlyサービス資料を希望する
            </label>
          </label>
          <label className="question w-full flex flex-col">
            ご質問・ご相談等
            <p className="font-normal text-[12px] lg:text-[14px] my-1">
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
            <p className=" font-normal text-[14px] lg:text-text leading-text">
              ご提供いただく個人情報は弊社プライバシーポリシーに従い管理されますので、同意の上ダウンロードください。
            </p>
            <label className="flex items-center font-normal text-[14px] lg:text-text gap-3">
              <input
                type="checkbox"
                id="privacy"
                {...register('privacy', { required: true })}
              />
              <a
                href="https://service.ourly.jp/privacy"
                target="_black"
                className="text-[--purple-dark] underline text-[14px] lg:text-text"
              >
                ＊プライバシーポリシー
              </a>
              に同意する
              {/* <span
                className="absolute text-[10px] lg:text-[10px] 
                w-fit right-[-2%] sm:right-0 md:left-[42%] lg:left-[56%] 2xl:left-[40%] top-1/2 translate-y-[-50%] 
            border border-1 border-ourly-theme bg-white text-[--ourly-theme] px-1"
              >
                必須
              </span> */}
            </label>
            {errors.privacy && (
              <p className="text-red-500 text-[12px] mt-1 font-bold">
                プライバシーをチェックしてください。
              </p>
            )}
          </label>
          <button
            aria-label="お問い合わせを送信 otioawase sending button"
            type="submit"
            className="text-text lg:text-[24px] bg-ourly-theme text-white w-[200px] h-[50px] lg:w-[370px] lg:h-[70px]
            rounded-lg lg:rounded-2xl my-0 mx-auto lg:mt-10 lg:shadow-ourly duration-500"
            // onClick={submitBtn}
          >
            お問い合わせを送信
          </button>
        </form>
        <p className="note text-center text-[14px] lg:text-button pt-16 px-6 leading-text">
          ※フォームが送信されないなどの場合は、お手数ですがsupport@ourly.co.jpまでお問い合わせください。
        </p>
      </Element>
    </>
    // </Element>
  );
}
