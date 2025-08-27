import { useState } from "react";
import {products} from "../../data/products";
import Slide from "./Slide";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEllipseOutline } from "react-icons/io5";

const Carousel = () => {

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? products.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === products.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative bg-[#F2F2F2] w-full ">
      <div className="flex transition-transform ease-out duration-500 w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-full flex-shrink-0">
            <Slide {...product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center bottom-[27px] relative">
        <button 
          onClick={prev} 
          className="cursor-pointer mr-[23px]"
        >
          <IoIosArrowBack className="w-[38px] h-[38px]"/>
        </button>
        <div className="flex gap-[21px]">
          {products.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurr(i)} 
              className="cursor-pointer">
              <IoEllipseOutline
              className={`rounded-full w-[25px] h-[25px] transition-all ${ curr === i ? "text-yellow-300 bg-yellow-300" : "text-[#707070] bg-[#707070] opacity-30"}`}
              />
            </button>
          ))}
        </div>
        <button 
          onClick={next} 
          className="cursor-pointer ml-[23px]"
        >
          <IoIosArrowForward className="w-[38px] h-[38px]"/>
        </button>
      </div>  

    </div>
  );
      
}

export default Carousel;