import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./compnents/Header"
import Script from "next/script";

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

export const metadata: Metadata = {
  title: "Love Tool",
  description: "Made By Mr Wasim Abbas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-1430143994998751"></meta>
      </head>
    
{/* Google Analitice */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-GCHKNFVVV7"
  strategy="afterInteractive"
  async
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GCHKNFVVV7');
  `}
</Script>

{/* google Adsense */}

<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1430143994998751"
     crossOrigin="anonymous"></Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
       <Header/>
        {children}
      </body>
    </html>
  );
}
