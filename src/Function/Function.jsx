'use client';
import { React, useEffect, useState } from 'react';
import Hexagon from './component/Hexagon';
//CSS導入
import '@/Function/style/Function.css';
import '@/app/globals.css';

const data = [
  {
    imgsrc: '/img/hexagon-O.svg',
    imgalt: 'orange hexagon',
    title: '社内報管理',
    color: '#e5836c',
    class: 'hexagon01',
    list: [
      {
        type: 'text',
        content: '従業員データ一括登録機能',
      },
      {
        type: 'text',
        content: 'メイン固定機能',
      },
      {
        type: 'text',
        content: '使いやすい記事管理画面',
      },
      {
        type: 'text',
        content: '職域に合わせた権限付与',
      },
    ],
    listtype: 'default',
  },
  {
    imgsrc: '/img/hexagon-B.svg',
    imgalt: 'blue hexagon',
    title: '社内報作成',
    color: '#318ebf',
    class: 'hexagon02',
    list: [
      {
        type: 'text',
        content: 'シンプルで簡単な入稿画面',
      },
      {
        type: 'text',
        content: '入稿のしやすさ・読みやすさを兼ね備えた',
      },
      {
        type: 'text',
        content: 'テンプレート機能',
      },
      {
        type: 'text',
        content: '添付ファイル埋め込み',
      },
      {
        type: 'text',
        content: '動画埋め込み',
      },
    ],
    listtype: 'default',
  },
  {
    imgsrc: '/img/hexagon-P.svg',
    imgalt: 'purple hexagon',
    title: '分析',
    color: '#a3619d',
    class: 'hexagon03',
    list: [
      {
        type: 'text',
        content: 'わかりやすいダッシュボード',
      },
      {
        type: 'text',
        content: '結果が簡単にわかる分析サマリ',
      },
      {
        type: 'text',
        content: '読了率までわかる詳細な分析',
      },
      {
        type: 'text',
        content: '記事ごとの分析数値一覧',
      },
      {
        type: 'text',
        content: '指標別に人気/不人気記事を分析',
      },
      {
        type: 'text',
        content: '記事ごとの分析機能',
      },
      {
        type: 'text',
        content: '自由な分析項目カスタマイズ',
      },
      {
        type: 'text',
        content: '閲覧者の属性・グループごとの分析',
      },
      {
        type: 'text',
        content: '変化のわかる時系列データ',
      },
    ],
    listtype: 'default',
  },
  {
    imgsrc: '/img/hexagon-R.svg',
    imgalt: 'red hexagon',
    title: '',
    color: '',
    class: 'hexagon04',
    list: [
      {
        type: 'img',
        content: '/img/ourly_logo.webp',
        alt: 'ourly logo',
      },
    ],
    listtype: 'logo',
  },
  {
    imgsrc: '/img/hexagon-G.svg',
    imgalt: 'green hexagon',
    title: 'セキュリティ',
    color: '#21aba2',
    class: 'hexagon05',
    list: [
      {
        type: 'text',
        content: '国際規格に準拠した情報管理体制',
      },
      {
        type: 'text',
        content: '安心のセキュリティ',
      },
      {
        type: 'text',
        content: 'SAML認証によるSSO（シングルサインオン）に対応',
      },
    ],
    listtype: 'default',
  },
  {
    imgsrc: '/img/hexagon-T.svg',
    imgalt: 'brown hexagon',
    title: 'その他',
    color: '#a08b90',
    class: 'hexagon06',
    list: [
      {
        type: 'text',
        content: '導入・運用サポート',
      },
      {
        type: 'text',
        content:
          'これまでインナーコミュニケーションの課題解決に携わってきたエキスパートが、導入・運用をサポートします。',
      },
    ],
    listtype: 'txt',
  },
  {
    imgsrc: '/img/hexagon-Y.svg',
    imgalt: 'yellow hexagon',
    title: '閲覧',
    color: '#f99106',
    class: 'hexagon07',
    list: [
      {
        type: 'text',
        content: 'いいね・コメント機能',
      },
      {
        type: 'text',
        content: '記事検索機能',
      },
      {
        type: 'text',
        content: 'マルチデバイス対応',
      },
      {
        type: 'text',
        content: '通知機能',
      },
      {
        type: 'text',
        content: 'アプリとしてインストール可能',
      },
    ],
    listtype: 'default',
  },
];

export default function Function() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="function bg-white h-screen relative" id="section5">
        <h3 className="text-h3 font-bold text-center pt-16">機能一覧</h3>
        {windowWidth >= 1000 ? (
          <>
            <div className="hexagon flex flex-col relative top-[8%]">
              <div className="flex justify-center w-full h-full">
                {data.slice(0, 2).map(Hexagon)} {/* Render hexagon 01 and 02 */}
              </div>
              <div className="flex justify-center mt-[-30px]">
                {data.slice(2, 5).map(Hexagon)}{' '}
                {/* Render hexagon 03, 04, and 05 */}
              </div>
              <div className="flex justify-center mt-[-30px]">
                {data.slice(5).map(Hexagon)} {/* Render hexagon 06 and 07 */}
              </div>
            </div>
            <img
              src="/img/20Yman-05-bgN.webp"
              alt="young happy man pointing the picture"
              className="move01"
              style={{ transition: 'none' }}
            />
            <img
              src="img/20Yman-05-bgN-2.webp"
              alt="young happy man pointing the picture"
              className="move02"
              style={{ transition: 'none' }}
            />
          </>
        ) : (
          <img
            src="/img/function.svg"
            className="absolute top-1/2 translate-y-[-50%]"
          />
        )}
      </div>
    </div>
  );
}
