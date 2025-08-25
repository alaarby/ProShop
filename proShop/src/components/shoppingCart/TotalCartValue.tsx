import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const TotalCartValue = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const cart = useSelector((state: RootState) => currentUser ?  state.cart[currentUser.id] || null : null);
  return (
    <div className="flex flex-col items-start justify-between w-[384px] h-[351px] bg-[#F2F2F2] p-4 rounded-[16px]">
      <h3 className="text-[32px] text-[#242424] font-semibold">Subtotal ({cart?.totalQuantity}) items</h3>
      <p className="text-[24px] text-[#707070] font-semibold line-through mt-[30px]">${cart?.totalPrice.toFixed(2)}</p>
      <h3 className="text-[38px] text-[#242424] font-bold mt-[9px]">${cart?.totalPriceWithDiscount.toFixed(2)}</h3>
      <hr className="w-full border-neutral-300"></hr>
      <Link to="/reviewOrder">
        <button className="w-[324px] h-[62px] bg-[#FCDD06] text-[24px] flex items-center justify-center rounded-[10px] text-[#242424] cursor-pointer mt-[81px]">
          Proceed to Checkbox
        </button>
      </Link>
    </div>
  )
} 

export default TotalCartValue;