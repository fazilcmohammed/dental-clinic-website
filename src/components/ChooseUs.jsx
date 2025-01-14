import React from "react";
import chooseimg from "../assets/img/chooseimg.svg";
import { chooseUs } from "../assets/constant";
import shieldIcon from "../assets/img/Shield Done.svg";
import underline from "../assets/img/Highlight Underline 3.svg";
import { FiPhone } from "react-icons/fi";
import smile from "../assets/img/smile.svg";

const ChooseUs = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 items-center p-16 rounded-xl bg-lightblue">
        <div>
          <img src={chooseimg} alt="" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-5xl font-bold text-darkblue mb-4 text-left capitalize leading-snug">
            Why choose Smile for all your dental treatments?
          </h1>
          <p className="text-left font-normal text-bodytext leading-5">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
          <div>
            {chooseUs.map((point, index) => (
              <div
                key={index}
                className="text-left flex gap-3 items-center justify-start my-5"
              >
                <img src={shieldIcon} alt="" />
                <p className="">{point}</p>
              </div>
            ))}
          </div>
          <button className="bg-midblue text-white px-6 py-4 rounded-xl my-2">
            Book an appoinment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center my-28 mx-7 justify-between">
        <div className="relative items-start justify-start flex flex-col">
          <h1 className="text-5xl  font-bold text-darkblue mb-4 text-left capitalize leading-snug ">
          Leave your worries at the door and enjoy a healthier, more precise smile
          </h1>
          <img
            src={underline}
            className="absolute -top-[66px] w-[50%] left-36 -z-10 "
            alt=""
          />
          <p className="text-left font-normal text-bodytext ">
          We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
          </p>
          <button className="bg-midblue text-white px-6 py-4 rounded-xl my-8">
            Book an appoinment
          </button>
        </div>
        <img src={smile} alt="" />
      </div>
    </section>
  );
};

export default ChooseUs;
