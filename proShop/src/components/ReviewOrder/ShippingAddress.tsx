import type { ChangeEvent } from "react";
import { useCheckout } from "../../data/checkoutContext";

const ShippingAddress = () => {
  const { shipping, setShipping, payment, setPayment } = useCheckout();

  const handleShippingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };


  return(
    <div className="bg-[#F2F2F2] w-full max-w-[950px] rounded-[16px] flex flex-col items-center justify-center px-14 py-10 lg:px-[88px] lg:py-[45px]">
      <form className="w-full flex flex-col">
        <h3 className="text-[28px] md:text-[32px] text-[#242424] text-center md:text-left font-bold mb-[16px]">Shipping Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[54px]">
          {/* --- Shipping Address --- */}
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="country" 
              className="text-[22px] text-[#707070]"
            >
              Country
            </label>
            <input 
              type="text" 
              name="country" 
              value={shipping.country} 
              onChange={handleShippingChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="city" 
              className="text-[22px] text-[#707070]"
            >
              City
            </label>
            <input 
              type="text" 
              name="city" 
              value={shipping.city} 
              onChange={handleShippingChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="zipCode" 
              className="text-[22px] text-[#707070]"
            >
              ZIP Code
            </label>
            <input 
              type="number" 
              name="zipCode" 
              value={shipping.zipCode} 
              onChange={handleShippingChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="street" 
              className="text-[22px] text-[#707070]"
            >
              Street Address
            </label>
            <input 
              type="text" 
              name="street" 
              value={shipping.street} 
              onChange={handleShippingChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
        </div>
        {/* --- Paymnet Details --- */}
        <h3 className="text-[28px] md:text-[32px] text-[#242424] font-bold text-center md:text-left mb-[16px] mt-[56px]">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[54px]">
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="nameOnCard" 
              className="text-[22px] text-[#707070]"
            >
              Name on Card
            </label>
            <input 
              type="text" 
              name="nameOnCard" 
              value={payment.nameOnCard} 
              onChange={handlePaymentChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div> 
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="cardNumber"  
              className="text-[22px] text-[#707070]"
            >
              Card Number
            </label>
            <input 
              type="text" 
              name="cardNumber" 
              value={payment.cardNumber} 
              onChange={handlePaymentChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="expiry" 
              className="text-[22px] text-[#707070]"
            >
              Expiration Date
            </label>
            <input 
              type="number" 
              name="expiry" 
              value={payment.expiry} 
              onChange={handlePaymentChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <label 
              htmlFor="cvc" 
              className="text-[22px] text-[#707070]"
            >
              CVC
            </label>
            <input 
              type="number" 
              name="cvc" 
              value={payment.cvc} 
              onChange={handlePaymentChange} 
              className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-full h-[40px]"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress;