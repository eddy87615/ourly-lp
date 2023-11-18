'use client';
import React from 'react';
//CSS導入
import '@/Function/style/Function.css';
import '@/app/globals.css';

export default function Function() {
  return (
    <div>
      <div className="bg-white h-screen relative">
        <h3 className="text-[32px] font-bold text-center pt-16">機能一覧</h3>

        <div className="hexagon flex flex-col relative top-[8%]">
          <div className="flex justify-center w-full h-full">
            <div className="hexagon01 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-O.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#e5836c] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                社内報管理
              </h4>
              <ul
                className="text-text text-center text-[#e5836c] duration-500
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
              <img src="/img/hexagon-B.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#318ebf] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                社内報作成
              </h4>
              <ul
                className="text-text text-center text-[#318ebf] duration-500
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
              <img src="/img/hexagon-P.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#a3619d] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                分析
              </h4>
              <ul
                className="text-text text-center text-[#a3619d] duration-500
              absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">
                  わかりやすいダッシュボード
                </li>
                <li className="font-semibold text-text">
                  結果が簡単にわかる分析サマリ
                </li>
                <li className="font-semibold text-text">
                  読了率までわかる詳細な分析
                </li>
                <li className="font-semibold text-text">
                  記事ごとの分析数値一覧
                </li>
                <li className="font-semibold text-text">
                  指標別に人気/不人気記事を分析
                </li>
                <li className="font-semibold text-text">記事ごとの分析機能</li>
                <li className="font-semibold text-text">
                  自由な分析項目カスタマイズ
                </li>
                <li className="font-semibold text-text">
                  閲覧者の属性・グループごとの分析
                </li>
                <li className="font-semibold text-text">
                  変化のわかる時系列データ
                </li>
              </ul>
            </div>

            <div className="hexagon04 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-R.svg" />
              <img
                src="/img/ourly_logo.webp"
                alt="ourly logo"
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80%]"
              />
            </div>
            <div className="hexagon05 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-G.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#21aba2] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                セキュリティ
              </h4>
              <ul
                className="text-text text-center text-[#21aba2] duration-500
              absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">
                  国際規格に準拠した情報管理体制
                </li>
                <li className="font-semibold text-text">安心のセキュリティ</li>
                <li className="font-semibold text-text">
                  SAML認証によるSSO（シングルサインオン）に対応
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-[-30px]">
            <div className="hexagon06 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-T.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#a08b90] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                その他
              </h4>
              <ul
                className="text-text text-center text-[#a08b90] duration-500
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
            <div className="hexagon07 h-[12%] w-[12%] relative">
              <img src="/img/hexagon-Y.svg" className="duration-500" />
              <h4
                className="text-h4 text-center font-semibold text-[#f99106] duration-500
              absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full "
              >
                閲覧
              </h4>
              <ul
                className="text-text text-center text-[#f99106] duration-500
              absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
              opacity-0"
              >
                <li className="font-semibold text-text">
                  いいね・コメント機能
                </li>
                <li className="font-semibold text-text">記事検索機能</li>
                <li className="font-semibold text-text">マルチデバイス対応</li>
                <li className="font-semibold text-text">通知機能</li>
                <li className="font-semibold text-text">
                  アプリとしてインストール可能
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <img src="/img/20Yman-05-bgN.webp" /> */}
      </div>
    </div>
  );
}
