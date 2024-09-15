import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-images";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
    return (
        <div id="skills" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -z-40">
                <div className=" absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#8B8FA3] to-transparent"></div>
            </div>
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                    <span className="from-[#3D4B59] bg-[#2D3142] to-[#3D4B59] bg-gradient-to-r w-fit text-white p-2 px-5 text-xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                </div>
            </div>

            <div className="w-full my-3 lg:my-6">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div key={id} className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#282c44] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <Image
                                            src={skillsImage(skill)?.src}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Skills