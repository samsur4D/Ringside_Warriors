import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoone.png';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Navber = () => {
    const navItems = (
        <>
        <Link className='font-samu text-2xl mr-10'>Home</Link>
        <Link className='font-samu text-2xl mr-10'>About</Link>
        <Link className='font-samu text-2xl mr-10'>Pages</Link>
        <Link className='font-samu text-2xl mr-10'>Classes</Link>
        <Link className='font-samu text-2xl mr-10'>Contact</Link>
        </>
    )

    
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>

           
          </div>
          <img className='w-40 h-40' src={logo} alt="" />
          <a className="font-samu btn btn-ghost font-bold text-3xl">Ringside <span>Warriors</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
   
        <div className="navbar-end">
        <div className='flex mr-32 gap-4 w-60'>
                <FaFacebook className='text-3xl'/>
                <FaSquareInstagram className='text-3xl'/>
                <FaTwitter className='text-3xl'/>
                <IoLogoYoutube  className='text-3xl'/>
            </div>
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navber;