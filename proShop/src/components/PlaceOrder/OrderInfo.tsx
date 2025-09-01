import { useCheckout } from "../../data/checkoutContext";

const OrderInfo = () => {

  const{ shipping, payment } = useCheckout();
  return(
    <div className="w-full max-w-[289px] flex flex-col items-start">
      <h3 className="text-[24px] text-[#242424] font-semibold">
        Shipping Address
      </h3>
      <div>
        <h4 className="text-[22px] text-[#242424] mt-[16px]">
          {payment.nameOnCard}
        </h4>
        <p className="text-[16px] text-[#000000] mt-[9px]">
          {shipping.street}, {shipping.city}, {shipping.country} - {shipping.zipCode}
        </p>
      </div>
    </div>
  )
}           

export default OrderInfo;