import Link from "next/link";
function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="flex justify-between items-start py-8">
                <div className="px-20 items-center flex flex-shrink-0">
                    <Link
                        href={"/"}
                        className=" text-blue-400 text-3xl font-bold"
                    >
                        Jeremy Lu
                    </Link>
                </div>
                <ul className="flex justify-end w-full items-start h-screen text-lg">
                    <li>
                        <Link
                            href="/about"
                            className="block px-6 py-2">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experience"
                            className="block px-6 py-2">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            className="block px-6 py-2">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/resume"
                            className="block px-6 py-2">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;