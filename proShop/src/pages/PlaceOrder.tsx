import { useSelector } from "react-redux";
import Address from "../components/PlaceOrder/Address"
import Head from "../components/PlaceOrder/Head"
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const cart = useSelector((state: RootState) => currentUser ?  state.cart[currentUser.id] ?? null : null);

  return(
    <div className="flex flex-col px-5 md:px-[70px] lg:px-[100px] xl:pl-[140px] xl:max-pr-[400px] relative mb-[61px] mt-[44px]">
      <h2 className="text-[28px] md:text-[32px] text-[#242424] font-bold">
        Review Order
      </h2>
      <Head />
      <div className="flex flex-col items-center lg:items-start lg:flex-row mt-[44px] w-full gap-[30px]">
        <Address />
        <div className="flex flex-col items-center lg:items-end gap-[30xp] w-full">
          <div className="w-full md:w-[400px] flex flex-col bg-[#F2F2F2] px-8 py-10 md:py-[41px] md:px-[25px] rounded-[16px]">
            <h3 className="text-[28px] md:text-[32px] text-[#242424] font-semibold">
              Order Details
            </h3>
            <div className="flex flex-col gap-[16px] mt-[30px]">
              <div className="text-[16px] text-[#707070] flex items-center justify-between">
                <span>
                  Subtotal
                </span>
                <span>
                  ${cart?.totalPriceWithDiscount.toFixed(2)}
                </span>
              </div>
              <div className="text-[16px] text-[#707070] flex items-center justify-between">
                <span>
                  Tax
                </span>
                <span>
                  $0.00
                </span>
              </div>
              <div className="text-[16px] text-[#707070] flex items-center justify-between">
                <span>
                  Shipping
                </span>
                <span>
                  $0.00
                </span>
              </div>
              <div className="text-[16px] text-[##242424] font-semibold flex items-center justify-between">
                <span>
                  Total
                </span>
                <span>
                  ${cart?.totalPriceWithDiscount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <Link to="/successPayment">
            <button className="w-[200px] md:w-[324px] h-[62px] bg-[#FCDD06] text-[24px] text-[#242424] rounded-[10px] mt-[30px]">
              Place Order
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder