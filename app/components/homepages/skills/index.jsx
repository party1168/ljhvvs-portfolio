"use client"
import { useContent } from "../../lang-provider";
import SectionTitle from "../../section-title";

function Skills() {
    const t = useContent().skills;
    return (
        <div id="skills" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <SectionTitle>{t.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                {t.groups.map((g) => (
                    <div key={g.name} className="rounded-lg border border-[#464c6a] bg-[#282c44]/60 p-5">
                        <p className="mb-3 font-semibold text-[#16f2b3]">{g.name}</p>
                        <div className="flex flex-wrap gap-2">
                            {g.items.map((s) => (
                                <span key={s} className="rounded-md border border-[#353a52] bg-[#1f223c] px-3 py-1 text-sm text-white">{s}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills;
