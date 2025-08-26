import type { CartItem } from "../../redux/cartSlice";

const OrederItem = (item: CartItem) => {
  
  return(
    <div className="w-full h-[106px] flex border-b-[#707070] border-b-[1px]">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-[135px] h-[90px]"
      />
      <div className="flex flex-col justify-between relative flex-1 ml-[10px]">
        <h4 className="text-[22px] text-[#707070]">
          {item.name}
        </h4>
        <h4 className="text-[22px] text-[#707070]">
          ${item.price}
          <span className="text-[16px] text-[#707070] ml-[16px]">
            x{item.quantity}
          </span>
        </h4>
        <h4 className="text-[22px] text-[#242424] absolute bottom-0 right-[7px]">
          ${item.price}
        </h4>  
      </div>
    </div>
  ) 
}

export default OrederItem;