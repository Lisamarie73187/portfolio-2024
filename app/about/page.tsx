import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-50">
      <div className="w-1/3 max-w-xs mr-8">
        <img
          src="https://via.placeholder.com/300"
          alt="Lisa Marie Herzberg"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-2/3 text-left max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I am a passionate full-stack developer with a knack for creating engaging and efficient web and mobile applications. My journey in software development has been shaped by my expertise in React and React Native, allowing me to build dynamic, user-friendly interfaces that bring ideas to life.
        </p>
        <p className="text-lg text-gray-700">
          With a strong foundation in JavaScript, TypeScript, and back-end technologies like Node.js, I am committed to delivering scalable, high-quality solutions. I thrive in collaborative environments and am continuously expanding my skill set to stay at the forefront of technology.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
