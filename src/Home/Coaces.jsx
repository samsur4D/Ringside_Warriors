import cone from "../assets/c1.jpg";
import ctwo from "../assets/c2.jpg";
import cthree from "../assets/c3.jpg";

const Coaces = () => {
  return (
    <div className="py-60">
      <div className="flex items-center justify-between px-96 py-32">
        <h1 className="text-white font-samu text-9xl font-semibold">
          COACHES READY TO SPAR <br /> WITH YOUR
        </h1>
        <p className="text-3xl font-semibold text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          dolor dicta ipsum maxime <br /> , id amet exercitationem ex ducimus.
          Dolore deserunt magni ratione recusandae minus nostrum! <br /> Nostrum
          accusamus iure repre
        </p>
      </div>
      <div className="flex justify-center gap-32">
        <div>
          <img className="w-[900px] h-[1020px]" src={cone} alt=""  />
          
        </div>
        <div>
          <img src={ctwo} alt="" />
        </div>
        <div>
          <img src={cthree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coaces;
