import React from 'react';
import '../styles/gallery.css';
import ProjectTall from './ProjectTall';
import ProjectLong from './ProjectLong';
import Link from 'next/link';
import { goalsy, gyft, mealLogger, openMindChat, petsmart, sudoku, whatsForDinner } from '../myProjects';


const ProjectContainer: React.FC = () => {
  return (
    <div>
      <div className="project-container">
        <div>
          <Link href={`/project/goalsy`}>
            <ProjectTall project={goalsy}/>
          </Link>
          {/* <Link href={`/project/petsmart`}>
            <ProjectTall project={petsmart}/>
          </Link> */}
        </div>
        <div>
          <Link href={`/project/gyft`}>
          <ProjectLong project={gyft} />
          </Link>
          <Link href={`/project/sudoku`}>
          <ProjectLong project={sudoku} />
          </Link>
          <Link href={`/project/whatsForDinner`}>
          <ProjectLong project={whatsForDinner} />
          </Link>
        </div>
        <div>
        <Link href={`/project/mealLogger`}>
          <ProjectTall project={mealLogger} />
        </Link>
        <Link href={`/project/openMindChat`}>
            <ProjectTall project={openMindChat}/>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ProjectContainer;
