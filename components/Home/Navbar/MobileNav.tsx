import { Navlinks } from '@/constant/constants';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div className={`fixed inset-0 z-[1050] bg-gray-900 text-white flex flex-col items-center justify-center transition-transform duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
      {Navlinks.map((link) => (
        <Link href={link.url} key={link.id}>
          <p className="text-xl font-bold border-b-[1.5px] pb-1 sm:text-[30px] hover:text-white">{link.label}</p>
        </Link>
      ))}
      {/* Close Icon */}
      <XIcon onClick={closeNav} className="absolute top-4 right-4 w-6 h-6 cursor-pointer" />
    </div>
  );
};

export default MobileNav;
