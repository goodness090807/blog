import { websiteName } from "@/lib/variables";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function generateMetadata(): Metadata {
    return {
        title: "關於我" + " | " + websiteName,
        description:
            "嗨!我是Terry，是這個網站的作者及開發者。我是一名全端的工程師，專注於網站技術的開發，我能夠獨自設計響應式(RWD)及互動式網站，規畫後端的架構並設計安全的網站，也能夠網站部署上線給外部使用。",
        openGraph: {
            images: [
                {
                    url: "/profile.jpg",
                    width: 1980,
                    height: 3520,
                },
            ],
        },
    };
}

const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "C#",
    ".NET Core",
    ".NET API",
    "MSSQL",
    "MySQL",
    "MongoDB",
    "Git",
    "Docker",
];

const projects: Project[] = [
    {
        title: "阿貼的軟生活部落",
        description:
            "會分享一些程式的筆記，偶而也會分享一些生活趣事，希望能夠透過這個平台與更多人互動，也希望能夠幫助到有需要的人。",
        url: "https://blog.tccstu.com",
        image: "/about/blog.png",
    },
    {
        title: "柴題遊戲",
        description: "線上破冰遊戲平台，結合現場互動的題目生成器。",
        url: "https://tccstu.com",
        image: "/about/shiba-title.png",
    },
];

interface Project {
    title: string;
    description?: string;
    url: string;
    image: string;
}

const AboutPage = () => {
    return (
        <div className="wrapper relative flex flex-col mt-10 gap-16">
            <div className="text-5xl text-primary">關於我</div>
            <section className="flex flex-wrap items-center gap-10">
                <Image
                    alt="Terry"
                    className="h-[300px] w-[300px] object-cover object-right-top rounded-full transition-transform duration-300 ease-in shadow-lg hover:scale-105"
                    src={"/about/profile.jpg"}
                    width={1980}
                    height={3520}
                />
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl">Terry</h1>
                    <div className="max-w-[750px]">
                        <p className="py-2 leading-relaxed">
                            嗨!我是Terry，是這個網站的作者及開發者。我是一名全端的軟體工程師，能夠獨自完成一個網站的開發，除了能夠設計出響應式(RWD)網站之外，也能讓網頁符合SEO規範，並且建立伺服器讓網站上線。
                        </p>
                        <p className="py-2 leading-relaxed">
                            除了技術領域之外，我也很喜歡了解各項新技術的發展，並透過文章的方式記錄下來，與更多人交流，如果你對我的文章有任何想法或想要討論，歡迎與我聯絡。
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link href={"https://www.linkedin.com/in/goodness090807"} target="_blank">
                            <FaLinkedin className="w-9 h-9 cursor-pointer text-[#3068c4] hover:text-[#5c83c3]" />
                        </Link>
                        <Link href={"https://github.com/goodness090807"}>
                            <FaGithub className="w-9 h-9 cursor-pointer text-[#333] hover:text-[#6e5494]" />
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-4xl text-primary w-full text-center my-5">專業能力</h2>
                <div className="flex gap-5 flex-wrap justify-center">
                    {skills.map((skill) => {
                        return (
                            <div
                                key={skill}
                                className="bg-primary text-white px-4 py-2 rounded-full transition-all cursor-default duration-300 ease-in shadow-xl
                                            hover:-translate-y-2 hover:bg-primary-hover"
                            >
                                {skill}
                            </div>
                        );
                    })}
                </div>
            </section>

            <section>
                <h2 className="text-4xl text-primary w-full text-center my-5">作品集</h2>
                <div className="flex flex-wrap gap-3">
                    {projects.map((project) => {
                        return (
                            <Link
                                href={project.url}
                                className="group md:flex-1 shadow-md rounded-md grow cursor-pointer transition-all duration-300 ease-in hover:-translate-y-2 hover:shadow-xl"
                                key={project.title}
                            >
                                <div className="overflow-hidden h-52">
                                    <Image
                                        alt={project.title}
                                        className="object-cover rounded-t-md w-full h-full transition-all duration-300 ease-in group-hover:scale-105"
                                        src={project.image}
                                        width={1920}
                                        height={1080}
                                    />
                                </div>

                                <div className="text-2xl text-primary font-semibold p-5">{project.title}</div>
                                <p className="px-5 pb-3 text-secondary">{project.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
