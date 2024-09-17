"use client"
import { Link } from "next-scroll";
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
                            to="about"
                            smooth={true}
                            duration={500}
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400 cursor-pointer">
                                About
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400 cursor-pointer">
                                Skills
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400 cursor-pointer">
                                Projects
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="educations"
                            smooth={true}
                            duration={500}
                            className="block px-6 py-2 no-underline outline-none hover:no-underline">
                            <div className="text-white transition-colors duration-300 hover:text-pink-400 cursor-pointer">
                                Educations
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;