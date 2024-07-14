import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

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
    <a className="text-secondary hover:text-secondary-hover hover:border-b hover:border-b-primary-hover" href={href}>
        {children}
    </a>
);

export function MarkdownRenderer({ children, slug }: MarkdownRendererProps) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");

                    return !inline && match ? (
                        <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
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
                img: ({ node, inline, className, src, alt, ...props }: any) => {
                    return (
                        <Image
                            width={1920}
                            height={1080}
                            src={`/content/posts/${slug}/images/${src}`}
                            alt={alt}
                            className={className}
                            {...props}
                        />
                    );
                },
            }}
        >
            {children}
        </Markdown>
    );
}
