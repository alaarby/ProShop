import { useDispatch } from "react-redux";
import type Product from "../../data/products"
import { FaBookmark } from "react-icons/fa";
import { addItem } from "../../redux/cartSlice";

interface CategoryProp {
  product: Product
}
const ProductItem = ({product}: CategoryProp) => {

  const discount = product.discount ?? 0;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[520px] h-[655px] relative">
        {
          discount > 0 &&
          <span className="absolute top-2 right-2 text-[24px] text-white bg-rose-500 w-[87px] h-[87px] rounded-full justify-center items-center flex">-{product.discount}%</span>
        }
        <img className="w-full" src={product.image} alt={product.name} />
        <h3 className="text-[24px] text-neutral-800 object-fill">{product.name}</h3>
        <div className="stars">

        </div>
        {
          discount > 0 ?
          <p className="text-[30px] text-neutral-800 flex gap-2 items-center">
          <span className="text-rose-500">${(product.price * (1 - discount / 100)).toFixed(2)}</span>
          <span className="line-through">${product.price}</span>
          </p>
          :
          <span className="text-[30px] text-neutral-800">${product.price}</span>
        }
        <div className="flex gap-2">
          <button className="w-[54px] h-[62px] bg-neutral-100 rounded-[10px] cursor-pointer flex justify-center items-center">
            <FaBookmark className="w-[24px] h-[28px] text-neutral-800"/>
          </button>
          <button className="text-[24px] w-[324px] h-[62px] bg-neutral-100 rounded-[10px] cursor-pointer text-center" onClick={() => dispatch(addItem(product))}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;