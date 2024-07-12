import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { websiteDescription, websiteName } from "@/lib/variables";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import NewPosts from "@/components/NewPosts";

export default function Home() {
    const subTitleCss = cn("text-md font-bold leading-relaxed text-primary", "lg:text-2xl");
    return (
        <div className="wrapper relative flex flex-wrap mt-3 gap-20">
            <div className="flex flex-col gap-3 items-center w-full lg:items-start lg:w-5/12">
                <span className={subTitleCss}>NO CODE NO LIFE</span>
                <h1 className="text-4xl md:text-5xl font-extrabold md:leading-normal tracking-widest">{websiteName}</h1>
                <h2 className="text-lg md:text-xl">{websiteDescription}</h2>
                <Image src={"/small-te.png"} alt="小Te" width={300} height={300} />
                <div className="flex items-center gap-5 md:ml-10">
                    <Link href="/about">
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
            <div className="flex flex-col gap-2 w-full lg:w-6/12">
                <NewPosts />
            </div>
        </div>
    );
}
