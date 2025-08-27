import { useState } from "react";
import { categories } from "../../data/categories";
import { IoEllipseOutline } from "react-icons/io5";
import CategoryItem from "./CategoryItem";


const FeaturedCategories = () => {

  const [curr, setCurr] = useState(0);

  return (
  <div className="flex flex-col items-center px-5 md:mx-[70px] lg:mx-[100px] xl:mx-[140px] mt-6 lg:mt-[60px] relative">
    <h2 className="text-[28px] lg:text-[32px] uppercase text-[#242424] font-semibold">
      Featured Categories
    </h2>
    <div className="hidden md:flex gap-[14px] absolute right-0 top-[26px]">
      {categories.map((_, i) => (
        <button 
          key={i} 
          onClick={() => setCurr(i)} 
          className="cursor-pointer"
        >
          <IoEllipseOutline
            className={`rounded-full w-[14px] h-[14px] transition-all ${ curr === i ? "text-[#FCDD06] bg-[#FCDD06]" : "text-[#707070] bg-[#707070] opacity-30"}`}
          />
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 place-content-center mt-5 md:mt-[51px]">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          {...category}
        />
      ))
      }
    </div>
  </div>

  )
}
export default FeaturedCategories;