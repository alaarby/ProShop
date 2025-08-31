import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import EmptyWishlist from "../components/Wishlist/EmptyWishlist";
import ProductItem from "../components/Home/ProductItem";

const Wishlist = () => {

  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const wishlist = useSelector((state: RootState) => currentUser ? state.wishlist[currentUser.id] ?? [] : [])

  return(
    <>
      {
        wishlist.length === 0 ? (
          <EmptyWishlist />
        )
        :(
          <div className="flex flex-col items-center px-5 md:px-[70px] lg:px-[100px] xl:px-[140px] mt-4 md:mt-[40px]">
            <h2 className="uppercase font-bold text-[40px] text-[#242424]">
              Wishlist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                wishlist.map((item) => (
                  <ProductItem 
                  {...item}
                  key={item.id}
                  />
                ))
              }
            </div>
          </div>
        )
      }
      <h2></h2>
    </>
  )
}

export default Wishlist;