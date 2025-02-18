import Link from 'next/link';
import { Project } from '../data/projectData';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
  <div className="hover:bg-gray-950 text-white p-6 rounded-2xl shadow-lg border-2 border-gray-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200 cursor-pointer flex flex-col h-full">

    <Image
      src={project.image}
      alt={project.title}
      width={400}
      height={250}
      layout="intrinsic"
      className="rounded-lg mb-4 w-full h-auto"
    />
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, index) => (
        <span key={index} className="bg-gray-900 text-xs px-3 py-1 rounded-full">{tech}</span>
      ))}
    </div>

    {/* This div will be pushed to the bottom */}
    <div className="flex justify-between text-sm mt-auto">
      <Link href={project.repo} className="text-blue-400 hover:underline" target="_blank">
        <Image src="svg/github.svg" alt="GitHub" width={25} height={25} />
      </Link>
      <Link href={project.live} className="text-green-400 hover:underline" target="_blank">
        <Image src="svg/web.svg" alt="Live Demo" width={25} height={25} />
      </Link>
    </div>
  </div>
  );
  };

export default ProjectCard;
