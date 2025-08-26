import { products } from "../../data/products";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  return (
    <div className="px-5 md:px-[140px] lg:px-[140px] flex flex-col items-center bg-[#F7F8FC] mt-[63px] py-[62px]">
      <h2 className="text-[32px] uppercase text-[#242424] font-semibold">Featured Products</h2>
      <hr className="w-[200px] h-[7px] bg-[#FCDD06] border-0 mt-[22px]"/>
      <hr className="border-[1px] border-[#F2F2F2]"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[43px]">
        {
          products.map((product) => (
            <ProductItem 
              {...product}
              key={product.id}
            />
          ))
        }
      </div>
    </div>

  )
}
export default FeaturedProducts;