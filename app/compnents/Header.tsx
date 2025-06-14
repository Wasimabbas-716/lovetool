
import React from 'react';
import Nav from "./nav";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-white shadow-lg">
  <div className="container mx-auto px-4 py-6 flex items-center justify-between">
   
   <Link href="/">
    <div className="flex items-center">
      <div className="bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <h1 className="ml-3 text-2xl font-bold">Love Tools</h1>
    </div>
  </Link>
  <Nav/>
   
   
  </div>
</div>

    </header>
  );
};

export default Header;
