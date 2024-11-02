import React from 'react';
import '../styles/gallery.css';
import ProjectTall from './ProjectTall';
import ProjectLong from './ProjectLong';
import Link from 'next/link';
import { goalsy, gyft, mealLogger, sudoku } from '../myProjects';


const ProjectContainer: React.FC = () => {
  return (
    <div>
      <div className="project-container">
        <div>
          <Link href={`/project/goalsy`}>
          <ProjectTall project={goalsy}/>
          </Link>
        </div>
        <div>
          <Link href={`/project/gyft`}>
          <ProjectLong project={gyft} />
          </Link>
          <Link href={`/project/sudoku`}>
          <ProjectLong project={sudoku} />
          </Link>
        </div>
        <div>
        <Link href={`/project/mealLogger`}>
          <ProjectTall project={mealLogger} />
        </Link>
        </div>
      </div>
    </div>

  );
};

export default ProjectContainer;
