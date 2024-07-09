import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
    title: "貼律的技術部落",
    description: "這裡紀載著各式各樣的程式筆記",
    icons: {
        icon: "/logo.png",
    },
};

const openhuninnFont = localFont({
    src: "./fonts/jf-openhuninn-2.0.woff2",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hant">
            <body className={openhuninnFont.className + " h-screen flex flex-col"}>
                <Header />
                <div className="flex-1">
                    <main className="flex justify-center">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
