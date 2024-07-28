
import two from '../assets/twoboxer.jpg'
import waist from '../assets/waist.jpg'

const Professional = () => {
    return (
      <div className='h-screen w-full pt-56'>
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
      </div>
    );
};

export default Professional;