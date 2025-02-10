'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={6000}
      keyBoardControl={true}
      arrows={true}
    >
      <ReviewCard 
        image="/images/u1.jpg" 
        name="John Snow" 
        role="King in the North" 
        review="This AI tool is a game-changer! Highly recommend." 
      />
      <ReviewCard 
        image="/images/u2.jpg" 
        name="Khaleesi" 
        role="Queen" 
        review="Great and Very Fast" 
      />
      <ReviewCard 
        image="/images/u3.jpg" 
        name="Michael Scofield" 
        role="Engineer" 
        review="Cool tool" 
      />
    </Carousel>
  );
};

export default Slider;
