import { Link } from "react-router-dom";
import { useCheckout } from "../../data/checkoutContext";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { clearCart } from "../../redux/cartSlice";

const PaymentSuccess = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser)
  const { shipping, setShipping, setPayment } = useCheckout();
  const cart = useSelector((state: RootState) => currentUser ? state.cart[currentUser.id] ?? null : null);
  const dispatch = useDispatch();

  function handleClick(){
    setShipping({
        street: "",
        city: "",
        country: "",
        zipCode: "",
      });
    
      setPayment({
        nameOnCard: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
      });

      if (currentUser?.id) {
        dispatch(clearCart({ userId: currentUser.id }));
      }
  }
  return(
    <div className="flex flex-col mx-5 md:mx-[70px] lg:mx-[100px] xl:mx-[140px] mt-[44px] gap-[30px] md:items-end items-center">
      <div className="flex flex-col bg-[#F2F2F2] items-start py-5 pl-8 md:py-[31px] md:pl-[50px] rounded-[16px] w-full relative">
        <h2 className="tex-[28px] md:text-[32px] text-[#242424] font-bold">
          Payment Success
        </h2>
        <div className="flex flex-col gap-[30px] mt-[38px]">
          <div className="flex flex-col md:flex-row gap-5">
            <h3 className="text-[24px] text-[#242424] font-semibold">
              Order number
            </h3>
            <span className="text-[16px] text-[#707070] md:left-[400px] lg:left-[517px] md:absolute">
              65A78B85C1257
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h3 className="text-[24px] text-[#242424] font-semibold">
              Shipping Address
            </h3>
            <span className="text-[16px] text-[#707070] md:left-[400px] lg:left-[517px] md:absolute">
              {shipping.street}, {shipping.city}, {shipping.country} - {shipping.zipCode}
              </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h3 className="text-[24px] text-[#242424] font-semibold">
              Order Items
            </h3>
            <span className="text-[16px] text-[#707070] md:left-[400px] lg:left-[517px] md:absolute">
              {
                cart?.items.map((item, index) => (
                  <span key={index}>
                    {item.quantity}x {item.name}
                    {index === cart.items.length - 1 ? '.' : ', '}
                  </span>
                ))
              }
            </span>
          </div>
          <p className="text-[16px] text-[#242424] w-full max-w-[378px]">
            An email will be sent to your email address contains order confirmation and tacking code.
          </p>
        </div>
      </div>
      <Link to="/">
        <button className="flex items-center justify-center bg-[#FCDD06] w-[200px] md:w-[324px] h-[62px] text-[24px] rounded-[10px] text-[#242424]" onClick={handleClick}>
          Keep Shopping
        </button>
      </Link>
    </div>
  )
}

export default PaymentSuccess;