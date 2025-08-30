import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrementQuantity, incrementQuantity } from "../../redux/cartSlice";
import { BiBookmark } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";


const ProductPage = () => {
  const { slug } = useParams();
  const product = useSelector((state: RootState) => state.products.products.find(p => p.slug === slug));
  if (!product) {
    return <p className="p-4 text-red-500">Product not found!</p>;
  }
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const productQuantityInCart = useSelector((state: RootState) => currentUser ? state.cart[currentUser.id]?.items.find(item => item.id === product.id)?.quantity || 0 : 0);
  const discount = product.discount ?? 0;

  return(
    <div className="flex flex-col px-[140px]">
      <div className="mt-[32px] text-[24px] flex">
        <Link to="/">
          <p className="text-[#707070]">Back / </p>
        </Link>
        <Link to="/cart">
          <span className="text-[#242424]"> {product.name}</span>
        </Link>
      </div>
      <div className="flex justify-between mt-[56px]">
        <div className="w-[501px] flex flex-col ">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[501px]"
          />
          <div className="w-full h-[142px] flex gap-[30px] pr-[15px]">
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
        <div className="relative flex flex-1 flex-col gap-[30px] justify-between">
          <div className="grid grid-cols-2">
            <h3 className="text-[32px] text-[#242424] text-semibold">
              {product.name}
            </h3>
            {
              discount > 0 ? (
                <div className="flex flex-col items-end">
                  <span className="text-[24px] text-[#707070] font-semibold line-through">
                    {product.price.toFixed(2)}
                  </span>
                  <span className="text-[20px] text-[#FC4059] font-medium">
                    {discount}% Sale
                  </span>
                  <span className="text-[32px] text-[#242424] font-bold">
                    {(product.price * (1 - discount / 100)).toFixed(2)}
                  </span>
                </div>
              ) : 
              (
              <div className="absolute top-0 right-[11px]">
                <span className="text-[32px] text-[#242424] font-bold">
                  {product.price}
                </span>
              </div>
              )
            }
            <div className="col-span-2 mt-[35px] flex justify-between">
              <div className="flex items-center justify-between w-[204px] h-[40px] bg-white border-[1px] border-[#F2F2F2] text-black text-[24px]">
                <button 
                  className="w-[48px] h-[40px] flex items-center justify-center cursor-pointer" 
                  disabled={product.quantity===1 || !currentUser} 
                  onClick={() => {
                    if (currentUser) {
                      dispatch(decrementQuantity({ userId: currentUser.id, id: product.id }));
                    }
                  }}
                  >
                  -
                </button>
                <span className="flex-1 text-center">
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
              <div className="flex gap-[16px] justify-self-end-safe">
                <BiBookmark className="border-[#FCDD06] border-[1px] rounded-[10px] w-[54px] h-[62px] px-[10px] py-[13px]"/>
                <button className="h-[62px] w-[324px] bg-[#FCDD06] rounded-[10px] text-[24px] text-[#242424] mx-auto">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <p className="text-[16px] text-[#242424]">
            {product.description}
          </p> 
        </div>
      </div>
    </div>
  )
}

export default ProductPage;