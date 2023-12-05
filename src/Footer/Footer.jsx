'use client';
import { React, useEffect } from 'react';
import Image from 'next/image';
//CSS導入
import './Footer.css';
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
  useEffect(() => {
    const backToTop = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const img = document.querySelector('.px-10.py-4.border-r-2');
    if (list[0].link) {
      img.addEventListener('click', backToTop);
    }
    return () => {
      if (list[0].link) {
        img.removeEventListener('click', backToTop);
      }
    };
  }, []);
  return (
    <footer>
      <div className=" pinksection bg-ourly-theme">
        <p className="text-h2 md:text-h3 text-center p-8 text-white font-bold hidden md:block lg:block">
          私たちの悩み全部ourlyで解決しました！
        </p>
      </div>
      <div className="purplesection relative bg-[--purple-light] text-white pt-16 px-8">
        <ul>
          <li className="pb-8">
            <Image
              width={300}
              height={200}
              src="/img/ourly_logo_W.webp"
              alt="white ourly"
              className="w-1/2 lg:w-[24%] xl:w-[20%] md:w-1/3 pb-8"
            />
          </li>
          <li className="link text-text py-0 lg:py-0  cursor-pointer">
            {list.map((item, index) =>
              item.link.startsWith('http') ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outerlink px-10 py-4 border-r-2 last:border-0"
                >
                  {item.listTxt}
                </a>
              ) : (
                <ScrollLink
                  href="javascript:void(0);"
                  key={index}
                  to={item.link}
                  duration={500}
                  smooth={true}
                  className="innerlink px-10  py-4 border-r-2"
                >
                  {item.listTxt}
                </ScrollLink>
              )
            )}
          </li>
          <li className="text-center py-8">
            <small>Copyright &copy; ourly.jp. All Rights Reserved.</small>
          </li>
        </ul>
      </div>
    </footer>
  );
}
