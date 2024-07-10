import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getHeadings(markdown: string) {
    const headingRegex = /^##\s+(.+)$/gm;
    return Array.from(markdown.matchAll(headingRegex), (m) => m[1]);
}
