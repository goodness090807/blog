"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    const sidebarCss = cn("fixed z-50 top-0 right-0 h-full w-72 border-l bg-white flex-col items-center transition-transform", {
        "translate-x-0 md:hidden": open,
        "translate-x-full": !open,
    });

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
                        <div key={index} className="w-6 h-1 bg-primary group-hover:bg-primary-hover rounded-md"></div>
                    ))}
            </div>
        );
    };

    return (
        <>
            <HamburgerIcon onClick={toggleMenu} />
            <div className={overlayCss} onClick={() => setOpen(false)}></div>
            <div className={sidebarCss}></div>
        </>
    );
};

export default Hamburger;
