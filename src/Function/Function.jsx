'use client';
import React from 'react';
//CSS導入
import '@/Function/style/Function.css';
import '@/app/globals.css';

const hexagon = [
  {
    hexagonclass: 'hexagon01',
    centerclass01: 'center01',
    centerclass03: 'center02',
    centerclass02: 'center03',
    title: '社内報管理',
    text: '',
  },
  {
    hexagonclass: 'hexagon02',
    title: '社内報作成',
    text: '',
  },
  {
    hexagonclass: 'hexagon03',
    title: 'セキュリティ',
    text: '',
  },
  {
    hexagonclass: 'hexagon04',
    title: '閲覧',
    text: '',
  },
  {
    hexagonclass: 'hexagon05',
    title: '分析',
    text: '',
  },
  {
    hexagonclass: 'hexagon06',
    title: 'その他',
    text: '',
  },
  {
    hexagonclass: 'hexagon07',
    title: '',
    text: '',
  },
];

export default function Function() {
  return (
    <div>
      <div className="bg-white h-screen relative">
        <h3 className="text-[32px] font-bold text-center pt-16">機能一覧</h3>

        <div className="hexagon flex flex-col relative top-[10%]">
          <div className="flex justify-center w-full h-full">
            <div className="hexagon01 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-O.svg" />
              <h4
                className="text-h4 text-center font-semibold text-[#e5836c]
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                社内報管理
              </h4>
              <ul
                className="text-text text-center text-[#e5836c]
              absolute top-0 leading-[40px] left-1/2 w-[200%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">
                  従業員データ一括登録機能
                </li>
                <li className="font-semibold text-text">メイン固定機能</li>
                <li className="font-semibold text-text">
                  使いやすい記事管理画面
                </li>
                <li className="font-semibold text-text">
                  職域に合わせた権限付与
                </li>
              </ul>
            </div>
            <div className="hexagon02 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-B.svg" />
              <h4
                className="text-h4 text-center font-semibold text-[#318ebf]
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                社内報作成
              </h4>
              <ul
                className="text-text text-center text-[#318ebf]
              absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">
                  シンプルで簡単な入稿画面
                </li>
                <li className="font-semibold text-text">
                  入稿のしやすさ・読みやすさを兼ね備えた
                  <br />
                  テンプレート機能
                </li>
                <li className="font-semibold text-text">
                  添付ファイル埋め込み
                </li>
                <li className="font-semibold text-text">動画埋め込み</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-[-30px]">
            <div className="hexagon03 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-T.svg" />
              <h4
                className="text-h4 text-center font-semibold text-[#a08b90]
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                その他
              </h4>
              <ul
                className="text-text text-center text-[#a08b90]
              absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">導入・運用サポート</li>
                <li>
                  <p className="text-text">
                    これまでインナーコミュニケーションの課題解決に携わってきたエキスパートが、導入・運用をサポートします。
                  </p>
                </li>
              </ul>
            </div>
            <div className="h-[12%] w-[12%]">
              <img src="/img/hexagon-R.svg" />
            </div>
            <div className="h-[12%] w-[12%]">
              <img src="/img/hexagon-G.svg" />
            </div>
          </div>
          <div className="flex justify-center mt-[-30px]">
            <div className="h-[12%] w-[12%]">
              <img src="/img/hexagon-P.svg" />
            </div>
            <div className="h-[12%] w-[12%]">
              <img src="/img/hexagon-Y.svg" />
            </div>
          </div>
        </div>
        {/* <img src="/img/20Yman-05-bgN.webp" /> */}
      </div>
    </div>
  );
}
