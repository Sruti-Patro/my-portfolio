import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web app built with MERN.",
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "A responsive website using React.",
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description: "A mobile app built using React Native.",
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
