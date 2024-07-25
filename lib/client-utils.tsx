"use client";

import { useEffect, useState } from "react";

export function useClientImageSize(src: string) {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = window.document.createElement("img");

        img.src = src;
        img.onload = () => {
            setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        };
    }, [src]);

    if (imageDimensions.width === 0 && imageDimensions.height === 0) {
        return null;
    }

    return imageDimensions;
}
