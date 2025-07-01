/* eslint-disable @next/next/next-script-for-ga */

import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LenisScroll from "@/components/LenisScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Skinofairy - Your Skincare Guide",
//   description:
//     "Discover expert advice on skincare, solutions for skin problems, beauty tips, and nourishing foods for radiant, healthy skin at Skinofairy.",
//   openGraph: {
//     title: "Skinofairy - Your Skincare Guide",
//     description:
//       "Explore comprehensive guides on skincare, solutions for skin issues, and foods that promote skin health on Skinofairy.",
//     url: "https://www.skinofairy.com",
//     images: [
//       {
//         url: "/images/og-image.webp",
//         width: 800,
//         height: 600,
//         alt: "Skinofairy - Your Skincare Guide",
//       },
//     ],
//   },
//     alternates: {
//       canonical: "https://www.skinofairy.com",
//     },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1576397222364462"
          crossorigin="anonymous"
        ></script>

        {/* Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1KFR37WHBH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1KFR37WHBH');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LenisScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </ThemeProvider>
        </LenisScroll>
      </body>
    </html>
  );
}
