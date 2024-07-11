import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import { websiteDescription, websiteName } from "@/lib/variables";
import "./globals.css";
import Script from "next/script";

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
        <html lang="zh-Hant-TW" className="scroll-smooth">
            <head>
                {/* Google Tag Manager */}
                <Script id="google-tag-manager">
                    {`(function (w, d, s, l, i) {
                        w[l] = w[l] || [];
                        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                        var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != "dataLayer" ? "&l=" + l : "";
                        j.async = true;
                        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                        f.parentNode.insertBefore(j, f);
                    })(window, document, "script", "dataLayer", "GTM-5Q2JBQ54");`}
                </Script>
                {/* End Google Tag Manager */}
            </head>
            <body className={bodyCss}>
                <Header />
                <div className="flex-1">
                    <main className="flex items-center flex-col">{children}</main>
                </div>
                <Footer />
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5Q2JBQ54"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
            </body>
        </html>
    );
}
