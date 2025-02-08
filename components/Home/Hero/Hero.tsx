'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { toast } from 'sonner';
import { Loader } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
      headers: {
        'x-rapidapi-key': '1348f91b9fmshc8da5377a337406p1c8a51jsn92a9c4511909',
        'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: { inputs: prompt },
    };

    try {
      const response = await axios.request(options);
      setImage(response.data.url);
      toast.success('Image generated successfully');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error('Unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.target = "_blank";
    link.href = image;
    link.download = 'allustrate_image.jpg';
    link.click();
  };

  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent'>
          Welcome to ALLUS
        </h1>
        <p className='text-2xl md:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-orange-500 to-cyan-700 bg-clip-text text-transparent'>
          Create beautiful images with <br /> Artificial Intelligence
        </p>
        <p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>
          Explore our AI-powered image generator tool
        </p>

        {/* Prompt section */}
        <div className='h-11 md:h-16 w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between'>
          <input
            type="text"
            placeholder='Generate your desired Image'
            className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleImageGeneration} variant="default" size="lg">
            Generate
          </Button>
        </div>

        {/* Tags */}
        <div className='flex items-center mt-6 space-x-4 flex-wrap'>
          <p>Popular Tags :</p>
          <Button variant="secondary">Creative</Button>
          <Button variant="secondary">Hyper-reality</Button>
          <Button variant="secondary">Animation</Button>
          <Button variant="secondary">Business</Button>
          <Button variant="secondary">Star-punk</Button>
        </div>

        {/* Generated Image */}
        {loading && (
          <div className='mt-6'>
            <Loader className='animate-spin' />
          </div>
        )}
        {image && (
          <div className='mt-12 flex flex-col items-center'>
            <img src={image} alt='Generated' className='max-w-full h-[500px] rounded-lg shadow-lg' loading='lazy' />
            <Button onClick={handleDownloadImage} className='mt-4 mb-4 bg-orange-500 hover:bg-orange-900'>
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
