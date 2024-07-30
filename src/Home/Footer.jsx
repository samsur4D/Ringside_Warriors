import React from "react";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer bg-black w-full">
      <div className="container mx-auto py-10 px-5 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl lg:text-3xl font-bold">Ringside Warriors</h2>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam ut magni.</p>
            <div className="flex items-center gap-5 mt-2 text-white text-xl">
              <IoLogoFacebook />
              <IoLogoYoutube />
              <FaSquareInstagram />
              <FiTwitter />
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl lg:text-2xl font-bold">Contact Us</h3>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-white">851/Lala Road, New York</p>
              <p className="text-white">ringsidewarriors@gmail.com</p>
              <p className="text-white">0934790875093</p>
              <p className="text-white">0743394790624</p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl lg:text-2xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-white">About</p>
              <p className="text-white">Class</p>
              <p className="text-white">Testimonials</p>
              <p className="text-white">Memberships</p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl lg:text-2xl font-bold">Working Hours</h3>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-white">Monday - Friday</p>
              <p className="text-white">07am - 09pm</p>
              <hr className="border-t border-gray-500 my-2" />
              <p className="text-white">Saturday - Sunday</p>
              <p className="text-white">09am - 10am</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
