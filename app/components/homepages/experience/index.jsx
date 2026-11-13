"use client"
import { useContent } from "../../lang-provider";
import SectionTitle from "../../section-title";

function Experience() {
    const t = useContent().experience;
    return (
        <div id="experience" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <SectionTitle>{t.title}</SectionTitle>
            <div className="flex flex-col gap-8 py-4">
                {t.items.map((job) => (
                    <div key={job.org} className="rounded-lg border border-[#464c6a] bg-[#282c44]/60 p-5 lg:p-8">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                            <h3 className="text-lg lg:text-xl font-semibold text-white">
                                {job.role} <span className="text-pink-400">· {job.org}</span>
                            </h3>
                            <p className="text-sm text-[#bd30c7]">{job.period}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">{job.stack}</p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-200 text-sm lg:text-base">
                            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Experience;
