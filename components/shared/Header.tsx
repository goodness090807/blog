import Image from "next/image";
import Link from "next/link";
import Navigation from "../ui/Navigation";
import Hamburger from "../ui/Hamburger";
import { websiteName } from "@/lib/variables";

const Header = () => {
    return (
        <header className="z-10 fixed bg-white inset-0 h-20">
            <div className="flex justify-around items-center h-16 border-b shadow-md">
                <Link href={"/"} className="flex items-center w-56 gap-3">
                    <Image src={"/logo.png"} className="max-w-full h-10" alt={websiteName} width={48} height={38} />
                    <span
                        className="font-bold text-lg tracking-[0.2rem]
                        transition duration-300 ease-in-out transform hover:text-primary hover:scale-110"
                    >
                        {websiteName}
                    </span>
                </Link>
                <Navigation />
                <Hamburger />
            </div>
        </header>
    );
};

export default Header;
