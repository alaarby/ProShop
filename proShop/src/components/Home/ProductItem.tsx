import { useDispatch } from "react-redux";
import type Product from "../../data/products"
import { addItem } from "../../redux/cartSlice";
import { CiBookmark } from "react-icons/ci";

interface CategoryProp {
  product: Product
}
const ProductItem = ({product}: CategoryProp) => {

  const discount = product.discount ?? 0;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between items-center h-[655px] relative py-[35px] bg-white rounded-[16px]">
      {
        discount > 0 &&
        <span className="absolute top-[19px] right-[22px] text-[24px] text-white bg-[#FC4059] w-[87px] h-[87px] rounded-full justify-center items-center flex font-semibold">-{product.discount}%</span>
      }
      <img className="mx-[4px] h-[342px]  object-fill" src={product.image} alt={product.name} />
      <h3 className="text-[24px] text-[#242424]">{product.name}</h3>
      <div className="stars">

      </div>
      {
        discount > 0 ?
        <p className="text-[30px] text-[#242424] flex gap-[14px] items-center font-semibold">
        <span className="text-[#FC4059]">${(product.price * (1 - discount / 100)).toFixed(2)}</span>
        <span className="line-through">${product.price.toFixed(2)}</span>
        </p>
        :
        <span className="text-[30px] text-[#242424]">${product.price.toFixed(2)}</span>
      }
      <div className="flex gap-[13px] items-center">
        <button className="w-[54px] h-[62px] bg-[#F2F2F2] rounded-[10px] cursor-pointer flex justify-center items-center">
          <CiBookmark className="h-[32px] w-[32px]"/>
        </button>
        <button className="text-[24px] text-[#242424] w-[324px] h-[62px] bg-[#F2F2F2] rounded-[10px] cursor-pointer flex justify-center items-center" onClick={() => dispatch(addItem(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem;