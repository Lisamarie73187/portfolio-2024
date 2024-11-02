import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    mainImage: string;
    images: string[];
    techStack: string[];
    details: string;
    features: string;
    date: string;
    links?: {
      github?: string;
      live?: string;
    };
  }
}

const ProjectTall: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className='image-tall'> 
      <img src={project.mainImage} alt={project.title}/>
    </div>
  );
};

export default ProjectTall;
