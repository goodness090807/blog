"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

interface LightboxProps {
    src?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Lightbox = ({ src, open = false, setOpen }: LightboxProps) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [hasDragged, setHasDragged] = useState(false);

    useEffect(() => {
        if (open) {
            setIsZoomed(false);
            setHasDragged(false);
            setPosition({ x: 0, y: 0 });
        }
    }, [open]);

    const mainCss = cn("fixed z-50 w-full top-0 left-0 h-screen bg-black/80 flex justify-center items-center transition-all", {
        "invisible opacity-0": !open,
        "visible opacity-100": open,
    });

    const imageCss = cn("transition-transform duration-300 ease-in-out", {
        "scale-150 cursor-grab": isZoomed,
        "scale-100 cursor-zoom-in max-w-[90%] max-h-[90%]": !isZoomed,
        "cursor-grabbing": isDragging,
    });

    const handleImageScale = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.stopPropagation();

        if (hasDragged) return;
        setPosition({ x: 0, y: 0 });
        setIsZoomed(!isZoomed);
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (!isZoomed) return;

        setHasDragged(false);

        setIsDragging(true);
        setDragStart({
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        });
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (!isDragging) return;
        setHasDragged(true);
        const newX = event.clientX - dragStart.x;
        const newY = event.clientY - dragStart.y;
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
    };

    return (
        <>
            <div id="lightbox" onClick={() => setOpen(false)} className={mainCss}>
                {src && (
                    <Image
                        onClick={handleImageScale}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        alt="放大圖"
                        src={src}
                        width={1920}
                        height={1080}
                        draggable="false"
                        className={imageCss}
                        style={isZoomed ? { transform: `translate(${position.x}px, ${position.y}px)` } : {}}
                    />
                )}
                <span className="absolute right-10 top-10 cursor-pointer" onClick={() => setOpen(false)}>
                    <MdClose className="text-white rounded-full bg-gray-600/35 text-3xl" />
                </span>
            </div>
        </>
    );
};

export default Lightbox;
