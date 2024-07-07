import Posts from "../Posts";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { FaChevronRight } from "react-icons/fa";

const NewPosts = () => {
    return (
        <Card className="h-auto">
            <CardHeader className="p-4">
                <CardTitle className="text-primary">最新發布</CardTitle>
                <CardDescription>精彩的新文章都在這</CardDescription>
                <hr className="border-b border-gray-200" />
            </CardHeader>
            <CardContent className="pb-2">
                <Posts />
            </CardContent>
            <CardFooter className="pb-2 flex justify-end">
                <Button className="h-6 flex items-center">
                    看更多 <FaChevronRight />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NewPosts;
