import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  return(
    <div className="w-[537px] relative flex flex-col items-end mt-[30px] ml-[36px]">
      <div className="w-full rounded-[16px] bg-[#F2F2F2] flex flex-col items-center justify-center relative  py-[35px] px-[22px]">
        <h3 className="text-[32px] text-[#242424] text-starts">Order Details</h3>
        <span className="text-[22px] text-[#707070] absolute top-[7px] right-[8px] underline">Change</span>
        {
          items.map((item) => (
            <OrderItem {...item} />
          ))
        }
        <div className="w-[477px] h-[128px] flex flex-col gap-[16px]">
          <div className="text-[16px] text-[#707070] flex items-center justify-between">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="text-[16px] text-[#707070] flex items-center justify-between">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="text-[16px] text-[#707070] flex items-center justify-between">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div className="text-[16px] text-[##242424] font-semibold flex items-center justify-between">
            <span>Total</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
      <Link to="/placeOrder">
        <button className="w-[324px] h-[62px] flex justify-center items-center bg-[#FCDD06] text-[24px] text-[#242424] rounded-[10px] mt-[30px]">Review Order</button>
      </Link>
    </div>
  )
}    

export default OrderDetails;