import Link from 'next/link';
import React from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="
      flex justify-between items-center py-10 
      xs:mx-10 sm:mx-20 md:mx-30"
      >
      <h1 className="
      text-gray-700 font-newsCycle 
      xs:text-xl sm:text-2xl md:text-3xl"
      >Lisa Herzberg</h1>
      <nav>
        <ul className="flex 
        xs:space-x-3 md:space-x-10 lg:space-x-10 
        xs:text-lg md:text-xl lg:text-2xl
        text-gray-700 font-sans"
        >
          <li>
            <Link href="/" className="hover:text-cyan-600 font-newsCycle custom-hover-effect">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-600 font-newsCycle custom-hover-effect">About</Link>
          </li>
          <li>
            <Link href="/HerzbergResume.pdf" className="hover:text-cyan-600 font-newsCycle custom-hover-effect">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
