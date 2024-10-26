import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "Skinofairy - Your Guide to Skincare & Wellness",
  description: "Discover expert advice on skincare, solutions for skin problems, beauty tips, and nourishing foods for radiant, healthy skin at Skinofairy.",
  openGraph: {
    title: "Skinofairy - Skincare & Wellness Blog",
    description: "Explore comprehensive guides on skincare, solutions for skin issues, and foods that promote skin health on Skinofairy.",
    url: "https://skinofairy.com",
    images: [
      {
        url: "https://skinofairy.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Skinofairy - Skincare & Wellness Blog",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1KFR37WHBH"></script>
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
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
