import { cn } from "@/lib/utils";
import Link from "next/link";

const Navigation = () => {
    const linkCss = cn(
        "px-5 py-2 cursor-pointer relative",
        "text-gray-700 hover:text-primary",
        "after:transition-width after:duration-300 after:ease-in-out after:left-1/2 after:w-0",
        "after:absolute after:bottom-[-3px] after:h-[3px] after:bg-primary",
        "hover:after:w-full hover:after:left-0"
    );

    const items = [
        {
            name: "文章",
            href: "/posts",
        },
        {
            name: "關於我",
            href: "/about",
        },
        {
            name: "委託我工作",
            href: "/entrust",
        },
    ];

    return (
        <ul className="hidden md:flex items-center text-white text-xl gap-5">
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href={item.href} className={linkCss}>
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;
