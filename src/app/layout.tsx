import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박영민 | 링크나무",
  description: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
