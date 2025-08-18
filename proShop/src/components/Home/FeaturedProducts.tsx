import { products } from "../../data/products";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  return (
    <div className="w-[1640px] flex flex-col items-center justify-center gap-[40px] bg-[#F7F8FC] mt-[125px]">
      <h2 className="text-[32px] uppercase text-neutral-800 font-bold">Featured Products</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
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