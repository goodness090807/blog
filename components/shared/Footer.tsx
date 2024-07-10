import { websiteName } from "@/lib/variables";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center bg-slate-100 py-3">
            <span>
                © {new Date().getFullYear()} BY {websiteName}
            </span>
        </footer>
    );
};

export default Footer;
