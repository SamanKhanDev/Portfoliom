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
    <div className="w-[550px] mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{project["project-name"]}</h1>
      {project["youtube-video"] ? (
        <iframe
          className="w-full h-[300px] rounded-lg mb-4"
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
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700">{project["project-desc"]}</p>
      <p className="text-gray-500 text-sm mt-2">Posted on: {project["post-date"]}</p>
    </div>
  );
}

