'use client';
import React from 'react';
//CSS導入
import '@/Footer/style/Footer.css';
import '@/app/globals.css';
//
import { Link as ScrollLink } from 'react-scroll';

const list = [
  { listTxt: 'TOP', link: 'slider', alt: 'Back to top' },
  {
    listTxt: '機能一覧',
    link: 'section5',
    alt: 'function introduction section',
  },
  { listTxt: '料金', link: 'section8', alt: 'Fee of using ourly' },
  {
    listTxt: 'ourly株式会社',
    link: 'https://service.ourly.jp/',
    alt: 'ourly official website',
  },
  {
    listTxt: '2分紹介ビデオ',
    link: 'https://www.youtube.com/watch?v=JRDNgjFdiV4',
    alt: 'two-minute-video introducing ourly',
  },
  {
    listTxt: 'お役立ち資料',
    link: 'https://service.ourly.jp/document',
    alt: 'more document for ourly',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-ourly-theme">
        <p className="text-h2 text-center p-8 text-white font-bold">
          私たちの悩み全部ourlyで解決しました！
        </p>
      </div>
      <div className="purplesection relative bg-[--purple-light] text-white pt-16 px-8">
        <ul>
          <li className="pb-8">
            <img
              src="/img/ourly_logo_W.webp"
              alt="white ourly"
              className="w-[20%]"
            />
          </li>
          <li className="text-text py-8">
            {list.map((item, index) =>
              item.link.startsWith('http') ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-r-2 last:border-0"
                >
                  {item.listTxt}
                </a>
              ) : (
                <ScrollLink
                  key={index}
                  to={item.link}
                  className="px-10  py-4 border-r-2"
                >
                  {item.listTxt}
                </ScrollLink>
              )
            )}
          </li>
          <li className="py-8">
            <small>Copyright © ourly.jp. All Rights Reserved.</small>
          </li>
        </ul>
      </div>
    </footer>
  );
}
