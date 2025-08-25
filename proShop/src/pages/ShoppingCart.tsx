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
    <div className="mx-[140px] flex flex-col">
    <div className="mt-[30px] text-[24px] flex">
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
        <div className="flex gap-[30px] mt-[30px]">
          <div className="flex flex-col w-[1226px] gap-[30px]">
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