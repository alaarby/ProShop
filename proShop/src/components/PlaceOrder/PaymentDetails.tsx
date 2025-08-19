import { useCheckout } from "../../data/checkoutContext";

const PaymentDetails = () => {

  const { payment } = useCheckout();
  return (
    <div className="flex flex-col items-start relative mt-[30px] w-full">
      <h3 className="text-[24px] text-[#242424] font-semibold">Payment Details</h3>
      <span className="text-[22px] text-[#707070] absolute top-0 right-0 underline">Change</span>
      <span className="text-[16px] text-[#242424] mt-[30px] ml-[60px]">**** {payment.cardNumber.slice(-4)}</span>
    </div>
  )
}

export default PaymentDetails;