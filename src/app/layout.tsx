import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import GoToTop from "@/components/GoToTop";
import MobileBottomMenu from "@/components/MobileBottomMenu";

export const metadata: Metadata = {
  title: "도곡 경희한의원 - 자율신경 실조 치료 한의원",
  description: "도곡 경희한의원에서 자율신경 실조증, 불면증, 불안장애 등 몸과 마음의 건강을 되찾으세요.",
  keywords: "한의원, 자율신경, 불면증, 불안장애, 도곡, 경희한의원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <GoToTop />
        <MobileBottomMenu />
      </body>
    </html>
  );
}
