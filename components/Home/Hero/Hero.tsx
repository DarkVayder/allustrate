import React from 'react'
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent'>Welcome to ALLUS</h1>
        <p className='text-2xl md:text-4xl sm:text-3xk lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-orange-500 to-cyan-700 bg-clip-text text-transparent'>Creative beautiful images with <br /> Artificial Intelligence</p>
        <p className='mt-3 text:sm md:text-base font-semibold text-center text-gray-300'>Explore our AI-powered image generator tool</p>
      {/*Prompt section */}
      <div className='h-11 md:h-16 w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between'>
        <input type="text" placeholder='Generate your desired Image' className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base' />
        <Button variant={"default"} size={'lg'}>Generate</Button>     
      </div>
      {/*Tags*/}
      <div className='flex items-center mt-6 space-x-4 flex-wrap space-y-3'>
        <p>Popular Tags :</p>
        <Button variant={"secondary"}>Creative</Button>
        <Button variant={"secondary"}>Hyper-reality</Button>
        <Button variant={"secondary"}>Animation</Button>
        <Button variant={"secondary"}>Business</Button>
        <Button variant={"secondary"}>Star-punk</Button>
      </div>
      </div>
    </div>
  )
}

export default Hero
