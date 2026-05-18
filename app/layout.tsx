import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroNet AI",
  description: "The AI system that builds complete businesses from one sentence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="apollo-tracker" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
  o.onload=function(){window.trackingFunctions.onLoad({appId:"6a0943c80fde17000d0f8b40"})},
  document.head.appendChild(o)}initApollo();` }} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
