'use client';
import React from 'react';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
//CSS導入
import '@/Main/style/Main.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';

const data = [
  {
    imgAnnoying: '/img/20Yman-02-bgN.webp',
    annoyingImgInfo: 'young man is annoyed',
    imgSolved: '/img/20Yman-04-bgN.webp',
    solvedImgInfo: 'happy young man cause problems solved',
    content: '私は会社のコミュニケーションについて悩んでいます…',
    article01: '会社の最新情報をキャッチしたい…',
    article02: '会社に今何が流行っているのが知りたい…',
    article03: '帰属意識を高めたい…',
    article04: '従業員向けのイベントがあるのか知りたい…',
    classAnnoying:
      'annoyingman01 w-full h-screen bg-[--base-color] relative z-[-2]',
    classSolved: 'solvedman01 w-full h-screen bg-white relative',
    solvedTitle: 'ourlyが…',
    solvedSubtitle: '新感覚のコミュニケーションを創造',
    solvedContent:
      '部署や年齢を超えた、意外な繋がりを無数に生み出すSNSのようなUIを設計しました。<br />特にブロックごとのリアクション・コメント機能が、小さなコミュニケーションの発生を見逃しません。',
  },
  {
    imgAnnoying: '/img/30Yman-06.webp',
    annoyingImgInfo: '30y man is annoyed',
    imgSolved: '/img/30Yman-04-bgN.webp',
    solvedImgInfo: 'happy 30y man cause problems solved',
    content: '社内の雰囲気をもっと向上させたい…',
    article01: '私の声がちゃんと届いているのか知りたい…',
    article02: '社内の雰囲気を良くしたい…',
    article03: '従業員とのコミュニケーションを良くしたい…',
    article04: '会社をもっといい会社にしたい…',
    classAnnoying:
      'annoyingman02 w-full h-screen bg-[--base-color] relative z-[-2]',
    classSolved: 'solvedman02 w-full h-screen bg-white relative',
    solvedTitle: 'ourlyが…',
    solvedSubtitle: '月1の定例・レポートで組織改善をサポート',
    solvedContent:
      '月1回の定例・レポーティングを実施しています。<br />社内報の閲覧状況や前月からの変化などのデータを見ながら、インナーコミュニケーション分野に<br />携わってきたプロフェッショナルが、各担当者様や企業様が抱えていらっしゃる課題に沿って振り返りと次のアクションをご提案いたします。<br />もちろん定例以外にもお困りの際は、その都度サポートさせていただきます。',
  },
  {
    imgAnnoying: '/img/30Ywoman-01-bgN-2.webp',
    annoyingImgInfo: 'young woman is annoyed',
    imgSolved: '/img/30Ywoman-02-bgN-2.webp',
    solvedImgInfo: 'happy young woman cause problems solved',
    content: '私は皆んなの好みに合う社内報を作りたい…',
    article01: '皆んな本当に社内報読んでくれているのかを知りたい…',
    article02: '編集や印刷とか時間をかかりすぎて…',
    article03: '皆んなはどんな内容が好きですか？',
    article04: '皆んなは社内報の内容をどう思っていますか？',
    classAnnoying:
      'annoyingwoman w-full h-screen bg-[--base-color] relative z-[-2]',
    classSolved: 'solvedwoman w-full h-screen bg-white relative',
    solvedTitle: 'ourlyが…',
    solvedSubtitle: 'シンプルさを追求した入稿・閲覧・管理画面',
    solvedContent:
      '馴染み深く直感的で、シンプルな操作性を追求し、究極に使いやすい画面に仕上げました。<br />ITの知識は不要で、年代問わず誰でも入稿が可能です。「CMSの導入・運用は難しい」と感じたことのある方は、ぜひourlyをお試しください。',
  },
];

function SpeechBubble({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={`w-[95%] lg:w-fit h-fit text-center text-[14px] lg:text-h4 leading-h4
       relative border-[5px] border-[--ourly-theme] rounded-full font-bold  
       mb-4 mx-auto lg:m-12 
       p-1 lg:px-[4%] lg:py-4 ${className}`}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <p>{text}</p>
      <span
        className="bubble-triangle w-6 h-6
       lg:w-10 lg:h-10 
       bg-[--ourly-theme] absolute 
       lg:top-[63%] lg:right-[-33px]
       md:right-[-16px]
       top-[80%] right-[-4%]"
      ></span>
    </div>
  );
}

export default function Main() {
  return (
    <main className="w-full relative">
      {data.map((personal, index) => (
        <Element key={`fragment-${index}`} name={`section${index + 1}`}>
          <div
            className={personal.classAnnoying}
            key={index}
            id={`section${index + 1}`}
          >
            <h2
              className="text-h3 md:text-h3 lg:text-h2 
            font-bold teaxt-left lg:text-left md:text-center
            p-8 lg:pt-[8%] lg:pb-[4%] lg:pl-[8%]"
            >
              <span className="border-none lg:border-b-[5px] lg:border-solid border-[--ourly-theme]">
                {personal.content}
              </span>
            </h2>
            <img src={personal.imgAnnoying} alt={personal.annoyingImgInfo} />

            <SpeechBubble
              text={personal.article01}
              className="lg:left-[16%]  bg-[--ourly-theme] text-white"
            />
            <SpeechBubble
              text={personal.article02}
              className="lg:left-[30%] bg-white"
            />
            <SpeechBubble
              text={personal.article03}
              className="lg:left-[20%] bg-[--ourly-theme] text-white"
            />
            <SpeechBubble
              text={personal.article04}
              className="lg:left-[10%] bg-white"
            />
          </div>
          <div className={personal.classSolved} key={personal}>
            <h2
              className="text-[24px] lg:text-h2 text-center 
              leading-h4 lg:leading-h2 font-bold 
            p-4 pt-8 lg:p-16"
            >
              {personal.solvedTitle}
              <br />
              {personal.solvedSubtitle}
            </h2>
            <img src={personal.imgSolved} alt={personal.solvedImgInfo} />
            <p
              dangerouslySetInnerHTML={{ __html: personal.solvedContent }}
              className="w-[90%] lg:w-[40%] text-[14px] lg:text-[16px] leading-8 
              text-left lg:text-center 
              flex justify-center m-auto"
            ></p>
          </div>
        </Element>
      ))}
    </main>
  );
}
