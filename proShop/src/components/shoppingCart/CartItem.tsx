import { useDispatch, useSelector } from "react-redux";
import type Product from "../../data/products";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/cartSlice";
import type { RootState } from "../../redux/store";

interface CartItemProp {
  product: Product;
}

const CartItem = ({ product }: CartItemProp) => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const productQuantityInCart = useSelector((state: RootState) => currentUser ?  state.cart[currentUser.id].items.find(item => item.id === product.id)?.quantity || 0 : 0);
  const discount = product.discount ?? 0;

  if (!currentUser || !currentUser.id) {
    return null;
  }
  
  return (
    <div className="flex bg-[#F2F2F2] xl:min-w-[800px] rounded-[16px] relative pr-[35px] pb-5">
      <button 
        className="absolute top-2 right-2 text-[24px] text-black w-[32px] h-[32px] cursor-pointer" 
        onClick={() => dispatch(removeItem({ userId: currentUser.id, id: product.id }))}
      >
        x
      </button>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-[100px] sm:w-[200px] lg:w-[304px] h-[80px] lg:h-[203px] mt-[21px] ml-[13px] self-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-5">
        <h3 className="text-[18px] sm:text-[24px] text-[#242424] font-semibold self-start mt-[51px] min-h-[40px]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between w-full max-w-[204px] h-[40px] bg-white self-center">
          <button 
            className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer"  
            onClick={() => dispatch(decrementQuantity({ userId: currentUser.id, id: product.id }))}
          >
            -
          </button>
          <span className="text-[18px] sm:text-[24px] text-neutral-800 w-[40px] text-center">
            {productQuantityInCart}
          </span>
          <button 
            className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer" 
            onClick={() => dispatch(incrementQuantity({ userId: currentUser.id, id: product.id }))}
            >
            +
          </button>
        </div>
        {
          discount > 0 ? (
            <div className="flex flex-col md:items-end self-center">
              <span className="text-neutral-500 text-[20px] line-through md:text-right">
                ${(product.price).toFixed(2)}
              </span>
              <span className="text-[22px] md:text-[30px] text-neutral-800 font-bold md:text-right">
                ${(product.price * (1 - discount / 100)).toFixed(2)}
              </span>
            </div>
          ): (
            <span className="text-[22px] md:text-[30px] text-neutral-800 font-bold md:text-right self-center">
              ${(product.price).toFixed(2)}
            </span>
          )
        }
      </div>
    </div>
  )
}

export default CartItem;