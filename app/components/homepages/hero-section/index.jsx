import Image from "next/image";
function heroSection() {
    return (
        <section className="relative justify-center flex flex-col items-center py-4 lg:py12">
            <Image
                src="/hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
            />
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                
            </div>
        </section>
    )
}

export default HeroSection;