import React from "react";
import welcome_img from "../assets/img/welcome_img.svg";
import underline from "../assets/img/Highlight Underline 3.svg";
import { FiPhone } from "react-icons/fi";

const Welcoming = () => {
  return (
    <section className="my-40 mx-5">
      <div className="grid grid-cols-2 gap-20 items-center justify-between">
        <div className="relative items-start justify-start flex flex-col">
          <h1 className="text-5xl  font-bold text-darkblue mb-4 text-left capitalize leading-snug ">
            We’re welcoming new patients and can’t wait to meet you.
          </h1>
          <img
            src={underline}
            className="absolute -top-[66px] w-[50%] left-36 -z-10 "
            alt=""
          />
          <p className="text-left font-normal text-bodytext leading-5">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div className="flex items-center justify-center my-5">
            <div className="relative w-full">
              {/* Phone Icon */}
              <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

              {/* Input Field */}
              <input
                type="text"
                placeholder="Enter your phone number"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* <button className="bg-midblue">Submit</button> */}
          </div>
        </div>
        <img src={welcome_img} alt="" />
      </div>
    </section>
  );
};

export default Welcoming;
