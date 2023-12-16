import { Noto_Sans_JP } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata = {
  title: 'ourly：従業員の目線が揃うインナーメディア・プラットフォーム',
  description:
    'ourlyは、社員のエンゲージメントを向上させる、web社内報ツールです。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <link rel="icon" href="/img/logo.svg" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
