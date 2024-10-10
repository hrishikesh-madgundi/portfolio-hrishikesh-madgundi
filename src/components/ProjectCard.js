import React from 'react';

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="bg-white border-dashed border-2 border-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="p-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
