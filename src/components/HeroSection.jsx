import React from 'react'
import dentist from '../assets/img/dentist.png'
import underline from '../assets/img/Highlight Underline 3.svg'

const HeroSection = () => {
  return (
    <section className=" pt-16">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="leading-snug text-5xl font-bold text-darkblue mb-4 relative">
            Get Ready For Your Best Ever Dental Experience! 
          </h1>
          <img src={underline} className='absolute left-48 w-[450px] -z-10 top-48' alt="" />
          <p className="text-bodytext text-lg my-10">
            We use only the best quality materials on the market in order to
            provide the best products to our patients. So don’t worry about
            anything and book yourself.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700">
              Book an appointment
            </button>
            <div className="flex items-center text-blue-900 font-medium">
              <div className="flex flex-col items-start">
                <span>Dental 24H Emergency</span>
                <span>0900-78601</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          <img
            src={dentist}
            alt="Dentist"
            className="w-full rounded-lg "
          />
          {/* Floating Icons */}
          
        </div>
      </div>
    </section>
  )
}

export default HeroSection