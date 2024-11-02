// components/ProjectTall.tsx

import React from 'react';

interface ProjectProps {
  thumbnail: string;
  notes: string;
}

const ProjectTall: React.FC<ProjectProps> = ({ thumbnail, notes }) => {
  return (
    <div className='image-tall'> 
      <img src={thumbnail} alt={notes}/>
    </div>
  );
};

export default ProjectTall;
