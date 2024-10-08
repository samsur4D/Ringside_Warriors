import cone from "../assets/cococ.jpeg";
import ctwo from "../assets/c2.jpg";
import cthree from "../assets/c3.jpg";
import Marquee from "react-fast-marquee";

const Coaces = () => {
  return (
<div className="pt-12">
  <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between mb-12">
    <h1 className="text-8xl text-white font-boxing font-bold">COACHES READY TO SPAR WITH YOUR</h1>
    <p className="text-white">Unlock your potential with our expert coaches. Personalized guidance, unwavering support—achieve your goals and transform your future today!</p>
  </div>
  {/* ---------------------- */}
  <div className="image-containe pb-24 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 ">
        <div className="relative ">
          <img className="hover:translate-y-4 transform transition-transform duration-700 lg:h-[600px] w-full object-cover" src={cone} alt="" />
          <span className="hover:-translate-y-4 transform transition-transform duration-700 inline-block px-6 py-3 font-bold text-white text-xl bg-[#d34940] absolute -bottom-10">
             <p>RYAN REYNORLDS
             </p>
             <p>Boxing Coach</p>
          </span>
        </div>
        <div className="relative ">
          <img className="hover:translate-y-4 transform transition-transform duration-700 lg:h-[600px] w-full object-cover" src={ctwo} alt="" />
          <span className="hover:-translate-y-4 transform transition-transform duration-700 inline-block px-6 py-3 font-bold text-white text-xl bg-[#d34940] absolute -bottom-10">
             <p>Byron Diokle
             </p>
             <p>Boxing Coach</p>
          </span>
        </div>
        <div className="relative ">
          <img className="hover:translate-y-4 transform transition-transform duration-700 lg:h-[600px] w-full object-cover" src={cthree} alt="" />
          <span className="hover:-translate-y-4 transform transition-transform duration-700 inline-block px-6 py-3 font-bold text-white text-xl bg-[#d34940] absolute -bottom-10">
             <p>Jhon Rasotgis
             </p>
             <p>Boxing Coach</p>
          </span>
        </div>
  </div>
  {/* sponser */}
  <div className="mt-20 overflow-hidden">
     
      <div className="relative md:relative lg:relative">
      <img className="w-full" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGVpOWZ2MWxicDZ2ZjgyMTRmN2E3NXlnMHJlcnUwZnUwcmY3bTRqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPpAAxoMBYWDbfa/giphy.gif" alt="" />
         
           <div className="absolute top-0 bg-black p-12 h-full w-full opacity-10 hover:opacity-80 duration-1000">
              <div className= "mt-[30px] md:mt-[140px] lg:mt-80 hover:opacity-100">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold mb-12 text-center">Featured In</h1>
                <Marquee className="container mx-auto" speed={120}>
                <div className="flex items-center gap-20">
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/AskMen-logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/Bustle-Transparent-Logo-e1646771698121.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/ESPN-logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/livestrong-logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/ESPN-logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/NoPath-Copy-9.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/SHAPE-Logo.jpg" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/Mens-Health-Logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/MSN-logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/NoPath-Copy-8.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/NoPath-Copy-9.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/SHAPE-Logo.jpg" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12" src="/public/Vanity-Fair-Logo.png" alt="" />
                <img className="w-12 h-8 lg:w-32 lg:h-12 mr-12" src="/public/Yahoo-Life-Logo-1.png" alt="" />
              
                </div>
                </Marquee>
              </div>
           </div>
          
      </div>
    
      
  </div>
</div>
  );
};

export default Coaces;
