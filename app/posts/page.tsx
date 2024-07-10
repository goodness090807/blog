import Posts from "@/components/Posts";
import PostPageWrapper from "@/components/ui/PostPageWrapper";
import { getAllPosts } from "@/lib/post-utils";
import { websiteName } from "@/lib/variables";
import { Metadata } from "next";

const title = "所有文章";

export function generateMetadata(): Metadata {
    return {
        title: title + " | " + websiteName,
        description: "文章清單",
    };
}

const PostsPage = async () => {
    const posts = await getAllPosts();

    return (
        <PostPageWrapper title={title}>
            <Posts posts={posts} />
        </PostPageWrapper>
    );
};

export default PostsPage;
