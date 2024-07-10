import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import { websiteDescription, websiteName } from "@/lib/variables";
import "./globals.css";

const image = `${process.env.WEB_BASE_PATH}/logo.png`;

export const metadata: Metadata = {
    title: websiteName,
    description: websiteDescription,
    authors: [{ name: "蔡家誠(Terry Tsai)", url: process.env.WEB_BASE_PATH }],
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
        <html lang="zh-Hant-TW">
            <body className={bodyCss}>
                <Header />
                <div className="flex-1">
                    <main className="flex items-center flex-col">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
