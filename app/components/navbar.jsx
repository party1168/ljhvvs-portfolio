"use client"
import { Link } from "next-scroll";
import { useContent, useLang } from "./lang-provider";

const SECTIONS = ["about", "experience", "projects", "skills", "education", "contact"];

function Navbar() {
    const t = useContent();
    const { lang, setLang } = useLang();
    return (
        <nav className="bg-transparent">
            <div className="flex justify-between items-center py-8 gap-4">
                <div className="px-4 md:px-20 flex flex-shrink-0">
                    <Link to="/" className="text-blue-400 text-2xl md:text-3xl font-bold">
                        Jeremy Lu
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <ul className="hidden md:flex flex-row items-center lg:text-lg">
                        {SECTIONS.map((id) => (
                            <li key={id}>
                                <Link to={id} smooth={true} duration={500} className="block px-4 py-2 no-underline outline-none hover:no-underline">
                                    <div className="text-white transition-colors duration-300 hover:text-pink-400 cursor-pointer">
                                        {t.nav[id]}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setLang(lang === "en" ? "zh" : "en")}
                        className="ml-2 rounded-full border border-[#464c6a] px-4 py-1.5 text-sm text-white hover:border-[#16f2b3] transition-colors"
                        aria-label="Switch language"
                    >
                        {t.meta.switchTo}
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
