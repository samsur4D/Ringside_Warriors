import banner from "../assets/cover.webp";
import { PiBoxingGloveFill } from "react-icons/pi";
import { MdTimer } from "react-icons/md";
import { GiShardSword } from "react-icons/gi";
import two from '../assets/twoboxer.jpg'
import waist from '../assets/waist.jpg'

const Banner = () => {
  return (
    <>
      <div className="border-t-2 ">
        <img className="w-full " src={banner} alt="" />
      </div>
      <div className="flex container mx-auto bg-black  py-20 px-20 ">
        <div className=" mr-4 ml-4 px-5">
          <div className="flex gap-4">
            <PiBoxingGloveFill className="text-7xl text-[#d34940]" />
            <h2 className="text-7xl font-semibold font-samu text-[#d34940]">
              Boxing Academy
            </h2>
          </div>
          <p className="text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
        <div className="border-x-2 mr-4 ml-4 px-5 ">
          <div className="flex gap-4 container mx-auto">
            <MdTimer className="text-7xl text-[#d34940]" />
            <h2 className="text-7xl font-semibold font-samu text-[#d34940]">
              Boxing Academy
            </h2>
          </div>
          <p className="text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
        <div className=" mr-4 ml-4 px-5">
          <div className="flex gap-4 items-center ">
            <GiShardSword className="text-7xl text-[#d34940]" />
            <h2 className="text-7xl font-semibold font-samu text-[#d34940]">
              Boxing Academy
            </h2>
          </div>
          <p className="text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
      </div>
 
    </>
  );
};

export default Banner;
