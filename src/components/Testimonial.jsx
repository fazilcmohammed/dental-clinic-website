import React, { useState, useEffect } from "react";
import underline from "../assets/img/Highlight Underline 3.svg";
import { testimonials } from "../assets/constant";
import star from "../assets/img/Star 1.svg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(testimonials.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <section className="overflow-hidden my-20">
      <div>
        <h1 className="text-5xl font-bold text-darkblue mb-4 text-center relative capitalize leading-snug">
          Our Happy Clients
          <img
            src={underline}
            alt=""
            className="w-80 absolute left-[40%] -top-24 -z-10 right-0"
          />
        </h1>
        <p className="text-center font-normal text-bodytext leading-5">
          We use only the best quality materials on the market in order to{" "}
          <br /> provide the best products to our patients.
        </p>
      </div>

      <div className="my-10">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${(currentIndex * 100)/cardsToShow}%)`}}>
          {testimonials.map((testimonial, index) => (
            <div
              className="flex-shrink-0 w-80 relative justify-center shadow-xl rounded-xl px-6 py-8 gap-2"
              key={index}
            >
              <div className="flex items-center justify-start gap-2">
                <img src={testimonial.image} alt="" className="w-14 h-14" />
                <div className="">
                  <h2>{testimonial.name}</h2>
                  <div className="flex">
                    {Array.from(
                      { length: testimonial.rating },
                      (item, index) => (
                        <img src={star} key={index} alt="" />
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm font-normal text-left my-3">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
        <div className=" mt-10">
          <button onClick={prevCard} className="bg-darkblue text-white px-4 py-2 ml-5">
            <FaArrowLeft />
          </button>
          <button onClick={nextCard} className="bg-darkblue text-white px-4 py-2 ml-5">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
