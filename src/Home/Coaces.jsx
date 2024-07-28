import cone from "../assets/cococ.jpeg";
import ctwo from "../assets/c2.jpg";
import cthree from "../assets/c3.jpg";

const Coaces = () => {
  return (
<div className="py-32">
  <div className="image-containe  container mx-auto grid grid-cols-3 gap-16 ">
        <div className="relative ">
          <img className="hover:translate-y-4 transform transition-transform duration-700 h-[600px] w-full object-cover" src={cone} alt="" />
          <span className="hover:-translate-y-4 transform transition-transform duration-700 inline-block px-6 py-3 font-bold text-white text-xl bg-red-400 absolute -bottom-10">
             <p>RYAN REYNORLDS
             </p>
             <p>Boxing Coach</p>
          </span>
        </div>
        <div>
        <img className="h-[600px] w-full object-cover" src={ctwo} alt="" />
        </div>
        <div>
        <img className="h-[600px] w-full object-cover" src={cthree} alt="" />
        </div>
  </div>
</div>
  );
};

export default Coaces;
