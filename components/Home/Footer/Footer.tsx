import React from 'react';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900">
        {/* 1st Part */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl text-white w-[80%] font-bold">
            We develop & create the digital future
          </p>
        </div>

        {/* 2nd Part - Address */}
        <div className="text-white">
          <h1 className="text-xl font-bold">Address</h1>
          <p className="opacity-60 mt-4">123 Kubwa, Abuja, FCT, Nigeria</p>
        </div>

        {/* 3rd Part - Contact */}
        <div className="text-white">
          <h1 className="text-xl font-bold">Contact</h1>
          <p className="opacity-60 mt-4">Email</p>
          <p className="sm:text-xl text-lg font-bold opacity-60">
            allustrate@gmail.com
          </p>
          <p className="opacity-60 mt-2">(+234) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="w-[80%] mx-auto text-gray-300 text-center mt-8">
        Zel © 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
