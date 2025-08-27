import { useDispatch, useSelector } from "react-redux";
import type Product from "../../data/products";
import type { RootState } from "../../redux/store";
import { decrementQuantity, incrementQuantity } from "../../redux/cartSlice";
import { BiBookmark } from "react-icons/bi";


const Item = (product: Product) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const productQuantityInCart = useSelector((state: RootState) => currentUser ? state.cart[currentUser.id]?.items.find(item => item.id === product.id)?.quantity || 0 : 0);
  const discount = product.discount ?? 0;

  return(
    <div className="flex flex-col items-center">
      <div className="w-[1651px] h-[713px] flex items-center justify-center">
        <div className="w-[501px] h-[713px] flex flex-col justify-between">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[501px]"
          />
          <div className="w-full h-[142px]">
            {
              product.images?.map((image)=>(
                <img 
                  src={image} 
                  alt={product.name} 
                  className="w-[142px] h-full border-[1px] border-[#F2F2F2]"
                />
              ))
            }
          </div>
        </div>
        <div>
          <h3 className="text-[32px] text-[#242424] text-semibold">
            {product.name}
          </h3>
            {
              discount > 0 ? (
                <div className="flex flex-col items-end">
                  <span className="text-[24px] text-[#707070] font-semibold line-through">
                    {product.price}
                  </span>
                  <span className="text-[20px] text-[#FC4059] font-medium">
                    {discount}% Sale
                  </span>
                  <span className="text-[32px] text-[#242424] font-bold">
                    {product.price * (1 - discount / 100)}
                  </span>
                </div>
              ) : 
              (
              <div className="text-right">
                <span className="text-[32px] text-[#242424] font-bold">
                  {product.price}
                </span>
              </div>
              )
            }
          <div className="flex items-center justify-between w-[204px] h-[40px] bg-white">
            <button 
              className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer" 
              disabled={product.quantity===1} 
              onClick={() => {
                if (currentUser) {
                  dispatch(decrementQuantity({ userId: currentUser.id, id: product.id }));
                }
              }}
            >
              -
            </button>
            <span className="text-[24px] text-neutral-800 w-[40px] text-center">
              {productQuantityInCart}
            </span>
            <button
              className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer"
              disabled={!currentUser}
              onClick={() => {
                if (currentUser) {
                  dispatch(incrementQuantity({ userId: currentUser.id, id: product.id }));
                }
              }}
            >
              +
            </button>
          </div>
          <BiBookmark className="border-[#FCDD06] border-[1px] rounded-[10px]"/>
          <button className="h-[40px] w-[324px] bg-[#FCDD06] rounded-[10px]">
            Add To Cart
          </button>
          <p className="text-[16px] text-[#242424] w-[1134px]">
            {product.description}
          </p> 
        </div>
      </div>
    </div>
  )
}

export default Item;