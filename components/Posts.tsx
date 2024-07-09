"use server";

import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { Button } from "./ui/button";
import { getPosts } from "@/lib/post-utils";
import { FaChevronRight } from "react-icons/fa";

const Posts = async ({ limit }: { limit?: number }) => {
    let posts = await getPosts();
    if (limit !== null) {
        posts = posts.slice(0, limit);
    }

    return posts.map((post, index) => {
        return (
            <div key={index} className="flex flex-col gap-2 py-2 border-b border-gray-200">
                <Link href={`/posts/${post.slug}`} className="group">
                    <h2 className="text-2xl font-bold tracking-wider group-hover:text-primary">{post.title}</h2>
                    <span className="flex items-center gap-1 text-[0.75rem]">
                        <MdAccessTime />
                        {post.date}
                    </span>
                </Link>

                <p className="text-gray-500">{post.description}</p>
                <Link href={`/posts/${post.slug}`}>
                    <Button className="p-0" variant="link">
                        閱讀更多 <FaChevronRight />
                    </Button>
                </Link>
                <div className="flex items-center gap-3 flex-wrap">
                    {post.tags.map((tag, index) => {
                        return (
                            <Link key={index} href={`/tags/${tag}`} className="p-0 m-0 leading-1">
                                <Button variant="link" className="p-0 m-0">
                                    #{tag}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    });
};

export default Posts;
