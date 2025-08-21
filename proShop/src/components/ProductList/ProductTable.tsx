import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { removeProduct } from "../../redux/productsSlice";

const ProductTable = () => {

  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  return(
    <table className="mt-[68px] w-full">
      <thead className="text-[24px] text-[#707070] pr-[33px]">
          <td>Product ID</td>
          <td>Product Name</td>
          <td>Product Price</td>
          <td>Category</td>
          <td>Action</td>
      </thead>
      <tbody className="text-[22px] text-[#242424] pl-[35px]">
        {
          products.map((product) => (
            <tr className=" h-[62px] even:bg-[#F2F2F2]" key={product.id}>
                <td>#{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <div className="flex gap-[16px]">
                    <button className="w-[24px] h-[24px] bg-[#FFFFFF] cursor-pointer">
                      <MdEdit className="text-[#000000]"/>
                    </button>
                    <button 
                      className="w-[24px] h-[24px] bg-[#FC4059] rounded-[6px] cursor-pointer flex justify-center items-center" 
                      onClick={() => {dispatch(removeProduct({ id: product.id }))}}
                    >
                      <MdDelete className="text-[#FFFFFF]"/>
                    </button>
                  </div>
                </td>
            </tr>
        ))
      }
      </tbody>
    </table>
  )
}

export default ProductTable;