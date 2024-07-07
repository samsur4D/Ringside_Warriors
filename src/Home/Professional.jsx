
import two from '../assets/twoboxer.jpg'
import waist from '../assets/waist.jpg'

const Professional = () => {
    return (
      <>
  <div className='bg-[#3E2723] overflow-hidden max-w-screen     py-[400px]  flex justify-center   '>
      {/* PARENTS */}
    <div className='container mx-auto'>
    <div className='flex container mx-auto  items-center justify-center '>
            {/* part 1 */}
           <div className=''>
                <div className='bg-black  py-16 w-[1600px]   absolute'>
                  <h2 className='text-8xl font-samu font-semibold text-white mt-5 mb-5 ml-5'>PROFESIONAL BOXING <br /> CHAMPIONSHIP</h2>
                  <p className='text-white text-2xl mt-5 mb-5 ml-5'>dapibus nunc hendrerit taciti, augue gravida lobortis facilisis felis <br /> erat luctus ornare dictumst. Praesent eleifend maecenas tellus morbi <br /> hac lacinia fames odio, potenti duis dapibus diam himenaeos porttitor <br /> ullamcorper, ornare vel mattis porta sociosqu faucibus  ok but thias dapibus nunc hendrerit taciti, augue gravida lobortis facilisis felis <br /> erat luctus ornare dictumst. Praesent eleifend maecenas tellus morbi <br /> hac lacinia fames odio, potenti duis dapibus diam himenaeos porttitor <br /> ullamcorper, ornare vel mattis porta sociosqu faucibus dapibus nunc hendrerit taciti, augue gravida lobortis facilisis felis <br /> erat luctus ornare dictumst. Praesent eleifend maecenas tellus morbi <br /> hac lacinia fames odio, potenti duis dapibus diam himenaeos porttitor <br /> ullamcorper, ornare vel mattis porta sociosqu faucibus 
                  </p>
                  <button className='px-10 py-5 bg-orange-900 text-white rounded-md mt-5 mb-5 ml-5'>Learn More</button>
                </div>
                <div className=''>
                  <img className= 'relative z-30 left-[900px] bottom-[150px] w-[600px] ' src={waist} alt="" />
                  <img className='relative bottom-[1100px] left-96 w-[1200px] ml-[1000px] ' src={two} alt="" />
                </div>
                
           </div>
    
    </div>
    </div>

    {/* ----------------------------- */}
    {/* <div>
      <h1 className='text-8xl'>Our Partners</h1>
    </div> */}
  </div>

      </>
    );
};

export default Professional;