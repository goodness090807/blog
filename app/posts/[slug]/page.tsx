import { getPostBySlug, getPostSlugs } from "@/lib/post-utils";
import { Metadata } from "next";
import Markdown from "react-markdown";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;

    const post = await getPostBySlug(slug);

    return {
        title: post.title,
        description: post.description,
    };
}

const PageDetail = async ({ params }: { params: { slug: string } }) => {
    const post = await getPostBySlug(params.slug);
    return (
        <>
            <div className="mt-5">
                <Markdown>{post.content}</Markdown>
            </div>
        </>
    );
};

export async function generateStaticParams() {
    return await getPostSlugs();
}

export default PageDetail;
