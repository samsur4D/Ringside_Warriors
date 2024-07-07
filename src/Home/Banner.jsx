import banner from '../assets/cover.webp'
import { PiBoxingGloveFill } from "react-icons/pi";
import { MdTimer } from "react-icons/md";
import { GiShardSword } from "react-icons/gi";

const Banner = () => {
    return (
        <div className='border-t-4 mt-64'>
         <img className='w-full' src={banner} alt="" />

        
        <div className='flex max-w-full bg-black px-72  py-32'>
         
         <div className=' mr-4 ml-4 px-5'>
              <div className='flex gap-4'>
              <PiBoxingGloveFill className='text-7xl text-orange-700'/>
                  <h2 className='text-7xl font-semibold font-samu text-orange-700'>Boxing Academy</h2>
              </div>
              <p className='text-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>
         <div className='border-x-2 mr-4 ml-4 px-5'>
              <div className='flex gap-4'>
              <MdTimer  className='text-7xl text-orange-700'/>
                  <h2 className='text-7xl font-semibold font-samu text-orange-700'>Boxing Academy</h2>
              </div>
              <p className='text-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>
         <div className=' mr-4 ml-4 px-5'>
              <div className='flex gap-4 items-center '>
              <GiShardSword className='text-7xl text-orange-700'/>
                  <h2 className='text-7xl font-semibold font-samu text-orange-700'>Boxing Academy</h2>
              </div>
              <p className='text-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?</p>
         </div>

        </div>


        </div>
        
    );
};

export default Banner;