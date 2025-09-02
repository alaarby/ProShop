import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { BiBookmark } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { toggleToWishlist } from "../../redux/wishlistSlice";
import { addItem } from "../../redux/cartSlice";


const Product = () => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = useSelector((state: RootState) => state.products.products.find(p => p.slug === slug));
  if (!product) {
    return <p className="p-4 text-red-500">Product not found!</p>;
  }
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const discount = product.discount ?? 0;
  const wishlist = useSelector((state: RootState) => currentUser ? state.wishlist[currentUser.id] ?? [] : [])

  return(
    <div className="flex flex-col px-5 md:px-[70px] lg:px-[100px] xl:px-[140px]">
      <div className="mt-3 md:mt-[32px] text-[20px] md:text-[24px] flex">
        <Link to="/">
          <p className="text-[#707070]">Back / </p>
        </Link>
        <Link to="/cart">
          <span className="text-[#242424]"> {product.name}</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-[16px] justify-between mt-5 md:mt-[56px]">
        <div className="w-full md:max-w-[350px] lg:max-w-[501px] flex flex-col">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-h-[501px]"
          />
          <div className="grid grid-cols-3 w-full h-auto gap-[30px] pr-[15px]">
            {
              product.images?.map((image)=>(
                <img 
                  src={image} 
                  alt={product.name} 
                  className="border-[1px] border-[#F2F2F2]"
                />
              ))
            }
          </div>
        </div>
        <div className="relative flex flex-1 flex-col gap-[30px] justify-between">
          <div className="grid grid-cols-2 gap-4">
            <h3 className="text-[28px] md:text-[32px] text-[#242424] text-semibold col-span-2 sm:col-span-1">
              {product.name}
            </h3>
            {
              discount > 0 ? (
                <div className="flex flex-col place-self-start sm:place-self-end sm:items-end">
                  <span className="text-[20px] md:text-[24px] text-[#707070] font-semibold line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-[16px] md:text-[20px] text-[#FC4059] font-medium">
                    {discount}% Sale
                  </span>
                  <span className="text-[28px] md:text-[32px] text-[#242424] font-bold">
                    ${(product.price * (1 - discount / 100)).toFixed(2)}
                  </span>
                </div>
              ) : 
              (
              <div className="place-self-start sm:place-self-end">
                <span className="text-[28px] md:text-[32px] text-[#242424] font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              )
            }
            <div className="col-span-2 mt-[35px] gap-6 flex flex-col lg:flex-row justify-between">
              <div className="flex items-center justify-between w-full  max-w-[204px] h-[40px] bg-white border-[1px] border-[#F2F2F2] text-black text-[24px]">
                <button 
                  className={`w-[48px] h-[40px] border-1 border-[#FCDD06] ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
                  disabled={!currentUser} 
                  onClick={() => {
                    if (currentUser) {
                      setQuantity(prev => Math.max(1, prev - 1));
                    }
                  }}
                  >
                  -
                </button>
                <span className="flex-1 text-center">
                  { quantity }
                </span>
                <button
                  className="w-[48px] h-[40px] cursor-pointer border-1 border-[#FCDD06]"
                  disabled={!currentUser}
                  onClick={() => {
                    if (currentUser) {
                      setQuantity(prev => prev + 1);
                    }
                  }}
                  >
                  +
                </button>
              </div>
              <div className="flex gap-[16px] max-w-full lg:w-[394px] lg:justify-self-end-safe">
                <BiBookmark 
                  className={`border-[#FCDD06] border-[1px] rounded-[10px] w-[54px] h-[62px] px-[10px] py-[13px] cursor-pointer ${wishlist.some((p) => p.id === product.id) ? "bg-[#FCDD06]" : ""}`}
                  onClick={() => {if (currentUser) {
                    dispatch(toggleToWishlist({ userId: currentUser.id, product }));
                  } else {
                    alert("Please log in to add items to wishlist.");
                  }}}
                />
                <button 
                  className="min-h-[62px] flex-1 bg-[#FCDD06] cursor-pointer rounded-[10px] text-[24px] text-[#242424] mx-auto"
                  onClick={() => {if (currentUser) {
                    dispatch(addItem({ userId: currentUser.id, product, quantity }));
                  } else {
                    alert("Please log in to add items to cart.");
                  }}}
                >
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

export default Product;