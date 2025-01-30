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
    <div className="w-[500px] mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{project["project-name"]}</h1>
      <img
        src={project["project-image-url"]}
        alt={project["project-name"]}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700">{project["project-desc"]}</p>
    </div>
  );
}
