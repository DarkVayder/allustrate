"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Navlinks } from '@/constant/constants';
import { MenuIcon, Search, ShoppingCart } from 'lucide-react';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handle = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Conditional background style
  const bgStyle = navBg ? 'bg-gray-900 shadow-md' : '';

  return (
    <div className={`flex ${bgStyle} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-500 bg-inherit px-8`}>
      {/* Logo */}
      <h1 className="text-3xl text-white font-bold">ALLUS</h1>

      <div className="md:flex items-center space-x-10 hidden">
        {/* Nav Links */}
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url} className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <p className="text-white text-xl hover:text-gray-300">{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-5 md:space-x-8 text-white">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <MenuIcon onClick={openNav} className="cursor-pointer w-6 h-6 md:hidden" />
      </div>
    </div>
  );
};

export default Nav;
