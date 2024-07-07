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
    <div className=" navbar fixed bg-black border-b-4">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-10 menu-sm dropdown-content bg-black rounded-box  w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <img className="lg:w-96 lg:h-72 " src={logo} alt="" />
        {/* <a className="font-samu btn btn-ghost font-bold text-3xl">Ringside <span>Warriors</span></a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="hidden lg:block  lg:flex navbar-end ml-96">
        <div className="flex  gap-4 mr-32 ">
          <FaFacebook className="text-7xl text-white" />
          <FaSquareInstagram className="text-7xl text-white" />
          <FaTwitter className="text-7xl text-white" />
          <IoLogoYoutube className="text-7xl text-white" />
        </div>
   <div className="">
       {/* login button */}
       <a href="#_" className="relative inline-block  mr-7 text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Button Text</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
        {/* sign up button */}
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
    </div>
  );
};

export default Navber;
