
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-100 text-gray-500 pt-12">
      <ul className="flex space-x-10 text-gray-500 font-newsCycle text-2xl mb-6 ">
        <li>
          <Link href="/" className="hover:text-cyan-600">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-cyan-600">About</Link>
        </li>
        <li>
          <Link href="/HerzbergResume.pdf" className="hover:text-cyan-600">Resume</Link>
        </li>
      </ul>
            
      <div className="flex flex-row justify-between w-[10%] xs:w-[40%] md:w-[20%]">
        <Link href="https://linkedin.com/in/lisaherzberg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-gray-400 hover:text-blue-800 text-3xl" />
        </Link>
        <Link href="https://github.com/Lisamarie73187" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-gray-400 hover:text-gray-600 text-3xl" />
        </Link>
        <Link href="mailto:lisamarieherzberg@gmail.com" aria-label="Email">
          <FaEnvelope className="text-gray-400 hover:text-red-800 text-3xl" />
        </Link>
      </div>
      <div className="mt-auto">
    <p className="text-center text-gray-500 text-sm pt-8 pb-5">
      &copy; 2024 Lisa Marie Herzberg. All rights reserved.
    </p>
  </div>
    </footer>
  );
};

export default Footer;
