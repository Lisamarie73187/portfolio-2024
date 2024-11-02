import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-10 bg-white mx-30">
      <h1 className="text-gray-700 font-newsCycle text-3xl">Lisa Herzberg</h1>
      <nav>
        <ul className="flex space-x-10 text-gray-700 font-sans text-xl">
          <li>
            <a href="/" className="hover:text-cyan-600 font-newsCycle">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-cyan-600 font-newsCycle">About</a>
          </li>
          <li>
            <a href="/HerzbergResume.pdf" className="hover:text-cyan-600 font-newsCycle">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
