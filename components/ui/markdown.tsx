"use client";

import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useClientImageSize } from "@/lib/client-utils";
import { Skeleton } from "@/components/ui/skeleton";

interface MarkdownRendererProps {
    children: string;
    slug: string;
}

const h1 = ({ children }: any) => <h1 className="text-3xl py-5">{children}</h1>;
const h2 = ({ children }: any) => (
    <h2 className="text-2xl mt-4 mb-3 tracking-widest" id={children}>
        {children}
    </h2>
);
const h3 = ({ children }: any) => <h3 className="text-xl py-3">{children}</h3>;
const p = ({ children }: any) => <p className="mt-1 text-gray-600 leading-relaxed">{children}</p>;
const ol = ({ children }: any) => <ol className="list-decimal ml-5">{children}</ol>;
const ul = ({ children }: any) => <ul className="list-disc ml-5">{children}</ul>;
const li = ({ children }: any) => <li className="mt-3 text-gray-600 leading-relaxed">{children}</li>;
const a = ({ children, href }: any) => (
    <a
        className="text-link hover:text-link-hover hover:border-b hover:border-b-primary-hover"
        target="_blank"
        href={href}>
        {children}
    </a>
);
const usePre = ({ children }: any) => {
    const [copyOk, setCopyOk] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(children.props.children).then(() => {
            setCopyOk(true);
            setTimeout(() => {
                setCopyOk(false);
            }, 1000);
        });
    };
    return (
        <pre className="relative">
            <button
                className="absolute top-3 right-3 text-white p-1 rounded-md hover:text-white/50 transition-all"
                onClick={handleCopy}>
                {copyOk ? <FaCheck /> : <FaRegCopy />}
            </button>
            {children}
        </pre>
    );
};

export function MarkdownRenderer({ children, slug }: Readonly<MarkdownRendererProps>) {
    const ImgComponent = ({ node, inline, className, src, alt, ...props }: any) => {
        const imgSrc = `/content/posts/${slug}/images/${src}`;
        const img = useClientImageSize(imgSrc);

        if (img === null) {
            return <Skeleton className="my-5 w-auto h-[320px] rounded-md block" />;
        }

        return (
            <Item original={imgSrc} thumbnail={imgSrc} width={img.width} height={img.height}>
                {({ ref, open }) => (
                    <Image
                        className="cursor-pointer my-5"
                        ref={ref}
                        width={img.width}
                        height={img.height}
                        alt={alt}
                        onClick={open}
                        src={imgSrc}
                        {...props}
                    />
                )}
            </Item>
        );
    };

    return (
        <Gallery>
            <Markdown
                className="py-5"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    pre: usePre,
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || "");

                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                PreTag="div"
                                language={match[1]}
                                customStyle={{ borderRadius: "5px" }}
                                {...props}>
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className + " bg-gray-200 text-gray-700 rounded-md p-1"} {...props}>
                                {children}
                            </code>
                        );
                    },
                    h1: h1,
                    h2: h2,
                    h3: h3,
                    p: p,
                    ol: ol,
                    ul: ul,
                    li: li,
                    a: a,
                    img: ImgComponent,
                }}>
                {children}
            </Markdown>
        </Gallery>
    );
}
