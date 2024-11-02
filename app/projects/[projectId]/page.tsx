// app/projects/[projectId]/page.tsx

import React from 'react';

type Project = {
  name: string;
  images: string[];
  techStack: string[];
  details: string;
  date: string;
  links: {
    github: string;
    liveDemo: string;
  };
};

const projectData: { [key: string]: Project } = {
  '1': {
    name: 'Project A',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    details: 'This is a detailed description of Project A.',
    date: 'January 2024',
    links: {
      github: 'https://github.com/example/projectA',
      liveDemo: 'https://example.com/projectA',
    },
  },
  '2': {
    name: 'Project B',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
    ],
    techStack: ['Next.js', 'Firebase', 'CSS Modules'],
    details: 'This is a detailed description of Project B.',
    date: 'February 2024',
    links: {
      github: 'https://github.com/example/projectB',
      liveDemo: 'https://example.com/projectB',
    },
  },
};

const ProjectPage = ({ params }: { params: { projectId: string } }) => {

    console.log({params: params.projectId});
  const project = projectData[params.projectId];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
        test
      <div className="flex flex-col gap-4 md:w-1/2">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`Project image ${index + 1}`} className="rounded-lg shadow-md" />
        ))}
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h1>
        <p className="text-gray-700 mb-4">{project.details}</p>
        <p className="text-gray-500 mb-2"><strong>Date:</strong> {project.date}</p>
        <p className="text-gray-500 mb-4"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
        <div className="flex space-x-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
