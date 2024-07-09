import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

// 폰트 설정: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
const pretendardFont = localFont({
  src: '../assets/fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Serene3240 | Home',
  description: 'serene3240의 홈페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* font-sans는 tailwind.config.ts에서 설정됨 */}
      <body className={`${pretendardFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
