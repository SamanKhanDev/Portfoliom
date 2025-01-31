import { useParams } from "react-router-dom";
import { getConfigData } from "../data/configReader";

export default function ProjectDetails() {
  const { id } = useParams();
  const configData = getConfigData();
  const project = configData.projects[id];

  if (!project) {
    return <h1 className="text-center text-red-500">Project not found!</h1>;
  }

  return (
    <div className="max-w-lg w-full mx-auto mb-4 p-5 bg-gray-100 shadow-lg rounded-lg sm:max-w-full sm:p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left sm:text-2xl">{project["project-name"]}</h1>
      {project["youtube-video"] ? (
        <iframe
          className="w-full h-64 rounded-lg mb-4 sm:h-[300px]"
          src={project["youtube-video"].replace("watch?v=", "embed/")}
          title={project["project-name"]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={project["project-image-url"]}
          alt={project["project-name"]}
          className="w-full h-64 object-cover rounded-lg mb-4 sm:h-48"
        />
      )}
      <p className="text-gray-900 text-center sm:text-left sm:text-lg">In this video: {project["project-desc"]}</p>
      <p className="text-gray-500 text-sm mt-2 text-center sm:text-left">Posted on: {project["post-date"]}</p>
    </div>
  );
}
