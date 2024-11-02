import React from 'react';
import '../styles/gallery.css';
import ProjectTall from './ProjectTall';
import ProjectLong from './ProjectLong';
import Link from 'next/link';
import { goalsy, gyft, mealLogger, sudoku } from '../myProjects';


const scentricImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png";
const scentricNotes = "Scentric Project";

const rexImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png";
const rexNotes = "Rex Project";
const tictactoeImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png";
const tictactoeNotes = "Tic Tac Toe Project";
const sudokuImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/rex/rex.png";
const sudokuNotes = "Sudoku Project";

const gyftImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png";
const gyftNotes = "Gyft Project";
const mealLoggerImage = "https://portfoliolisa.s3-us-west-1.amazonaws.com/goalsy/thumbnailVertical.png";
const mealLoggerNotes = "Meal Logger Project";

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
          {/* <ProjectLong thumbnail={sudokuImage} notes={sudokuNotes} /> */}
        </div>
        <div>
        <Link href={`/project/mealLogger`}>
          <ProjectTall project={mealLogger} />
        </Link>
          {/* <ProjectTall thumbnail={mealLoggerImage} notes={mealLoggerNotes} /> */}
        </div>
      </div>
    </div>

  );
};

export default ProjectContainer;