// components/ProjectLong.tsx

import React from 'react';

interface ProjectProps {
  thumbnail: string;
  notes: string;
}

const ProjectLong: React.FC<ProjectProps> = ({ thumbnail, notes }) => {
  return (
    <div className='image-long'>
      <img src={thumbnail} alt={notes} />
    </div>
  );
};

export default ProjectLong;
