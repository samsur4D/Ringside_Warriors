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
     


      <Link className=" font-samu lg:px-10 border border-white/40 py-4   lg:text-lg relative active text-[#d34940]">Home</Link>
      <Link className=" font-samu lg:px-10 border border-white/40 py-4 relative   lg:text-lg text-white">About</Link>
      <Link className=" font-samu lg:px-10 border border-white/40 py-4   lg:text-lg  text-white">Pages</Link>
      <Link className=" font-samu lg:px-10 border border-white/40 py-4   lg:text-lg  text-white">Classes</Link>
      <Link className=" font-samu lg:px-10 border border-white/40 py-4   lg:text-lg  text-white">Contact</Link>
    </>
  );

  return (
  <>
 <section className="bg-black container mx-auto flex items-center justify-between  gap-60">
  <div>
    <img src={logo} alt="" className="w-28 p-3" />
  </div>
  <div>
     {navItems}
  </div>
   <div className="flex items-center bg-[#d34940]  px-12 py-10  text-white font-bold gap-12">
      <button className="bg-[#d34940]  border-r-2 px-7">Login </button>
      <button className="bg-[#d34940] ">Sign In</button>
    </div>   
    
 </section>
  </>
  );
};

export default Navber;


