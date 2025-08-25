import { useDispatch, useSelector } from "react-redux";
import type Product from "../../data/products"
import { addItem } from "../../redux/cartSlice";
import { CiBookmark } from "react-icons/ci";
import type { RootState } from "../../redux/store";
import { toggleToWishlist } from "../../redux/wishlistSlice";

interface CategoryProp {
  product: Product
}
const ProductItem = ({product}: CategoryProp) => {

  const discount = product.discount ?? 0;
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const wishlist = useSelector((state: RootState) => currentUser ? state.wishlist[currentUser.id] ?? [] : [])

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
        <button 
          className={`w-[54px] h-[62px] rounded-[10px] cursor-pointer flex justify-center items-center ${wishlist.some((p) => p.id === product.id) ? "bg-[#FCDD06]" : "bg-[#F2F2F2]"} `}
          onClick={() => {if (currentUser) {
              dispatch(toggleToWishlist({ userId: currentUser.id, product }));
            } else {
              alert("Please log in to add items to wishlist.");
            }}}
        >
          <CiBookmark className="h-[32px] w-[32px]"/>
        </button>
        <button
          className="text-[24px] text-[#242424] w-[324px] h-[62px] bg-[#F2F2F2] rounded-[10px] cursor-pointer flex justify-center items-center"
          onClick={() => {
            if (currentUser) {
              dispatch(addItem({ userId: currentUser.id, product }));
            } else {
              alert("Please log in to add items to cart.");
            }
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem;