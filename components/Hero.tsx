import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import NewPosts from "./ui/NewPosts";
import Tags from "./Tags";

const Hero = () => {
    const subTitleCss = cn("text-md font-bold leading-relaxed text-primary", "lg:text-2xl");

    return (
        <div className="wrapper relative flex flex-wrap mt-10 gap-20">
            <div className="flex flex-col gap-3 items-center w-full lg:items-start lg:w-auto">
                <span className={subTitleCss}>NO CODE NO LIFE</span>
                <h1 className="text-4xl md:text-7xl font-extrabold md:leading-normal tracking-widest">鐵律的技術部落</h1>
                <h2 className="text-lg md:text-xl">這裡紀載著各式各樣的程式筆記</h2>
                <Image src={"/small-te.png"} alt="小Te" width={300} height={300} />
                <div className="flex items-center gap-5">
                    <Link href="/posts">
                        <Button variant="secondary" className="tracking-widest text-md px-12">
                            <span className="relative -top-[0.1rem]">關於我</span>
                        </Button>
                    </Link>
                    <Link href="/posts">
                        <Button className="tracking-widest text-md">
                            <FaSearch className="mr-5" />
                            <span className="relative -top-[0.1rem]">探索筆記</span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full lg:max-w-[630px]">
                <NewPosts />
                <Tags />
            </div>
        </div>
    );
};

export default Hero;
