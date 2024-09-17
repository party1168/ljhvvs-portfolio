import { educations } from "@/utils/data/educations";
import AnimationLottie from "../../helper/animation-lottie"
import { HiAcademicCap } from "react-icons/hi"
import Image from "next/image";
import lottiefile from "@/public/lotties/study.json"
import GlowCard from "../../helper/glow-card";

function Educations() {
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
                        Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex justify-center items-start">
                        <div className="w-3/4 h-3/4">
                            <AnimationLottie animationPath={lottiefile} />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-6">
                            {
                                educations.map(education => (
                                    <GlowCard key={education.id} identifier={`education-${education.id}`}>
                                        <div className="p-3 relative text-white">
                                            <div className="flex justify-center">
                                                <p className="text-xs sm:text-sm text-[#bd30c7]">
                                                    {education.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-8 px-3 py-5">
                                                <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                    <HiAcademicCap size={36} />
                                                </div>
                                                <div>
                                                    <p className="text-base sm:text-xl mb-2 font-medium">
                                                        {education.title}
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {education.institution}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations