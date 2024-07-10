import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllPosts(): Promise<Array<Post>> {
    const postsDirectory = path.join(process.cwd(), "content/posts");
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = await Promise.all(
        postFiles.map((fileName) => {
            return getPostBySlug(fileName);
        })
    );

    const sortedPosts = allPosts.toSorted((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return sortedPosts;
}

export async function getPostsByTag(tag: string) {
    const posts = await getAllPosts();

    return posts.filter((post) => post.tags.includes(tag));
}

export async function getAllTags() {
    const posts = await getAllPosts();

    const tags = posts.flatMap((post) => post.tags);

    return Array.from(new Set(tags));
}

export function getPostSlugs() {
    const postsDirectory = path.join(process.cwd(), "content/posts");
    const postFiles = fs.readdirSync(postsDirectory);

    return postFiles.map((fileName) => {
        return { slug: fileName };
    });
}

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: Array<string>;
    imgPath: string;
    content: string;
}

export function getPostBySlug(slug: string): Post {
    const postPath = path.join(process.cwd(), "content/posts/", slug, "page.md");
    const fileContent = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags,
        imgPath: path.join(process.env.WEB_BASE_PATH ?? "", "/covers", `${slug}.png`),
        content,
    };
}
