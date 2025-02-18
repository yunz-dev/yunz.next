import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../data/projectData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-neutral-900 text-white p-6 rounded-2xl shadow-lg border-2 border-gray-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200 cursor-pointer">

      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-xs px-3 py-1 rounded-full">{tech}</span>
        ))}
      </div>
      <div className="flex justify-between text-sm">
        <Link href={project.repo} className="text-blue-400 hover:underline" target="_blank">GitHub</Link>
        <Link href={project.live} className="text-green-400 hover:underline" target="_blank">Live Demo</Link>
      </div>
    </div>
  );
};
export default ProjectCard;
