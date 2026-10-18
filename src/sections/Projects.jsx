import Project from "../components/Project";
import ResumeDownloadBtn from "../components/ResumeDownloadBtn";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section
      id="work"
      className="c-space section-spacing"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-heading text-neutral-300">My Projects & Resume</h2>
        <ResumeDownloadBtn />
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
