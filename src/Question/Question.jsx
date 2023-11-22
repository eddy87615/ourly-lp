'use client';
import React from 'react';
import { useRef } from 'react';
//CSS導入
import '@/Question/style/Question.css';
import '@/app/globals.css';
//
import { Element } from 'react-scroll';
import { useInView, motion } from 'framer-motion';

const ques = [
  {
    question: '利用人数は何名まで対応していますか？',
    answer: '数十名から千名以上の規模の企業様まで幅広くご利用いただけます。',
  },
  {
    question: 'ourlyと他の社内報ツールの違いは何ですか？',
    answer:
      '他の社内報にはない細かな分析機能が特徴です。この分析機能によりさまざまな切り口で従業員の会社への関心度を可視化することができます。',
  },
  {
    question:
      '効果測定（バブルチャート）を見ても、分析したり、その後施策を打てる自信がありません。',
    answer:
      '経験豊富なスタッフが伴走いたしますので、ご安心ください。導入時に、バブルチャートの見方とケースごとの施策もお伝えいたしますので、迷わずに運用していただけます。',
  },
  {
    question: '納品までどれくらい時間がかかりますか？',
    answer: '契約から最短2営業日での納品が可能です。',
  },
  {
    question: 'スマートフォンの対応はしていますか？',
    answer:
      'スマホからの閲覧も可能です。記事を公開すると、自動でPCとスマホ に最適化されます。',
  },
  {
    question:
      '紙からwebの社内報に変えると、更新頻度が増えて業務に負荷がかかるのではないかと心配しています。',
    answer:
      'web社内報は記事テンプレートが豊富であるため、工数の削減につながります。配信頻度なども貴社のご状況に合わせてご提案いたしますので、気軽にご相談ください。',
  },
];

export default function Question() {
  return (
    <Element name="section7">
      <div className="back-img w-full px-[10%] pb-16 h-fit">
        <h3 className="text-h3 font-bold text-center pt-16">よくある質問</h3>
        <ul className="ul-grid relative w-full pt-[8%]">
          {ques.map((txt, index) => (
            <div
              key={index}
              className="ques-section bg-[--base-color] h-[400px]
              flex flex-col justify-center items-left relative duration-500"
            >
              <li
                className="ques-title absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%]
              text-h4 leading-h4 font-bold duration-500"
              >
                {txt.question}
              </li>
              <li
                className="ques-ans ques-title absolute top-[100%] left-1/2  translate-x-[-50%] w-[90%]
              text-text leading-text duration-500"
              >
                {txt.answer}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </Element>
  );
}
