import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    githubLink: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    githubLink: 'https://github.com/username/project-two',
  },
  // Add more projects here
];

const Projects = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold">My Projects</h1>
    <p className="mt-4 text-lg">This is the projects page content.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description} 
          githubLink={project.githubLink} 
        />
      ))}
    </div>
  </div>
);

export default Projects;
