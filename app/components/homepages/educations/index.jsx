"use client"
import { HiAcademicCap } from "react-icons/hi";
import { PiCertificate } from "react-icons/pi";
import dynamic from "next/dynamic";
const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), { ssr: false });
import lottiefile from "@/public/lotties/study.json";
import GlowCard from "../../helper/glow-card";
import { useContent } from "../../lang-provider";
import SectionTitle from "../../section-title";

function Educations() {
    const t = useContent().education;
    return (
        <div id="education" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <SectionTitle>{t.title}</SectionTitle>
            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="hidden lg:flex justify-center items-start">
                        <div className="w-3/4 h-3/4">
                            <AnimationLottie animationPath={lottiefile} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {t.items.map((e, i) => (
                            <GlowCard key={i} identifier={`education-${i}`}>
                                <div className="p-3 relative text-white">
                                    <p className="text-center text-xs sm:text-sm text-[#bd30c7]">{e.period}</p>
                                    <div className="flex items-center gap-x-6 px-3 py-5">
                                        <div className="text-violet-500 shrink-0"><HiAcademicCap size={36} /></div>
                                        <div>
                                            <p className="text-base sm:text-xl mb-1 font-medium">{e.title}</p>
                                            <p className="text-sm sm:text-base">{e.institution}</p>
                                            {e.note && <p className="mt-2 text-sm text-gray-400">{e.note}</p>}
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        ))}
                        <div className="rounded-lg border border-[#464c6a] bg-[#282c44]/60 p-5 text-white">
                            <p className="mb-3 flex items-center gap-2 font-semibold text-[#16f2b3]">
                                <PiCertificate size={22} /> {t.certTitle}
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-200">
                                {t.certs.map((c) => <li key={c}>{c}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Educations;
