import React from 'react';
import two from '../assets/twoboxer.jpg';
import waist from '../assets/waist.jpg';

const Professional = () => {
  return (
    <div className='w-full h-full pt-20 lg:pt-56 pb-20 lg:pb-56'>
      <div className='container w-full mx-auto flex flex-wrap lg:flex-nowrap md:relative  lg:relative'>
        <img src={two} alt="" className='hidden md:block lg:block md:absolute md:-bottom-3 md:z-40  lg:-top-32 right-0 w-full md:w-[50%] lg:w-[690px] object-cover'/>
        <div className='bg-black w-full md:basis-3/5 lg:basis-3/5 flex flex-col lg:flex-row'>
          <div className='text-white p-24 lg:p-7  lg:basis-1/2'>
            <h1 className='text-2xl lg:text-[4rem] leading-tight lg:leading-[4rem]'>PROFESSIONAL BOXING CHAMPIONSHIP</h1>
            <p className='mt-5 pr-0 lg:pr-20 text-sm lg:text-base'>Dapibus nunc hendrerit taciti, augue gravida lobortis facilisis felis erat luctus ornare dictumst. Praesent eleifend maecenas tellus morbi hac lacinia fames odio, potenti duis dapibus diam himenaeos porttitor ullamcorper, ornare vel mattis porta sociosqu faucibus.</p>
            <button className='mt-5 px-4 py-2 bg-red-500 font-bold text-sm lg:text-base'>Learn More</button>
          </div>
          <div className='w-full relative md:basis-2/5   mt-5 lg:mt-0'> 
            <img src={waist} alt="" className='hidden md:block lg:block md:absolute bottom-0 md:bottom-2 lg:bottom-7 right-0 lg:right-7 md:-right-80 md:w-[84%]
             lg:w-[90%] md:h-[450px] lg:h-[500px] object-cover lg:z-40'/>
          </div>
        </div>

        <div className='flex md:flex-col lg:flex-col  lg:w-full lg:basis-2/5 mt-5 lg:mt-0'>
          <div className='md:basis-5/6 lg:basis-5/6 md:relative lg:relative'>
            {/* Optional additional content */}
          </div>
          <div className='basis-1/6 pl-4 lg:pl-8 pb-2 pt-4 text-white'>
            <p className='hidden lg:block text-sm lg:text-[1.2rem] text-justify leading-tight'>Magnis netus commodo malesuada enim vehicula cras. Tristique mus augue fermentum habitasse gravida arcu vitae, purus nibh hendrerit vel non per, quisque curae dui bibendum justo.</p>
           <div className='flex gap-20'>
           <p className='text-xl lg:text-[1.2rem] text-justify bg-green leading-tight'>Magnis netus commodo malesuada enim <br /> vehicula cras. Tristique mus augue fermentum habitasse gravida arcu vitae, purus nibh hendrerit vel non per, quisque curae dui bibendum justo.</p>
           <p className='text-xl border lg:text-[1.2rem] text-justify bg-green leading-tight'>Magnis netus commodo malesuada enim <br /> vehicula cras. Tristique mus augue fermentum habitasse gravida arcu vitae, purus nibh hendrerit vel non per, quisque curae dui bibendum justo.</p>
           </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-60 lg:mt-32'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-12 mb-8 text-center'>OUR PARTNERS</h1>
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
