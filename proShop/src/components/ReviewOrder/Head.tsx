
const Head = () => {
  return(
    <div className="text-[22px] flex items-center justify-between w-[682px] h-[40px] mt-[30px]">
      <div className="flex">
        <span className="bg-[#FCDD06] w-[40px] h-[40px] text-[#242424] flex items-center justify-center mr-[9px]">
          1
        </span>
        <span className="text-[#242424] font-semibold">
          Shipping and Payment
        </span>
      </div>
      <div className="flex">
        <span className="bg-[#707070] text-white w-[40px] h-[40px] flex items-center justify-center mr-[9px]">2</span>
        <span className="text-[#707070] font-semibold">Place an Order</span>
      </div>
    </div>
  )
}

export default Head;