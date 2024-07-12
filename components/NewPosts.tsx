import Link from "next/link";
import Posts from "./Posts";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { FaChevronRight } from "react-icons/fa";
import { getAllPosts } from "@/lib/post-utils";

const NewPosts = async () => {
    const posts = (await getAllPosts()).slice(0, 2);

    return (
        <Card className="h-auto">
            <CardHeader className="p-4">
                <CardTitle className="text-primary">最新發布</CardTitle>
                <CardDescription>精彩的新文章都在這</CardDescription>
                <hr className="border-b border-gray-200" />
            </CardHeader>
            <CardContent className="pb-2">
                <Posts posts={posts} imageHight="h-10 md:h-20" />
            </CardContent>
            <CardFooter className="pb-2 flex justify-end">
                <Link href={"/posts"}>
                    <Button className="h-10 flex items-center">
                        看更多 <FaChevronRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default NewPosts;
