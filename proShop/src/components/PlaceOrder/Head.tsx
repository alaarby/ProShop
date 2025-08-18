
const Head = () => {
  return(
    <div className="text-[22px] flex items-center justify-between w-[682px] h-[40px] mt-[30px]">
      <div className="flex">
        <span className="bg-[#FCDD06]/60 w-[40px] h-[40px] text-[#242424]/60 flex items-center justify-center mr-[9px]">
          1
        </span>
        <span className="text-[#242424]/60 font-semibold">
          Shipping and Payment
        </span>
      </div>
      <div className="flex">
        <span className="bg-[#FCDD06] text-black w-[40px] h-[40px] flex items-center justify-center mr-[9px]">2</span>
        <span className="text-[#000000] font-semibold">Place an Order</span>
      </div>
    </div>
  )
}

export default Head;