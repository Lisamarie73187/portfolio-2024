import React from 'react';

const Summary: React.FC = () => {
  return (
    <div className="flex items-start justify-between 
          xs:mx-10 sm:mx-20 md:mx-30 lg:mx-30
          xs:my-2 sm:my-2 md:my-4 lg:my-20 
          xs:py-2 sm:py-2 md:py-6 lg:py-10">
      <div className="text-left max-w-2xl">
        <p className="
        xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl 
        font-openSans font-bold text-gray-700 ">
        I am a dedicated full-stack developer specializing in React, React Native, and Node.js, 
        with a strong foundation in TypeScript. 
        </p>
      </div>
    </div>
  );
};

export default Summary;
