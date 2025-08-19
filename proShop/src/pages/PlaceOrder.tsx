import { useSelector } from "react-redux";
import Address from "../components/PlaceOrder/Address"
import Head from "../components/PlaceOrder/Head"
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const PlaceOrder = () => {

  const { totalPriceWithDiscount } = useSelector((state: RootState) => state.cart);

  return(
    <div className="flex flex-col pl-[140px] relative w-[1517px] mb-[61px] mt-[44px]">
      <h2 className="text-[32px] text-[#242424] font-bold">Review Order</h2>
      <Head />
      <div className="flex items-start justify-between mr-[400px] mt-[44px] w-full">
        <Address />
        <div className="flex flex-col items-end gap-[30xp]">
          <div className="w-[400px] h-[280px] flex flex-col bg-[#F2F2F2] py-[41px] px-[25px] rounded-[16px]">
            <h3 className="text-[32px] text-[#242424] font-semibold">Order Details</h3>
            <div className="flex flex-col gap-[16px] mt-[30px]">
              <div className="text-[16px] text-[#707070] flex items-center justify-between">
                <span>Subtotal</span>
                <span>${totalPriceWithDiscount}</span>
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
                <span>${totalPriceWithDiscount.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Link to="/successPayment">
            <button className="w-[324px] h-[62px] flex justify-center items-center bg-[#FCDD06] text-[24px] text-[#242424] rounded-[10px] mt-[30px]">Place Order</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder