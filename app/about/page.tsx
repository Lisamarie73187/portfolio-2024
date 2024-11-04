import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col xs:flex-col md:flex-row justify-center my-20 py-16 xs:mx-10">
      <div className="w-full md:w-1/4 max-w-sm mb-8 md:mb-0 md:mr-8">
        <img
          src="https://lisaportfolio2024.s3.us-west-1.amazonaws.com/PortfolioImage.jpg"
          alt="Lisa Marie Herzberg"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-left max-w-lg pl-0 md:pl-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I&apos;ve been on an exciting journey in software development, where I&apos;ve honed my skills 
          in React and React Native to build dynamic, user-friendly interfaces 
          that bring ideas to life. Alongside that, I&apos;ve developed solid experience 
          in creating reliable back-end systems with Node.js. I love being part 
          of the process that turns concepts into real products and take pride 
          in what I create. I&apos;m big on effective communication, staying organized, 
          and never hesitating to ask questions and learn. Plus, I&apos;ve got a keen eye 
          for detail and always aim for those pixel-perfect designs.
        </p>
        <p className="text-lg text-gray-700">
          When I&apos;m not busy coding, you can find me outdoors staying active through running, 
          hiking, biking, playing volleyball (when I am in San Diego) and snowboarding. 
          I&apos;m also looking forward to trying paddle boarding soon. I love creating things beyond code, 
          with hobbies like knitting and photography. I&apos;m always open 
          to connecting, so feel free to reach out anytime—I&apos;d love to chat!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
