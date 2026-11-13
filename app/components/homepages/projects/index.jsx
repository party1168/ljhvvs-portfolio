"use client"
import { useContent, useLang } from "../../lang-provider";
import SectionTitle from "../../section-title";

function Projects() {
    const t = useContent().projects;
    const { lang } = useLang();
    return (
        <div id="projects" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <SectionTitle>{t.title}</SectionTitle>
            <div className="flex flex-col gap-8 py-4">
                {t.items.map((p, idx) => (
                    <div key={p.name}
                        className={`rounded-lg border p-5 lg:p-8 ${idx === 0 ? "border-[#16f2b3]/60 bg-[#282c44]" : "border-[#464c6a] bg-[#282c44]/60"}`}>
                        {idx === 0 && (
                            <span className="mb-3 inline-block rounded-full bg-[#16f2b3]/15 px-3 py-0.5 text-xs text-[#16f2b3]">{t.featured}</span>
                        )}
                        <h3 className="text-xl lg:text-2xl font-semibold text-white">{p.name}</h3>
                        <p className="mt-1 text-gray-200">{p.subtitle}</p>
                        <p className="mt-1 text-sm text-[#bd30c7]">{p.event}</p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-200 text-sm lg:text-base">
                            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((s) => (
                                <span key={s} className="rounded-md border border-[#353a52] px-2 py-0.5 text-xs text-gray-300">{s}</span>
                            ))}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {p.links.map((l) => (
                                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                                    className={`rounded-md px-4 py-2 text-sm text-white transition-colors duration-300 ${l.primary ? "bg-[#623686] hover:bg-[#6d20c5d7]" : "border border-[#464c6a] hover:border-[#16f2b3]"}`}>
                                    {l.label[lang]} ↗
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;
