"use client"
import { BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { links } from "@/utils/data/content";
import { useContent } from "../../lang-provider";
import SectionTitle from "../../section-title";
import ContactWithCaptcha from "./contact-with-recaptcha";

function Contact() {
    const t = useContent().contact;
    return (
        <div id="contact" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
            <SectionTitle>{t.title}</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <ContactWithCaptcha />
                <div className="lg:w-3/4">
                    <a href={`mailto:${links.email}`} className="text-sm md:text-xl flex items-center gap-3 break-all">
                        <MdAlternateEmail className="shrink-0 bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] transition-all duration-300 text-gray-800" size={36} />
                        <span>{links.email}</span>
                    </a>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5">
                        <a target="_blank" rel="noopener noreferrer" href={links.github} aria-label="GitHub">
                            <BsGithub className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800" size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
