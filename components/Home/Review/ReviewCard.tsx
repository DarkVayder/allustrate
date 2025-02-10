import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  name: string;
  role: string;
  review: string; // 
};

const ReviewCard = ({ image, name, role, review }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <QuoteIcon className="w-10 h-10 text-yellow-400 mb-4" />
      
      {/* ✅ Review Text */}
      <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80">
        {review}
      </p>

      <div className="mt-8 text-center">
        {/* ✅ Reviewer's Name & Role */}
        <h1 className="text-base md:text-3xl font-bold">{name}</h1>
        <p className="text-sm md:text-lg font-bold text-white">{role}</p>

        {/* ✅ Reviewer's Image */}
        <Image 
          src={image} 
          alt={name} 
          height={80} 
          width={80} 
          className="mt-6 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
