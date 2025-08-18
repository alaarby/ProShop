import { useState } from "react";
import { categories } from "../../data/categories";
import { IoEllipseOutline } from "react-icons/io5";
import CategoryItem from "./CategoryItem";


const FeaturedCategories = () => {

  const [curr, setCurr] = useState(0);

  return (
  <div className="flex flex-col justify-center items-center mt-[60px]">
    <h2 className="text-[32px] uppercase text-neutral-800 font-bold">Featured Categories</h2>
    <div className="flex gap-2">
      {categories.map((_, i) => (
        <button key={i} onClick={() => setCurr(i)} className="cursor-pointer">
          <IoEllipseOutline
          className={`rounded-full w-[14px] h-[14px] transition-all ${ curr === i ? "text-yellow-300 bg-yellow-300" : "text-[#707070] bg-[#707070] opacity-[0.3]"}`}
          />
        </button>
      ))}
    </div>
    <div className="flex justify-between">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))
      }
    </div>
  </div>

  )
}
export default FeaturedCategories;