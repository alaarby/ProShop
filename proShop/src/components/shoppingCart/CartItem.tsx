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
    <div className="flex justify-between items-center w-[1226px] h-[242px] bg-neutral-100 rounded-[16px] relative p-4">
      <button 
        className="absolute top-2 right-2 text-[24px] text-black w-[32px] h-[32px] cursor-pointer" 
        onClick={() => dispatch(removeItem({ userId: currentUser.id, id: product.id }))}
      >
        x
      </button>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-[304px] h-[203px]"
      />
      <h3 className="text-[24px] text-neutral-800 w-[409px]">
        {product.name}
      </h3>
      <div className="flex items-center justify-between w-[204px] h-[40px] bg-white">
        <button 
          className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer"  
          onClick={() => dispatch(decrementQuantity({ userId: currentUser.id, id: product.id }))}
        >
          -
        </button>
        <span className="text-[24px] text-neutral-800 w-[40px] text-center">
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
          <div className="flex flex-col items-end">
            <span className="text-neutral-500 test-[20px] line-through text-right">
              ${(product.price).toFixed(2)}
            </span>
            <span className="text-[30px] text-neutral-800 font-bold w-[120px] text-right">
              ${(product.price * (1 - discount / 100)).toFixed(2)}
            </span>
          </div>
        ): (
          <span className="text-[30px] text-neutral-800 font-bold w-[120px] text-right">
            ${(product.price).toFixed(2)}
          </span>
        )
      }
    </div>
  )
}

export default CartItem;