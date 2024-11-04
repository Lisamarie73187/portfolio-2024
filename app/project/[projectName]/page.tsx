import React from 'react';
import { projectsData } from '../../myProjects';
import Link from 'next/link';


interface Project {
  id: string;
  title: string;
  mainImage: string;
  images: string[];
  techStack: string[];
  details: string;
  features: string;
  date: string;
  links?: {
    github?: string;
    githubMobile?: string;
    live?: string;
    appStoreiOS?: string;
    appStoreAndroid?: string;
  };
}

type tParams = Promise<{ projectName: string }>;

const ProjectPage = async (props: { params: tParams }) => {
  const { projectName } = await props.params;
  const project = projectsData.find((project) => project.id === projectName) as Project;

  if (!project) return <p>Project not found</p>;

  return (
    <div className="flex flex-col xs:flex-col lg:flex-row justify-center items-start mx-30 pt-20 mt-20 pb-16 xs:mt-0 xs:pt-10">
    <div className="flex flex-col lg:w-full mr-0 md:mr-16">
      {project.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project image ${index + 1}`}
          className="mb-8"
        />
      ))}
    </div>
    <div className="md:w-2/3">
      <h1 className="text-3xl font-bold text-gray-700">{project.title}</h1>
      <p className="text-gray-600 text-xl pt-2">{project.date}</p>
      <div className="text-gray-600 text-2xl font-bold pt-8">Project Details</div>
      <p className="text-gray-600 text-xl pt-2">{project.details}</p>
      <div className="text-gray-600 text-2xl font-bold pt-8">Project Features</div>
      <p className="text-gray-600 text-xl pt-2">{project.features}</p>
      <div className="text-gray-600 text-2xl font-bold pt-8">Tech Stack</div>
      <p className="text-gray-600 text-xl pt-2">{project.techStack.join(', ')}</p>
      {project.links && (project.links.github || project.links.live) && (
        <>
          <div className="text-gray-700 text-2xl font-bold pt-8">Check it out</div>
          <div className="flex pt-4 space-x-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                GitHub
              </Link>
            )}
            {project.links.githubMobile && (
              <Link
                href={project.links.githubMobile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                GitHub Mobile
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Live Demo
              </Link>
            )}
            {project.links.appStoreiOS && (
              <Link
                href={project.links.appStoreiOS}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                App Store iOS
              </Link>
            )}
            {project.links.appStoreAndroid && (
              <Link
                href={project.links.appStoreAndroid}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                App Store Android
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  </div>
  
  );
};

export default ProjectPage;
