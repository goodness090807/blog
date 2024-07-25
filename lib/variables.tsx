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

export const websiteName = "阿貼的軟生活筆記";
export const websiteDescription =
    "阿貼是一位全端工程師，雖然過著很軟爛的生活，但還是會努力產出各式各樣的筆記，希望能夠幫助到有需要的人，也歡迎與我交流。";

export type MetaProps = {
    params: {
        slug: string;
    };
};
