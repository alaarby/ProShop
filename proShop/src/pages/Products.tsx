import FeaturedProducts from "../components/Home/FeaturedProducts";
import Product from "../components/ItemPage/Product";

const Products = () => {
  return(
  <div className="flex flex-col gap-5 md:gap-[50px]">
    <Product />
    <FeaturedProducts />
  </div>
  )
}

export default Products;