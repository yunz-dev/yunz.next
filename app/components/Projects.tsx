import FadeScroll from "./FadeScroll";
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="bg-black text-white pt-20 pb-10" id="projects">
      <div className="container mx-auto px-6 text-center">
        <FadeScroll>
          <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      {/* Grid with glassy hover effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/30">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Project Card */}
              <ProjectCard project={project} />

              {/* Subtle border glow effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-all duration-300 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
          <br></br>
          <br></br>
          <br></br>
          For more projects, check out my <a className="underline cursor-none" href="https://github.com/yunz-dev" target="_blank">Github</a>
        </FadeScroll>
      </div>
    </section>
  );
}

            // <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            //   <h3 className="text-xl font-semibold mb-2">SPNW</h3>
            //   <p className="mb-4">A Habit tracking app built with FASTAPI, MONGODB, HTMX and ALPINE</p>
            //   <Link
            //     href="https://github.com/yunz-dev/spnw-api"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Project
            //   </Link>
            // </div>
            // <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            //   <h3 className="text-xl font-semibold mb-2">LiMao</h3>
            //   <p className="mb-4">A golang powered data driven application to supplement in language learning</p>
            //   <Link
            //     href="https://github.com/yunz-dev/LiMao"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Project
            //   </Link>
            // </div>
            // <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            //   <h3 className="text-xl font-semibold mb-2">YAWL</h3>
            //   <p className="mb-4">Yet Another Wish List</p>
            //   <Link
            //     href="https://github.com/monkieeboi/YAWL"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Project
            //   </Link>
            // </div>
