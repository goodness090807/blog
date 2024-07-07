"use server";

import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { Button } from "./ui/button";
import { getPosts } from "@/lib/post-utils";

const Posts = async () => {
    const posts = (await getPosts()).slice(0, 2);

    return posts.map((post, index) => {
        return (
            <div key={index} className="flex flex-col gap-2 py-2 border-b border-gray-200">
                <div>
                    <h2 className="text-2xl font-bold tracking-wider">{post.title}</h2>
                    <span className="flex items-center gap-1 text-[0.75rem]">
                        <MdAccessTime />
                        {post.date}
                    </span>
                </div>

                <p className="text-gray-500">{post.description}</p>
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
