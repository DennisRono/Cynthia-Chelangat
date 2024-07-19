import Image from 'next/image'
import React from 'react'
import LandingImage from '@/assets/images/cynthia_landing.png'
import LandingPlaceholder from '@/assets/images/amuck.png'

const Landing = () => {
  return (
    <div className="h-[calc(85vh-56px)] px-[5%]">
      <div className="container h-full">
        <div className="flex justify-between h-full">
          <div className="flex-1 flex items-end justify-start">
            <div className="pb-8">
              <span className="mb-4 inline-flex items-center justify-center text-transparent bg-clip-text border border-opacity-20 rounded-full text-sm font-medium tracking-wide leading-tight px-3 py-1 uppercase gradient-text cursor-pointer">
                Ventures
              </span>
              <h1 className="font-bold font-apercu text-8xl mb-4">
                Uniting Muslim Students Nationwide
              </h1>
              <p className="font-volte-rounded text-xl mb-4">
                An umbrella association forging connections between Muslim
                student communities, fostering collaboration, and addressing
                challenges faced by Muslim students.
              </p>
              <button className="h-min w-min rounded-full bg-black text-white text-nowrap py-4 px-6 my-8">
                Join the harvest
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <Image src={LandingPlaceholder} alt="" className="w-[85%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
