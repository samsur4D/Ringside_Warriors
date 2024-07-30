import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer px-32  container mx-auto bg-black w-full">
   <div className="grid grid-cols-4 border py-5 px-4 gap-20  ml-16">
<div className="flex flex-col border-r-2 px-2 h-52   gap-2">
  <h2 className="text-white text-3xl font-bold  ">Ringside Warriors</h2>
  <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam ut magni.</p>
  <p className="flex items-center justify-start gap-5 mt-2 text-white text- xl ">
    <IoLogoFacebook className=""></IoLogoFacebook>
    <IoLogoYoutube></IoLogoYoutube>
    < FaSquareInstagram ></ FaSquareInstagram >
    <FiTwitter></FiTwitter>
  </p>
</div>

<div className="ml-5 border-r-2 h-52 pr-12">
  <h3 className="text-white text-2xl font-bold">Contact Us</h3>
  <span className="flex flex-col gap-2">
  <p className="text-white">851/Lala Road ,New Work</p>
  <p className="text-white">rinngsidewarriors@gmail.com</p>
  <p className="text-white">0934790875093</p>
  <p className="text-white">0743394790624</p>
  </span>
</div>

<div className="ml-6 border-r-2 pr-16 h-52">
  <h3 className="text-white text-2xl font-bold">Quick Links</h3>
 <span className="flex flex-col gap-2">
 <p className="text-white">About</p>
  <p className="text-white">Class</p>
  <p className="text-white">Testimonials</p>
  <p className="text-white">Memberships</p>
 </span>
</div>

<div>
  <h3 className="text-white text-2xl font-bold">Working Hours</h3>
  <p className="text-white">Moneday - Friady</p>
  <p className="text-white">07am - 09pm</p>
  _________________________________

  <p className="text-white mt-2">Saturday - Sunday</p>
  <p className="text-white">09am - 10am</p>
</div>
</div>

  </footer>
  );
};

export default Footer;


