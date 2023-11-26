import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ourly：従業員の目線が揃うインナーねディア・プラットフォーム',
  description:
    'ourlyは、社員のエンゲージメントを向上させる、web社内報ツールです。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <link rel="icon" href="/img/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
