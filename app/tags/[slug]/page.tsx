import Posts from "@/components/Posts";
import PostPageWrapper from "@/components/PostPageWrapper";
import { getAllTags, getPostsByTag } from "@/lib/post-utils";
import { websiteName } from "@/lib/variables";
import { Metadata } from "next";
import { FaTag } from "react-icons/fa";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    return {
        title: decodeURIComponent(params.slug) + " | " + websiteName,
        description: decodeURIComponent(params.slug),
    };
}

export async function generateStaticParams() {
    const tags = await getAllTags();
    return tags.map((tag) => {
        return {
            slug: tag,
        };
    });
}

const TagPage = async ({ params }: { params: { slug: string } }) => {
    const slug = decodeURIComponent(params.slug);

    const posts = await getPostsByTag(slug);
    return (
        <PostPageWrapper tag={<FaTag />} title={`${slug}`}>
            <Posts posts={posts} />
        </PostPageWrapper>
    );
};

export default TagPage;
