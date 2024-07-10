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

export const websiteName = "阿貼的軟生活部落";
export const websiteDescription =
    "會分享一些程式的筆記，偶而也會分享一些生活趣事，希望能夠透過這個平台與更多人互動，也希望能夠幫助到有需要的人。";

export type MetaProps = {
    params: {
        slug: string;
    };
};
