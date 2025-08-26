import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";
import { useCheckout } from "../../data/checkoutContext";

const OrderDetails = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser)
  const cart = useSelector((state: RootState) => currentUser ? state.cart[currentUser.id] ?? null : null);
  const { handleSubmit } = useCheckout(); 

  return(
    <div className="w-[537px] flex flex-col items-end mt-[30px] ml-[36px]">
      <div className="w-full rounded-[16px] bg-[#F2F2F2] flex flex-col  justify-center  py-[35px] px-[22px] relative">
        <h3 className="text-[32px] text-[#242424] text-starts font-bold">
          Order Details
        </h3>
        <span className="text-[22px] text-[#707070] absolute top-[42px] right-[29px] underline">
          Change
        </span>
        <div className="flex flex-col gap-[86px] mt-[30px]">
          {
            cart?.items.map((item) => (
              <OrderItem {...item} />
            ))
          }
        </div>
        <div className="w-[477px] h-[128px] flex flex-col gap-[16px] mt-[86px]">
          <div className="text-[16px] text-[#707070] flex items-center justify-between">
            <span>
              Subtotal
            </span>
            <span>
              ${cart?.totalPrice.toFixed(2)}
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
              ${cart?.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <Link to="/placeOrder">
        <button className="w-[324px] h-[62px] flex justify-center items-center bg-[#FCDD06] text-[24px] text-[#242424] rounded-[10px] mt-[30px]" onSubmit={handleSubmit}>Review Order</button>
      </Link>
    </div>
  )
}    

export default OrderDetails;