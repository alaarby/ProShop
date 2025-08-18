import { useSelector } from "react-redux";
import CartItem from "../components/shoppingCart/CartItem";
import type { RootState } from "../redux/store";
import TotalCartValue from "../components/shoppingCart/TotalCartValue";
import EmptyCart from "../components/shoppingCart/EmptyCart";

const ShoppingCart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  
  
    
  return (
    <>
    {
      items.length === 0 ? (
        <EmptyCart />
      ):(
        <div className="flex justify-between p-4">
          <div>
            {
              items.map((item) => (
                <CartItem 
                  key={item.id} 
                  product={item}
                />
              ))
            }
          </div>
          <div>
            <TotalCartValue />
          </div>
        </div>
      )
    }
    </>
  )
}

export default ShoppingCart;