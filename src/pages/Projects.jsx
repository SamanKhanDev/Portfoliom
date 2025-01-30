import { getConfigData } from "../data/configReader";

export default function ProjectCards() {
    const configData = getConfigData();
    const projects = configData.projects;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-gray-900 text-white min-h-screen justify-center">
            {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 w-[250px] h-[250px] flex flex-col items-center">
                    <img src={project["project-image-url"]} alt={project["project-name"]} className="w-40 h-40 object-cover rounded-md mb-3" />
                    <h2 className="text-lg font-semibold text-center">{project["project-name"]}</h2>
                    <p className="text-gray-400 text-sm text-center">{project["project-desc"]}</p>
                </div>
            ))}
        </div>
    );
}
