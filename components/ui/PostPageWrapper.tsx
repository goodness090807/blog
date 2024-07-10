import { ReactNode } from "react";
import Tags from "../Tags";

interface PostPageWrapperProps {
    tag?: ReactNode;
    title: string;
    slot?: ReactNode;
    children: ReactNode;
}

const PostPageWrapper = ({ tag, title, slot, children }: PostPageWrapperProps) => {
    return (
        <div className="mt-5 flex flex-wrap gap-5 w-11/12 max-w-[1280px] mx-auto">
            <div className="w-full md:w-8/12">
                <h1 className="text-4xl font-bold mb-3 tracking-widest flex gap-2 items-center relative">
                    {tag}
                    <span className="relative -top-1">{title}</span>
                </h1>
                {children}
            </div>
            <div className="w-full md:w-3/12 flex flex-col gap-3">
                {slot}
                <Tags />
            </div>
        </div>
    );
};

export default PostPageWrapper;
