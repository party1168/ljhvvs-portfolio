import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
function HeroSection() {
    const {t} = useTranslation();
    return (
        <section className="relative justify-center flex flex-col items-center py-2 lg:py-12">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-4">
                <div className=" order-1 lg:-order-1 flex flex-col justify-center p-2 pb-5 md:pb-10 lg:pt-10">
                    <h1 className=" text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        你好！<br />
                        歡迎來到我的個人網站，<br />
                        我是{' '}
                        <span className=" text-pink-500">{t{personalData.name}}</span><br />
                        {`我是一個 `}
                        <span className=" text-[#16f2b3]">{personalData.designation}</span>
                        。
                    </h1>
                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href={personalData.github}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsGithub size={40} />
                        </Link>
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
                        <Link
                            href={personalData.leetcode}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <SiLeetcode size={40} />
                        </Link>
                        <Link
                            href={personalData.twitter}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <RiTwitterXFill size={40} />
                        </Link>
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