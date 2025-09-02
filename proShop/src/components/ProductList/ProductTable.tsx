import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { removeProduct } from "../../redux/productsSlice";

const ProductTable = () => {

  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  return(
    <div className="overflow-x-auto">
      <table className="md:mt-[68px] w-full min-w-[600px]">
        <thead className="text-[20px] md:text-[24px] text-[#707070]">
            <td className="px-3 py-2 text-left">Product ID</td>
            <td className="px-3 py-2 text-left">Product Name</td>
            <td className="px-3 py-2 text-left">Product Price</td>
            <td className="px-3 py-2 text-left">Category</td>
            <td className="px-3 py-2 text-left">Action</td>
        </thead>
        <tbody className="text-[18px] md:text-[22px] text-[#242424] pl-[35px]">
          {
            products.map((product) => (
              <tr 
                className=" h-[62px] even:bg-[#F2F2F2] even:rounded-[10px]" 
                key={product.id}
              >
                <td className="px-3 py-2">#{product.id}</td>
                <td className="px-3 py-2">{product.name}</td>
                <td className="px-3 py-2">${product.price.toFixed(2)}</td>
                <td className="px-3 py-2">{product.category}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-[16px]">
                    <button className="w-[24px] h-[24px] bg-[#FFFFFF] cursor-pointer rounded-[6px]">
                      <MdEdit className="text-[#000000]"/>
                    </button>
                    <button 
                      className="w-[24px] h-[24px] bg-[#FC4059] rounded-[6px] cursor-pointer" 
                      onClick={() => {dispatch(removeProduct({ id: product.id }))}}
                    >
                      <MdDelete className="text-[#FFFFFF] block mx-auto"/>
                    </button>
                  </div>
                </td>
              </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;