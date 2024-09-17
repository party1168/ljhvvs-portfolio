import ProjectCards from "./projectCards";
import { projectsData } from "@/utils/data/projects-data";
function Projects() {
    return (
        <div id="projects" className="relative z-50 border-t my-6 lg:my-12 border-[#353951]">
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
            <div className="w-full my-0 lg:my-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 bg-">
                    {projectsData.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-center">
                            <ProjectCards
                                imgPath={project.imgPath}
                                isBlog={project.isBlog}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects