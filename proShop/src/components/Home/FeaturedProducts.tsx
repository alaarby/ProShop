import { products } from "../../data/products";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  return (
    <div className="px-[140px] flex flex-col items-center gap-[72px] bg-[#F7F8FC] mt-[63px] py-[62px]">
      <h2 className="text-[32px] uppercase text-[#242424] font-semibold">Featured Products</h2>
      <div className="flex flex-wrap gap-[40px] justify-center items-center">
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
export default FeaturedProducts;