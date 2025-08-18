
const ShippingAddress = () => {
  return(
    <div className="bg-[#F2F2F2] w-[950px] h-[652px] rounded-[16px] flex flex-col items-center justify-center mt-[36px]">
      <div>
        <h3 className="text-[32px] text-[#242424] font-bold mb-[16px]">Shipping Address</h3>
        <form action="" className="grid grid-cols-2 gap-[54px]">
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">Country</label>
            <input type="text" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">City</label>
            <input type="text" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">ZIP Code</label>
            <input type="number" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">Street Address</label>
            <input type="text" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
        </form>
      </div>

      <div className="mt-[56px]">
        <h3 className="text-[32px] text-[#242424] font-bold mb-[16px]">Payment Details</h3>
        <form action="" className="grid grid-cols-2 gap-[54px]">
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">Name on Card</label>
            <input type="text" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">Card Number</label>
            <input type="text" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">Expiration Date</label>
            <input type="number" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
          <div className="flex flex-col items-start w-[360px] h-[78px] gap-[10px]">
            <label htmlFor="" className="text-[22px] text-[#707070]">CVC</label>
            <input type="number" className="outline-0 border-[1px] border-[#707070] rounded-[6px] text-[16px] text-[#242424] pl-[16px] py-[10px] w-[360px] h-[40px]"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ShippingAddress;