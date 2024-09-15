import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
    return (
        <div id="about" className=" my-12 lg:my-16  relative">
            <div className="ml-0 lg:ml-20 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                <div className="order-2 lg:order-1 ">
                    <p className="font-bold mb-5 text-[#E0E7E9] bg-gradient-to-r from-[#3D4B59] to-[#2D3142] rounded-full text-center w-32  text-3xl">
                        關於我
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        {personalData.description}
                    </p>
                </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
{/*                 <Image
                    src={personalData.profile}
                    width={280}
                    height={280}
                    alt="Abu Said"
                    className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                /> */}
            </div>
        </div>
    )
}
export default AboutSection