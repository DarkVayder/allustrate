import Link from 'next/link';
import React from 'react';
import { Navlinks } from '@/constant/constants';

const Nav = () => {
  return (
    <div className="flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-500">
      {/* Logo */}
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-16">ALLUS</h1>
      
      <div className="md:flex items-center space-x-10 hidden">
        {/* Nav Links */}
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url} className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <p className="text-white text-xl hover:text-gray-300">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
