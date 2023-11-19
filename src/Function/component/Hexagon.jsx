import React from 'react';

const data = [
  {
    imgsrc: '/img/hexagon-O.svg',
    imgalt: 'orange hexagon',
    title: '社内報管理',
    color: '#e5836c',
    hexagonclass: 'hexagon01',
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
        type: 'p',
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

const Hexagon = ({
  imgsrc,
  imgalt,
  title,
  color,
  list,
  class: hexagonclass,
}) => (
  <div
    className={`${hexagonclass} ${color} h-[12%] w-[12%] relative`}
    key={color}
  >
    <img src={imgsrc} alt={imgalt} className="duration-500" />
    {title && (
      <h4
        className={`text-h4 text-center font-semibold text-[${color}] duration-500
        absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full`}
      >
        {title}
      </h4>
    )}
    {list && (
      <ul
        className={`text-text text-center text-[${color}] duration-500
        absolute top-0 leading-[40px] left-1/2 w-[150%] translate-x-[-50%]
        opacity-0`}
      >
        {list.map((item, index) => (
          <li key={index} className="font-semibold text-text">
            {item.type === 'text' ? (
              item.content
            ) : (
              <p className="text-text">{item.content}</p>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Hexagon;
