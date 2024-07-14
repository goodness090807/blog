"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { MdClose } from "react-icons/md";

interface RightBoxProps {
    title: string;
    children: React.ReactNode;
}

const RightBox = ({ title, children }: RightBoxProps) => {
    const [open, setOpen] = useState(false);
    const openCss = cn("fixed md:static", {
        "right-0 top-20 bg-white z-50 max-w-full": open,
    });

    return (
        <>
            <div
                className="fixed md:hidden right-0 top-32 w-6 bg-secondary text-white rounded-l-lg p-1"
                onClick={() => setOpen(true)}
            >
                {title}
            </div>
            <div className={openCss}>
                <span className="absolute right-4 top-2 md:hidden" onClick={() => setOpen(false)}>
                    <MdClose />
                </span>
                {children}
            </div>
        </>
    );
};

export default RightBox;
