import { navigationItems } from "@/lib/variables";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navigation = () => {
    const linkCss = cn(
        "px-5 py-2 cursor-pointer relative",
        "text-gray-700 hover:text-primary",
        "after:transition-width after:duration-300 after:ease-in-out after:left-1/2 after:w-0",
        "after:absolute after:bottom-[-3px] after:h-[3px] after:bg-primary",
        "hover:after:w-full hover:after:left-0"
    );

    return (
        <ul className="hidden md:flex items-center text-white text-xl gap-5">
            {navigationItems.map((item) => {
                return (
                    <li key={item.name}>
                        <Link href={item.href} className={linkCss}>
                            {item.name}
                        </Link>
                    </li>
                );
            })}
            <li>
                <Link href="https://github.com/goodness090807" target="_blink">
                    <FaGithub className="text-black" />
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
