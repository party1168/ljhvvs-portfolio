function SectionTitle({ children }) {
    return (
        <>
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
            <div className="flex justify-center -z-40">
                <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#8B8FA3] to-transparent"></div>
            </div>
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                    <span className="from-[#3D4B59] bg-[#2D3142] to-[#3D4B59] bg-gradient-to-r w-fit text-white p-2 px-5 text-xl rounded-md">
                        {children}
                    </span>
                    <span className="w-24 h-[2px] bg-[#3D4B59]"></span>
                </div>
            </div>
        </>
    );
}
export default SectionTitle;
