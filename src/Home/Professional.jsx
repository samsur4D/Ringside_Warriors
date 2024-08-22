import React from 'react';
import two from '../assets/twoboxer.jpg';
import waist from '../assets/waist.jpg';

const Professional = () => {
  return (
    <div className='w-full h-full pt-20 lg:pt-56 pb-20 lg:pb-56'>
      <div className='container w-full mx-auto flex flex-wrap lg:flex-nowrap md:relative  lg:relative'>
        <img src={two} alt="" className='md:block lg:block md:absolute md:-bottom-3 md:z-40  lg:-top-32 right-0 w-full md:w-[50%] lg:w-[690px] object-cover'/>
        <div className='bg-black w-full md:basis-3/5 lg:basis-3/5 flex flex-col lg:flex-row'>
          <div className='text-white p-24 lg:p-7  lg:basis-1/2'>
            <h1 className='text-2xl font-bold lg:text-[4rem] leading-tight lg:leading-[4rem]'>PROFESSIONAL BOXING CHAMPIONSHIP</h1>
            <p className='mt-5 pr-0 lg:pr-20 text-sm lg:text-base'>Step into the ring and witness greatness at the Professional Boxing Championship. Experience electrifying matches, world-class fighters, and unparalleled excitement. Feel the adrenaline, cheer for champions . Don’t miss the action!</p>
            <button className='mt-5 px-4 py-2 bg-red-500 font-bold text-sm lg:text-base'>Learn More</button>
          </div>
          <div className='w-full relative md:basis-2/5   mt-5 lg:mt-0'> 
            <img src={waist} alt="" className=' md:block lg:block md:absolute bottom-0 md:bottom-2 lg:bottom-7 right-0 lg:right-7 md:-right-80 md:w-[84%]
             lg:w-[90%] md:h-[450px] lg:h-[500px] object-cover lg:z-40'/>
          </div>
        </div>

        <div className='flex md:flex-col lg:flex-col  lg:w-full lg:basis-2/5 mt-5 lg:mt-0'>
          <div className='md:basis-5/6 lg:basis-5/6 md:relative lg:relative'>
            {/* Optional additional content */}
          </div>
          <div className='basis-1/6 pl-4 lg:pl-8 pb-2 pt-4 text-white'>
            <p className='hidden lg:block text-sm lg:text-[1.2rem] text-justify leading-tight'>Experience.the thrill of the PROFESSIONAL BOXING CHAMPIONSHIP! </p>
           <div className='lg:hidden flex gap-20'>
           <p className='text-5xl md:text-xl lg:text-[1.2rem] md:text-justify  leading-tight'>Experience.the thrill of the PROFESSIONAL BOXING CHAMPIONSHIP! Witness top fighters battle for glory and skill. Feel the excitement, embrace the  Don't miss the action—be there!</p>
           <p className='hidden md:block text-xl border lg:text-[1.2rem] text-justify  leading-tight'>Experience.the thrill of the PROFESSIONAL BOXING CHAMPIONSHIP! Witness top fighters battle for glory and skill. Feel the excitement, embrace the  Don't miss the action—be there!</p>
           </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-60 lg:mt-32'>
        <h1 className='text-3xl font-boxing md:text-4xl lg:text-7xl text-white font-bold mt-12 mb-8 text-center'>OUR PARTNERS</h1>
        <div className='flex flex-wrap justify-center gap-16 lg:gap-24 mt-12 items-center text-center'>
          <img className='w-24 lg:w-56 h-10 border-r-2 px-2 lg:px-10 transform transition-transform duration-1000 hover:scale-150' src="/public/1-logo-client-light.png" alt=""/>
          <img className='transform transition-transform duration-1000 hover:scale-125 w-24 lg:w-56 h-10 border-r-2 px-2 lg:px-10' src="/public/10-logo-client-light.png" alt=""/>
          <img className='transform transition-transform duration-1000 hover:scale-125 w-24 lg:w-56 h-10 border-r-2 px-2 lg:px-10' src="/public/2-logo-client-light.png" alt=""/>
          <img className='transform transition-transform duration-1000 hover:scale-125 w-24 lg:w-56 h-10 border-r-2 px-2 lg:px-10' src="/public/3-logo-client-light.png" alt=""/>
          <img className='transform transition-transform duration-1000 hover:scale-125 w-24 lg:w-56 h-10 px-2 lg:px-10' src="/public/5-logo-client-light.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Professional;
