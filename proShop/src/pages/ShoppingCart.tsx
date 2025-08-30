import { useSelector } from "react-redux";
import CartItem from "../components/shoppingCart/CartItem";
import type { RootState } from "../redux/store";
import TotalCartValue from "../components/shoppingCart/TotalCartValue";
import EmptyCart from "../components/shoppingCart/EmptyCart";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const currentUser = useSelector((state:RootState) => state.users.currentUser)
  const items = useSelector((state: RootState) => currentUser ?  state.cart[currentUser.id]?.items ?? [] : []);
  
  
    
  return (
    <div className="px-5 md:px-[70px] lg:px-[100px] xl:px-[140px] flex flex-col gap-3 md:gap-[30px]">
      <div className="mt-3 md:mt-[32px] text-[18px] md:text-[24px] flex">
        <Link to="/">
          <p className="text-[#707070]">Back / </p>
        </Link>
        <Link to="/cart">
          <span className="text-[#242424]"> Shopping Cart</span>
        </Link>
      </div>
      <div>
      {
        items.length === 0 ? (
          <EmptyCart />
        ):(
          <div className="flex flex-col xl:flex-row gap-3 md:gap-[30px]">
            <div className="flex flex-col w-full xl:w-[1226px] gap-3 md:gap-[30px]">
              {
                items.map((item) => (
                  <CartItem 
                  key={item.id} 
                  product={item}
                  />
                ))
              }
            </div>
            <TotalCartValue />
          </div>
        )
      }
      </div>
    </div>
  )
}

export default ShoppingCart;