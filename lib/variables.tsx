export const navigationItems = [
    {
        name: "所有文章",
        href: "/posts",
    },
    {
        name: "關於我",
        href: "/about",
    },
];

export const websiteName = "阿貼的技術筆記";

export type MetaProps = {
    params: {
        slug: string;
    };
};
