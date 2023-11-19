'use client';
import React from 'react';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
//CSS導入
import '@/Sub/style/Sub.css';
import '@/app/globals.css';
//
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSPy,
} from 'react-scroll';

const content = [
  {
    imgNum: '/img/01.svg',
    imgNumAlt: 'number 1',
    title: 'どの記事がどのくらい読まれているか<br />わかる',
    imgContent: '/img/analyze01.webp',
    imgimgContentAlt: 'ourly analysis function part one, about read condition',
    text: '記事ごとに算出された閲覧状況を、管理画面で一括確認できます。数値ベースの改善で「伝えたつもり」をなくします。PV数などの基本指標はもちろん、記事ごとに閲覧率・読了率・リアクション率などourly独自の指標でも分析できるのでより詳細に閲覧状況を把握できます。',
    bgimg: '/img/1-bg.svg',
    bgimgAlt: 'Number one background pic.',
  },
  {
    imgNum: '/img/02.svg',
    imgAlt: 'number 2',
    title: 'どのグループに読まれているのか<br />わかる',
    imgContent: '/img/analyze02.webp',
    imgimgContentAlt:
      'ourly analysis function part two, about which grop read the article',
    text: '部署別・役職別・職種別など、さまざまなセグメントで閲覧状況を確認できます。<br />また、セグメントは拠点別、入社年数別など各企業ごとにカスタマイズできるので、組織を自由な角度から可視化することができます。',
    bgimg: '/img/2-bg.svg',
    bgimgAlt: 'Number two background pic.',
  },
  {
    imgNum: '/img/03.svg',
    imgAlt: 'number 3',
    title: 'どれほど読まれるようになったのか<br />わかる',
    imgContent: '/img/analyze03.webp',
    imgimgContentAlt:
      'ourly analysis function part three, the chart for the total codition to make you improve the articles',
    text: 'バブルチャートで閲覧状況の変化を直感的に確認できます。これにより社内報改善の成果が分かります。<br />また1ヶ月ごと、3ヶ月ごと、6ヶ月ごとに変化を確認できるため、どの期間でPDCAを回していくのか明確な目標を持って社内報改善に取り組めます。',
    bgimg: '/img/3-bg.svg',
    bgimgAlt: 'Number three background pic.',
  },
];

const subEndDiv = [
  {
    img: '/img/30Yman-01-bgN.webp',
    alt: '30 years old man feels happy about problems sloved with ourly',
    text: '私の声が伝わっているのがわかりました！',
    class: 'subend01',
  },
  {
    img: '/img/30Ywoman-03bgN.webp',
    alt: '30 years old woman feels happy about problems sloved with ourly',
    text: 'みんなの好みに合う社内報が作れるようになった！',
    class: 'subend02',
  },
  {
    img: '/img/20Yman-01-bgN.webp',
    alt: '20 years old man feels happy about problems sloved with ourly',
    text: 'いつでも会社とつながっていて帰属意識を感じました！',
    class: 'subend03',
  },
];

export default function Sub() {
  const refs = {
    ref01: useRef(null),
    ref02: useRef(null),
    ref03: useRef(null),
    ref04: useRef(null),
    ref05: useRef(null),
    ref06: useRef(null),
  };

  const inViews = {
    inView01: useInView(refs.ref01, { once: true }),
    inView02: useInView(refs.ref02, { once: true }),
    inView03: useInView(refs.ref03, { once: true }),
    inView04: useInView(refs.ref04, { once: true }),
    inView05: useInView(refs.ref05, { once: true }),
    inView06: useInView(refs.ref06, { once: true }),
  };

  console.log('refs.ref04:', refs.ref04);
  console.log('inViews.inView04:', inViews.inView04);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 1 * -100 },
    visible: { opacity: 1, x: 0 },
  };
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const leftVariants = {
    hidden: { x: 1 * -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const rightVariants = {
    hidden: { x: 1 * 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="w-full h-full bg-[--base-color] relative" id="section4">
      <h2 className="text-h2 text-center leading-h2 font-bold pt-16 pb-20">
        ourlyも…
        <br />
        独自の分析機能で閲覧状況が一目で分かる
      </h2>

      <div className="sub-container w-[80%] flex flex-col my-0 mx-auto pb-[10%] gap-10">
        {content.map((obj, index) => (
          <motion.div
            className="content-div z-[1] w-full h-[30%] bg-white rounded-2xl 
          shadow-ourly transition-all duration-300"
            key={index}
            ref={refs[`ref0${index + 1}`]}
            variants={itemVariants}
            initial="hidden"
            animate={inViews[`inView0${index + 1}`] ? 'visible' : 'hidden'}
            transition={{ delay: index * 0.5 }}
          >
            <Element>
              <div>
                <motion.div
                  ref={refs[`ref0${index + 1}`]}
                  variants={titleVariants}
                  initial="hidden"
                  animate={
                    inViews[`inView0${index + 1}`] ? 'visible' : 'hidden'
                  }
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                >
                  <ul className="title w-full p-[4%]">
                    <li className="num-grid flex justify-center items-center">
                      <img
                        src={obj.imgNum}
                        alt={obj.imgNumAlt}
                        className="h-[70%] "
                      />
                    </li>
                    <li className="pic-grid flex justify-center items-center">
                      <img
                        src={obj.imgContent}
                        alt={obj.imgimgContentAlt}
                        className="w-[90%]"
                      />
                    </li>
                    <li>
                      <h3
                        dangerouslySetInnerHTML={{ __html: obj.title }}
                        className="title-grid text-h3 text-left font-bold pt-10 text-[--ourly-theme]"
                      ></h3>
                    </li>
                    <li>
                      <p
                        dangerouslySetInnerHTML={{ __html: obj.text }}
                        className="text-grid text-text leading-text px-[4%]"
                      ></p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </Element>
          </motion.div>
        ))}
      </div>
      <ul className="h-full ">
        {subEndDiv.map((item, index) => (
          <Element key={index}>
            <motion.li
              className={`${item.class} relative flex h-[400px]`}
              ref={refs[`ref0${index + 4}`]} // Dynamic ref based on index
              variants={
                inViews.inView04 &&
                refs.ref04 &&
                refs[`ref0${index + 4}`] === refs.ref05
                  ? rightVariants
                  : leftVariants
              } // Check inView to determine variants
              initial="hidden"
              animate={inViews[`inView0${index + 4}`] ? 'visible' : 'hidden'} // Dynamic inView based on index
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src={item.img} alt={item.alt} />
              <p className="text-h2 font-bold flex items-center p-[8%]">
                {item.text}
              </p>
            </motion.li>
          </Element>
        ))}
      </ul>
    </div>
  );
}
