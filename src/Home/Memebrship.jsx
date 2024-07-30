import React from 'react';

const Membership = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <div className='main-div container mx-auto pt-16'>
        <div>
          <h1 className='text-3xl lg:text-6xl text-white font-bold text-center mb-10 lg:mb-20'>MEMBERSHIPS PRICING PLANS</h1>
        </div>
      </div>
      {/* -- */}
      <div className='card-container flex flex-col lg:flex-row items-center justify-evenly container mx-auto gap-10 lg:gap-0'>
        <div className='card bg-[#180e0d] relative hover:translate-y-2 lg:hover:translate-y-10 hover:bg-[#2d3436] duration-1000 flex flex-col gap-4 text-white py-10 lg:py-20 px-5 lg:px-7 w-11/12 lg:w-[24rem]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <span className='flex items-center gap-2 lg:gap-5'>
            <h2 className='text-4xl lg:text-6xl font-bold '>$80</h2>
            <h2 className='text-lg lg:text-2xl font-bold '>/MONTH</h2>
          </span>
          <button className='bg-[#d34940] px-4 lg:px-6 hover:font-bold py-2 lg:py-3 duration-100'>Join Now</button>
          <p className='border-b-2'>Tortor Neque Ultricies Facilisis</p>
          <p className='border-b-2'>Platea Nisl Ligula Lacinia</p>
          <p className='border-b-2'>Vulputate Iaculis Nulla Non Nunc Aliquet</p>
          <p className=''>Laoreet Ultricies Eros Cum Phasellus</p>
          <span className='bg-[#d34940] px-4 lg:px-6 font-bold text-white py-3 lg:py-5 absolute -top-4 lg:-top-7'>EXPERT</span>
        </div>
        <div className='card bg-[#180e0d] relative hover:translate-y-2 lg:hover:translate-y-10 hover:bg-[#2d3436] duration-1000 flex flex-col gap-4 text-white py-10 lg:py-20 px-5 lg:px-7 w-11/12 lg:w-[24rem]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <span className='flex items-center gap-2 lg:gap-5'>
            <h2 className='text-4xl lg:text-6xl font-bold '>$30</h2>
            <h2 className='text-lg lg:text-2xl font-bold '>/MONTH</h2>
          </span>
          <button className='bg-[#d34940] px-4 lg:px-6 hover:font-bold py-2 lg:py-3 duration-100'>Join Now</button>
          <p className='border-b-2'>Tortor Neque Ultricies Facilisis</p>
          <p className='border-b-2'>Platea Nisl Ligula Lacinia</p>
          <p className='border-b-2'>Vulputate Iaculis Nulla Non Nunc Aliquet</p>
          <p className=''>Laoreet Ultricies Eros Cum Phasellus</p>
          <span className='bg-[#d34940] px-4 lg:px-6 font-bold text-white py-3 lg:py-5 absolute -top-4 lg:-top-7'>BEGINNER</span>
        </div>
        <div className='card bg-[#180e0d] relative hover:translate-y-2 lg:hover:translate-y-10 hover:bg-[#2d3436] duration-1000 flex flex-col gap-4 text-white py-10 lg:py-20 px-5 lg:px-7 w-11/12 lg:w-[24rem]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <span className='flex items-center gap-2 lg:gap-5'>
            <h2 className='text-4xl lg:text-6xl font-bold '>$140</h2>
            <h2 className='text-lg lg:text-2xl font-bold '>/MONTH</h2>
          </span>
          <button className='bg-[#d34940] px-4 lg:px-6 hover:font-bold py-2 lg:py-3 duration-100'>Join Now</button>
          <p className='border-b-2'>Tortor Neque Ultricies Facilisis</p>
          <p className='border-b-2'>Platea Nisl Ligula Lacinia</p>
          <p className='border-b-2'>Vulputate Iaculis Nulla Non Nunc Aliquet</p>
          <p className=''>Laoreet Ultricies Eros Cum Phasellus</p>
          <span className='bg-[#d34940] px-4 lg:px-6 font-bold text-white py-3 lg:py-5 absolute -top-4 lg:-top-7'>PRIVATE COACH</span>
        </div>
      </div>
    </div>
  );
};

export default Membership;
