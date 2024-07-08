import Image from "next/image";
import Link from "next/link";
import Navigation from "../ui/Navigation";
import Hamburger from "../ui/Hamburger";

const Header = () => {
    return (
        <header className="w-full z-10">
            <div className="flex justify-around items-center h-16 border-b shadow-md">
                <Link href={"/"} className="flex items-center w-56 gap-3">
                    <Image src={"/logo.svg"} className="h-[38px]" alt="貼律的技術部落" width={48} height={38} />
                    <span
                        className="font-bold text-xl tracking-[0.2rem]
                        transition duration-300 ease-in-out transform hover:text-primary hover:scale-110"
                    >
                        貼律的技術部落
                    </span>
                </Link>
                <Navigation />
                <Hamburger />
            </div>
        </header>
    );
};

export default Header;
