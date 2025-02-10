import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'

const Home = () => {
  return (
    <div className="text-white min-h-screen overflow-x-hidden pt-16">
      <Hero />
      <RecentImage />
      <About />
    </div>
  )
}

export default Home
