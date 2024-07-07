import banner from '../assets/cover.webp'
import { PiBoxingGloveFill } from "react-icons/pi";

const Banner = () => {
    return (
        <div className='mt-72'>
         <img className='w-full' src={banner} alt="" />

        
        <div className='flex max-w-full bg-black px-60  py-10'>
         
         <div className=' mr-4 ml-4 px-5'>
              <div className='flex'>
              <PiBoxingGloveFill className='text-7xl'/>
                  <h2 className='text-7xl font-bold font-samu'>Boxing Academy</h2>
              </div>
              <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>
         <div className='border-x-2 mr-4 ml-4 px-5'>
              <div className='flex'>
              <PiBoxingGloveFill className='text-7xl'/>
                  <h2 className='text-7xl font-bold font-samu'>Boxing Academy</h2>
              </div>
              <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>
         <div className=' mr-4 ml-4 px-5'>
              <div className='flex '>
              <PiBoxingGloveFill className='text-7xl'/>
                  <h2 className='text-7xl font-bold font-samu'>Boxing Academy</h2>
              </div>
              <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>

        </div>


        </div>
        
    );
};

export default Banner;