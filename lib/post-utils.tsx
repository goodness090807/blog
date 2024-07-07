import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getPosts() {
    const postsDirectory = path.join(process.cwd(), "content/posts");
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = await Promise.all(
        postFiles.map(async (fileName) => {
            return await getPostBySlug(fileName);
        })
    );

    const sortedPosts = allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return sortedPosts;
}

export async function getPostBySlug(
    slug: string
): Promise<{ slug: string; title: string; description: string; date: string; tags: Array<string>; content: string }> {
    const postPath = path.join(process.cwd(), "content/posts/", slug, "page.md");
    const fileContent = await fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags,
        content,
    };
}
