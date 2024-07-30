import banner from "../assets/cover.webp";
import { PiBoxingGloveFill } from "react-icons/pi";
import { MdTimer } from "react-icons/md";
import { GiShardSword } from "react-icons/gi";
import two from "../assets/twoboxer.jpg";
import waist from "../assets/waist.jpg";

const Banner = () => {
  return (
    <>
      <div className="border-t-2 ">
        <img className="w-full " src={banner} alt="" />
      </div>
      {/* _------------------------------------------------------------------------------ */}
      {/* <div className="flex flex-row md:flex-row lg:flex-row   container mx-auto bg-black  lg:py-20 lg:px-20 "> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3   container mx-auto bg-black  lg:py-20 lg:px-20 ">
        <div className="md:ml-2 md:mr-2 md:mt-5 lg:mr-4 lg:ml-4 lg:px-5">
          <div className="flex gap-4">
            {/* <PiBoxingGloveFill className="text-3xl md:text-4xl lg:text-7xl text-[#d34940]" /> */}
            <h2 className="text-3xl md:text-3xl lg:text-7xl font-semibold font-samu text-[#d34940]">
              Boxing Academy
            </h2>
          </div>
          <p className="text-xl md:text-xl  lg:text-3xl text-white leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
        <div className="md:border-x-2 lg:border-x-2 md:ml-2 pl-3 md:mr-2 md:mt-5 lg:mr-4 lg:ml-4 lg:px-5">
          <div className="flex gap-4 container mx-auto">
            {/* <MdTimer className="text-3xl md:text-4xl lg:text-7xl text-[#d34940]" /> */}
            <h2 className="text-3xl md:text-3xl lg:text-7xl font-semibold font-samu text-[#d34940]">
           
KICKBOXING Fight
            </h2>
          </div>
          <p className="text-xl md:text-xl  lg:text-3xl text-white leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
        <div className="block lg:hidden md:hidden md:ml-2 md:mr-2 md:mt-5 lg:mr-4 lg:ml-4 lg:px-5">
          <div className="flex gap-4 items-center ">
            {/* <GiShardSword className="text-3xl md:text-4xl lg:text-7xl text-[#d34940]" /> */}
            <h2 className="text-3xl md:text-3xl lg:text-7xl font-semibold font-samu text-[#d34940]">
            Yoga Session
            </h2>
          </div>
          <p className="text-xl md:text-xl  lg:text-3xl text-white leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
        <div className=" md:ml-2 md:mr-2 md:mt-5 lg:mr-4 lg:ml-4 lg:px-5">
          <div className="flex gap-4 items-center ">
            {/* <GiShardSword className="text-3xl md:text-4xl lg:text-7xl text-[#d34940]" /> */}
            <h2 className="text-3xl md:text-3xl lg:text-7xl font-semibold font-samu text-[#d34940]">
            PERSONAL TRAINER
            </h2>
          </div>
          <p className="text-xl md:text-xl  lg:text-3xl text-white leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt eius
            dolorem dicta. Beatae, ex. Deserunt, dolores. Ipsum, sequi quae?
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
