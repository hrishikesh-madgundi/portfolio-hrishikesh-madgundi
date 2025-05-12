import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Pokemon Data Explorer',
    description: 'A responsive React app powered by PokéAPI that lets users explore, search, and filter the first 150 Pokémon. Features include pagination, sorting, multi-type filtering, detailed Pokémon views (stats, abilities, evolution), and a persistent favorites system using localStorage. Built with React, TailwindCSS, React Router, and Context API. Used Axios and batch processing to optimize API performance and loading speed. Includes a stat comparison tool, a random Pokémon generator, and graceful error handling with error boundaries.',
    githubLink: 'https://github.com/hrishikesh-madgundi/advanced-data-explorer',
  },
  {
    title: 'Gym-Fluencer',
    description: 'Gym Fluencer is a responsive landing page built for a fitness influencer brand, using React.js and Tailwind CSS. The project incorporates a variety of libraries to enhance functionality and user experience, such as Framer Motion for animations, AOS for scroll-triggered effects, and React Slick and Swiper for responsive carousels. It also utilizes React Icons for scalable icons, @headlessui/react for accessible UI components, and React Intersection Observer for efficient visibility detection. The project is bootstrapped with Create React App and tracks performance metrics using Web Vitals, showcasing a polished front-end design with smooth transitions and optimized performance.',
    githubLink: 'https://github.com/username/project-two',
  },
  {
    title: 'Youtube Clone App',
    description: 'React YouTube Clone is a dynamic web application that replicates the core features of YouTube using React.js and the YouTube Data API. The project showcases proficiency in building interactive UIs with React, implementing routing with React Router, and fetching and displaying video data in real-time. It emphasizes clean code architecture, responsive design, and efficient state management using Redux, providing users with a seamless video browsing experience akin to the original platform.',
    githubLink: 'https://github.com/hrishikesh-madgundi/react-youtube-clone',
  },
  {
    title: 'Employee Management System',
    description: 'Employee Management System, is a comprehensive web application designed to streamline HR operations within an organization. Developed using React.js, the system offers a user-friendly interface for managing employee records, tracking attendance, processing payroll, and handling leave applications. The application features role-based access control, providing distinct dashboards for Admin, HR, and Employees, each with tailored functionalities. This project demonstrates proficiency in building scalable and maintainable applications with a focus on user experience and efficient data management.',
    githubLink: 'https://github.com/hrishikesh-madgundi/Employee-Management-System-React',
  },
  {
    title: 'iXbi',
    description: 'iXbi is a social media platform designed to connect brands with influencers, facilitating collaborations and partnerships. Developed using Node.js and Express.js, the backend manages user authentication, data storage, and real-time communication through Socket.io, enabling instant messaging and live interactions between brands and influencers. The front-end utilizes the EJS templating engine for dynamic rendering, while the platform supports role-based access, allowing both brands and influencers to create profiles, browse opportunities, and engage in seamless interactions. This project showcases full-stack development expertise, focusing on secure authentication, real-time functionality, and a user-friendly interface.',
    githubLink: 'https://github.com/hrishikesh-madgundi/iXbi'
  },
  {
    title: 'Notes Website with Backend',
    description: 'Notes Making Webapp is a full-stack note-taking application developed using Node.js, Express.js, and EJS templating engine. The app allows users to create, update, and delete notes, providing a simple and efficient interface for managing personal notes. The backend is powered by Node.js and Express.js, ensuring a robust and scalable server-side architecture. EJS is utilized for rendering dynamic HTML pages, enabling seamless integration between the client and server. This project demonstrates proficiency in backend development, templating engines, and CRUD operations, offering a practical solution for personal note management.',
    githubLink: 'https://github.com/hrishikesh-madgundi/notes-making-webapp'
  }
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
