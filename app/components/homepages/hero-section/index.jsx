"use client"

import Image from "next/image";
import { Link } from "next-scroll";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
function HeroSection() {
    return (
        <section className="relative justify-center flex flex-col items-center py-2 lg:py-12">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-4">
                <div className=" order-1 lg:-order-1 flex flex-col justify-center pl-10 md:pl-0 p-2  pb-5 md:pb-10 lg:pt-10">
                    <h1 className=" text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        你好！<br />
                        歡迎來到我的個人網站，<br />
                        我是{' '}
                        <span className=" text-pink-500"> {personalData.name}</span><br />
                        {`我是一個 `}
                        <span className=" text-[#16f2b3]">{personalData.designation}</span>
                        。
                    </h1>
                    <div className="my-12 flex items-center gap-5">
                        <a
                            href={personalData.github}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsGithub size={40} />
                        </a>
                        {/*                     <Link
                        href={personalData.linkedIn}
                        target='_blank'
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                    >
                        <BsLinkedin size={30} />
                    </Link>
                    <Link
                        href={personalData.facebook}
                        target='_blank'
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                    >
                        <FaFacebook size={30} />
                    </Link> */}
                        <a
                            href={personalData.leetcode}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <SiLeetcode size={40} />
                        </a>
                        <a
                            href={personalData.twitter}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <RiTwitterXFill size={40} />
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="contact" className=" rounded-full bg-gradient-to-r to-pink-500 from-[#91827d] p-[1px] transition-all  duration-300 hover:from-[#ff8a8a] hover:to-[#d63e71]">
                            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#1d2220] md:text-sm rounded-full border-none text-center font-medium tracking-wider text-white transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                                <span>聯絡我</span>
                                <RiContactsFill />
                            </button>
                        </Link>
                        <a href="https://drive.google.com/file/d/1vH8QwcahnSq8MVSmLjq1KArelytRicUT/view?usp=drive_link" className="rounded-full bg-gradient-to-r to-teal-400 from-orange-500 p-[1px] transition-all duration-300 hover:from-[#5ec8bd] hover:to-[#ff9248]">
                            <button className="bg-[#1d2220] px-3 md:px-8 py-3 md:py-4 rounded-full border-none text-center flex items-center font-medium tracking-wide text-white duration-200 ease-out md:font-semibold gap-1 hover:gap-3 text-xs md:text-sm ">
                                <span>取得履歷</span>
                                <MdDownload />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="order-0 lg:order-1 px-10 ">
                    <Image
                        src="/codingme.webp"  // 使用靜態import方式加載gif圖片
                        alt="Coding Me"
                        width={500}     // 設定寬度
                        height={500}    // 設定高度
                        unoptimized={true} // 禁用自動優化
                        priority
                        className=" w-auto h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;