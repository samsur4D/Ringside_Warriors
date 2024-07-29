import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoone.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Navber = () => {
  const navItems = (
    <>  
      <Link className="font-samu px-2 lg:px-10 border border-white/40 py-2 lg:py-4 text-sm lg:text-lg text-white active:text-[#d34940]">Home</Link>
      <Link className="font-samu px-2 lg:px-10 border border-white/40 py-2 lg:py-4 text-sm lg:text-lg text-white">About</Link>
      <Link className="font-samu px-2 lg:px-10 border border-white/40 py-2 lg:py-4 text-sm lg:text-lg text-white">Pages</Link>
      <Link className="font-samu px-2 lg:px-10 border border-white/40 py-2 lg:py-4 text-sm lg:text-lg text-white">Classes</Link>
      <Link className="font-samu px-2 lg:px-10 border border-white/40 py-2 lg:py-4 text-sm lg:text-lg text-white">Contact</Link>
    </>
  );

  return (
    <section className="bg-black container mx-auto flex flex-wrap items-center justify-between p-3 lg:gap-60">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 lg:w-28 md:w-24 p-2" />
      </div>
      <div className="flex-grow hidden lg:flex justify-center">
        {navItems}
      </div>
      <div className="flex items-center bg-[#d34940] px-4 py-2 lg:px-12 lg:py-10 text-white font-bold gap-4 lg:gap-12">
        <button className="bg-[#d34940] border-r-2 px-4 lg:px-7">Login</button>
        <button className="bg-[#d34940] px-4 lg:px-7">Sign In</button>
      </div>
      <div className="lg:hidden flex justify-center w-full mt-3">
        <div className="flex justify-center space-x-8 md:space-x-16">
          {navItems}
        </div>
      </div>
    </section>
  );
};

export default Navber;
