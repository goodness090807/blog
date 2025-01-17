import { ReactNode } from "react";
import Tags from "./Tags";

interface PostPageWrapperProps {
    tag?: ReactNode;
    title: string;
    slot?: ReactNode;
    children: ReactNode;
}

const PostPageWrapper = ({ tag, title, slot, children }: PostPageWrapperProps) => {
    return (
        <div className="mt-5 flex flex-wrap gap-5 max-w-full md:max-w-[1480px] mx-auto">
            <div className="w-full px-5 md:w-8/12">
                <h1 className="text-4xl font-bold mb-3 tracking-widest flex gap-2 items-center relative">
                    {tag}
                    <span className="relative -top-1">{title}</span>
                </h1>
                {children}
            </div>
            <div className="w-full mb-5 mx-7 md:mx-0 md:mb-0 md:w-3/12 flex flex-col gap-3 md:fixed md:top-20 md:right-10 lg:right-20">
                {slot}
                <Tags />
                <div className="w-full">
                    <h3 className="tracking-wider font-bold text-primary text-xl">廣告</h3>
                    <div className="w-full p-3 rounded-md border flex gap-4 flex-wrap justify-center items-center min-h-32">
                        等待有緣人的置入
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPageWrapper;
