import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Post } from "@/lib/post-utils";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Posts = async ({ posts, imageHight }: { posts: Array<Post>; imageHight?: string }) => {
    return posts.map((post) => {
        const imageCss = cn("rounded-md max-w-full", {
            "h-20 md:h-40": imageHight == undefined,
            [String(imageHight)]: imageHight != undefined,
        });
        return (
            <div key={post.title}>
                <Link href={`/posts/${post.slug}`} className="group">
                    <h2 className="text-lg font-bold tracking-wider md:text-2xl group-hover:text-primary">{post.title}</h2>
                    <span className="flex items-center gap-1 text-[0.75rem]">
                        <MdAccessTime />
                        {post.date}
                    </span>
                </Link>
                <div className="flex gap-1 border-b border-gray-200">
                    <div className="flex flex-col gap-2 py-2">
                        <p className="text-gray-500 line-clamp-3">{post.description}</p>
                        <Link href={`/posts/${post.slug}`}>
                            <Button className="p-0" variant="link">
                                閱讀更多 <FaChevronRight />
                            </Button>
                        </Link>
                        <div className="flex items-center gap-3 flex-wrap">
                            {post.tags.map((tag) => {
                                return (
                                    <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="p-0 m-0 leading-1">
                                        <Button variant="link" className="p-0 m-0">
                                            # {tag}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <Image src={post.imgPath} alt={post.title} width={1920} height={1080} className={imageCss} />
                </div>
            </div>
        );
    });
};

export default Posts;
