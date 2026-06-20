import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import GoToTop from "@/components/GoToTop";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import JsonLd from "@/components/JsonLd";
import { clinic, siteUrl } from "@/lib/site";
import { clinicSchema, physicianSchema, websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.name} | 강남 매봉역 자율신경 한의원`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: [
    "도곡경희한의원",
    "강남 한의원",
    "매봉역 한의원",
    "자율신경 한의원",
    "수험생 집중력",
    "어린이 ADHD 한의원",
    "틱 한방치료",
    "불면증 한의원",
    "만성피로 한약",
  ],
  applicationName: clinic.name,
  authors: [{ name: clinic.name, url: siteUrl }],
  creator: clinic.name,
  publisher: clinic.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: clinic.name,
    title: `${clinic.name} | 강남 매봉역 자율신경 한의원`,
    description: clinic.description,
    images: [{ url: "/daepyo.jpg", width: 900, height: 720, alt: clinic.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | 강남 매봉역 자율신경 한의원`,
    description: clinic.description,
    images: ["/daepyo.jpg"],
  },
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
        <JsonLd data={[clinicSchema(), physicianSchema(), websiteSchema()]} />
        <ScrollProgress />
        <Header />
        <div className="h-[80px]" /> {/* Header spacer (matches fixed header height) */}
        <main>{children}</main>
        <Footer />
        <GoToTop />
        <MobileBottomMenu />
      </body>
    </html>
  );
}
