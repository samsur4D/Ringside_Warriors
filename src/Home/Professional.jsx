
import two from '../assets/twoboxer.jpg'
import waist from '../assets/waist.jpg'

const Professional = () => {
    return (
      <div className=' w-full h-full pt-56 pb-56'>
          <div className='container  w-full mx-auto flex relative'>
          <img src={two} alt="" className='absolute -top-32 right-0  w-[690px] object-cover'/>
            <div className='bg-black basis-3/5 flex'>
              <div className='basis-1/2 text-white p-7'>
              <h1 className='text-[4rem] leading-[4rem]'>PROFESIONAL BOXING CHAMPIONSHIP</h1>
              <p className='mt-5 pr-20'>dapibus nunc hendrerit taciti, augue gravida lobortis facilisis felis erat luctus ornare dictumst. Praesent eleifend maecenas tellus morbi hac lacinia fames odio, potenti duis dapibus diam himenaeos porttitor ullamcorper, ornare vel mattis porta sociosqu faucibus</p>
              <button className='mt-5 px-6 py-2 bg-red-500 font-bold'>Learn More</button>
            </div>
              <div className='w-full relative'> 
                  <img src={waist} alt="" className='absolute bottom-7 right-7 w-[90%] h-[500px] object-cover z-40'/>
              </div>
            </div>

            <div className='flex flex-col basis-2/5'>
                <div className='basis-5/6 relative'>
                
                </div>
                <div className='basis-1/6 pl-8 pb-2 pt-4  text-white'>
                  <p className='text-[1.2rem] text-justify leading-tight'> magnis netus commodo malesuada enim vehicula cras. Tristique mus augue fermentum habitasse gravida arcu vitae, purus nibh hendrerit vel non per, quisque curae dui bibendum justo</p>
                </div>
            </div>
          </div>
          {/* --- */}
          <div className='container mx-auto mt-32 '>
             <h1 className='text-6xl text-white font-bold mt-12 mb-8 text-center'>OUR PARTNERS</h1>
             <div className='flex gap-24 mt-24   items-center text-center'>
             <img className='w-56 h-10 border-r-2 px-10 transform transition-transform duration-1000 hover:scale-150' src="/public/1-logo-client-light.png" alt="" />
             <img className='transform transition-transform duration-1000 hover:scale-125 w-56 h-10  border-r-2 px-10' src="/public/10-logo-client-light.png" alt="" />
             <img className='transform transition-transform duration-1000 hover:scale-125 w-56 h-10  border-r-2 px-10' src="/public/2-logo-client-light.png" alt="" />
             <img className='transform transition-transform duration-1000 hover:scale-125 w-56 h-10  border-r-2 px-10' src="/public/3-logo-client-light.png" alt="" />
             <img className='transform transition-transform duration-1000 hover:scale-125 w-56 h-10   px-10' src="/public/5-logo-client-light.png" alt="" />
             </div>
          </div>
      </div>
    );
};

export default Professional;