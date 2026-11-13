"use client"
import Image from "next/image";
import { Link } from "next-scroll";
import { BsGithub } from "react-icons/bs";
import { MdDownload, MdLocationOn } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import codingme from "@/public/codingme.webp";
import { links } from "@/utils/data/content";
import { useContent } from "../../lang-provider";

function HeroSection() {
    const t = useContent().hero;
    return (
        <section className="relative justify-center flex flex-col items-center py-2 lg:py-12">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-4">
                <div className="order-1 lg:-order-1 flex flex-col justify-center p-2 pb-5 md:pb-10 lg:pt-10">
                    <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#16f2b3]/50 px-3 py-1 text-xs md:text-sm text-[#16f2b3]">
                        <span className="h-2 w-2 rounded-full bg-[#16f2b3]"></span>
                        {t.status}
                    </span>
                    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        {t.greeting[0]}<br />
                        {t.greeting[1]}<br />
                        {t.greeting[2]} <span className="text-pink-500">{t.name}</span><br />
                        {t.designationPrefix} <span className="text-[#16f2b3]">{t.designation}</span>{t.end}
                    </h1>
                    <p className="mt-3 flex items-center gap-1 text-sm text-gray-400">
                        <MdLocationOn /> {t.location}
                    </p>
                    <div className="my-8 flex items-center gap-5">
                        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                            className="transition-all text-pink-500 hover:scale-125 duration-300">
                            <BsGithub size={36} />
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="contact" smooth={true} duration={500} className="rounded-full bg-gradient-to-r to-pink-500 from-[#91827d] p-[1px] transition-all duration-300 hover:from-[#ff8a8a] hover:to-[#d63e71]">
                            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#1d2220] md:text-sm rounded-full border-none text-center font-medium tracking-wider text-white transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                                <span>{t.contact}</span>
                                <RiContactsFill />
                            </button>
                        </Link>
                        {links.resume && (
                            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r to-teal-400 from-orange-500 p-[1px] transition-all duration-300 hover:from-[#5ec8bd] hover:to-[#ff9248]">
                                <span className="bg-[#1d2220] px-3 md:px-8 py-3 md:py-4 rounded-full flex items-center font-medium tracking-wide text-white duration-200 ease-out md:font-semibold gap-1 hover:gap-3 text-xs md:text-sm">
                                    <span>{t.resume}</span>
                                    <MdDownload />
                                </span>
                            </a>
                        )}
                    </div>
                </div>
                <div className="order-0 lg:order-1 px-10">
                    <Image src={codingme} alt="" width={500} height={500} unoptimized={true} priority className="w-auto h-auto" />
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
