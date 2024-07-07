import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoone.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Navber = () => {
  const navItems = (
    <>
      {/* <Link className='font-samu p-2 px-14 border-x-8  text-5xl mr-10 text-white'>Home</Link>
        <Link className='font-samu p-2    text-5xl mr-10 text-white'>About</Link>
        <Link className='font-samu p-2 px-14  border-x-8  text-5xl mr-10 text-white'>Pages</Link>
        <Link className='font-samu p-2   text-5xl mr-10 text-white'>Classes</Link>
        <Link className='font-samu p-2 px-14  border-x-8  text-5xl mr-10 text-white'>Contact</Link> */}
      <Link className=" font-samu lg:px-10 border lg:p-24    lg:text-5xl  text-white">Home</Link>
      <Link className=" font-samu lg:px-10 border lg:p-24    lg:text-5xl  text-white">About</Link>
      <Link className=" font-samu lg:px-10 border lg:p-24    lg:text-5xl  text-white">Pages</Link>
      <Link className=" font-samu lg:px-10 border lg:p-24    lg:text-5xl  text-white">Classes</Link>
      <Link className=" font-samu lg:px-10 border lg:p-24    lg:text-5xl  text-white">Contact</Link>
    </>
  );

  return (
  <>
  {/* Navber parents */}
  <div className="bg-black fixed w-full border-b-2 z-40 flex items-center justify-between">

     {/* Navber start */}
     <div className="items-center flex ">
            <div><img src={logo} alt="" /></div>
            <div className="ml-40">{navItems}</div>
     </div>
      {/* Navber start */}
      {/* ___________________________________________________________________________________________________________ */}
       {/* Navber End */}
       <div className="flex items-center">
           <div className="flex items-center gap-5 mr-60"> 
            <FaFacebook className="text-7xl text-white" />
            <FaSquareInstagram className="text-7xl text-white" />
            <FaTwitter className="text-7xl text-white" />
            <IoLogoYoutube className="text-7xl text-white" />
          </div>
          <div className="gap-5 flex">
            {/* sign in button */}
            <a href="#_" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Button Text</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
            {/* sign up buuton */}
            <a href="#_" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Button Text</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
          </div>
       </div>
       {/* Navber End */}

  </div>
   {/* Navber parents */}
  </>
  );
};

export default Navber;


