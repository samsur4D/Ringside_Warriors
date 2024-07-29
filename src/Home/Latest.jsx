import React from "react";
import img1 from "../assets/lop1.jpg";
import img2 from "../assets/lop2.jpg";
import img3 from "../assets/lop3.jpg";

const Latest = () => {
  return (
    <div className="bg-[#180e0d] h-screen w-full  pt-5 pb-5">
    <section className="container  mx-auto">
    <div className="heading">
        <h1 className="text-7xl text-white font-bold mb-20">LATEST POST</h1>
      </div>
      {/* ----------- */}

      <div className="img-container mb-12 flex items-center gap-12">
      <div className="img-one hover:bg-black transform duration-1000 hover:-translate-y-7 border  h-[640px] flex flex-col items-center gap-10 w-[500px]">
          <img src={img1} alt="" />
          <span className="flex-col px-5 gap-10 flex justify-start">
            <h2 className="text-3xl font-bold text-white">23 BOXING TIPS TO BE A BETTER BOXER QUICKLY</h2>
            <p className="text-white text-lg">
              Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
              nibh. Quisque velit nisi, pretium ut lacinia in, elementum id
              enim. Proin eget tortor risus.
            </p>
            <button className="flex justify-start text-xl font-bold text-orange-800">Read More</button>
          </span>
        </div>
        <div className="img-one hover:bg-black transform duration-1000 hover:-translate-y-7 border  h-[640px] flex flex-col items-center gap-10 w-[500px]">
          <img src={img2} alt="" />
          <span className="flex-col px-5 gap-10 flex justify-start">
            <h2 className="text-3xl font-bold text-white">23 BOXING TIPS TO BE A BETTER BOXER QUICKLY</h2>
            <p className="text-white text-lg">
              Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
              nibh. Quisque velit nisi, pretium ut lacinia in, elementum id
              enim. Proin eget tortor risus.
            </p>
            <button className="flex justify-start text-xl font-bold text-orange-800">Read More</button>
          </span>
        </div>
        <div className="img-one hover:bg-black transform duration-1000 hover:-translate-y-7 border  h-[640px] flex flex-col items-center gap-10 w-[500px]">
          <img src={img3} alt="" />
          <span className="flex-col px-5 gap-10 flex justify-start">
            <h2 className="text-3xl font-bold text-white">23 BOXING TIPS TO BE A BETTER BOXER QUICKLY</h2>
            <p className="text-white text-lg">
              Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
              nibh. Quisque velit nisi, pretium ut lacinia in, elementum id
              enim. Proin eget tortor risus.
            </p>
            <button className="flex justify-start text-xl font-bold text-orange-800">Read More</button>
          </span>
        </div>
       
      </div>
    </section>
    </div>
  );
};

export default Latest;
