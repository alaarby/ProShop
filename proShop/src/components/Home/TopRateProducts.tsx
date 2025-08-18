import { products } from "../../data/products";
import ProductItem from "./ProductItem";

const TopRateProducts = () => {
  return (
    <div className="flex flex-col  gap-4 p-4">
      <h2 className="text-[32px] uppercase text-neutral-800 font-bold">Top Rated Products</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center border-[1px] border-[#fcdd06] rounded-[16px]">
        {
          products.map((product) => (
            <ProductItem 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TopRateProducts;