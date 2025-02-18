import { oss } from '../data/projectData';
import ProjectCard from './OssCard';
import FadeScroll from "./FadeScroll";
export default function OpenSource() {
  return (
    <section className="text-white pt-20 pb-10" id="OpenSource">
      <div className="container mx-auto px-6 text-center">
        <FadeScroll>
          <h2 className="text-3xl font-semibold mb-6">Open Source Contributions</h2>
          <p>I like to contribute to open source projects where I can :)</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {oss.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          For contributions checkout my <a className="underline" href="https://github.com/yunz-dev" target="_blank">Github</a>
        </FadeScroll>
      </div>
    </section>
  );
}


            // <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            //   <h3 className="text-xl font-semibold mb-2">Golio</h3>
            //   <p className="mb-4">League of Legends, Legends of Runeterra and Valorant API client library for Go. </p>
            //   <Link
            //     href="https://github.com/KnutZuidema/golio"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Source
            //   </Link>
            // </div>
            // <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            //   <h3 className="text-xl font-semibold mb-2">Bunster</h3>
            //   <p className="mb-4">A shell compiler that converts shell scripts into secure, portable and static binaries.</p>
            //   <Link
            //     href="https://github.com/yassinebenaid/bunster"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Source
            //   </Link>
            // </div>
            // <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            //   <h3 className="text-xl font-semibold mb-2">Nix Packages</h3>
            //   <p className="mb-4">Nixpkgs is a collection of over 100,000 software packages that can be installed with the Nix package manager.</p>
            //   <Link
            //     href="https://github.com/NixOS/nixpkgs"
            //     className="inline-block text-gray-300 hover:underline"
            //   >
            //     View Source
            //   </Link>
            // </div>
