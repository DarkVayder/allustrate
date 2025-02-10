import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-900 text-white'>
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        {/* Image */}
        <div className='order-2 xl:order-1' data-aos="zoom-in" data-aos-anchor-placement='top-center'>
          <Image 
            src="/images/about.jpg" 
            alt="about" 
            width={400} 
            height={400} 
            className="rounded-lg w-full"
          />
        </div>

        {/* Content */}
        <div className='order-1 xl:order-2 text-center xl:text-left'>
          <h2 className='text-gray-300 font-semibold mb-4 text-lg capitalize'>
            What we offer
          </h2>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Create Your Own AI Image
          </h1>
          <p className='text-gray-400 text-lg max-w-[600px] mx-auto xl:mx-0'>
            Our AI-powered platform allows you to generate high-quality images effortlessly. 
            Whether you are an artist, designer, or just exploring creativity, we have got the tools for you.
          </p>
          <Button className='bg-rose-500 h-12 w-36 text-base uppercase' size={"lg"}>About Us</Button>
        </div>
      </div>
    </div>
  )
}

export default About
