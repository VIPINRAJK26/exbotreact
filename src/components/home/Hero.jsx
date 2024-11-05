import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center '>
      <div className="hero-left w-full justify-center content-center items-center">
        <div >
          <h1 className='text-5xl'>Cross the Barrier of Business <br /> With Powerful</h1>
          <h1 className='text-3.6xl font-bold text-green-500'>Whatsapp Automation</h1>
        </div>
        <div></div>
        <div className="flex flex-col xl:flex-row items-center text-center xl:w-8/12 lg:w-10/12 sm:w-full xl:pl-0 xl:justify-center xl:ml-20">
          <div className="border border-green-600 rounded-2xl flex justify-center xl:w-6/12 lg:w-9/12 md:w-5/12 sm:w-8/12 w-11/12 items-center">
            <a
              href="https://wa.me/+918606123466?text=Hi%20%20ExBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="\Whats App Icon-01.svg"
                // height="100"
                alt="no image"
                className="p-0 m-0 w-1/2"
              />
            </a>
            <a
              href="https://wa.me/+918606123466?text=Hi%20ExBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black w-full text-center"
            >
              <p className="text-center w-full text-sm pt-3 xl:w-full">
                Let's chat to know more about exbot Automation
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right w-1/2 h-auto justify-start flex">
        <img src="/Mobile -01-01new.png" alt="" className='w-full' />
      </div>
    </div>
  );
}

export default Hero