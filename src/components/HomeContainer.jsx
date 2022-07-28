import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex-col items-start  justify-center gap-6">
        <div className="w-40 md:w-full flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="bg-white w-10 h-10 rounded-full overflow-hidden drop-shadow-sm">
            <img
              src={Delivery}
              alt="delivary"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] md:text-[4.5rem]  font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base my-3 text-textColor text-center md:text-left md:w-[80%]">
          One of the biggest reasons why people like to order from Master Chef is
          because of the best offers available by them. This is an Indian app
          which is vastly used for food delivery.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br my-3 from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className=" py-2 flex-1 items-center relative ">
        <img
          src={HeroBg}
          alt="herobg"
          className="ml-auto h-320 w-full lg:w-auto lg:h-650 rounded-lg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-5 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-[45%] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 bg-cardOverlay backdrop-blur-md"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[10px] lg:text-sm text-lighttextgray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
