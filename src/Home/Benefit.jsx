import React from 'react';
import sixpack from '../assets/uff.jpg'
import alone from '../assets/alone.jpg'
import hardwork from '../assets/hardwork.jpg'

const Benefit = () => {
    return (
        <div className='benefit bg-fixed  grid grid-cols-2 gap-20'>
          <div className='grid grid-cols-2 gap-20'>
          <div className='bg-black opacity-50 px-96 py-40'>
               <h1 className='text-white text-9xl font-samu'>Improves Cardiovascular Health</h1> 
               <p  className='text-white text-3xl font-semibold'>Boxing is a high-intensity workout that helps to improve heart health by increasing heart rate and stamina.</p>
            </div>
            <div className='bg-black opacity-50 px-60 py-40'>
               <h1 className='text-white text-9xl font-samu'>Builds Strength and Muscle Tone</h1> 
               <p  className='text-white text-3xl font-semibold'>he repetitive punches and defensive movements in boxing help build muscle strength and tone, especially in the upper body, core, and legs.</p>
            </div>
            <div className='bg-black opacity-50 px-60 py-40'>
               <h1 className='text-white text-9xl font-samu'>Enhances Coordination and Balance</h1> 
               <p  className='text-white text-3xl font-semibold'>Boxing requires precise footwork, quick reflexes, and coordination between the hands and eyes, improving overall balance and coordination.
               </p>
            </div>
            <div className='bg-black opacity-50 px-60 py-40'>
               <h1 className='text-white text-9xl font-samu'>Burns Calories and Aids Weight Loss</h1> 
               <p  className='text-white text-3xl font-semibold'>A boxing workout can burn a significant number of calories, making it an effective exercise for weight loss and fat burning.
               </p>
            </div>
            <div className='bg-black opacity-50 px-60 py-40'>
               <h1 className='text-white text-9xl font-samu'>Teaches Discipline and Self-Control</h1> 
               <p  className='text-white text-3xl font-semibold'>Boxing instills a sense of discipline, requiring consistent practice and self-control, which can be beneficial in other areas of life.</p>
            </div>
            <div className='bg-black opacity-50 px-96 py-40'>
               <h1 className='text-white text-9xl font-samu'>Provides  Self-Defense Skills</h1> 
               <p  className='text-white text-3xl font-semibold'>The techniques learned in boxing can be useful for self-defense, providing a sense of security and empowerment.</p>
            </div>
          </div>

          <div className='flex items-center'>
             <img className='h-[1280px]' src={sixpack} alt="" /><img  src={alone} alt="" /><img className='h-[1280px]' src={hardwork} alt="" />
          </div>
          <div className='bg-black opacity-60'>
            <h1 className="text-9xl text-white  font-samu">"Float like a butterfly, sting like a bee. <br /> The hands can't hit what the eyes can't see."</h1>
          </div>
        </div>
    );
};

export default Benefit;