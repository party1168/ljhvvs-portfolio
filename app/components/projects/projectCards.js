import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="h-full p-6">
      <div className="bg-transparent text-white opacity-90 rounded-lg overflow-hidden
                      shadow-lg shadow-[rgba(119,53,136,0.459)]
                      hover:shadow-[rgba(129,72,144,0.561)] hover:scale-[1.02]
                      transition-all duration-500">
        <Image
          src={props.imgPath}
          alt={props.title}
          className="w-full h-48 object-cover p-5 opacity-80 rounded-lg"
          width={500}
          height={300}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
          <p className="mb-4 text-justify">{props.description}</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#623686] hover:bg-[#6d20c5d7] text-white px-4 py-2 rounded-md
                         transition-colors duration-300 flex items-center focus:outline-none"
            >
              <BsGithub className="flex items-center" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
