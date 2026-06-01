import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "From-in 極澎潤雙玻尿酸 — 由內而外的保濕",
  description: "不是喝水而已，是喝對成分。From-in 三重玻尿酸，讓你的皮膚值得更少但更好。",
  openGraph: {
    title: "From-in 極澎潤雙玻尿酸",
    description: "由內而外的保濕，才是真的補水",
    url: "https://from-in.com.tw",
    siteName: "From-in",
    images: [
      {
        url: "/images/02-product-images/01-product-main-original.jpg",
        width: 1200,
        height: 800,
        alt: "From-in 極澎潤雙玻尿酸產品",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${cormorant.variable} ${notoSerifTC.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark-gray">{children}</body>
    </html>
  );
}
