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
  title: "From-in 雙玻尿酸飲 | 26+ 國際認証 | 無香料無色素 | 台灣美容保健",
  description: "極澎潤雙玻尿酸，三層玻尿酸補水機制。26+ 國際認証成分，無香料、無色素、無防腐劑。NT$1,790 起，立即購買享優惠。由內而外的真實保濕。",
  keywords: "玻尿酸飲, 玻尿酸補水, 膠原蛋白飲, 美容保健食品, 台灣保健品, 肌膚保濕",
  openGraph: {
    title: "From-in 極澎潤雙玻尿酸飲",
    description: "26+ 國際認証，三層玻尿酸補水機制。無添加配方，NT$1,790 起。",
    url: "https://from-in.com.tw",
    siteName: "From-in",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/02-product-images/01-product-main-original.jpg",
        width: 1200,
        height: 800,
        alt: "From-in 極澎潤雙玻尿酸產品",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From-in 極澎潤雙玻尿酸飲",
    description: "由內而外的保濕，才是真的補水。26+ 國際認証成分。",
    images: ["/images/02-product-images/01-product-main-original.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "From-in",
    "url": "https://from-in.com.tw",
    "logo": "https://from-in.com.tw/images/01-brand-identity/02-logo-horizontal.png",
    "sameAs": ["https://www.facebook.com/from.in", "https://www.instagram.com/from.in_official"],
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "From-in 極澎潤雙玻尿酸",
    "description": "三層玻尿酸補水機制，26+ 國際認証成分，無香料、無色素、無防腐劑",
    "image": "https://from-in.com.tw/images/02-product-images/01-product-main-original.jpg",
    "brand": {
      "@type": "Brand",
      "name": "From-in"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://from-in.com.tw",
      "priceCurrency": "TWD",
      "price": "1790",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "39"
    }
  };

  return (
    <html
      lang="zh-TW"
      className={`${cormorant.variable} ${notoSerifTC.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-dark-gray">{children}</body>
    </html>
  );
}
