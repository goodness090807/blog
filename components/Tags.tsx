import Link from "next/link";
import { Button } from "./ui/button";
import { getAllTags } from "@/lib/post-utils";

const Tags = async () => {
    const tags = await getAllTags();

    return (
        <div className="w-full">
            <h3 className="tracking-wider font-bold text-primary text-xl">標籤們</h3>
            <div className="w-full p-3 rounded-md border flex gap-4 flex-wrap min-h-32">
                {tags.map((tag) => {
                    return (
                        <Link
                            key={tag}
                            href={`/tags/${encodeURIComponent(tag)}`}
                            title={tag}
                            className="w-30 text-nowrap">
                            <Button className=""># {tag}</Button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Tags;
