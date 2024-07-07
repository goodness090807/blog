import Link from "next/link";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";

const Tags = () => {
    const tags = ["Javascript"];

    return (
        <div className="w-full">
            <h3 className="tracking-wider font-bold text-primary text-xl">標籤們</h3>
            <div className="w-full py-1 px-3 rounded-md border flex gap-4 items-center flex-wrap">
                {tags.map((tag, index) => {
                    return (
                        <Link key={index} href={`/tags/${tag}`} title={tag} className="w-30 text-nowrap">
                            <Button className=""># {tag}</Button>
                        </Link>
                    );
                })}
                <Button variant="outline" title="查看更多">
                    <FaChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default Tags;
