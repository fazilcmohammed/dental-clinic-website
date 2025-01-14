import React from "react";
import { services } from "../assets/constant";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <section className="bg-lightblue rounded-xl p-6 ">
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {" "}
          {/* Added 'grid' and 'gap-6' for spacing */}
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center flex flex-col bg-white m-5 p-5 rounded-xl items-center justify-center"
            >
              <div className="bg-skyblue rounded-full p-5 w-20 h-20 ">
                <img src={service.img} alt="" className="w-10 h-auto" />
              </div>
              <h1 className="text-lg font-bold mt-3">{service.service}</h1>
              <p className="text-md text-bodytext font-normal my-3">
                {service.detail}
              </p>
              <button className="">
                <a
                  href="#"
                  className="underline underline-offset-4 flex items-center justify-center font-medium"
                >
                  Learn More{" "}
                  <span className="rounded-full border border-black ml-3 p-0.5 font-bold">
                    <IoIosArrowForward />
                  </span>
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
