"use client";

import { cn } from "@/lib/utils";
import { navigationItems, websiteName } from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathName]);

    const sidebarCss = cn(
        "fixed z-50 top-0 right-0 h-full w-72 border-l bg-white transition-transform h-screen p-3",
        "flex flex-col gap-5",
        {
            "translate-x-0 md:hidden": open,
            "translate-x-full": !open,
        }
    );

    const overlayCss = cn("fixed z-40 inset-0 bg-black/30 w-full h-full touch-none duration-300", {
        "md:hidden": open,
        hidden: !open,
    });

    const toggleMenu = () => {
        setOpen(!open);
    };

    const HamburgerIcon = ({ ...rest }) => {
        return (
            <div className="group flex flex-col gap-1 cursor-pointer md:hidden" {...rest}>
                {Array(3)
                    .fill(true)
                    .map((_, index) => (
                        <div
                            key={"line" + index}
                            className="w-6 h-1 bg-primary group-hover:bg-primary-hover rounded-md"></div>
                    ))}
            </div>
        );
    };

    return (
        <>
            <HamburgerIcon onClick={toggleMenu} />
            <button className={overlayCss} onClick={() => setOpen(false)}></button>
            <div className={sidebarCss}>
                <Link href={"/"} className="w-full h-9 mt-5 flex gap-3 justify-between items-center">
                    <Image src={"/logo.png"} className="max-w-full h-10" alt={websiteName} width={48} height={38} />
                    <span
                        className="font-bold text-lg tracking-[0.2rem]
                        transition duration-300 ease-in-out transform hover:text-primary hover:scale-110">
                        {websiteName}
                    </span>
                    <MdOutlineClose className="text-3xl" onClick={() => setOpen(false)} />
                </Link>
                <ul className="h-full">
                    {navigationItems.map((item) => {
                        return (
                            <li key={item.name} className="px-3 py-4">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        );
                    })}
                    <li className="px-3 py-8">
                        <Link href="https://github.com/goodness090807" target="_blink">
                            <FaGithub className="text-black text-4xl" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Hamburger;
