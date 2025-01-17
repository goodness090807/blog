import { getPostBySlug, getPostSlugs } from "@/lib/post-utils";
import { Metadata } from "next";
import { MdAccessTime } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { MarkdownRenderer } from "@/components/ui/markdown";
import PostPageWrapper from "@/components/PostPageWrapper";
import { MetaProps, websiteName } from "@/lib/variables";
import Image from "next/image";
import { getHeadings } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RightBox from "@/components/ui/rightbox";

export function generateMetadata({ params }: MetaProps): Metadata {
    const slug = params.slug;

    const post = getPostBySlug(slug);

    return {
        title: post.title + " | " + websiteName,
        description: post.description,
        openGraph: {
            images: [
                {
                    url: post.imgPath,
                    width: 1920,
                    height: 1080,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return getPostSlugs();
}

const PageDetail = async ({ params }: { params: { slug: string } }) => {
    const post = getPostBySlug(params.slug);

    const Contents = () => {
        const headings = getHeadings(post.content);

        return (
            <RightBox title="文章目錄">
                <div className="w-full p-3 rounded-md border flex flex-col flex-wrap min-h-32">
                    <h3 className="tracking-wider font-bold text-primary text-xl">文章目錄</h3>
                    {headings.map((heading) => {
                        return (
                            <Link key={heading} href={`#${encodeURIComponent(heading)}`} title={heading}>
                                <Button variant="link" className="h-8">
                                    - {heading}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </RightBox>
        );
    };

    return (
        <PostPageWrapper title={post.title} slot={<Contents />}>
            <span className="flex gap-2 items-center text-primary mt-3">
                <MdAccessTime />
                {post.date}
                <FaTag />
                {post.tags.map((tag) => {
                    return (
                        <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="p-0 m-0 leading-1">
                            <Button variant="link" className="p-0 m-0">
                                # {tag}
                            </Button>
                        </Link>
                    );
                })}
            </span>

            <div className="mt-5 flex justify-center">
                <Image
                    alt={post.title}
                    width={1920}
                    height={1080}
                    className="max-w-full h-auto w-[720px]"
                    priority
                    src={post.imgPath}
                />
            </div>

            <p>{post.description}</p>

            <div className="mt-5">
                <MarkdownRenderer slug={post.slug}>{post.content}</MarkdownRenderer>
            </div>
        </PostPageWrapper>
    );
};

export default PageDetail;
