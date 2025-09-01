import { Link } from "react-router-dom";
import ProductTable from "../components/ProductList/ProductTable";

const ProductList = () => {
  return(
    <div className="mx-[140px] mt-[32px] flex relative flex-col">
      <h2 className="text-[#242424] text-[32px] font-semibold">
        Products
      </h2>
      <Link to="/createProduct">
        <button className="text-[24px] text-[#242424] bg-[#FCDD06] rounded-[6px] flex justify-center items-center w-[229px] h-[60px] absolute top-[18px] right-0">
          Create Product
        </button>  
      </Link>
      <ProductTable />  
    </div>
  )
}

export default ProductList;