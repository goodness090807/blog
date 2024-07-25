import { getPostBySlug, getPostSlugs } from "@/lib/post-utils";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const slugs = getPostSlugs();

    const posts: MetadataRoute.Sitemap = slugs.map((slug) => {
        const post = getPostBySlug(slug.slug);
        return {
            url: `https://blog.tccstu.com/posts/${slug.slug}`,
            lastModified: post.date,
            changeFrequency: "monthly",
            priority: 0.7,
        };
    });

    return [
        {
            url: "https://blog.tccstu.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://blog.tccstu.com/posts",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: "https://blog.tccstu.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        ...posts,
    ];
}
