import Link from "next/link";
function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="flex justify-between items-start py-8">
                <div className="px-10 md:px-20 items-center flex flex-shrink-0">
                    <Link
                        href={"/"}
                        className=" text-blue-400 text-3xl font-bold"
                    >
                        Jeremy Lu
                    </Link>
                </div>
                <ul className="flex flex-col lg:flex-row justify-end w-full items-start h-screen max-h-0 text-sm opacity-0 md:opacity-100 lg:text-lg md:mt-0 md:h-auto mt:max-h-screen md:flex-row  md:border-0 md:space-x-1 md:w-auto">
                    <li>
                        <Link
                            href="/#about"
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400">
                                About
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#educations"
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400">
                                Educations
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#skills"
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400">
                                Skills
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400">
                                Projects
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;