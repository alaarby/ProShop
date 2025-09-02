import { products } from "../../data/products";
import ProductItem from "./ProductItem";

const TopRateProducts = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-[63px] px-5 md:px-[70px] lg:px-[100px] xl:px-[140px] mb-[197px]">
      <h2 className="text-[28px] lg:text-[32px] uppercase text-[#242424] font-semibold">
        Top Rated Products
      </h2>
      <hr className="w-[200px] h-[7px] bg-[#FCDD06] border-0 mt-[22px]"/>
      <hr className="border-[1px] border-[#F2F2F2]"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[50px] lg:gap-[70px] 2xl:gap-[172px] border-[1px] border-[#FCDD06] rounded-[16px] mt-[43px] px-[10px]">
        {
          products.map((product) => (
            <ProductItem 
              key={product.id}
              {...product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TopRateProducts;