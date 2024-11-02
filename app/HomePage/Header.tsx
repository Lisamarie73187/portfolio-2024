import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-10 bg-white mx-30">
      <h1 className="text-gray-700 font-newsCycle text-3xl">Lisa Herzberg</h1>
      <nav>
        <ul className="flex space-x-10 text-gray-700 font-sans text-xl">
          <li>
            <Link href="/" className="hover:text-cyan-600 font-newsCycle">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-600 font-newsCycle">About</Link>
          </li>
          <li>
            <Link href="/HerzbergResume.pdf" className="hover:text-cyan-600 font-newsCycle">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
