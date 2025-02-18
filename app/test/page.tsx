import { projects } from './projectData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white py-12 px-6 md:px-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
