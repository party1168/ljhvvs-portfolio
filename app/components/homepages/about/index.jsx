"use client"
import { useContent } from "../../lang-provider";

function AboutSection() {
    const t = useContent().about;
    return (
        <div id="about" className="my-12 lg:my-16 max-w-4xl relative lg:ml-20">
            <p className="font-bold mb-5 text-[#E0E7E9] bg-gradient-to-r from-[#3D4B59] to-[#2D3142] rounded-full text-center w-36 text-2xl py-1">
                {t.title}
            </p>
            {t.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-200 text-sm lg:text-lg mb-4 leading-relaxed">{p}</p>
            ))}
        </div>
    );
}
export default AboutSection;
