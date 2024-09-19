import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from "./contact-with-recaptcha";
function Contact() {
    return (
        <div id="educations" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -z-40">
                <div className=" absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#8B8FA3] to-transparent"></div>
            </div>
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                    <span className="from-[#3D4B59] bg-[#2D3142] to-[#3D4B59] bg-gradient-to-r w-fit text-white p-2 px-5 text-xl rounded-md">
                        Contact
                    </span>
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <ContactWithCaptcha />

                <div className="lg:w-3/4 ">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <MdAlternateEmail
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>{personalData.email}</span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <IoMdCall
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                {personalData.phone}
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        <Link target="_blank" href={personalData.github}>
                            <BsGithub
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        <Link target="_blank" href={personalData.leetcode}>
                            <SiLeetcode
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        <Link target="_blank" href={personalData.twitter}>
                            <RiTwitterXFill
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact