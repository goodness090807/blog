import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import { websiteDescription, websiteName } from "@/lib/variables";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const image = `${process.env.WEB_BASE_PATH}/logo.png`;

export const metadata: Metadata = {
    metadataBase: new URL(process.env.WEB_BASE_PATH ?? ""),
    title: websiteName,
    description: websiteDescription,
    authors: [{ name: "Terry Tsai", url: process.env.WEB_BASE_PATH }],
    robots: "index, follow",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: websiteName,
        description: websiteDescription,
        url: process.env.WEB_BASE_PATH,
        type: "website",
        images: [
            {
                url: image,
                width: 500,
                height: 500,
            },
        ],
    },
};

const openhuninnFont = localFont({
    src: "../public/fonts/jf-openhuninn-2.0.woff2",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const bodyCss = cn("h-screen flex flex-col", openhuninnFont.className);
    return (
        <html lang="zh-Hant-TW" className="scroll-smooth scroll-pt-20">
            <head>
                <link rel="shortcut icon" href={image} />
                <link rel="apple-touch-icon" href={image} />
            </head>
            <GoogleTagManager gtmId="GTM-5Q2JBQ54" />
            <body className={bodyCss}>
                <Header />
                <div className="flex-1 mt-20">
                    <main className="flex items-center flex-col">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
