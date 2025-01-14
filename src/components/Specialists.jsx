import React, { useEffect, useState } from "react";
import { specialists } from "../assets/constant";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Specialists = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    const nextCard = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specialists.length)
    }
    const prevCard = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? specialists.length - 1 : prevIndex-1)
    }

    useEffect(()=>{
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024){
                setCardsToShow(specialists.length)
            }else{
                setCardsToShow(1)
            }
        }
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow)
            return()=> window.removeEventListener('resize', updateCardsToShow)
        
    },[])

  return (
    <section className="overflow-hidden bg-lightblue p-10 rounded-xl">
      <div>
        <h1 className="text-5xl font-bold text-darkblue mb-4 text-center capitalize leading-snug">
          Meet Our Specialists
        </h1>
        <p className="text-center font-normal text-bodytext leading-5">
          We use only the best quality materials on the market in <br /> order
          to provide the best products to our patients.
        </p>
      </div>
      <div className="my-10">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${(currentIndex * 100)/cardsToShow}%)`}}>
          {specialists.map((specialist, index) => (
            <div key={index} className="flex-shrink-0 w-64 relative justify-center  ">
              <img src={specialist.img} alt="" />
              <div className="absolute  bottom-5 left-0 right-0 flex justify-center ">
                <div className="inline-block bg-gradient-to-r from-[#5c95c9] to-[#c5c9cb] w-[90%] py-3 px-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-white text-left">{specialist.name}</h2>
                    <p className="text-md font-normal text-white text-left">{specialist.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-10">
            <button onClick={prevCard} className="bg-white px-4 py-2 ml-5"><FaArrowLeft/></button>
            <button onClick={nextCard} className="bg-white px-4 py-2 ml-5"><FaArrowRight/></button>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
