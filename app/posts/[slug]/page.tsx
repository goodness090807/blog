import { getPostBySlug } from "@/lib/post-utils";
import { Metadata, ResolvingMetadata } from "next";
import Markdown from "react-markdown";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
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

export default PageDetail;
